"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md border-b border-indigo-500/20">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-center gap-8">
          <Link 
            href="/" 
            className={`text-lg transition-all ${
              isActive("/") 
                ? "text-indigo-300 font-semibold border-b-2 border-indigo-400" 
                : "text-white hover:text-indigo-400"
            }`}
          >
            About
          </Link>
          <Link 
            href="/experience" 
            className={`text-lg transition-all ${
              isActive("/experience") 
                ? "text-indigo-300 font-semibold border-b-2 border-indigo-400" 
                : "text-white hover:text-indigo-400"
            }`}
          >
            Experience
          </Link>
          <Link 
            href="/projects" 
            className={`text-lg transition-all ${
              isActive("/projects") 
                ? "text-indigo-300 font-semibold border-b-2 border-indigo-400" 
                : "text-white hover:text-indigo-400"
            }`}
          >
            Projects
          </Link>
          <Link 
            href="/skills" 
            className={`text-lg transition-all ${
              isActive("/skills") 
                ? "text-indigo-300 font-semibold border-b-2 border-indigo-400" 
                : "text-white hover:text-indigo-400"
            }`}
          >
            Skills
          </Link>
          <Link 
            href="/contact" 
            className={`text-lg transition-all ${
              isActive("/contact") 
                ? "text-indigo-300 font-semibold border-b-2 border-indigo-400" 
                : "text-white hover:text-indigo-400"
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
