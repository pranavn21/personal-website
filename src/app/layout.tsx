import type { Metadata } from "next";
import "./globals.css";
import ParallaxStars from "@/components/ParallaxStars";

export const metadata: Metadata = {
  title: "Pranav Nair — Portfolio",
  description: "Check out my portfolio through a cosmic, interactive experience!",
  openGraph: {
    title: "Pranav Nair — Portfolio",
    description: "Check out my portfolio through a cosmic, interactive experience!",
    url: "https://www.pranav-nair.com",
    siteName: "Pranav Nair Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pranav Nair Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Nair — Portfolio",
    description: "Explore Pranav Nair's cosmic, interactive portfolio: experience, projects, skills, and more.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-900 text-white font-sans relative overflow-x-hidden">
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
        {children}
      </body>
    </html>
  );
}
