import { Landmark, ArrowUpRight } from 'lucide-react'
import { destinations } from '../data/destinations'
import { site, waLink } from '../config/site'
import Reveal from './Reveal'

const gradients = [
  'from-terracotta/30 to-basalt-light',
  'from-teal/30 to-basalt-light',
  'from-gold/25 to-basalt-light',
]

export default function Destinations() {
  return (
    <section id="destinations" className="bg-basalt-light py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="eyebrow text-terracotta-light mb-3">Popular destinations</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-sandstone max-w-lg">
            The sights {site.cityShort} is known for, all within reach.
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <Reveal key={d.id} delay={i * 50}>
              <div className={`h-full rounded p-6 bg-gradient-to-br ${gradients[i % gradients.length]} border border-white/10`}>
                <div className="flex items-center justify-between">
                  <Landmark size={22} className="text-sandstone" />
                  <span className="eyebrow text-[10px] text-gold">{d.tag}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-sandstone mt-4">{d.name}</h3>
                <p className="text-sm text-sandstone-dim mt-2 leading-relaxed">{d.blurb}</p>
                <a
                  href={waLink(`Hi ${site.name}, I'd like a quote for a trip to ${d.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sandstone hover:text-terracotta-light transition-colors"
                >
                  Plan this trip <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
