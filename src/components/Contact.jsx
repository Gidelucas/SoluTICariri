import { useState } from 'react'
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react'
const instagramIcon = `${import.meta.env.BASE_URL}instagram.svg`
import { company } from '../data/company'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    message: '',
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const message = `
Olá! Vim pelo site da ${company.name}.
Me chamo ${formData.name},
da empresa ${formData.company || 'Não informado'}

${formData.message}
    `.trim()

    const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
      message,
    )}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="contato"
      className="relative border-t border-white/5 px-6 py-16 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Contato
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vamos conversar sobre a tecnologia da sua empresa?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Conte um pouco sobre sua necessidade. Podemos avaliar seu cenário
              e indicar uma solução adequada para o seu negócio.
            </p>

            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                'Olá! Vim pelo site da SoluTI Cariri e gostaria de conversar sobre uma solução para minha empresa.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <MessageCircle size={20} />
              Falar pelo WhatsApp
            </a>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-400/20">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="font-medium text-white">
                    Atendimento
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    {company.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-400/20">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-current text-blue-500"
                  >
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2C5.6 4 4 5.6 4 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8c2 0 3.6-1.6 3.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                </div>

                <div>
                  <p className="font-medium text-white">
                    Instagram
                  </p>

                  <a
                    href={company.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-sm text-slate-400 transition hover:text-white focus:outline-none focus:text-white"
                  >
                    {company.instagramLabel}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-400/20">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="font-medium text-white">
                    E-mail
                  </p>

                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 inline-block text-sm text-slate-400 transition hover:text-white focus:outline-none focus:text-white"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl sm:p-8">
            <p className="text-lg font-semibold text-white">
              Solicitar orçamento
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Preencha os dados abaixo e enviaremos sua mensagem diretamente
              pelo WhatsApp.
            </p>

            <form
              className="mt-8 space-y-5"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Nome
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Empresa
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome da empresa"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Como podemos ajudar?
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte brevemente o que sua empresa precisa."
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact