import { useEffect, useMemo, useRef, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState('dark')
  const sections = {
    projects: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const onScrollTo = (key) => {
    const el = sections[key]?.current
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(600px_200px_at_10%_-10%,rgba(251,146,60,0.15),transparent),radial-gradient(700px_300px_at_90%_-20%,rgba(59,130,246,0.15),transparent)]" />

      <Navbar onScrollTo={onScrollTo} theme={theme} setTheme={setTheme} />

      <main className="relative">
        <Hero onProjects={() => onScrollTo('projects')} />

        <div ref={sections.about}>
          <About />
        </div>

        <div ref={sections.projects}>
          <Projects />
        </div>

        <div ref={sections.skills}>
          <Skills />
        </div>

        <div ref={sections.contact}>
          <Contact />
        </div>

        <footer className="py-10 text-center text-xs text-white/40">
          Built fast. No fluff.
        </footer>
      </main>
    </div>
  )
}

export default App
