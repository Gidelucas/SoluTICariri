import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <section
          id="inicio"
          className="flex min-h-screen items-center justify-center px-6 pt-20"
        >
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              SoluTI Cariri
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Tecnologia para transformar negócios.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Desenvolvimento, automação, infraestrutura e soluções de
              tecnologia pensadas para sua empresa.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App