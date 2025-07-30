export default function resume() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <p>Here is my resume.</p>
      {/* Add your resume details here */}
      <a
  href="/resume.pdf"
  download
  className="bg-slate-900 hover:bg-sky-400 text-white px-4 py-2 rounded shadow mb-6 mt-2 transition hover:shadow-lg"
>
  Download Resume
</a>

    </main>
  );
}
