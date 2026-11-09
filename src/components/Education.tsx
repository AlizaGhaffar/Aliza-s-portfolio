import React from 'react';
import SectionContainer from './SectionContainer';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const education = [
  {
    title: 'BS Artificial Intelligence',
    institution: 'Sindh Madressatul Islam University',
    period: '2024 – 2028',
  },
  {
    title: 'Agentic and Robotic AI Engineering Program',
    institution: 'Governor Sindh Initiative for GenAI, Web3 & Metaverse',
    period: 'Feb 2024 – Present',
    note: 'Selected for FDE & Startup Founder Trainee program',
  },
  {
    title: 'Intermediate, Pre-Medical',
    institution: 'Govt. Degree Girls College Sheikh Zaid',
    period: '2022 – 2024',
  },
  {
    title: 'Matriculation, Biology',
    institution: 'ASF Public School',
    period: '2020 – 2022',
  },
];

const Education: React.FC = () => (
  <SectionContainer id="education">
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
          Education
        </span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
    </div>

    <div className="max-w-2xl mx-auto space-y-5">
      {education.map((entry) => (
        <div
          key={entry.title}
          className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 hover:border-cyan-400/40 transition-[border-color,box-shadow] duration-300 hover:shadow-xl hover:shadow-cyan-900/20"
        >
          {/* Glow */}
          <div
            className="absolute -top-12 -left-12 w-56 h-56 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)' }}
          />

          <div className="flex items-start gap-4 relative">
            <div className="flex-none w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shadow-md shadow-cyan-900/40">
              <AcademicCapIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white mb-1">{entry.title}</h3>
              <p className="text-slate-300 text-sm mb-1">{entry.institution}</p>
              {entry.note && <p className="text-slate-400 text-sm mb-1">{entry.note}</p>}
              <p className="text-cyan-300 text-sm font-semibold">{entry.period}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionContainer>
);

export default Education;
