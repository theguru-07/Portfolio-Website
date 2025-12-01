'use client';

const skills = [
  { label: "HTML", level: 95 },
  { label: "CSS & Tailwind", level: 90 },
  { label: "JavaScript", level: 85 },
  { label: "React / Next.js", level: 88 },
  { label: "Node.js / Express", level: 80 },
  { label: "MongoDB", level: 78 },
];

export default function Skills() {
  return (
    <main className="relative min-h-screen p-6 pt-24 text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#020617] to-[#0a0a0a] z-[-2]" />
      <div className="absolute w-[500px] h-[500px] bg-emerald-500/25 blur-[150px] rounded-full -top-24 right-10 z-[-1]" />

      <h1 className="text-center text-4xl sm:text-5xl font-extrabold mb-12 
                     bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
        Skills
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {skills.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="text-lg text-gray-300">{s.label}</span>
              <span className="text-sky-300">{s.level}%</span>
            </div>

            <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
              <div
                style={{ width: `${s.level}%` }}
                className="h-3 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
