'use client';

const projects = [
  {
    title: "DevConnect- Social Network",
    desc: "Next.js + MongoDB app with real-time chat features.",
    link: "#",
  },
  {
    title: "AI Resume Builder",
    desc: "MERN + AI integration to auto-analyze resumes.",
    link: "#",
  },
  {
    title: "Jarvis — Voice Assistant",
    desc: "Voice input/output assistant built with Python + OpenAI APIs.",
    link: "#",
  },
  {
    title: "Rivaaz - E-Commerce Platform",
    desc: "Full-stack MERN e-commerce site with payment integration.",
    link: "#",
  },
  {
    title: "Rayva - AI Voice Assistant",
    desc: "AI-powered voice assistant built with Next.js + APIs.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with Next.js and Tailwind CSS.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <main className="relative min-h-screen text-white p-6 pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#020617] to-[#0a0a0a] z-[-2]" />
      <div className="absolute w-[450px] h-[450px] bg-sky-500/30 blur-[140px] rounded-full -bottom-20 left-10 z-[-1]" />

      <h1 className="text-center text-4xl sm:text-5xl font-extrabold mb-10 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <a
            href={p.link}
            key={i}
            className="p-6 border border-white/10 bg-white/5 rounded-xl backdrop-blur-xl hover:scale-105 transition-all duration-300 hover:bg-white/10 shadow-[0_0_25px_#7dd3fc20]"
          >
            <h2 className="text-2xl font-semibold text-sky-300 mb-2">{p.title}</h2>
            <p className="text-gray-300">{p.desc}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
