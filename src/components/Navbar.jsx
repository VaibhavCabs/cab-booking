import { useEffect, useState } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { site, waLink, telLink } from '../config/site'

const links = [
  { href: '#fleet', label: 'Fleet' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#routes', label: 'Routes' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-basalt/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-basalt'
      } border-b border-white/5`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight text-sandstone">
          {site.name}
        </a>

        <ul className="hidden lg:flex items-center gap-7 text-sm text-sandstone-dim">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-terracotta-light transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={telLink()}
            className="flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold border border-white/15 text-sandstone hover:border-terracotta hover:text-terracotta-light transition-colors"
          >
            <Phone size={15} /> Call Now
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold bg-[#25D366] text-basalt-dark hover:bg-[#3FCB6D] transition-colors"
          >
            <MessageCircle size={15} /> WhatsApp
          </a>
        </div>

        <button
          className="md:hidden text-sandstone p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-4 text-sandstone-dim">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-terracotta-light transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
