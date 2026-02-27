import React from 'react';
import SectionContainer from './SectionContainer';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

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

    <div className="max-w-2xl mx-auto">
      <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/20">
        {/* Glow */}
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-start gap-5 relative">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-900/40">
            <AcademicCapIcon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Undergraduate AI Engineering Student
            </h3>
            <p className="text-slate-400 text-sm">
              Expected Graduation:{' '}
              <span className="text-cyan-300 font-semibold">2028</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
);

export default Education;
