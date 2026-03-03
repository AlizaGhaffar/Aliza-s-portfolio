import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"; // Using Inter for better readability and integration with Tailwind
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aliza Ghaffar | Certified Agentic AI Engineer & Full-Stack Developer",
  description: "Aliza Ghaffar's professional portfolio showcasing expertise in Agentic AI Engineering, Full-Stack Development, scalable web applications, and integrated AI systems. Explore projects, skills, and career interests.",
  keywords: "Aliza Ghaffar, AI Engineer, Agentic AI, Full-Stack Developer, Next.js, FastAPI, OpenAI Agents SDK, RAG-based Chatbots, Python, TypeScript, Tailwind CSS, Robotics AI, Physical AI",
  authors: [{ name: "Aliza Ghaffar" }],
  openGraph: {
    title: "Aliza Ghaffar | Certified Agentic AI Engineer & Full-Stack Developer",
    description: "Aliza Ghaffar's professional portfolio showcasing expertise in Agentic AI Engineering, Full-Stack Development, scalable web applications, and integrated AI systems.",
    url: "https://alizaghaffar.vercel.app", // Replace with actual deployment URL
    siteName: "Aliza Ghaffar Portfolio",
    type: "website",
    images: [
      {
        url: "https://alizaghaffar.vercel.app/og-image.jpg", // Create an open graph image in public/
        width: 1200,
        height: 630,
        alt: "Aliza Ghaffar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aliza Ghaffar | Certified Agentic AI Engineer & Full-Stack Developer",
    description: "Aliza Ghaffar's professional portfolio showcasing expertise in Agentic AI Engineering, Full-Stack Development, scalable web applications, and integrated AI systems.",
    // creator: "@yourtwitterhandle", // Optional: If you have a Twitter handle
    images: ["https://alizaghaffar.vercel.app/twitter-image.jpg"], // Create a twitter image in public/
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0EA5E9", // primary-500
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}