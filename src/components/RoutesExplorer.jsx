import { useMemo, useState, useEffect } from 'react'
import { Search, MessageCircle, ChevronDown, Repeat } from 'lucide-react'
import { routes, routeCategories } from '../data/routes'
import { site, waLink } from '../config/site'
import Reveal from './Reveal'

const MOBILE_VISIBLE = 6
const DESKTOP_VISIBLE = 12

function useVisibleCount() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window === 'undefined' ? true : window.innerWidth < 640,
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile ? MOBILE_VISIBLE : DESKTOP_VISIBLE
}

export default function RoutesExplorer() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const visibleCount = useVisibleCount()

  const filtered = useMemo(() => {
    return routes.filter((r) => {
      const matchesCategory = category === 'All' || r.category === category
      const matchesQuery = r.to.toLowerCase().includes(query.trim().toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  const displayRoutes = showAll ? filtered : filtered.slice(0, visibleCount)
  const hiddenCount = filtered.length - visibleCount

  return (
    <section id="routes" className="bg-basalt py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="eyebrow text-terracotta-light mb-3">Outstation routes</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-sandstone max-w-lg">
            Search where you're headed.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-sandstone-dim/60" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a destination…"
                aria-label="Search outstation destinations"
                className="w-full bg-basalt-light border border-white/10 rounded pl-9 pr-3 py-2.5 text-sm text-sandstone placeholder:text-sandstone-dim/50 focus:border-terracotta outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {routeCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => { setCategory(c); setShowAll(false) }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                    category === c
                      ? 'bg-terracotta border-terracotta text-sandstone'
                      : 'border-white/15 text-sandstone-dim hover:border-terracotta/50'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {displayRoutes.map((r) => (
            <a
              key={r.id}
              href={waLink(`Hi ${site.name}, I'd like a round-trip fare estimate for ${site.cityShort} to ${r.to}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 p-4 rounded border border-white/10 hover:border-[#25D366]/50 hover:bg-basalt-light transition-colors"
            >
              <div>
                <p className="text-sm text-sandstone font-medium">{site.cityShort} ↔ {r.to}</p>
                <p className="text-xs text-sandstone-dim mt-1 flex items-center gap-1.5">
                  <Repeat size={11} className="text-gold" /> Round trip · {r.hours} each way
                </p>
              </div>
              <MessageCircle size={16} className="text-[#3FCB6D] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}

          {filtered.length === 0 && (
            <p className="text-sandstone-dim text-sm col-span-full py-6">
              No matching destination — message us on WhatsApp and we'll quote it directly.
            </p>
          )}
        </div>

        {/* Show more / Show less — visible on mobile and desktop when list is truncated */}
        {!showAll && hiddenCount > 0 && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-6 mx-auto flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/15 text-sm font-semibold text-sandstone-dim hover:border-terracotta/50 hover:text-sandstone transition-colors"
          >
            Show {hiddenCount} more routes <ChevronDown size={15} />
          </button>
        )}
        {showAll && hiddenCount > 0 && (
          <button
            onClick={() => setShowAll(false)}
            className="mt-6 mx-auto flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/15 text-sm font-semibold text-sandstone-dim hover:border-terracotta/50 hover:text-sandstone transition-colors"
          >
            Show less <ChevronDown size={15} className="rotate-180" />
          </button>
        )}
      </div>
    </section>
  )
}
