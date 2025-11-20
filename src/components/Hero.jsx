import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onProjects }) {
  return (
    <section className="relative pt-28 md:pt-32" id="hero">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,115,0,0.2)]"
            >
              Mathin
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg md:text-xl text-white/80 max-w-xl"
            >
              CS & Engineering dude who builds cool stuff.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <button onClick={onProjects} className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-orange-500/40 bg-orange-500/10 px-5 py-2.5 text-orange-300 hover:text-white hover:bg-orange-500/20 transition">
                View Projects
              </button>
              <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-white/80 hover:text-white hover:bg-white/10 transition">
                Contact
              </a>
            </motion.div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  )
}
