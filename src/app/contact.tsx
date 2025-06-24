import resumeData from "@/data/resumeData";

function Rocket() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="40" rx="10" ry="4" fill="#818cf8" opacity="0.3" />
      <rect x="20" y="10" width="8" height="20" rx="4" fill="#fbbf24" />
      <polygon points="24,4 28,12 20,12" fill="#f472b6" />
      <rect x="22" y="30" width="4" height="8" rx="2" fill="#a3e635" />
      <ellipse cx="24" cy="38" rx="2" ry="1" fill="#f472b6" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="max-w-xl mx-auto py-20 px-4 animate-fade-in">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-float flex justify-center w-full">
          <Rocket />
        </div>
        <h2 className="text-3xl font-bold mb-8 text-indigo-300 text-center">Contact Me</h2>
        <div className="flex flex-col gap-4 w-full items-center">
          <a href="mailto:pranavnair65@gmail.com" className="text-indigo-300 hover:underline text-base bg-indigo-900/60 px-4 py-2 rounded-full border border-indigo-500/40 shadow-lg transition">Email</a>
          <a href={`https://github.com/${resumeData.github}`} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:underline text-base bg-indigo-900/60 px-4 py-2 rounded-full border border-indigo-500/40 shadow-lg transition">GitHub</a>
          <a href={`https://linkedin.com/in/${resumeData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:underline text-base bg-indigo-900/60 px-4 py-2 rounded-full border border-indigo-500/40 shadow-lg transition">LinkedIn</a>
        </div>
      </div>
    </section>
  );
} 