import React from 'react';
import SectionContainer from './SectionContainer';

const About: React.FC = () => (
  <div className="bg-[#0a0a15]">
    <SectionContainer id="about">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
          About{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
            Me
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full" />
      </div>

      {/* Glass card */}
      <div className="relative max-w-3xl mx-auto">
        <div className="relative p-8 sm:p-10 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm overflow-hidden">
          {/* Left color bar */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 via-pink-500 to-cyan-500 rounded-l-2xl" />
          {/* Glow corner */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-violet-600/10 blur-2xl pointer-events-none" />

          <p className="text-lg text-slate-300 leading-relaxed mb-5 pl-5">
            Certified Agentic AI Engineer and spec-driven full-stack developer building scalable web
            applications with integrated AI systems.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-5 pl-5">
            Passionate about creating intelligent user experiences where modern web engineering meets
            applied AI.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed pl-5">
            Currently exploring{' '}
            <span className="text-violet-300 font-semibold">Cloud-Native technologies</span> and
            preparing for roles in{' '}
            <span className="text-pink-300 font-semibold">Agentic AI</span> and{' '}
            <span className="text-cyan-300 font-semibold">Physical AI Engineering</span>.
          </p>
        </div>
      </div>
    </SectionContainer>
  </div>
);

export default About;
