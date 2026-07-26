function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a
            href="#inicio"
            className="text-xl font-bold tracking-tight text-white"
          >
            SoluTI <span className="text-blue-500">Cariri</span>
          </a>

          <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
            Tecnologia, desenvolvimento, automação, infraestrutura e suporte
            para empresas que querem evoluir.
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
          aria-label="Links do rodapé"
        >
          <a
            href="#sobre"
            className="text-slate-400 transition hover:text-white"
          >
            Quem somos
          </a>

          <a
            href="#servicos"
            className="text-slate-400 transition hover:text-white"
          >
            Serviços
          </a>

          <a
            href="#diferenciais"
            className="text-slate-400 transition hover:text-white"
          >
            Diferenciais
          </a>

          <a
            href="#faq"
            className="text-slate-400 transition hover:text-white"
          >
            FAQ
          </a>

          <a
            href="#contato"
            className="text-slate-400 transition hover:text-white"
          >
            Contato
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6">
        <p className="text-sm text-slate-600">
          © {currentYear} SoluTI Cariri. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer