import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Pranav Nair - Portfolio",
  description: "Check out my portfolio through a cosmic, interactive experience!",
  openGraph: {
    title: "Pranav Nair - Portfolio",
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
    title: "Pranav Nair - Portfolio",
    description: "Check out my portfolio through a cosmic, interactive experience!",
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
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/og-image.png" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-900 text-white font-sans relative overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
