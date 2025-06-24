import resumeData from "@/data/resumeData";

export default function About() {
  const edu = resumeData.education[0];
  return (
    <section id="about" className="max-w-2xl mx-auto py-20 px-4 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-indigo-300">About Me</h2>
      <p className="mb-4 text-lg">
        Hi! I&apos;m Pranav, a passionate software engineer with a love for space, technology, and building impactful solutions. I graduated from <span className="font-semibold text-indigo-200">{edu.school}</span> with a <span className="font-semibold text-indigo-200">{edu.degree}</span> (GPA: {edu.gpa}).
      </p>
      <p className="mb-2 text-md text-indigo-100">Relevant Coursework:</p>
      <ul className="list-disc list-inside text-indigo-100 mb-4">
        {edu.coursework.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  )
} 