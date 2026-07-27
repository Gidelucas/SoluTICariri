function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-6 pb-20 pt-32 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            SoluTI Cariri
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Tecnologia que impulsiona o crescimento do seu negócio.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Desenvolvimento de software, automações, infraestrutura, suporte e
            consultoria em tecnologia para empresas que querem evoluir com
            segurança e eficiência.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="rounded-xl bg-blue-600 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Solicitar orçamento
            </a>

            <a
              href="#servicos"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-center text-sm font-semibold text-slate-200 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Conhecer serviços
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:gap-6">
            <span>✓ Soluções personalizadas</span>
            <span>✓ Atendimento próximo</span>
            <span>✓ Tecnologia aplicada ao negócio</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
                  Soluções digitais
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Tecnologia sob medida
                </p>
              </div>

              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                'Desenvolvimento',
                'Automações',
                'Infraestrutura',
                'Consultoria',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 p-5"
                >
                  <div className="mb-4 h-10 w-10 rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20" />

                  <p className="font-medium text-white">{item}</p>

                  <div className="mt-4 h-1.5 w-full rounded-full bg-slate-800">
                    <div className="h-full w-2/3 rounded-full bg-blue-500" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
              <p className="text-sm font-medium text-blue-200">
                Tecnologia pensada para gerar eficiência, segurança e
                crescimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero