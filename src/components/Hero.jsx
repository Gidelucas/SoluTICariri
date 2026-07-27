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

  // Guarda a direção da animação.
  // "next" = próximo slide
  // "previous" = slide anterior
  const [slideDirection, setSlideDirection] = useState('next')

  // =========================================================
  // CONTROLE DO TOQUE NO CELULAR
  // =========================================================

  // Guardam as posições horizontais do toque no celular.
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  // =========================================================
  // CONTROLE DO MOUSE NO COMPUTADOR
  // =========================================================

  // Guarda a posição onde o mouse começou a ser arrastado.
  const mouseStartX = useRef(null)

  // Guarda a posição atual/final do mouse.
  const mouseEndX = useRef(null)

  // Indica se o usuário está com o mouse pressionado.
  const isDragging = useRef(false)

  // Distância mínima necessária para considerar
  // o movimento como um swipe/arraste.
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
    // Define a direção da animação.
    setSlideDirection('next')

    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    )
  }

  // Volta para o slide anterior.
  // Se estiver no primeiro, vai para o último.
  function previousSlide() {
    // Define a direção da animação.
    setSlideDirection('previous')

    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    )
  }

  // =========================================================
  // FUNÇÃO UTILIZADA PELOS PONTINHOS
  // =========================================================

  function goToSlide(index) {
    // Não faz nada se o usuário clicar
    // no slide que já está aberto.
    if (index === activeSlide) {
      return
    }

    // Descobre a direção da navegação.
    if (index > activeSlide) {
      setSlideDirection('next')
    } else {
      setSlideDirection('previous')
    }

    // Exibe o slide escolhido.
    setActiveSlide(index)
  }

  // =========================================================
  // FUNÇÕES DO SWIPE NO CELULAR
  // =========================================================

  function handleTouchStart(event) {
    // Guarda a posição horizontal inicial do dedo.
    touchStartX.current = event.touches[0].clientX

    // Limpa uma posição anterior.
    touchEndX.current = null
  }

  function handleTouchMove(event) {
    // Guarda a posição atual do dedo.
    touchEndX.current = event.touches[0].clientX
  }

  function handleTouchEnd() {
    // Verifica se realmente houve movimento.
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      touchStartX.current = null
      touchEndX.current = null
      return
    }

    // Calcula a distância horizontal.
    const distance =
      touchStartX.current - touchEndX.current

    // Arrastou para a esquerda:
    // próximo slide.
    if (distance > minimumSwipeDistance) {
      nextSlide()
    }

    // Arrastou para a direita:
    // slide anterior.
    if (distance < -minimumSwipeDistance) {
      previousSlide()
    }

    // Limpa as posições.
    touchStartX.current = null
    touchEndX.current = null
  }

  // =========================================================
  // FUNÇÕES DO ARRASTE COM MOUSE
  // =========================================================

  function handleMouseDown(event) {
    // Ignora o arraste caso o clique tenha ocorrido
    // diretamente sobre um botão.
    //
    // Isso evita conflito com os pontinhos do carrossel.
    if (event.target.closest('button')) {
      return
    }

    // Informa que começamos a arrastar.
    isDragging.current = true

    // Guarda a posição inicial do mouse.
    mouseStartX.current = event.clientX

    // Limpa qualquer posição anterior.
    mouseEndX.current = null
  }

  function handleMouseMove(event) {
    // Só acompanha o movimento se o botão
    // do mouse estiver pressionado.
    if (!isDragging.current) {
      return
    }

    // Atualiza a posição horizontal do mouse.
    mouseEndX.current = event.clientX
  }

  function finishMouseDrag() {
    // Caso não exista um arraste válido,
    // apenas limpa os controles.
    if (
      !isDragging.current ||
      mouseStartX.current === null ||
      mouseEndX.current === null
    ) {
      isDragging.current = false
      mouseStartX.current = null
      mouseEndX.current = null
      return
    }

    // Calcula a distância horizontal percorrida.
    const distance =
      mouseStartX.current - mouseEndX.current

    // Arrastou para a esquerda:
    // próximo slide.
    if (distance > minimumSwipeDistance) {
      nextSlide()
    }

    // Arrastou para a direita:
    // slide anterior.
    if (distance < -minimumSwipeDistance) {
      previousSlide()
    }

    // Finaliza o estado do arraste.
    isDragging.current = false
    mouseStartX.current = null
    mouseEndX.current = null
  }

  function handleMouseUp() {
    finishMouseDrag()
  }

  function handleMouseLeave() {
    // Se o usuário sair do card enquanto
    // estiver segurando o mouse, finalizamos
    // o movimento normalmente.
    if (isDragging.current) {
      finishMouseDrag()
    }
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
              mantém a rolagem vertical da página funcionando
              normalmente no celular.

              cursor-grab:
              mostra no computador que o card pode ser arrastado.

              active:cursor-grabbing:
              muda o cursor quando o mouse está pressionado.

              select-none:
              evita selecionar os textos enquanto arrasta.
          ================================================== */}

          <div
            className="relative touch-pan-y cursor-grab select-none overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {/* ===============================================
                CABEÇALHO
            ================================================ */}

            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              {/* Este bloco é recriado quando muda o slide,
                  permitindo executar a animação novamente. */}

              <div
                key={`header-${activeSlide}`}
                className={
                  slideDirection === 'next'
                    ? 'animate-slide-from-right'
                    : 'animate-slide-from-left'
                }
              >
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
                    onClick={() => goToSlide(index)}
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
                CONTEÚDO ANIMADO DO SLIDE
            ================================================ */}

            <div
              key={`content-${activeSlide}`}
              className={
                slideDirection === 'next'
                  ? 'animate-slide-from-right'
                  : 'animate-slide-from-left'
              }
            >
              {/* =============================================
                  CARDS DO SLIDE
              ============================================== */}

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

              {/* =============================================
                  FRASE INFERIOR
              ============================================== */}

              <div className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                <p className="text-sm font-medium text-blue-200">
                  {currentSlide.footer}
                </p>
              </div>
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