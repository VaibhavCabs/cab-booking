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

## 3. Make the enquiry form email you — free
The form uses [Web3Forms](https://web3forms.com), free, no signup beyond verifying an email:
1. Go to web3forms.com, enter the email you want enquiries sent to, get an **access key**.
2. Copy `.env.example` to `.env` and paste the key into `VITE_WEB3FORMS_KEY`.
3. Rebuild (`npm run build`). Free tier covers ~250 submissions/month — plenty for a small business; if you outgrow it, EmailJS or Formspree work as drop-in alternatives.

Until you add a key, the form still works — it opens the visitor's email app pre-filled with their enquiry, addressed to you.

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
