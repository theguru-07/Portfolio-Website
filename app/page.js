'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "theguru-07 | Portfolio";
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full text-white p-4 sm:p-8 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Profile Image */}
      <Img
        src="/cv.jpg"
        alt="Profile"
        width={200}
        height={200}
        className="rounded-full shadow-lg mx-auto mb-6 object-cover hover:scale-105 hover:rotate-3 transition-transform duration-300"
      />

      {/* Name & Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2">Hi, I'm <span className="text-sky-400">Malhar Prasad Ray</span></h1>
      <h2 className="text-lg sm:text-xl md:text-2xl text-yellow-400 mb-4 text-center">Web Developer | MERN Stack Enthusiast</h2>

      {/* Short Description */}
      <p className="text-sm sm:text-base md:text-lg text-center max-w-2xl mb-8">
        Passionate about building beautiful, responsive websites and full-stack web applications using the MERN stack.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 text-center">
        <a href="/about" className="bg-rose-500 text-white px-5 py-2 rounded hover:bg-rose-600 transition-colors">About</a>
        <a href="/projects" className="bg-sky-500 text-white px-5 py-2 rounded hover:bg-sky-600 transition-colors">Projects</a>
        <a href="/skills" className="bg-emerald-500 text-white px-5 py-2 rounded hover:bg-emerald-600 transition-colors">Skills</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-purple-500 text-white px-5 py-2 rounded hover:bg-purple-600 transition-colors">Resume</a>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-wrap justify-center gap-6 text-center">
        <a href="https://github.com/theguru-07" className="flex items-center gap-2 text-white hover:text-sky-400 transition-transform hover:scale-110">
          <img src="/github-logo.png" alt="GitHub" className="w-6 h-6" />
          GitHub
        </a>
        <a href="https://linkedin.com/in/theguru-07" className="flex items-center gap-2 text-white hover:text-blue-400 transition-transform hover:scale-110">
          <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          LinkedIn
        </a>
        <a href="https://instagram.com/theguru_07" className="flex items-center gap-2 text-white hover:text-pink-400 transition-transform hover:scale-110">
          <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
          Instagram
        </a>
      </div>
    </main>
  );
}
