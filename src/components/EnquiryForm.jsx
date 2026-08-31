import { useState } from 'react'
import { Phone, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react'
import { site, waLink, telLink } from '../config/site'
import Reveal from './Reveal'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  tripType: 'Local',
  pickup: '',
  destination: '',
  date: '',
  message: '',
}

export default function EnquiryForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sent | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  function handleSubmit(e) {
    e.preventDefault()

    // Build a friendly WhatsApp message from the form fields, skipping any
    // blanks so the chat doesn't get cluttered with empty lines.
    const lines = [
      `Hi ${site.name}, I'd like to enquire about a cab booking.`,
      '',
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      `*Trip type:* ${form.tripType}`,
      `*Pickup:* ${form.pickup}`,
      `*Destination:* ${form.destination}`,
      form.date ? `*Travel date:* ${form.date}` : null,
      form.message ? `*Message:* ${form.message}` : null,
    ].filter(Boolean)

    const message = lines.join('\n')
    const url = waLink(message)
    window.open(url, '_blank', 'noopener,noreferrer')

    setStatus('sent')
    setForm(initialForm)

    // Reset the status indicator after a few seconds so the form is reusable.
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="bg-basalt-light py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow text-terracotta-light mb-3">Get in touch</p>
          <h2 className="font-display text-3xl font-semibold text-sandstone">
            Tell us your trip. We'll quote it fast.
          </h2>
          <p className="mt-4 text-sm text-sandstone-dim leading-relaxed">
            Fill in the form and it opens WhatsApp with your details pre-filled —
            we usually reply within minutes. Or just call us directly.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3.5 rounded bg-[#25D366] text-basalt-dark font-semibold hover:bg-[#3FCB6D] transition-colors">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a href={telLink()} className="flex items-center gap-3 p-3.5 rounded border border-white/15 text-sandstone font-semibold hover:border-terracotta transition-colors">
              <Phone size={18} /> {site.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 bg-basalt p-6 sm:p-8 rounded border border-white/10">
            <Field label="Full name" required>
              <input required type="text" value={form.name} onChange={update('name')} className={inputClass} />
            </Field>
            <Field label="Phone number" required>
              <input required type="tel" value={form.phone} onChange={update('phone')} className={inputClass} />
            </Field>
            <Field label="Email (optional)">
              <input type="email" value={form.email} onChange={update('email')} className={inputClass} />
            </Field>
            <Field label="Trip type">
              <select value={form.tripType} onChange={update('tripType')} className={inputClass}>
                <option>Local</option>
                <option>Outstation</option>
                <option>Airport Transfer</option>
              </select>
            </Field>
            <Field label="Pickup location" required>
              <input required type="text" value={form.pickup} onChange={update('pickup')} className={inputClass} />
            </Field>
            <Field label="Destination" required>
              <input required type="text" value={form.destination} onChange={update('destination')} className={inputClass} placeholder="Where are you headed?" />
            </Field>
            <Field label="Travel date" className="sm:col-span-2">
              <input type="date" value={form.date} onChange={update('date')} className={inputClass} />
              <span className="text-[11px] text-sandstone-dim/70 mt-1 inline-block">Round trip — the cab stays with you and brings you back.</span>
            </Field>
            <Field label="Message (optional)" className="sm:col-span-2">
              <textarea rows={3} value={form.message} onChange={update('message')} className={inputClass} />
            </Field>

            <div className="sm:col-span-2 mt-1">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#25D366] text-basalt-dark font-semibold hover:bg-[#3FCB6D] transition-colors"
              >
                <MessageCircle size={18} /> Send enquiry on WhatsApp
              </button>

              {status === 'sent' && (
                <p className="mt-3 flex items-center gap-2 text-sm text-[#3FCB6D]">
                  <CheckCircle2 size={16} /> WhatsApp opened with your details — we'll get back to you shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-3 flex items-center gap-2 text-sm text-terracotta-light">
                  <AlertCircle size={16} /> Something went wrong — please call or WhatsApp us instead.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

const inputClass =
  'w-full bg-basalt-light border border-white/10 rounded px-3 py-2.5 text-sm text-sandstone placeholder:text-sandstone-dim/50 focus:border-terracotta outline-none transition-colors'

function Field({ label, required, className = '', children }) {
  return (
    <label className={`block text-sm ${className}`}>
      <span className="text-sandstone-dim mb-1.5 inline-block">
        {label} {required && <span className="text-terracotta-light">*</span>}
      </span>
      {children}
    </label>
  )
}
