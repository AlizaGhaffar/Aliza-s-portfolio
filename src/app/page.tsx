import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import DevelopmentApproach from '@/components/DevelopmentApproach';
import CareerInterests from '@/components/CareerInterests';
import Footer from '@/components/Footer';

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero section with full height and dynamic intro */}
      <Hero />

      <main className="flex-grow">
        {/* About Section */}
        <About />

        {/* Education Section */}
        <Education />

        {/* Technical Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Certificates Section */}
        <Certificates />

        {/* Development Approach Section */}
        <DevelopmentApproach />

        {/* Career Interests Section */}
        <CareerInterests />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}