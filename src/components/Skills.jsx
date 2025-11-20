import { Cpu, Code2, Settings, Boxes } from 'lucide-react'
import { motion } from 'framer-motion'

const skills = [
  { icon: Cpu, title: 'Programming', items: ['C/C++', 'Python', 'JavaScript', 'MicroPython'] },
  { icon: Settings, title: 'Hardware', items: ['ESP32', 'Arduino', 'Sensors', 'Motors', 'PID'] },
  { icon: Boxes, title: '3D CAD', items: ['Fusion 360', '3D printing basics', 'Rapid prototyping'] },
  { icon: Code2, title: 'Problem‑Solving', items: ['Debugging fast', 'Building minimal', 'Making it reliable'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{opacity:0,y:8}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:i*0.05, duration:0.5}}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <s.icon className="text-orange-400" size={20} />
                <h3 className="font-semibold text-white">{s.title}</h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-white/70">
                {s.items.map((it) => (<li key={it}>• {it}</li>))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
