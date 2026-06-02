'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// ✅ #5 — Updated skill list with TypeScript, Cloudflare, Next.js, AI
const skills = [
  { label: 'HTML & CSS', level: 95 },
  { label: 'Tailwind CSS', level: 92 },
  { label: 'JavaScript (ES2024)', level: 88 },
  { label: 'TypeScript', level: 82 },
  { label: 'React / Next.js 14', level: 90 },
  { label: 'Node.js / Express', level: 82 },
  { label: 'MongoDB / Mongoose', level: 80 },
  { label: 'Cloudflare Workers & D1', level: 78 },
  { label: 'Claude / Anthropic API', level: 75 },
  { label: 'REST API Design', level: 84 },
];

// ✅ #8 — Skill chip badges grid
const chipSkills = [
  { label: 'Next.js', color: 'bg-sky-500/20 text-sky-300 border-sky-500/30' },
  { label: 'React', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
  { label: 'TypeScript', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' },
  { label: 'Node.js', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  { label: 'MongoDB', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
  { label: 'Tailwind CSS', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
  { label: 'Cloudflare Workers', color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
  { label: 'Cloudflare D1', color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
  { label: 'Framer Motion', color: 'bg-pink-500/20 text-pink-300 border-pink-500/30' },
  { label: 'REST APIs', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
  { label: 'JWT Auth', color: 'bg-rose-500/20 text-rose-300 border-rose-500/30' },
  { label: 'Claude API', color: 'bg-violet-500/20 text-violet-300 border-violet-500/30' },
  { label: 'GitHub', color: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
  { label: 'Express.js', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
  { label: 'Hono', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
  { label: 'Vercel', color: 'bg-white/10 text-gray-200 border-white/20' },
  { label: 'Redux Toolkit', color: 'bg-purple-600/20 text-purple-300 border-purple-600/30' },
  { label: 'Twilio', color: 'bg-red-500/20 text-red-300 border-red-500/30' },
];

// ✅ #4 — Animated skill bar with useInView trigger
function AnimatedSkillBar({ label, level, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5 }}
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-base text-gray-300">{label}</span>
        <span className="text-sky-300 font-mono text-sm">{level}%</span>
      </div>
      <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: index * 0.07 + 0.2, duration: 0.8, ease: 'easeOut' }}
          className="h-2.5 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <main className="relative min-h-screen p-6 pt-28 pb-20 text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#020617] to-[#0a0a0a] z-[-2]" />
      <div className="absolute w-[500px] h-[500px] bg-emerald-500/25 blur-[150px] rounded-full -top-24 right-10 z-[-1]" />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-14
                   bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent"
      >
        Skills
      </motion.h1>

      {/* ✅ #4 — Animated progress bars (scroll-triggered) */}
      <div className="max-w-4xl mx-auto space-y-7 mb-16">
        {skills.map((s, i) => (
          <AnimatedSkillBar key={s.label} label={s.label} level={s.level} index={i} />
        ))}
      </div>

      {/* ✅ #8 — Skill chip badges with stagger animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-xl font-bold text-center text-gray-300 mb-6">Tech I Work With</h2>
        <div className="flex flex-wrap justify-center gap-2.5">
          {chipSkills.map((chip, i) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3, type: 'spring', stiffness: 300 }}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border ${chip.color} hover:scale-110 transition-transform cursor-default`}
            >
              {chip.label}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
