import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Line‑Following Robot v2',
    desc: 'PID‑tuned line follower with swappable sensor array and quick‑calibrate routine. Hit stable high‑speed on tight curves.',
    stack: ['ESP32', 'PID', 'C++', '3D‑printed'],
    img: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'ESP32 Sensor Hub',
    desc: 'Modular sensor hub streaming to a web dashboard. OTA updates, deep sleep profiles, and MQTT alerts.',
    stack: ['ESP32', 'MQTT', 'MicroPython', 'InfluxDB'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Heatmap Visualizer',
    desc: 'Web‑based heatmaps for lab data with smooth time scrubbing and custom color ramps. Built for quick insights.',
    stack: ['React', 'D3', 'Vite'],
    img: 'https://images.unsplash.com/photo-1551281044-8d8e8422b8f9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Automation Rig',
    desc: 'Tiny gantry rig for repeatable testing. Stepper control, limit switches, and serial command set. CAD + firmware.',
    stack: ['Fusion 360', 'Arduino', 'CAD', 'Stepper'],
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Projects</h2>
          <p className="text-sm text-white/60">Selected builds and experiments</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{opacity:0,y:8}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:i*0.05, duration:0.5}}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span key={s} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">{s}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
