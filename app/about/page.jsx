'use client';
import Image from "next/image";

export default function About() {
  return (
    <main className="relative min-h-screen text-white p-6 pt-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#020617] to-[#0a0a0a] z-[-2]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full -top-40 right-10 z-[-1]" />

      <h1 className="text-center text-4xl sm:text-5xl font-extrabold mb-12 bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
        About Me
      </h1>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Profile Image */}
        <Image
          src="/cv.jpg"
          alt="Profile"
          width={260}
          height={260}
          className="rounded-2xl shadow-[0_0_40px_#7dd3fc60] hover:scale-105 transition-all duration-500"
        />

        {/* Bio */}
        <div className="text-gray-300 leading-relaxed space-y-6">
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
            When I'm not coding, you'll find me exploring design trends, refining ideas,
            and constantly learning new technologies.
          </p>

          <p>
            I also like to sing and explore old classic songs in my free time, which helps me stay creative and inspired.
          </p>

          <p className="text-sky-300 font-semibold text-lg">
            My mission: Build clean, powerful, and futuristic digital products.
          </p>
        </div>
      </div>
    </main>
  );
}
