import { useRef, useState } from 'react'

function Hero() {
  // =========================================================
  // CONTROLE DO CARROSSEL
  // =========================================================

  // Índice do slide atualmente exibido.
  // 0 = primeiro slide
  // 1 = segundo slide
  // 2 = terceiro slide
  const [activeSlide, setActiveSlide] = useState(0)

  // Guardam as posições horizontais do toque no celular.
  // useRef é utilizado porque não precisamos redesenhar
  // o componente toda vez que o dedo se move.
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  // Distância mínima que o usuário precisa arrastar
  // para considerarmos o movimento como um swipe.
  const minimumSwipeDistance = 50

  // =========================================================
  // CONTEÚDO DOS SLIDES
  // =========================================================

  const slides = [
    {
      eyebrow: 'O que resolvemos',

      title: 'Sua empresa sempre operando.',

      items: [
        {
          title: 'Suporte a PDV/ERP',
          description:
            'Diagnóstico e correção de falhas em sistemas de PDV e ERP, garantindo a continuidade das operações.',
        },

        {
          title: 'Redes e infraestrutura',
          description:
            'Internet caindo, rede desorganizada ou máquinas sem conexão.',
        },

        {
          title: 'Manutenção e backup',
          description:
            'Prevenção de falhas e perda de dados importantes.',
        },

        {
          title: 'Automação de processos',
          description:
            'Relatórios e processos manuais que consomem tempo da equipe.',
        },
      ],

      footer: 'Da Tecnologia ao resultado que move sua empresa.',
    },

    {
      eyebrow: 'Como ajudamos',

      title: 'Suporte que resolve, não só identifica.',

      items: [
        {
          title: 'Diagnóstico rápido',
          description:
            'Identificação objetiva da causa do problema, sem enrolação, para reduzir o tempo de solução.',
        },

        {
          title: 'Correção remota ou local.',
          description:
            'Atendimento remoto ou presencial, conforme a urgência e o tipo de falha apresentada.',
        },

        {
          title: 'Organização de infraestrutura',
          description:
            'Cabeamento, rede e equipamentos estruturados para reduzir falhas futuras.',
        },

        {
          title: 'Acompanhamento contínuo',
          description:
            'Retorno após o atendimento para confirmar que o problema não vai se repetir.',
        },
      ],

      footer:
        'Menos problemas com tecnologia e mais foco no seu negócio.',
    },

    {
      eyebrow: 'Nosso objetivo',

      title: 'Preparado para crescer com você.',

      items: [
        {
          title: 'Continuidade',
          description:
            'Redução de interrupções que possam comprometer vendas e operações.',
        },

        {
          title: 'Agilidade',
          description:
            'Diagnóstico objetivo para encontrar e resolver problemas com rapidez.',
        },

        {
          title: 'Segurança',
          description:
            'Cuidados com equipamentos, backups e rotinas importantes da empresa.',
        },

        {
          title: 'Estrutura escalável',
          description:
            'Base tecnológica pronta para acompanhar o crescimento do negócio, sem retrabalho.',
        },
      ],

      footer:
        'Tecnologia preparada para acompanhar o crescimento da sua empresa.',
    },
  ]

  // Recupera o slide atualmente selecionado.
  const currentSlide = slides[activeSlide]

  // =========================================================
  // FUNÇÕES PARA TROCAR DE SLIDE
  // =========================================================

  // Avança para o próximo slide.
  // Se estiver no último, volta para o primeiro.
  function nextSlide() {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    )
  }

  // Volta para o slide anterior.
  // Se estiver no primeiro, vai para o último.
  function previousSlide() {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    )
  }

  // =========================================================
  // FUNÇÕES DO SWIPE NO CELULAR
  // =========================================================

  // Executada quando o usuário toca no card.
  function handleTouchStart(event) {
    // Guarda a posição horizontal inicial do dedo.
    touchStartX.current = event.touches[0].clientX

    // Limpa uma possível posição anterior.
    touchEndX.current = null
  }

  // Executada enquanto o dedo está deslizando.
  function handleTouchMove(event) {
    // Guarda a posição horizontal atual/final.
    touchEndX.current = event.touches[0].clientX
  }

  // Executada quando o usuário tira o dedo da tela.
  function handleTouchEnd() {
    // Se não houver posição inicial ou final,
    // não existe movimento suficiente para analisar.
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return
    }

    // Calcula a distância percorrida.
    const distance =
      touchStartX.current - touchEndX.current

    // =====================================================
    // SWIPE PARA A ESQUERDA
    // =====================================================
    //
    // Exemplo:
    //
    // início: 300px
    // final: 150px
    //
    // 300 - 150 = 150
    //
    // Portanto, avançamos.
    if (distance > minimumSwipeDistance) {
      nextSlide()
    }

    // =====================================================
    // SWIPE PARA A DIREITA
    // =====================================================
    //
    // Exemplo:
    //
    // início: 100px
    // final: 250px
    //
    // 100 - 250 = -150
    //
    // Portanto, voltamos.
    if (distance < -minimumSwipeDistance) {
      previousSlide()
    }

    // Limpa as posições depois da operação.
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-6 pb-20 pt-32 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40"
    >
      {/* =====================================================
          FUNDO DO HERO
      ====================================================== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* ===================================================
            LADO ESQUERDO
        ==================================================== */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            SoluTI Cariri
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Sua operação não pode parar
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Suporte especializado em sistemas de venda (PDV/ERP),
            redes de computadores e infraestrutura de TI para
            empresas do comércio e indústria. Menos tempo lidando
            com problemas de TI, mais tempo para fazer seu negócio
            crescer. Cuidamos da sua infraestrutura para reduzir
            paradas e manter tudo funcionando como deve.
          </p>

          {/* Botões */}
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

          {/* Diferenciais rápidos */}
          <div className="mt-10 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:gap-6">
            <span>✓ Atendimento rápido na região</span>

            <span>✓ Diagnóstico técnico objetivo</span>

            <span>
              ✓ Foco em não deixar você parar de vender
            </span>
          </div>
        </div>

        {/* ===================================================
            LADO DIREITO
        ==================================================== */}
        <div className="relative mx-auto w-full max-w-lg">
          {/* Brilho ao redor do card */}
          <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-3xl" />

          {/* =================================================
              CARD / CARROSSEL

              touch-pan-y:
              mantém a rolagem vertical normal da página no
              celular, mesmo com o swipe horizontal funcionando.
          ================================================== */}
          <div
            className="relative touch-pan-y overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* ===============================================
                CABEÇALHO
            ================================================ */}
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
                  {currentSlide.eyebrow}
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  {currentSlide.title}
                </p>
              </div>

              {/* =============================================
                  INDICADORES / PONTINHOS
              ============================================== */}
              <div
                className="flex shrink-0 gap-2"
                aria-label="Selecionar conteúdo"
              >
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Mostrar conteúdo ${index + 1}`}
                    aria-current={
                      activeSlide === index
                        ? 'true'
                        : undefined
                    }
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeSlide === index
                        ? 'w-6 bg-blue-500'
                        : 'w-2.5 bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ===============================================
                CARDS DO SLIDE
            ================================================ */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {currentSlide.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-blue-400/20 hover:bg-white/[0.07]"
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

            {/* ===============================================
                FRASE INFERIOR
            ================================================ */}
            <div className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
              <p className="text-sm font-medium text-blue-200">
                {currentSlide.footer}
              </p>
            </div>

            {/* ===============================================
                DICA PARA CELULAR
            ================================================ */}
            <p className="mt-4 text-center text-xs text-slate-600 sm:hidden">
              Deslize para os lados para ver mais
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero