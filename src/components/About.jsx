import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">
          <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-2xl md:text-3xl font-semibold text-white">About me</motion.h2>
          <motion.p initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.5}} className="mt-4 text-white/80 max-w-3xl">
            I like building things that move, blink, and actually work. Into problem‑solving, robotics, code, ESP32/embedded tinkering, and weird tech experiments. If it involves sensors, motors, or making data look good, I’m probably in.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
