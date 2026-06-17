import { Phone, Mail, MessageCircle } from 'lucide-react'
import { site, waLink, telLink, mailLink } from '../config/site'

export default function TopBar() {
  return (
    <div className="hidden sm:block bg-basalt-dark border-b border-white/5 text-xs text-sandstone-dim">
      <div className="max-w-6xl mx-auto px-6 h-9 flex items-center justify-between">
        <p className="eyebrow text-gold">{site.hours}</p>
        <div className="flex items-center gap-5">
          <a href={telLink()} className="flex items-center gap-1.5 hover:text-sandstone transition-colors">
            <Phone size={13} /> {site.phoneDisplay}
          </a>
          <a href={mailLink('Cab booking enquiry')} className="flex items-center gap-1.5 hover:text-sandstone transition-colors">
            <Mail size={13} /> {site.email}
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#3FCB6D] hover:text-[#5fe085] transition-colors">
            <MessageCircle size={13} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
