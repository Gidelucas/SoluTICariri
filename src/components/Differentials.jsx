import {
  BadgeCheck,
  Gauge,
  Handshake,
  LockKeyhole,
  Target,
  Wrench,
} from 'lucide-react'

function Differentials() {
  const differentials = [
    {
      title: 'Atendimento próximo',
      description:
        'Comunicação direta e acompanhamento durante todo o desenvolvimento da solução.',
      icon: Handshake,
    },
    {
      title: 'Soluções personalizadas',
      description:
        'A tecnologia é adaptada aos processos e às necessidades reais de cada empresa.',
      icon: Wrench,
    },
    {
      title: 'Foco em resultado',
      description:
        'As decisões técnicas são orientadas por eficiência, produtividade e geração de valor.',
      icon: Target,
    },
    {
      title: 'Segurança',
      description:
        'Boas práticas são consideradas desde a infraestrutura até o desenvolvimento das soluções.',
      icon: LockKeyhole,
    },
    {
      title: 'Agilidade',
      description:
        'Buscamos soluções objetivas e processos eficientes para reduzir tempo e complexidade.',
      icon: Gauge,
    },
    {
      title: 'Compromisso',
      description:
        'Transparência, responsabilidade e qualidade em cada etapa do atendimento.',
      icon: BadgeCheck,
    },
  ]

  return (
    <section
      id="diferenciais"
      className="relative border-t border-white/5 px-6 py-16 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Diferenciais
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tecnologia com proximidade, estratégia e responsabilidade.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            Mais do que entregar ferramentas, buscamos compreender o cenário de
            cada cliente e construir soluções que façam sentido para sua
            operação.
          </p>

          <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6">
            <p className="text-sm leading-6 text-blue-100">
              Nosso objetivo é transformar tecnologia em uma ferramenta prática
              para melhorar processos, reduzir problemas e apoiar o crescimento
              da empresa.
            </p>
          </div>
        </div>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {differentials.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="border-t border-white/10 pt-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-400/20">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Differentials