import { useEffect, useState } from 'react'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import Reveal from './Reveal'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="reviews" className="bg-basalt-light py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="eyebrow text-terracotta-light mb-3">What riders say</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-sandstone">Word on the road.</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 relative min-h-[160px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <Quote size={26} className="text-gold mx-auto mb-4" />
                <p className="font-display text-lg sm:text-xl text-sandstone leading-relaxed">"{t.text}"</p>
                <p className="mt-4 text-sm text-sandstone-dim">— {t.name}, {t.place}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-terracotta' : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
