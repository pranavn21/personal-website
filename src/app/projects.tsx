import resumeData from "@/data/resumeData";
import Planet from "@/components/Planet";

export default function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto py-20 px-4 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-indigo-300">Projects</h2>
      <div className="flex flex-col gap-8">
        {resumeData.projects.map((proj, i) => (
          <div key={proj.name} className="relative bg-gradient-to-br from-indigo-900/60 to-blue-900/60 border border-indigo-500/40 rounded-xl p-6 shadow-lg overflow-hidden">
            <div className="absolute -top-6 -right-6 animate-planet-orbit3">
              <Planet size={32} variant={i % 2 === 0 ? "stripe" : "crater"} style={{ filter: "drop-shadow(0 0 8px #a3e635)" }} />
            </div>
            <h3 className="text-xl font-semibold text-indigo-200 mb-1">{proj.name}</h3>
            <p className="text-indigo-400 text-sm mb-2">{proj.dates}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {proj.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-indigo-700/60 text-xs text-indigo-100 border border-indigo-400/30">{t}</span>
              ))}
            </div>
            <ul className="list-disc list-inside text-indigo-100 space-y-1">
              {proj.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 