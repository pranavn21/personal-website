"use client";
import resumeData from "@/data/resumeData";
import Link from "next/link";
import Planet from "@/components/Planet";
import About from "./about";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-6 w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg animate-fade-in">
          Hi, I&apos;m <span className="text-indigo-400">{resumeData.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-indigo-200 mb-8 animate-fade-in delay-200">
          Software Engineer & Space Enthusiast
        </p>
        {/* Animated Planets */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-planet-orbit" style={{zIndex:0}}>
          <Planet size={64} variant="ring" style={{ filter: "drop-shadow(0 0 16px #7dd3fc)" }} />
        </div>
        <div className="absolute right-0 top-1/3 animate-planet-orbit2 cursor-pointer group" style={{zIndex:0}} onClick={() => window.open("https://www.abby-arce.com/", "_blank") } title="Easter Egg!">
          <Planet size={48} variant="crater" style={{ filter: "drop-shadow(0 0 12px #f472b6)", transition: 'transform 0.2s' }} />
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs text-pink-300 opacity-0 group-hover:opacity-100 transition">Easter Egg!</span>
        </div>
        <div className="absolute left-1/4 bottom-0 animate-planet-orbit3" style={{zIndex:0}}>
          <Planet size={40} variant="stripe" style={{ filter: "drop-shadow(0 0 8px #a3e635)" }} />
        </div>
      </section>
      {/* About Section */}
      <div className="mt-4">
        <About />
      </div>
    </main>
  );
}
