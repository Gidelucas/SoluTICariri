function About() {
  const highlights = [
    {
      title: 'Foco operacional',
      description:
        'Cada intervenção é pensada para minimizar o tempo de inatividade e o impacto na operação da empresa.',
    },
    {
      title: 'Visão de negócio',
      description:
        'Tecnologia não deve existir apenas pela tecnologia. Buscamos gerar eficiência, segurança e continuidade para o resultado do cliente.',
    },
    {
      title: 'Atendimento próximo',
      description:
        'Comunicação direta, resposta ágil e acompanhamento de longo prazo com quem atende sua empresa.',
    },
  ]

  return (
    <section
      id="sobre"
      className="relative border-t border-white/5 px-6 py-16 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Quem somos
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Suporte técnico para manter sua empresa sempre em funcionamento.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
              A SoluTI Cariri atua no suporte técnico e na manutenção de sistemas de venda, redes
              e infraestrutura de TI para empresas do comércio e indústria. Nosso foco está em manter 
              a operação funcionando, prevenindo interrupções que impactam diretamente a receita.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-400">
              Não basta ter tecnologia. Ela precisa trabalhar a favor da sua empresa. Conectamos 
              infraestrutura, sistemas e processos para criar um ambiente estável, otimizado e 
              preparado para o crescimento do seu negócio.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05] sm:p-6"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-blue-500 opacity-70" />

                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400 ring-1 ring-blue-400/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About