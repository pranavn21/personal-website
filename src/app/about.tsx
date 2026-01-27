"use client";
import { useEffect, useRef, useState } from "react";
import resumeData from "@/data/resumeData";

export default function About() {
  const edu = resumeData.education[0];
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [activeElement, setActiveElement] = useState<'text' | 'image'>('text');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      if (textRef.current && imageRef.current) {
        const textRect = textRef.current.getBoundingClientRect();
        const imageRect = imageRef.current.getBoundingClientRect();
        const textMiddle = textRect.top + window.scrollY + textRect.height / 2;
        const imageMiddle = imageRect.top + window.scrollY + imageRect.height / 2;
        
        if (Math.abs(scrollPosition - textMiddle) < Math.abs(scrollPosition - imageMiddle)) {
          setActiveElement('text');
        } else {
          setActiveElement('image');
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="max-w-2xl mx-auto py-20 px-4 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-indigo-300">About Me</h2>
      <div
        ref={textRef}
        className={`transition-all duration-500 ${
          activeElement === 'image' ? 'blur-[2px] opacity-50' : 'blur-0 opacity-100'
        }`}
      >
        <p className="mb-4 text-lg">
          Hi! I&apos;m Pranav, a passionate software engineer with a love for space, technology, and building impactful solutions. I graduated from <span className="font-semibold text-indigo-200">{edu.school}</span> with a <span className="font-semibold text-indigo-200">{edu.degree}</span> (GPA: {edu.gpa}).
        </p>
        <p className="mb-4 text-lg">
          As an undergraduate, I conducted award-winning research in machine learning for cybersecurity & graduated cum laude (CS Honors, GPA 3.8). I interned at Schwab, where I developed a Java application for Schwab&apos;s thinkorswim trading platform that increased zero-day vulnerability detection by 23% and reduced backend dependency by 30%.
        </p>
        <p className="mb-4 text-lg">
          I thrive at the intersection of software engineering and analytical research, and I&apos;m excited to apply these skills to cutting-edge projects. In my free time, I also explore astrophotography! 🔭🌃
        </p>
      </div>
      
      <div className="my-8 border-t border-indigo-500/30"></div>
      
      <div
        ref={imageRef}
        className={`transition-all duration-500 ${
          activeElement === 'text' ? 'blur-[2px] opacity-50' : 'blur-0 opacity-100'
        }`}
      >
        <div className="rounded-lg overflow-hidden">
          <a href="https://app.astrobin.com/i/ixttru" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn.astrobin.com/thumbs/Eg2sE-scLBo1_1824x0_pljLK9Q-.png" 
              alt="Galaxy photograph taken from Texas"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
          </a>
        </div>
        <p className="text-center text-sm mt-3 text-indigo-100/70 italic">
          A galaxy 2.5 million light-years away - photographed from Texas by me. <a href="https://app.astrobin.com/u/celestial21#gallery" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-400 transition">Click</a> to see more.
        </p>
      </div>
    </section>
  )
} 