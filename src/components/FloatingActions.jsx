import { Phone, MessageCircle } from 'lucide-react'
import { site, waLink, telLink } from '../config/site'

export default function FloatingActions() {
  return (
    <>
      {/* Desktop floating buttons */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-black/30 animate-pulseRing hover:scale-105 transition-transform"
        >
          <MessageCircle size={26} className="text-basalt-dark" />
        </a>
        <a
          href={telLink()}
          aria-label="Call now"
          className="w-14 h-14 rounded-full bg-terracotta flex items-center justify-center shadow-lg shadow-black/30 hover:scale-105 transition-transform"
        >
          <Phone size={22} className="text-sandstone" />
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 border-t border-white/10 bg-basalt-dark">
        <a
          href={telLink()}
          className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-sandstone border-r border-white/10"
        >
          <Phone size={17} /> Call Now
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 text-sm font-semibold bg-[#25D366] text-basalt-dark"
        >
          <MessageCircle size={17} /> WhatsApp
        </a>
      </div>
    </>
  )
}
