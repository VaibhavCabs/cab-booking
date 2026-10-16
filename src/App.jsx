import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Fleet from './components/Fleet'
import Destinations from './components/Destinations'
import RoutesExplorer from './components/RoutesExplorer'
import Testimonials from './components/Testimonials'
import EnquiryForm from './components/EnquiryForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import { site } from './config/site'
import { faqs } from './data/faqs'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TaxiService',
      '@id': 'https://vaibhavcabs.com/#business',
      name: site.name,
      alternateName: 'Aurangabad Cab Service',
      url: 'https://vaibhavcabs.com/',
      telephone: site.phoneRaw,
      email: site.email,
      serviceType: ['Local taxi service', 'Airport transfer', 'Outstation cab service', 'Tourist sightseeing taxi'],
      description: 'Local, airport and outstation cab service in Chhatrapati Sambhajinagar (formerly Aurangabad), Maharashtra.',
      areaServed: [
        { '@type': 'City', name: 'Chhatrapati Sambhajinagar', alternateName: 'Aurangabad' },
        { '@type': 'AdministrativeArea', name: 'Maharashtra' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chhatrapati Sambhajinagar',
        alternateName: 'Aurangabad',
        addressRegion: 'Maharashtra',
        postalCode: '431003',
        addressCountry: 'IN',
      },
      openingHours: 'Mo-Su 00:00-23:59',
      priceRange: '₹₹',
      image: 'https://vaibhavcabs.com/og-image.svg',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: site.phoneRaw,
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
        areaServed: 'IN',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Cab services in Chhatrapati Sambhajinagar',
        itemListElement: [
          'Local cab bookings',
          'Airport taxi transfers',
          'Ajanta and Ellora sightseeing tours',
          'Outstation round-trip cabs',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://vaibhavcabs.com/#website',
      url: 'https://vaibhavcabs.com/',
      name: site.name,
      publisher: { '@id': 'https://vaibhavcabs.com/#business' },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://vaibhavcabs.com/#webpage',
      url: 'https://vaibhavcabs.com/',
      name: 'Cab Service in Chhatrapati Sambhajinagar (Aurangabad) | Vaibhav Cabs',
      alternateName: 'Aurangabad Cab Service',
      isPartOf: { '@id': 'https://vaibhavcabs.com/#website' },
      about: { '@id': 'https://vaibhavcabs.com/#business' },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
}

export default function App() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <a href="#top" className="sr-only focus:not-sr-only fixed top-2 left-2 z-[100] bg-terracotta text-sandstone px-3 py-2 rounded">
        Skip to content
      </a>
      <TopBar />
      <Navbar />
      <main className="pb-24 sm:pb-0">
        <Hero />
        <Fleet />
        <Destinations />
        <RoutesExplorer />
        <WhyChooseUs />
        <Testimonials />
        <EnquiryForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
