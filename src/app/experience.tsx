import resumeData from "@/data/resumeData";
import Planet from "@/components/Planet";

export default function Experience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto py-20 px-4 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-indigo-300">Experience</h2>
      <div className="flex flex-col gap-8">
        {resumeData.experience.map((exp, i) => (
          <div key={exp.company} className="relative bg-gradient-to-br from-indigo-900/60 to-blue-900/60 border border-indigo-500/40 rounded-xl p-6 shadow-lg overflow-hidden">
            <div className="absolute -top-6 -left-6 animate-planet-orbit2">
              <Planet size={36} variant={i % 2 === 0 ? "ring" : "crater"} style={{ filter: "drop-shadow(0 0 8px #7dd3fc)" }} />
            </div>
            <h3 className="text-xl font-semibold text-indigo-200 mb-1">{exp.title} @ {exp.company}</h3>
            <p className="text-indigo-400 text-sm mb-2">{exp.location} &mdash; {exp.dates}</p>
            <ul className="list-disc list-inside text-indigo-100 space-y-1">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 