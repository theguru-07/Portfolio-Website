import Image from "next/image";
import Link from "next/link"; 
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Malhar Prasad Ray - Portfolio</title>
        <meta name="description" content="Portfolio of Malhar Prasad Ray" />
      </Head>
      <main className="display-flex flex-col font-sans items-center justify-centers p-8 bg-slate-900">
        <div className="flex items-center gap-4 mb-8 bg-slate-800">

      <h1 className="text-4xl text-white font-bold px-4 py-2">Malhar Prasad Ray</h1>
       <Link href="/projects">
        <button className="bg-slate-900 text-sky-400 px-4 py-2 rounded hover:bg-slate-800 transition">
          Projects
        </button>
      </Link>
      <Link href="/about">
        <button className="bg-slate-900 text-sky-400 px-4 py-2 rounded hover:bg-slate-800 transition">
          About
        </button>
      </Link>
      <Link href="/skills">
        <button className="bg-slate-900 text-sky-400 px-4 py-2 rounded hover:bg-slate-800 transition">
          Skills
        </button>
      </Link>
      <Link href="/resume">
        <button className="bg-slate-900 text-sky-400 px-4 py-2 rounded hover:bg-slate-800 transition">
          Resume
        </button>
      </Link>
      </div>
      <h2 className="text-2xl mb-4 text-yellow-400">Turning ideas into interactive realities.</h2>
      <p className="text-lg mb-6">
         — a creator at heart and a developer by choice. transforming concepts into scalable apps.
      </p>
      <Image
        src="/cv.jpg"
        alt="Malhar Prasad Ray"
        width={200}
        height={200}
        className="display-flex rounded-full mx-auto mb-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-5"
      />

      <div className="gap-4 mb-8 text-center">
      <a href="https://www.instagram.com/_encore____/" className="text-sky-400 text-bg-slate-900 px-0 py-0 ml-2 rounded transition justify-center">
        Instagram.
      </a>
      <a href="https://www.linkedin.com/in/malhar-prasad-ray-063457302/" className="text-sky-400 text-bg-slate-900 px-0 py-0 ml-2 rounded transition justify-center">
        LinkedIn.
      </a>
      <a href="https://x.com/PrasadMalhar" className="text-sky-400 text-bg-slate-900 px-0 py-0 ml-2 rounded transition justify-center">
        X.
      </a>
      <a href="https://github.com/theguru-07" className="text-sky-400 text-bg-slate-900 px-0 py-0 ml-2 rounded transition  justify-center">
        GitHub.
      </a>
      </div>
      <Link href="/footer">
        <button className=" text-white px-0 py-0 rounded transition ml-200 justify-center">
          Malhar Prasad Ray . all rights reserved.
        </button>
      </Link>
    </main>
    </>
  );
}
