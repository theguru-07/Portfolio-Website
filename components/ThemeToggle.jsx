'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const isDark = stored ? stored === 'dark' : true;
    setDark(isDark);
    document.documentElement.classList.toggle('light-mode', !isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    document.documentElement.classList.toggle('light-mode', !next);
  };

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      className="fixed top-4 right-4 z-[60] md:hidden w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center text-lg hover:bg-white/20 transition"
      aria-label="Toggle theme"
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? '🌙' : '☀️'}
    </motion.button>
  );
}

// ── For desktop, add it inside Navbar or wherever.
// ── This version is the standalone floating fallback for mobile.
