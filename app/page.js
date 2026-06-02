'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import BackgroundVideo from '@/components/BackgroundVideo';
import ParticleBackground from '@/components/ParticleBackground';
import TypewriterText from '@/components/TypewriterText';

export default function Home() {
  useEffect(() => {
    document.title = 'theguru-07 | Portfolio';
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full text-white p-6 overflow-hidden">
      <BackgroundVideo />
      <ParticleBackground />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20
          bg-[linear-gradient(#ffffff1a_1px,transparent_1px),linear-gradient(90deg,#ffffff1a_1px,transparent_1px)]
          bg-size-[40px_40px] z-[-1]" />

      {/* Neon Glow Orbs */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-indigo-600/40 blur-3xl rounded-full z-[-1]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-600/40 blur-3xl rounded-full z-[-1]" />

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/cv.jpg"
          alt="Malhar Prasad Ray"
          width={200}
          height={200}
          className="rounded-full shadow-[0_0_40px_rgba(56,189,248,0.8)] mb-6
          hover:scale-110 transition-transform duration-300"
          priority
        />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
      >
        <span className="text-sky-400 drop-shadow">Malhar Prasad Ray</span>
      </motion.h1>

      {/* ✅ #6 — Typewriter subtitle */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="text-lg sm:text-xl md:text-2xl mt-2 mb-4 text-center min-h-[2rem]"
      >
        <TypewriterText />
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="text-center max-w-2xl mb-8 text-gray-200 text-sm sm:text-base md:text-lg"
      >
        I build dynamic, futuristic, and high-performance web applications using
        the MERN stack and modern UI frameworks. Always experimenting, always creating.
      </motion.p>

      {/* Nav Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="flex flex-wrap justify-center gap-4 mb-6"
      >
        <a href="/about" className="px-6 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 transition-all shadow-lg">About</a>
        <a href="/projects" className="px-6 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 transition-all shadow-lg">Projects</a>
        <a href="/skills" className="px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg">Skills</a>
        <a href="/contact" className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all shadow-lg">Contact</a>
      </motion.div>

      {/* ✅ #10 — Resume Download CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold hover:scale-105 transition-all shadow-[0_0_20px_#0ea5e940]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 1v9M4 7l4 4 4-4M2 14h12" />
          </svg>
          Download Resume
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="flex gap-8 text-center"
      >
        <a href="https://github.com/theguru-07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-125 transition-transform">
          <img src="/github-logo.png" className="w-6 h-6" alt="GitHub" /> GitHub
        </a>
        <a href="https://linkedin.com/in/theguru-07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-125 transition-transform">
          <img src="/linkedin.png" className="w-6 h-6" alt="LinkedIn" /> LinkedIn
        </a>
        <a href="https://www.instagram.com/_encore____/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-125 transition-transform">
          <img src="/instagram.png" className="w-6 h-6" alt="Instagram" /> Instagram
        </a>
      </motion.div>
    </main>
  );
}
