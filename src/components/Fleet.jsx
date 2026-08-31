import { Car, Users, Snowflake, Fuel } from 'lucide-react'
import { fleet } from '../data/fleet'
import { site, waLink } from '../config/site'
import Reveal from './Reveal'

export default function Fleet() {
  return (
    <section id="fleet" className="bg-basalt py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="eyebrow text-terracotta-light mb-3">Our fleet</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-sandstone max-w-lg">
            A vehicle for every trip, from a solo errand to a group pilgrimage.
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleet.map((car, i) => (
            <Reveal key={car.id} delay={i * 50}>
              <div className="h-full flex flex-col p-6 rounded border border-white/10 bg-basalt-light hover:-translate-y-1 hover:border-terracotta/40 transition-all">
                <Car size={28} className="text-terracotta-light mb-4" />
                <h3 className="font-display text-lg font-semibold text-sandstone">{car.name}</h3>
                <p className="text-xs text-gold uppercase tracking-wide mt-1">{car.type}</p>

                <div className="mt-4 flex flex-wrap gap-3 text-xs text-sandstone-dim">
                  <span className="flex items-center gap-1"><Users size={13} /> {car.seats}</span>
                  {car.ac && <span className="flex items-center gap-1"><Snowflake size={13} /> AC</span>}
                  <span className="flex items-center gap-1"><Fuel size={13} /> {car.fuel}</span>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <a
                    href={waLink(`Hi ${site.name}, I'd like to book the ${car.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#3FCB6D] hover:text-[#5fe085] transition-colors"
                  >
                    Book →
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
