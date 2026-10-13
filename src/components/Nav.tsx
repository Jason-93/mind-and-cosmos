import { useEffect, useState } from 'react'
import { Orbit, Menu, X } from 'lucide-react'

const LINKS = [
  { id: 'map', label: '导读' },
  { id: 'philosophy', label: '哲学与宗教' },
  { id: 'mindbody', label: '身心一元二元' },
  { id: 'neuro', label: '神经科学' },
  { id: 'physics', label: '物理前沿' },
  { id: 'cosmos', label: '宇宙起源' },
  { id: 'finale', label: '结语' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      let current = ''
      for (const l of LINKS) {
        const el = document.getElementById(l.id)
        if (el && el.getBoundingClientRect().top <= 120) current = l.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-[#060a16]/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <Orbit className="h-6 w-6 text-violet-300" />
          <span className="font-serif-sc text-lg font-bold tracking-wide">心物宇宙</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                active === l.id ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          className="text-slate-300 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="打开菜单"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-[#060a16]/95 px-5 py-3 backdrop-blur-md md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
