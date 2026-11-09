import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google"; // Using Inter for better readability and integration with Tailwind
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aliza Ghaffar | Agentic AI Developer & Full-Stack Developer",
  description: "Aliza Ghaffar's professional portfolio: BS Artificial Intelligence student, FDE & Startup Founder Trainee, and Agentic AI and Full-Stack Developer. Explore projects, certificates, skills, and career interests.",
  keywords: "Aliza Ghaffar, Forward Deployed Engineer, FDE, Agentic AI, AI Agents, Full-Stack Developer, Next.js, FastAPI, OpenAI Agents SDK, Prompt Engineering, Context Engineering, RAG-based Chatbots, Python, TypeScript, Tailwind CSS, Robotics AI, Physical AI",
  authors: [{ name: "Aliza Ghaffar" }],
  openGraph: {
    title: "Aliza Ghaffar | Agentic AI Developer & Full-Stack Developer",
    description: "BS Artificial Intelligence student, FDE & Startup Founder Trainee, and Agentic AI and Full-Stack Developer.",
    url: "https://aliza-s-portfolio.vercel.app",
    siteName: "Aliza Ghaffar Portfolio",
    type: "website",
    images: [
      {
        url: "https://aliza-s-portfolio.vercel.app/og-image.jpg", // Create an open graph image in public/
        width: 1200,
        height: 630,
        alt: "Aliza Ghaffar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aliza Ghaffar | Agentic AI Developer & Full-Stack Developer",
    description: "BS Artificial Intelligence student, FDE & Startup Founder Trainee, and Agentic AI and Full-Stack Developer.",
    // creator: "@yourtwitterhandle", // Optional: If you have a Twitter handle
    images: ["https://aliza-s-portfolio.vercel.app/twitter-image.jpg"], // Create a twitter image in public/
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0EA5E9", // primary-500
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <noscript>
          <style>{`.reveal { opacity: 1; transform: none; }`}</style>
        </noscript>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}