export default function skills() {
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
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <p>Here are some of my skills.</p>
      {/* Add your skills here */}
      <section className="p-8 bg-slate-900 rounded-xl my-10">
  <h2 className="text-3xl font-bold mb-6">My Skills</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="bg-sky-400 p-4 rounded shadow text-center">CSS</div>
    <div className="bg-sky-400 p-4 rounded shadow text-center">HTML</div>
    <div className="bg-sky-400 p-4 rounded shadow text-center">JavaScript</div>
    <div className="bg-sky-400 p-4 rounded shadow text-center">React.js</div>
    <div className="bg-sky-400 p-4 rounded shadow text-center">Node.js</div>
    <div className="bg-sky-400 p-4 rounded shadow text-center">Express.js</div>
    <div className="bg-sky-400 p-4 rounded shadow text-center">MongoDB</div>
    <div className="bg-sky-400 p-4 rounded shadow text-center">Git & GitHub</div>
  </div>
</section>

    </main>
  );
}