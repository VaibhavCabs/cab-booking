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

export default function App() {
  return (
    <div className="min-h-screen">
      <a href="#top" className="sr-only focus:not-sr-only fixed top-2 left-2 z-[100] bg-terracotta text-sandstone px-3 py-2 rounded">
        Skip to content
      </a>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Fleet />
        <Destinations />
        <RoutesExplorer />
        <Testimonials />
        <EnquiryForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
