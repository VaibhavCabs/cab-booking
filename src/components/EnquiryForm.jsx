import { useState } from 'react'
import { Phone, MessageCircle, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { site, waLink, telLink, mailLink } from '../config/site'
import Reveal from './Reveal'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const initialForm = {
  name: '',
  phone: '',
  email: '',
  tripType: 'Local',
  pickup: '',
  drop: '',
  date: '',
  message: '',
}

export default function EnquiryForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()

    // No email key configured yet: fall back to opening the user's mail app
    // pre-filled with the enquiry, so the form still works with zero setup.
    if (!WEB3FORMS_KEY || WEB3FORMS_KEY === 'your-access-key-here') {
      const body = `Name: ${form.name}\nPhone: ${form.phone}\nTrip type: ${form.tripType}\nPickup: ${form.pickup}\nDrop: ${form.drop}\nDate: ${form.date}\nMessage: ${form.message}`
      window.location.href = `${mailLink('New cab enquiry')}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New cab enquiry from ${form.name}`,
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-basalt-light py-20">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow text-terracotta-light mb-3">Get in touch</p>
          <h2 className="font-display text-3xl font-semibold text-sandstone">
            Tell us your trip. We'll quote it fast.
          </h2>
          <p className="mt-4 text-sm text-sandstone-dim leading-relaxed">
            For an instant reply, message us on WhatsApp or call directly. Prefer email?
            Send the form and it lands straight in our inbox.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3.5 rounded bg-[#25D366] text-basalt-dark font-semibold hover:bg-[#3FCB6D] transition-colors">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a href={telLink()} className="flex items-center gap-3 p-3.5 rounded border border-white/15 text-sandstone font-semibold hover:border-terracotta transition-colors">
              <Phone size={18} /> {site.phoneDisplay}
            </a>
            <a href={mailLink('Cab booking enquiry')} className="flex items-center gap-3 p-3.5 rounded border border-white/15 text-sandstone font-semibold hover:border-terracotta transition-colors">
              <Mail size={18} /> {site.email}
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
            <Field label="Drop / destination" required>
              <input required type="text" value={form.drop} onChange={update('drop')} className={inputClass} />
            </Field>
            <Field label="Travel date" className="sm:col-span-2">
              <input type="date" value={form.date} onChange={update('date')} className={inputClass} />
            </Field>
            <Field label="Message (optional)" className="sm:col-span-2">
              <textarea rows={3} value={form.message} onChange={update('message')} className={inputClass} />
            </Field>

            <div className="sm:col-span-2 mt-1">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded bg-terracotta text-sandstone font-semibold hover:bg-terracotta-dark disabled:opacity-60 transition-colors"
              >
                <Send size={16} /> {status === 'sending' ? 'Sending…' : 'Send enquiry'}
              </button>

              {status === 'sent' && (
                <p className="mt-3 flex items-center gap-2 text-sm text-[#3FCB6D]">
                  <CheckCircle2 size={16} /> Sent — we'll get back to you shortly.
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
