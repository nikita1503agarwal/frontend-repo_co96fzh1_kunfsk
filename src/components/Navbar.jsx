import { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react'

export default function Navbar({ onScrollTo, theme, setTheme }) {
  const [open, setOpen] = useState(false)

  // Close on resize
  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const items = [
    { key: 'projects', label: 'Projects' },
    { key: 'about', label: 'About' },
    { key: 'skills', label: 'Skills' },
    { key: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 shadow-[0_0_30px_rgba(251,146,60,0.6)]" />
            <span className="font-semibold tracking-tight text-white">Mathin</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {items.map((it) => (
              <button
                key={it.key}
                onClick={() => onScrollTo(it.key)}
                className="text-white/80 hover:text-white transition-colors"
              >
                {it.label}
              </button>
            ))}
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="#contact" onClick={(e)=>{e.preventDefault(); onScrollTo('contact')}} className="text-white/80 hover:text-white">
              <Mail size={18} />
            </a>
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white/80 hover:text-white"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 md:hidden">
            <div className="grid gap-2">
              {items.map((it) => (
                <button
                  key={it.key}
                  onClick={() => { onScrollTo(it.key); setOpen(false) }}
                  className="rounded-lg px-3 py-2 text-left text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {it.label}
                </button>
              ))}
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Github size={18} /></a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Linkedin size={18} /></a>
                  <a href="#contact" onClick={(e)=>{e.preventDefault(); onScrollTo('contact'); setOpen(false)}} className="text-white/80 hover:text-white"><Mail size={18} /></a>
                </div>
                <button
                  aria-label="Toggle theme"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white/80 hover:text-white"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
