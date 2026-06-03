'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// ✅ #9 — Timeline data
const timeline = [
  {
    year: '2025',
    title: 'Full Stack Developer (Freelance)',
    desc: 'Building production-grade SaaS platforms — Visitor Access Management System, DevPulse AI code review, HirePRO AI hiring assistant.',
    color: 'sky',
  },
  {
    year: 'Nov 2025 - Apr 2026',
    title: 'Member Of Technical Staff (Trainee) — Codemate AI',
    desc: 'Worked on real-world web applications using React and Node.js. Contributed to product features and UI improvements.',
    color: 'purple',
  },
  {
    year: '2024–2026',
    title: 'MCA — Master of Computer Applications',
    desc: 'Completed post-graduation with focus on software engineering, databases, and full-stack development.',
    color: 'emerald',
  },
  {
    year: '2020–2023',
    title: 'B.sc - Physics',
    desc: 'Developed strong analytical and problem-solving abilities through the study of physics and mathematics.\nGained experience in scientific research, data analysis, and experimental methodologies',
    color: 'rose',
  },
];

const colorMap = {
  sky: 'border-sky-400 shadow-[0_0_12px_#0ea5e940] text-sky-400',
  purple: 'border-purple-400 shadow-[0_0_12px_#a855f740] text-purple-400',
  emerald: 'border-emerald-400 shadow-[0_0_12px_#10b98140] text-emerald-400',
  rose: 'border-rose-400 shadow-[0_0_12px_#f43f5e40] text-rose-400',
};

export default function About() {
  return (
    <main className="relative min-h-screen text-white p-6 pt-28 pb-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#020617] to-[#0a0a0a] z-[-2]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full -top-40 right-10 z-[-1]" />
      <div className="absolute w-[400px] h-[400px] bg-sky-600/20 blur-[100px] rounded-full bottom-20 left-0 z-[-1]" />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-14 bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent"
      >
        About Me
      </motion.h1>

      {/* Bio section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20">

        {/* ✅ Profile image — rounded-full to match homepage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <Image
            src="/profile.jpg"
            alt="Malhar Prasad Ray"
            width={220}
            height={220}
            className="rounded-full shadow-[0_0_40px_#7dd3fc60] hover:scale-105 transition-all duration-500"
          />
        </motion.div>

        {/* Bio text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 leading-relaxed space-y-5"
        >
          <p className="text-lg">
            I'm <span className="text-sky-400 font-semibold">Malhar Prasad Ray</span>,
            a passionate developer who loves building modern and futuristic web experiences.
          </p>
          <p>
            My primary focus is on the
            <span className="text-purple-400 font-semibold"> MERN Stack </span>
            and <span className="text-sky-400 font-semibold">Next.js</span>.
            I enjoy blending functionality with smooth UI/UX to create immersive websites.
          </p>
          <p>
            Beyond web dev, I explore <span className="text-emerald-400 font-semibold">AI integration</span> —
            building tools like DevPulse (AI PR reviewer) and AI Hiring Assistant using the Anthropic Claude API.
          </p>
          <p>
            When I'm not coding, you'll find me exploring design trends, singing old classic songs,
            and constantly learning new technologies.
          </p>
          <p className="text-sky-300 font-semibold text-lg">
            Mission: Build clean, powerful, and futuristic digital products.
          </p>

          {/* ✅ #10 — Resume download on About page */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold hover:scale-105 transition-all shadow-[0_0_20px_#0ea5e940] text-sm"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 1v9M4 7l4 4 4-4M2 14h12" />
              </svg>
              Download Resume
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-purple-400/50 text-purple-300 hover:bg-purple-400/10 transition text-sm font-semibold"
            >
              Hire Me →
            </a>
          </div>
        </motion.div>
      </div>

      {/* ✅ #9 — Experience / Education Timeline */}
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-10 text-center bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent"
        >
          Experience & Education
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/60 via-purple-500/40 to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-16"
              >
                {/* Circle dot */}
                <div className={`absolute left-[18px] top-1.5 w-4 h-4 rounded-full border-2 bg-black ${colorMap[item.color]}`} />

                <span className={`text-xs font-mono font-bold ${colorMap[item.color].split(' ').at(-1)} mb-1 block`}>
                  {item.year}
                </span>
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
