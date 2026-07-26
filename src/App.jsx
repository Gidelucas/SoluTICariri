import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Differentials from './components/Differentials'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
      </main>
    </div>
  )
}

export default App