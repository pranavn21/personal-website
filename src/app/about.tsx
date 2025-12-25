import resumeData from "@/data/resumeData";

export default function About() {
  const edu = resumeData.education[0];
  return (
    <section id="about" className="max-w-2xl mx-auto py-20 px-4 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-indigo-300">About Me</h2>
      <p className="mb-4 text-lg">
        Hi! I&apos;m Pranav, a passionate software engineer with a love for space, technology, and building impactful solutions. I graduated from <span className="font-semibold text-indigo-200">{edu.school}</span> with a <span className="font-semibold text-indigo-200">{edu.degree}</span> (GPA: {edu.gpa}).
      </p>
      <p className="mb-4 text-lg">
        As an undergraduate, I conducted award-winning research in machine learning for cybersecurity & graduated cum laude (CS Honors, GPA 3.8). I interned at Schwab, where I developed a Java application for Schwab&apos;s thinkorswim trading platform that increased zero-day vulnerability detection by 23% and reduced backend dependency by 30%.
      </p>
      <p className="mb-4 text-lg">
        I thrive at the intersection of software engineering and analytical research, and I&apos;m excited to apply these skills to cutting-edge projects. In my free time, I also explore astrophotography! 🔭🌃
      </p>
    </section>
  )
} 