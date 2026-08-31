import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { site, telLink, mailLink } from '../config/site'

export default function Footer() {
  return (
    <footer className="bg-basalt-dark border-t border-white/5 pt-14 pb-28 sm:pb-10">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-xl font-semibold text-sandstone">{site.name}</p>
          <p className="mt-3 text-sm text-sandstone-dim leading-relaxed">{site.tagline}</p>
          
        </div>

        <div>
          <p className="eyebrow text-gold mb-3">Contact</p>
          <ul className="space-y-2.5 text-sm text-sandstone-dim">
            <li className="flex items-start gap-2"><Phone size={15} className="mt-0.5" /> <a href={telLink()} className="hover:text-sandstone transition-colors">{site.phoneDisplay}</a></li>
            <li className="flex items-start gap-2"><Mail size={15} className="mt-0.5" /> <a href={mailLink()} className="hover:text-sandstone transition-colors">{site.email}</a></li>
            <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 flex-shrink-0" /> {site.address}</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold mb-3">Quick links</p>
          <ul className="space-y-2.5 text-sm text-sandstone-dim">
            <li><a href="#fleet" className="hover:text-sandstone transition-colors">Our fleet</a></li>
            <li><a href="#routes" className="hover:text-sandstone transition-colors">Outstation routes</a></li>
            <li><a href="#contact" className="hover:text-sandstone transition-colors">Enquire</a></li>
          </ul>
        </div>
      </div>

      <p className="max-w-6xl mx-auto px-6 mt-12 text-xs text-sandstone-dim/60">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  )
}
