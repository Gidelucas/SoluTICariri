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
            Sua operação não pode parar
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Suporte especializado em sistemas de venda (PDV/ERP), redes de computadores e infraestrutura de TI para empresas do comércio e indústria. 
            Cada período de inatividade representa perda direta de receita, atuamos para 
            minimizar esse impacto.
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
            <span>✓ Atendimento rápido na região</span>
            <span>✓ Diagnóstico técnico objetivo</span>
            <span>✓ Foco em não deixar você parar de vender</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
                  O que resolvemos
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Sua empresa sempre operando.
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
                {
                  title: 'Suporte a PDV/ERP',
                  description: 'Diagnóstico e correção de falhas em sistemas de PDV e ERP, garantindo a continuidade das operações.',
                },
                {
                  title: 'Redes e infraestrutura',
                  description: 'Internet caindo, rede desorganizada ou máquinas sem conexão.',
                },
                {
                  title: 'Manutenção e backup',
                  description: 'Prevenção de falhas e perda de dados importantes.',
                },
                {
                  title: 'Automação de processos',
                  description: 'Relatórios e processos manuais que consomem tempo da equipe.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="font-semibold text-white">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
              <p className="text-sm font-medium text-blue-200">
                Da Tecnologia ao resultado que move sua empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero