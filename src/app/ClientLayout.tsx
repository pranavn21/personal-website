"use client";
import ParallaxStars from "@/components/ParallaxStars";
import Header from "@/components/Header";
import resumeData from "@/data/resumeData";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <ParallaxStars />
      {/* Starfield background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0 w-full h-full">
          {[...Array(150)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1920}
              cy={Math.random() * 1080}
              r={Math.random() * 1.2 + 0.3}
              fill="white"
              opacity={Math.random() * 0.7 + 0.2}
            />
          ))}
        </svg>
      </div>
      <Header />
      <div className="flex-grow pt-20">
        {children}
      </div>
      {/* Footer */}
      <footer className="w-full bg-gradient-to-t from-black/60 to-transparent backdrop-blur-sm border-t border-indigo-500/20 py-6 mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6 text-sm">
              <a href={`mailto:${resumeData.email}`} className="text-indigo-300 hover:text-indigo-400 transition">Email</a>
              <a href={`https://github.com/${resumeData.github}`} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-400 transition">GitHub</a>
              <a href={`https://linkedin.com/in/${resumeData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-400 transition">LinkedIn</a>
              <a href="https://app.astrobin.com/u/celestial21#gallery" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-400 transition">AstroBin</a>
            </div>
            <p className="text-xs text-indigo-300/60">© 2026 Pranav Nair. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
