import { company } from '../data/company'

function Footer() {
  const currentYear = new Date().getFullYear()

  const fullLogo = `${import.meta.env.BASE_URL}logo-soluti-cariri.png`

  return (
    <footer className="border-t border-white/5 px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Identidade da empresa */}
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center"
              aria-label="SoluTI Cariri - Voltar ao início"
            >
              <img
                src={fullLogo}
                alt="SoluTI Cariri"
                className="h-20 w-auto object-contain sm:h-24"
              />
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              {company.description}
            </p>
          </div>

          {/* Links */}
          <nav
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
            aria-label="Links do rodapé"
          >
            <a
              href="#sobre"
              className="text-slate-400 transition hover:text-white focus:outline-none focus:text-white"
            >
              Quem somos
            </a>

            <a
              href="#servicos"
              className="text-slate-400 transition hover:text-white focus:outline-none focus:text-white"
            >
              Serviços
            </a>

            <a
              href="#diferenciais"
              className="text-slate-400 transition hover:text-white focus:outline-none focus:text-white"
            >
              Diferenciais
            </a>

            <a
              href="#faq"
              className="text-slate-400 transition hover:text-white focus:outline-none focus:text-white"
            >
              FAQ
            </a>

            <a
              href="#contato"
              className="text-slate-400 transition hover:text-white focus:outline-none focus:text-white"
            >
              Contato
            </a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/5 pt-6">
          <p className="text-sm text-slate-600">
            © {currentYear} {company.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer