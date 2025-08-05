import Image from "next/image";
import Link from "next/link";

export default function About() {
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
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p>
        Enthusiastic MCA student with strong MERN stack skills and hands-on project experience. Seeking an entry-level software development role where I can contribute to full-stack applications and continue growing as a developer. Skilled in building full-stack applications and deploying them on cloud platforms. Seeking to join a tech-driven company where I can expand my skill set and contribute to impactful projects.
      </p>
      <p className="mt-4">
        In my free time, I love exploring new technologies and contributing to open-source projects.
      </p>
      <p>
        I am a quick learner and always eager to take on new challenges.
      </p>


      <h1 className="text-2xl font-bold mb-4">Education</h1>
      <ul className="list-disc list-inside">
  <li>MCA from United School of Business Management.</li>
  <li>Bachelor of Science in Physics from Utkal University.</li>
  <li>Intermediate in Science from Chitroptola Higher Secondary School.</li>
  <li>Matriculation From Nadiabarai Nodal High School.</li>
</ul>
      <Image
              src="/cv.jpg"
              alt="Malhar Prasad Ray"
              width={200}
              height={200}
              className="display-flex mx-auto mb-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-5"
            />
      <h1 className="text-2xl font-bold mb-4">Interests</h1>
      <ul className="list-disc list-inside">
        <li>Singing</li>
        <li>Explore new locations & technologies</li>
        <li>Bike riding</li>
        <li>Photography</li>
      </ul>
    </main>
  );
}