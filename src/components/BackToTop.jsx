import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      className="fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-slate-300 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <ArrowUp size={19} />
    </button>
  )
}

export default BackToTop