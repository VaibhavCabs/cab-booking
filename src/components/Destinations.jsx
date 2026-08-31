import { Landmark, ArrowUpRight } from 'lucide-react'
import { destinations } from '../data/destinations'
import { site, waLink } from '../config/site'
import Reveal from './Reveal'

export default function Destinations() {
  return (
    <section id="destinations" className="bg-basalt-light py-12 sm:py-20">
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
              <div className="h-full flex flex-col overflow-hidden rounded border border-white/10 bg-basalt hover:-translate-y-1 hover:border-terracotta/40 transition-all">
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-basalt-light">
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 eyebrow text-[10px] text-gold bg-basalt/70 backdrop-blur-sm px-2 py-1 rounded">
                    {d.tag}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-2 text-sandstone">
                    <Landmark size={20} className="text-terracotta-light" />
                    <h3 className="font-display text-xl font-semibold text-sandstone">{d.name}</h3>
                  </div>
                  <p className="text-sm text-sandstone-dim mt-3 leading-relaxed">{d.blurb}</p>
                  <a
                    href={waLink(`Hi ${site.name}, I'd like a quote for a trip to ${d.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sandstone hover:text-terracotta-light transition-colors"
                  >
                    Plan this trip <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
