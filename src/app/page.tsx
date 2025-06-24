"use client";
import resumeData from "@/data/resumeData";
import Link from "next/link";
import Planet from "@/components/Planet";
import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg animate-fade-in">
          Hi, I&apos;m <span className="text-indigo-400">{resumeData.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-indigo-200 mb-8 animate-fade-in delay-200">
          Software Engineer & Space Enthusiast
        </p>
        <div className="flex gap-4 justify-center mb-8 animate-fade-in delay-400">
          <a href={`mailto:${resumeData.email}`} className="hover:underline">Email</a>
          <a href={`https://github.com/${resumeData.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href={`https://linkedin.com/in/${resumeData.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="https://app.astrobin.com/u/celestial21#gallery" target="_blank" rel="noopener noreferrer" className="hover:underline">AstroBin</a>
        </div>
        {/* Animated Planets */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-planet-orbit" style={{zIndex:0}}>
          <Planet size={64} variant="ring" style={{ filter: "drop-shadow(0 0 16px #7dd3fc)" }} />
        </div>
        <div className="absolute right-0 top-1/3 animate-planet-orbit2 cursor-pointer group" style={{zIndex:0}} onClick={() => window.open("https://www.abbyarce.com", "_blank") } title="Easter Egg!">
          <Planet size={48} variant="crater" style={{ filter: "drop-shadow(0 0 12px #f472b6)", transition: 'transform 0.2s' }} />
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs text-pink-300 opacity-0 group-hover:opacity-100 transition">Easter Egg!</span>
        </div>
        <div className="absolute left-1/4 bottom-0 animate-planet-orbit3" style={{zIndex:0}}>
          <Planet size={40} variant="stripe" style={{ filter: "drop-shadow(0 0 8px #a3e635)" }} />
        </div>
      </section>
      {/* Navigation */}
      <nav className="flex gap-6 mt-8 animate-fade-in delay-600">
        <Link href="#about" className="hover:text-indigo-400">About</Link>
        <Link href="#experience" className="hover:text-indigo-400">Experience</Link>
        <Link href="#projects" className="hover:text-indigo-400">Projects</Link>
        <Link href="#skills" className="hover:text-indigo-400">Skills</Link>
        <Link href="#contact" className="hover:text-indigo-400">Contact</Link>
      </nav>
      {/* Sections */}
      <div className="mt-24 space-y-24">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
      {/* Contact Me at the bottom */}
      <footer className="mt-24 flex flex-col items-center gap-2 pb-8 animate-fade-in">
        <h3 className="text-lg font-bold text-indigo-200 mb-1">Contact Me</h3>
        <a href="mailto:pranavnair65@gmail.com" className="text-indigo-300 hover:underline text-base bg-indigo-900/60 px-4 py-2 rounded-full border border-indigo-500/40 shadow-lg transition">pranavnair65@gmail.com</a>
      </footer>
    </main>
  );
}
