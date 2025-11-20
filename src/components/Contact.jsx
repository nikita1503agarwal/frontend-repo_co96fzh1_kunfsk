import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')
    if (!name || !email || !message) {
      setStatus('Fill the form properly.')
      return
    }
    setStatus('Got it. I’ll reply if it’s worth it.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Contact</h2>
            <div className="flex items-center gap-3 text-white/80">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Github size={18} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin size={18} /></a>
              <a href="mailto:hello@example.com" className="hover:text-white"><Mail size={18} /></a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
            <input name="name" placeholder="Name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-orange-400/50" />
            <input name="email" placeholder="Email" type="email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-orange-400/50" />
            <textarea name="message" placeholder="Message" rows="4" className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-orange-400/50"></textarea>
            <div className="md:col-span-2 flex items-center justify-between">
              <p className="text-sm text-white/60">Short and clear works best.</p>
              <button className="inline-flex items-center rounded-xl border border-orange-500/40 bg-orange-500/10 px-5 py-2.5 text-orange-300 hover:text-white hover:bg-orange-500/20 transition">Send</button>
            </div>
          </form>

          {status && <p className="mt-4 text-sm text-white/70">{status}</p>}
        </div>
      </div>
    </section>
  )
}
