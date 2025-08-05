export default function Projects() {
  return (
    <main className="p-8">
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
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p>Here are some of my projects.</p>
        <div className="bg-slate-900 border-1 p-6 rounded-xl shadow-md hover:shadow-slate-800 transition mb-6">
          <h2 className="text-2xl font-semibold mb-2">Personal Portfolio</h2>
          <p className="text-sky-400 mb-2">A personal portfolio website built with Next.js and Tailwind CSS.</p>
          <a href="https://github.com/theguru-07/portfolio-website" target="_blank" className="text-white hover:underline">View on GitHub</a>
        </div>

         <div className="bg-slate-900 border-1 p-6 rounded-xl shadow-md hover:shadow-slate-800 transition mb-6">
          <h2 className="text-2xl font-semibold mb-2">VoiceBuddy</h2>
          <p className="text-sky-400 mb-2">Voice-controlled productivity app using React and Web Speech API.</p>
          <a href="https://github.com/theguru-07/voicebuddy" target="_blank" className="text-white hover:underline">View on GitHub</a>
        </div>

        <div className="bg-slate-900 border-1 p-6 rounded-xl shadow-md hover:shadow-slate-800 transition mb-6">
          <h2 className="text-2xl font-semibold mb-2">DevConnect</h2>
          <p className="text-sky-400 mb-2">A social media app for developers built with MERN stack.</p>
          <a href="https://github.com/theguru-07/devconnect" target="_blank" className="text-white hover:underline">View on GitHub</a>
        </div>
        <div className="bg-slate-900 border-1 p-6 rounded-xl shadow-md hover:shadow-slate-800 transition mb-6">
          <h2 className="text-2xl font-semibold mb-2">Rido- Next Gen Ride Booking App.</h2>
          <p className="text-sky-400 mb-2">A ride booking app built with Next.js and Tailwind CSS.</p>
          <a href="https://github.com/theguru-07/rido" target="_blank" className="text-white hover:underline">View on GitHub</a>
        </div>
        
    </main>
  );
}