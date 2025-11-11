import { motion } from 'framer-motion'
import { Trophy, Code, Mail, Github, Linkedin, MapPin, GraduationCap, ExternalLink } from 'lucide-react'

function PitchBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Grass */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900" />
      {/* Subtle grass texture lines */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />
      {/* Pitch markings */}
      <svg className="absolute inset-6 rounded-2xl w-[calc(100%-3rem)] h-[calc(100%-3rem)]" viewBox="0 0 100 100">
        <rect x="1" y="1" width="98" height="98" rx="6" ry="6" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="0.7"/>
        {/* Halfway line */}
        <line x1="50" y1="1" x2="50" y2="99" stroke="white" strokeOpacity="0.5" strokeWidth="0.6" />
        {/* Center circle */}
        <circle cx="50" cy="50" r="10" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="0.6" />
        <circle cx="50" cy="50" r="0.8" fill="white" fillOpacity="0.8" />
        {/* Penalty areas */}
        <rect x="1" y="30" width="16" height="40" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="0.6" />
        <rect x="83" y="30" width="16" height="40" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="0.6" />
        {/* Goal boxes */}
        <rect x="1" y="40" width="6" height="20" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="0.6" />
        <rect x="93" y="40" width="6" height="20" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="0.6" />
        {/* Penalty spots */}
        <circle cx="13" cy="50" r="0.8" fill="white" fillOpacity="0.8" />
        <circle cx="87" cy="50" r="0.8" fill="white" fillOpacity="0.8" />
        {/* Arcs (approx) */}
        <path d="M16 50 a10 10 0 0 0 10 10" fill="none" stroke="white" strokeOpacity="0.35" strokeWidth="0.6" />
        <path d="M84 50 a-10 10 0 0 0 -10 10" fill="none" stroke="white" strokeOpacity="0.35" strokeWidth="0.6" />
      </svg>
    </div>
  )
}

const projects = [
  {
    title: 'Match Insights Dashboard',
    description: 'Interactive analytics for match stats, xG charts, and player heatmaps.',
    tech: ['React', 'D3.js', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Team Tactics Visualizer',
    description: 'Animate formations and passing networks to explore strategies.',
    tech: ['Framer Motion', 'Vite', 'Lucide'],
    link: '#'
  },
  {
    title: 'Training Planner',
    description: 'Plan drills, track progress, and schedule weekly sessions.',
    tech: ['FastAPI', 'MongoDB', 'React'],
    link: '#'
  }
]

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-700/40 text-emerald-100 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
      {children}
    </span>
  )
}

function Header() {
  return (
    <header className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-6 pt-16"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-200">
              <Trophy className="h-4 w-4" />
              <span className="text-xs uppercase tracking-widest">Football-inspired Portfolio</span>
            </div>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">
              Suraj
            </h1>
            <p className="mt-3 max-w-xl text-emerald-100/90">
              Frontend-focused developer crafting smooth interactions and data-rich UIs. I turn ideas into clean, fast, and responsive experiences.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Chip>UI Engineering</Chip>
              <Chip>Animations</Chip>
              <Chip>Data Viz</Chip>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 w-full md:w-auto">
            {[0,1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className="aspect-square rounded-md bg-emerald-700/30 ring-1 ring-white/15 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white/80" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-emerald-100/90">
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/><span>India</span></div>
          <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4"/><span>ABES Engineering College</span></div>
        </div>
      </motion.div>
    </header>
  )
}

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 mt-14">
      <div className="flex items-center gap-2 text-emerald-100/90">
        <Code className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Projects</h2>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-xl bg-emerald-800/40 p-5 ring-1 ring-white/15 hover:ring-white/30 transition"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-xl" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-100">{p.title}</h3>
                <p className="mt-2 text-sm text-emerald-100/90">{p.description}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-emerald-200 opacity-70 group-hover:opacity-100" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map(t => (
                <span key={t} className="text-xs text-emerald-50/90 bg-emerald-700/40 ring-1 ring-white/15 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 mt-16 mb-20">
      <div className="rounded-2xl bg-emerald-900/50 p-6 ring-1 ring-white/15">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Let’s build something great</h3>
            <p className="mt-2 text-emerald-100/90 max-w-xl">Open to internships, freelance, and collabs. I love turning complex ideas into smooth, user-first experiences—like a perfect through ball.</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-emerald-50 ring-1 ring-white/20 hover:bg-white/15 transition">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-emerald-50 ring-1 ring-white/20 hover:bg-white/15 transition">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-emerald-50 ring-1 ring-white/20 hover:bg-white/15 transition">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen text-emerald-50">
      <PitchBackground />

      <Header />
      <Projects />
      <Contact />

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-emerald-200/80">
        <p className="text-sm">© {new Date().getFullYear()} Suraj • Designed with a football theme</p>
      </footer>
    </div>
  )
}
