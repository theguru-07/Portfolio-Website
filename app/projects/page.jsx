'use client';

import { motion } from 'framer-motion';

// ✅ #3 — Real project data with tech tags and actual links
const projects = [
  {
    title: 'Personal Portfolio',
    desc: 'Showcase of my work and skills as a developer. Built with Next.js and Tailwind CSS, featuring projects, timeline, and contact info.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'Vercel'],
    github: 'https://github.com/theguru-07',
    live: 'https://portfolio-website-rho-nine-75.vercel.app/',
    color: 'rose',
    badge: 'Personal',
  },
  {
    title: 'DevPulse — AI PR Reviewer',
    desc: 'AI-powered GitHub PR code review assistant using Cloudflare Workers, D1, KV, and the Claude API. Webhook pipeline with structured review output.',
    tags: ['Cloudflare Workers', 'Claude API', 'Next.js', 'GitHub OAuth'],
    github: 'https://github.com/theguru-07',
    live: '#',
    color: 'sky',
    badge: 'AI',
  },
  {
    title: 'HireNova — AI Hiring Assistant',
    desc: 'Full-stack AI hiring platform with Next.js frontend, Cloudflare Workers/Hono backend, Google and GitHub OAuth, and D1 for session management.',
    tags: ['Next.js', 'Hono', 'Cloudflare D1', 'OAuth'],
    github: 'https://github.com/theguru-07',
    live: 'https://hirepro.malharprasadray.workers.dev/',
    color: 'purple',
    badge: 'SaaS',
  },
  
  
  {
    title: 'Rivaaz — E-Commerce Platform',
    desc: 'Full-stack MERN e-commerce site with product management, cart system, and payment integration.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/theguru-07',
    live: 'https://rivaaz.vercel.app/',
    color: 'amber',
    badge: 'MERN',
  },
  {
    title: 'NESTIGOO — Hotel Booking',
    desc: 'Team-built hotel booking platform. Full academic project with search, booking flow, and admin panel.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/theguru-07',
    live: 'https://nestigo-hotel.vercel.app/',
    color: 'indigo',
    badge: 'Team',
  },
];

const colorMap = {
  sky: {
    glow: 'hover:shadow-[0_0_30px_#0ea5e930]',
    badge: 'bg-sky-500/20 text-sky-300 border border-sky-500/30',
    title: 'text-sky-300',
    dot: 'bg-sky-400',
  },
  purple: {
    glow: 'hover:shadow-[0_0_30px_#a855f730]',
    badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    title: 'text-purple-300',
    dot: 'bg-purple-400',
  },
  emerald: {
    glow: 'hover:shadow-[0_0_30px_#10b98130]',
    badge: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    title: 'text-emerald-300',
    dot: 'bg-emerald-400',
  },
  rose: {
    glow: 'hover:shadow-[0_0_30px_#f43f5e30]',
    badge: 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
    title: 'text-rose-300',
    dot: 'bg-rose-400',
  },
  amber: {
    glow: 'hover:shadow-[0_0_30px_#f59e0b30]',
    badge: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    title: 'text-amber-300',
    dot: 'bg-amber-400',
  },
  indigo: {
    glow: 'hover:shadow-[0_0_30px_#6366f130]',
    badge: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    title: 'text-indigo-300',
    dot: 'bg-indigo-400',
  },
};

export default function Projects() {
  return (
    <main className="relative min-h-screen text-white p-6 pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#020617] to-[#0a0a0a] z-[-2]" />
      <div className="absolute w-[450px] h-[450px] bg-sky-500/30 blur-[140px] rounded-full -bottom-20 left-10 z-[-1]" />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-12 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h1>

      {/* ✅ #7 — Cards with tech stack tags + GitHub + Live Demo buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => {
          const c = colorMap[p.color];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`p-6 border border-white/10 bg-white/5 rounded-xl backdrop-blur-xl hover:scale-[1.03] transition-all duration-300 hover:bg-white/10 ${c.glow} flex flex-col gap-4`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2">
                <h2 className={`text-xl font-semibold ${c.title} leading-snug`}>{p.title}</h2>
                <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-mono ${c.badge}`}>
                  {p.badge}
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed flex-1">{p.desc}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/8 border border-white/10 text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-1">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-xs py-2 rounded-lg border border-white/20 text-gray-300 hover:bg-white/10 transition font-medium"
                >
                  GitHub ↗
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center text-xs py-2 rounded-lg ${c.badge} hover:opacity-90 transition font-medium`}
                >
                  Live Demo ↗
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
