import { BadgeIndianRupee, Clock4, ShieldCheck, Sparkles, MapPinned, Wallet } from 'lucide-react'
import Reveal from './Reveal'

const points = [
  { icon: BadgeIndianRupee, title: 'Transparent fares', text: 'Per-km pricing shared upfront — no hidden charges at drop-off.' },
  { icon: Clock4, title: '24x7 availability', text: 'Early flights, late trains or last-minute plans — we are on call.' },
  { icon: ShieldCheck, title: 'Verified drivers', text: 'Experienced, background-checked drivers who know the local routes.' },
  { icon: Sparkles, title: 'Clean, maintained cabs', text: 'Sanitised vehicles serviced regularly for a comfortable ride.' },
  { icon: MapPinned, title: 'Local & outstation', text: 'From a city errand to a multi-day pilgrimage circuit.' },
  { icon: Wallet, title: 'Easy payments', text: 'Cash, UPI or card — whatever works for you.' },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-basalt-light py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="eyebrow text-terracotta-light mb-3">Why ride with us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-sandstone max-w-lg">
            Built for travellers who'd rather not think about the ride.
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="h-full p-6 rounded border border-white/10 hover:border-terracotta/40 transition-colors">
                <p.icon size={22} className="text-gold mb-4" />
                <h3 className="font-display text-lg font-semibold text-sandstone mb-1.5">{p.title}</h3>
                <p className="text-sm text-sandstone-dim leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
