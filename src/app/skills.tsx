import resumeData from "@/data/resumeData";

const skillGroups = [
  { label: "Languages", key: "languages" },
  { label: "Database", key: "database" },
  { label: "AI/ML", key: "ai_ml" },
  { label: "Framework", key: "framework" },
  { label: "Security Tools", key: "security_tools" },
  { label: "Cloud/Other", key: "cloud_other" },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto py-20 px-4 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-indigo-300">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, _) => {
          const skills = resumeData.skills[group.key as keyof typeof resumeData.skills] as string[];
          return (
            <div key={group.key} className="relative bg-gradient-to-br from-indigo-900/60 to-blue-900/60 border border-indigo-500/40 rounded-xl p-6 shadow-lg overflow-hidden">
              <svg width="100%" height="100" className="absolute left-0 top-0 w-full h-full pointer-events-none">
                {/* Draw constellation lines */}
                {skills.map((_, j) => (
                  <line
                    key={j}
                    x1={60}
                    y1={50}
                    x2={60 + 60 * Math.cos((j / skills.length) * 2 * Math.PI)}
                    y2={50 + 40 * Math.sin((j / skills.length) * 2 * Math.PI)}
                    stroke="#818cf8"
                    strokeWidth={1}
                    opacity={0.5}
                  />
                ))}
              </svg>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-indigo-400 rounded-full mb-2 shadow-lg animate-float" />
                <h3 className="text-lg font-semibold text-indigo-200 mb-4">{group.label}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.map((skill, j) => (
                    <div key={skill} className="flex flex-col items-center animate-fade-in" style={{ animationDelay: `${0.1 * j}s` }}>
                      <div className="w-3 h-3 bg-indigo-200 rounded-full mb-1" />
                      <span className="text-xs text-indigo-100 whitespace-nowrap">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 