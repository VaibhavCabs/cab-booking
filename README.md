# Vaibhav Cabs — website

A fast, single-page React site for a cab/taxi service in Chhatrapati Sambhajinagar. Vite + React + Tailwind, no heavy UI libraries, scroll-reveal transitions, searchable routes, and a free enquiry-by-email form.

## 1. Rename / rebrand
Edit **`src/config/site.js`** — name, tagline, phone, WhatsApp number, email, address. That one file drives the whole site.

Edit the content arrays in **`src/data/`** (fleet, destinations, routes, FAQs, testimonials) — the testimonials file currently has placeholder text, replace with real reviews before publishing.

## 2. Run it locally
Needs [Node.js](https://nodejs.org) 18+.
```bash
npm install
npm run dev       # opens a local preview, auto-reloads on save
npm run build     # outputs production files to /dist
```

## 3. Enquiries go straight to WhatsApp
The enquiry form opens WhatsApp pre-filled with the visitor's trip details — no email
key or third-party service required. The WhatsApp number is the one configured in
`src/config/site.js` (`WHATSAPP_NUMBER`, digits only, country code first).

If you ever want to route enquiries somewhere else, swap the `window.open(...)` call in
`EnquiryForm.jsx` — e.g. a Web3Forms POST, an EmailJS send, or an EmailJS/Formspree
endpoint — and the rest of the form still works as-is.

## 4. Deploy for free
Any static host works since this builds to plain HTML/CSS/JS:
- **Netlify** — drag the `dist` folder into app.netlify.com/drop, or connect your GitHub repo (build command `npm run build`, publish directory `dist`).
- **Vercel** — `vercel.com/new`, import the repo, framework preset "Vite", deploy.
- **Cloudflare Pages** — connect the repo, build command `npm run build`, output directory `dist`.

All three have generous free tiers with custom domain support.

## What's inside
- `src/components/` — one component per section (Hero, Fleet, RoutesExplorer, EnquiryForm, etc.)
- `src/data/` — editable content, separated from UI code
- `src/hooks/useScrollReveal.js` — lightweight IntersectionObserver-based reveal animation, no animation library needed
- Floating WhatsApp/Call buttons on every screen (corner FABs on desktop, full-width sticky bar on mobile)
- Respects `prefers-reduced-motion`
