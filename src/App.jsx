import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Differentials from './components/Differentials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
      <WhatsappButton />
    </div>
  )
}

export default App