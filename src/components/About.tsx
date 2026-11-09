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
        <div className="relative p-8 sm:p-10 rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden">
          {/* Left color bar */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 via-pink-500 to-cyan-500 rounded-l-2xl" />
          {/* Glow corner */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)' }}
          />

          <p className="text-lg text-slate-300 leading-relaxed mb-5 pl-5">
            I&apos;m a BS Artificial Intelligence student at Sindh Madressatul Islam University (SMIU)
            and an{' '}
            <span className="text-violet-300 font-semibold">FDE &amp; Startup Founder Trainee</span>{' '}
            under the Governor Sindh Initiative for Agentic AI.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-5 pl-5">
            As an Agentic AI and Full-Stack Developer, I work with Python, the OpenAI Agents SDK and
            Cloud-Native Agentic AI, with a focus on AI agents, prompt and context engineering, and
            full-stack application development.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed pl-5">
            I&apos;m especially interested in{' '}
            <span className="text-pink-300 font-semibold">Forward Deployed Engineering</span>:
            applying AI and software engineering to solve real-world customer and operational problems.
          </p>
        </div>
      </div>
    </SectionContainer>
  </div>
);

export default About;
