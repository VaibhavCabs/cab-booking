// Edit this one file to rebrand the entire site: name, contact info, address.
const RAW_PHONE = '+917756880105' // <-- replace with real number, country code first
const WHATSAPP_NUMBER = '917756880105' // <-- same number, digits only, no +

export const site = {
  name: 'Vaibhav Cabs',
  tagline: 'Wherever the road leads in Sambhajinagar.',
  city: 'Chhatrapati Sambhajinagar',
  cityShort: 'CSN',
  phoneDisplay: '+91 77568 80105',
  phoneRaw: RAW_PHONE,
  email: 'vaibhavtours09@gmail.com',
  whatsappNumber: WHATSAPP_NUMBER,
  address: 'Chhatrapati Sambhajinagar, Maharashtra 431003',
  hours: 'Available 24x7, all days',
  social: {
    instagram: '#',
    facebook: '#',
  },
}

export function waLink(message) {
  const text = encodeURIComponent(message || `Hi ${site.name}, I'd like to enquire about a cab booking.`)
  return `https://wa.me/${site.whatsappNumber}?text=${text}`
}

export function telLink() {
  return `tel:${site.phoneRaw}`
}

export function mailLink(subject) {
  return `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`
}
