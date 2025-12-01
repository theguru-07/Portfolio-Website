'use client';
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  return (
    <main className="relative min-h-screen p-6 pt-24 text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#020617] to-[#0a0a0a] z-[-2]" />
      <div className="absolute w-[600px] h-[600px] bg-rose-500/30 blur-[150px] rounded-full -bottom-24 left-10 z-[-1]" />

      <h1 className="text-center text-4xl sm:text-5xl font-extrabold mb-10 
                     bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
        Contact Me
      </h1>

      <form
        className="max-w-xl mx-auto bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl shadow-[0_0_30px_#f472b620]"
        onSubmit={(e) => {
          e.preventDefault();
          setStatus("Message sent successfully!");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 bg-white/10 border border-white/20 rounded-md text-white outline-none focus:border-sky-400"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 bg-white/10 border border-white/20 rounded-md text-white outline-none focus:border-sky-400"
          required
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 mb-4 bg-white/10 border border-white/20 rounded-md text-white outline-none focus:border-sky-400"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-rose-500 to-purple-600 rounded-md font-semibold hover:scale-105 transition-all"
        >
          Send Message
        </button>

        {status && (
          <p className="text-green-400 text-center mt-4">{status}</p>
        )}
      </form>
    </main>
  );
}
