"use client";
import Contact from "../contact";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-6 w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg animate-fade-in">
          <span className="text-indigo-400">Contact</span>
        </h1>
      </section>
      {/* Contact Section */}
      <div className="mt-4">
        <Contact />
      </div>
    </main>
  );
}
