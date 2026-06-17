import { Phone, MessageCircle, ShieldCheck, Clock, BadgeIndianRupee } from 'lucide-react'
import { site, waLink, telLink } from '../config/site'
import RouteThread from './RouteThread'

const badges = [
  { icon: ShieldCheck, label: 'Verified drivers' },
  { icon: Clock, label: 'Available 24x7' },
  { icon: BadgeIndianRupee, label: 'Transparent fares' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-basalt bg-grain">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeUp">
          <p className="eyebrow text-terracotta-light mb-4">Cab & Taxi Service · {site.city}</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold text-sandstone">
            {site.tagline}
          </h1>
          <p className="mt-5 text-sandstone-dim text-base sm:text-lg max-w-md">
            Local rides, outstation drops and airport transfers across {site.cityShort} —
            booked in a message, confirmed in minutes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(`Hi ${site.name}, I'd like to book a cab.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded bg-[#25D366] text-basalt-dark font-semibold hover:bg-[#3FCB6D] transition-colors"
            >
              <MessageCircle size={18} /> Enquire on WhatsApp
            </a>
            <a
              href={telLink()}
              className="flex items-center gap-2 px-5 py-3 rounded border border-white/15 text-sandstone font-semibold hover:border-terracotta hover:text-terracotta-light transition-colors"
            >
              <Phone size={18} /> {site.phoneDisplay}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-sandstone-dim">
                <b.icon size={16} className="text-gold" />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <RouteThread className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
