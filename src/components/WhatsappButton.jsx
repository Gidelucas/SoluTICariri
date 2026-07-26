import { MessageCircle } from 'lucide-react'
import { company } from '../data/company'

function WhatsappButton() {
const whatsappNumber = company.whatsapp

  const message =
    'Olá! Vim pelo site da SoluTI Cariri e gostaria de conversar sobre uma solução para minha empresa.'

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a SoluTI Cariri pelo WhatsApp"
      title="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-950"
    >
      <MessageCircle size={27} strokeWidth={2} />
    </a>
  )
}

export default WhatsappButton