import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faqs'
import Reveal from './Reveal'

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base sm:text-lg text-sandstone">{faq.q}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <p className="pb-5 text-sm text-sandstone-dim leading-relaxed pr-8">{faq.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-basalt py-20">
      <div className="max-w-2xl mx-auto px-6">
        <Reveal>
          <p className="eyebrow text-terracotta-light mb-3">Good to know</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-sandstone">Frequently asked questions.</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
