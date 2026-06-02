'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // ✅ #2 — Actually sends email via API route
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="relative min-h-screen p-6 pt-28 pb-20 text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#020617] to-[#0a0a0a] z-[-2]" />
      <div className="absolute w-[600px] h-[600px] bg-rose-500/30 blur-[150px] rounded-full -bottom-24 left-10 z-[-1]" />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-12
                   bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent"
      >
        Contact Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="max-w-xl mx-auto"
      >
        {status === 'sent' ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-emerald-400 mb-2">Message Sent!</h2>
            <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 px-6 py-2 rounded-lg border border-white/20 text-gray-300 hover:bg-white/10 transition text-sm"
            >
              Send another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl shadow-[0_0_30px_#f472b620] space-y-4"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none focus:border-sky-400 transition placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none focus:border-sky-400 transition placeholder-gray-500"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none focus:border-sky-400 transition resize-none placeholder-gray-500"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 bg-gradient-to-r from-rose-500 to-purple-600 rounded-lg font-semibold hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                    <path d="M12 2a10 10 0 0 1 10 10" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message →'
              )}
            </button>

            {status === 'error' && (
              <p className="text-red-400 text-center text-sm">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        )}

        {/* Direct contact links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <a href="mailto:malharprasadray@gmail.com" className="hover:text-white transition">
            📧 malharprasadray@gmail.com
          </a>
          <a href="https://github.com/theguru-07" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            GitHub ↗
          </a>
          <a href="https://linkedin.com/in/theguru-07" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            LinkedIn ↗
          </a>
        </div>
      </motion.div>
    </main>
  );
}
