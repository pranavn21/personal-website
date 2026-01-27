"use client";
import { useEffect, useRef, useState } from "react";
import resumeData from "@/data/resumeData";
import Planet from "@/components/Planet";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCertIndex, setActiveCertIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<'experience' | 'certifications'>('experience');
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);
  const experienceSectionRef = useRef<HTMLDivElement | null>(null);
  const certificationsSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Determine which major section is in focus
      if (experienceSectionRef.current && certificationsSectionRef.current) {
        const expRect = experienceSectionRef.current.getBoundingClientRect();
        const certRect = certificationsSectionRef.current.getBoundingClientRect();
        const expMiddle = expRect.top + window.scrollY + expRect.height / 2;
        const certMiddle = certRect.top + window.scrollY + certRect.height / 2;
        
        if (Math.abs(scrollPosition - expMiddle) < Math.abs(scrollPosition - certMiddle)) {
          setActiveSection('experience');
        } else {
          setActiveSection('certifications');
        }
      }
      
      // Handle work experience items
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementMiddle = rect.top + window.scrollY + rect.height / 2;
          
          if (Math.abs(scrollPosition - elementMiddle) < rect.height) {
            setActiveIndex(index);
          }
        }
      });

      // Handle certification items
      certRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementMiddle = rect.top + window.scrollY + rect.height / 2;
          
          if (Math.abs(scrollPosition - elementMiddle) < rect.height) {
            setActiveCertIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="max-w-3xl mx-auto py-20 px-4 animate-fade-in">
      {/* Work Experience Section */}
      <div 
        ref={experienceSectionRef}
        className={`transition-all duration-700 ${
          activeSection === 'certifications' ? 'blur-[3px] opacity-50' : 'blur-0 opacity-100'
        }`}
      >
        <h2 className="text-3xl font-bold mb-8 text-indigo-300">Work Experience</h2>
        <div className="flex flex-col gap-8">
        {resumeData.experience.map((exp, i) => (
          <div 
            key={exp.company} 
            ref={(el) => { itemRefs.current[i] = el; }}
            className={`relative bg-gradient-to-br from-indigo-900/60 to-blue-900/60 border rounded-xl p-6 shadow-lg overflow-hidden transition-all duration-500 ${
              activeIndex === i 
                ? "border-indigo-400 shadow-[0_0_30px_rgba(129,140,248,0.5)] opacity-100 scale-100" 
                : "border-indigo-500/20 opacity-40 scale-95 blur-[1px]"
            }`}
          >
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
      </div>

      {/* Certifications Section */}
      <div 
        ref={certificationsSectionRef}
        className={`transition-all duration-700 ${
          activeSection === 'experience' ? 'blur-[3px] opacity-50' : 'blur-0 opacity-100'
        }`}
      >
        <h2 className="text-3xl font-bold mb-8 mt-16 text-indigo-300">Certifications</h2>
        <div className="flex flex-col gap-6">
        {/* AWS Certifications */}
        <div 
          ref={(el) => { certRefs.current[0] = el; }}
          className={`bg-gradient-to-br from-indigo-900/60 to-blue-900/60 border rounded-xl p-6 shadow-lg transition-all duration-500 ${
            activeCertIndex === 0
              ? "border-indigo-400 shadow-[0_0_30px_rgba(129,140,248,0.5)] opacity-100 scale-100" 
              : "border-indigo-500/20 opacity-40 scale-95 blur-[1px]"
          }`}
        >
          <div className="flex items-center mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
              alt="AWS Logo" 
              className="h-8 w-auto mr-3"
            />
            <h3 className="text-lg font-semibold text-indigo-200">AWS</h3>
          </div>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.credly.com/badges/cc6296e9-cab9-42f9-8a6c-b4be5ca8efa7/linked_in_profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-100 hover:text-indigo-300 transition text-sm"
              >
                • Certified Cloud Practitioner (CLF-C02)
              </a>
            </li>
          </ul>
        </div>

        {/* Microsoft Certifications */}
        <div 
          ref={(el) => { certRefs.current[1] = el; }}
          className={`bg-gradient-to-br from-indigo-900/60 to-blue-900/60 border rounded-xl p-6 shadow-lg transition-all duration-500 ${
            activeCertIndex === 1
              ? "border-indigo-400 shadow-[0_0_30px_rgba(129,140,248,0.5)] opacity-100 scale-100" 
              : "border-indigo-500/20 opacity-40 scale-95 blur-[1px]"
          }`}
        >
          <div className="flex items-center mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
              alt="Microsoft Logo" 
              className="h-8 w-auto mr-3"
            />
            <h3 className="text-lg font-semibold text-indigo-200">Microsoft</h3>
          </div>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://learn.microsoft.com/en-us/users/prannair/credentials/e9d59fb9c6ed7485?ref=https%3A%2F%2Fwww.linkedin.com%2F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-100 hover:text-indigo-300 transition text-sm"
              >
                • Azure Fundamentals (AZ-900)
              </a>
            </li>
            <li>
              <a 
                href="https://learn.microsoft.com/en-us/users/prannair/credentials/506aa45815543c64?ref=https%3A%2F%2Fwww.linkedin.com%2F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-100 hover:text-indigo-300 transition text-sm"
              >
                • Azure Data Fundamentals (DP-900)
              </a>
            </li>
            <li>
              <a 
                href="https://learn.microsoft.com/en-us/users/prannair/credentials/c4722f7b5d63adaa?ref=https%3A%2F%2Fwww.linkedin.com%2F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-100 hover:text-indigo-300 transition text-sm"
              >
                • Security, Compliance, and Identity Fundamentals (SC-900)
              </a>
            </li>
            <li>
              <a                 href="https://learn.microsoft.com/api/credentials/share/en-us/prannair/86DBCFA72B133968?sharingId" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-100 hover:text-indigo-300 transition text-sm"
              >
                • Power Platform Fundamentals (PL-900)
              </a>
            </li>
            <li>
              <a                 href="https://learn.microsoft.com/en-us/users/prannair/credentials/2eb66e3db9ca56bd?ref=https%3A%2F%2Fwww.linkedin.com%2F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-100 hover:text-indigo-300 transition text-sm"
              >
                • GitHub Foundations (GH-900)
              </a>
            </li>
            <li>
              <a 
                href="https://learn.microsoft.com/en-us/users/prannair/credentials/652230ede340ea90?ref=https%3A%2F%2Fwww.linkedin.com%2F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-100 hover:text-indigo-300 transition text-sm"
              >
                • Microsoft 365 Fundamentals (MS-900)
              </a>
            </li>
          </ul>
        </div>

        {/* Deloitte Certifications */}
        <div 
          ref={(el) => { certRefs.current[2] = el; }}
          className={`bg-gradient-to-br from-indigo-900/60 to-blue-900/60 border rounded-xl p-6 shadow-lg transition-all duration-500 ${
            activeCertIndex === 2
              ? "border-indigo-400 shadow-[0_0_30px_rgba(129,140,248,0.5)] opacity-100 scale-100" 
              : "border-indigo-500/20 opacity-40 scale-95 blur-[1px]"
          }`}
        >
          <div className="flex items-center mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2b/DeloitteNewSmall.png" 
              alt="Deloitte Logo" 
              className="h-8 w-auto mr-3"
            />
            <h3 className="text-lg font-semibold text-indigo-200">Deloitte</h3>
          </div>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.linkedin.com/in/pranavnair2002/details/certifications/1766181881482/single-media-viewer/?profileId=ACoAACsu96kB4MoHj4D6qTX2DPrxt3UlU8QfCA8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-100 hover:text-indigo-300 transition text-sm"
              >
                • GenAI Data Scientist
              </a>
            </li>
          </ul>
        </div>

        {/* Other Certifications */}
        <div 
          ref={(el) => { certRefs.current[3] = el; }}
          className={`bg-gradient-to-br from-indigo-900/60 to-blue-900/60 border rounded-xl p-6 shadow-lg transition-all duration-500 ${
            activeCertIndex === 3
              ? "border-indigo-400 shadow-[0_0_30px_rgba(129,140,248,0.5)] opacity-100 scale-100" 
              : "border-indigo-500/20 opacity-40 scale-95 blur-[1px]"
          }`}
        >
          <div className="flex items-center mb-4">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1534/1534067.png" 
              alt="Other Certifications" 
              className="h-8 w-auto mr-3"
            />
            <h3 className="text-lg font-semibold text-indigo-200">Other</h3>
          </div>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.linkedin.com/in/pranavnair2002/details/certifications/1738978066394/single-media-viewer/?profileId=ACoAACsu96kB4MoHj4D6qTX2DPrxt3UlU8QfCA8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-100 hover:text-indigo-300 transition text-sm"
              >
                • Heartsaver CPR & AED
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/pranavnair2002/details/certifications/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-100 hover:text-indigo-300 transition text-sm"
              >
                • Seal of Biliteracy in German
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
} 