import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem somos', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ]

  // BASE_URL será "/" durante o desenvolvimento local
  // e "/SoluTICariri/" quando configurarmos o GitHub Pages.
  const logoSymbol = `${import.meta.env.BASE_URL}logo-simbolo.png`

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Marca */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="SoluTI Cariri - Voltar ao início"
        >
          <img
            src={logoSymbol}
            alt=""
            className="h-11 w-11 object-contain"
          />

          <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
            SoluTI <span className="text-blue-500">Cariri</span>
          </span>
        </a>

        {/* Menu desktop */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegação principal"
        >
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white focus:outline-none focus:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden lg:block">
          <a
            href="#contato"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Solicitar orçamento
          </a>
        </div>

        {/* Botão do menu mobile */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span
            className="text-2xl leading-none"
            aria-hidden="true"
          >
            {menuOpen ? '×' : '☰'}
          </span>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-slate-950 px-6 py-6 lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-2"
            aria-label="Navegação mobile"
          >
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-300 transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contato"
              onClick={closeMenu}
              className="mt-4 rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Solicitar orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar