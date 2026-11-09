import React from 'react';
import SectionContainer from './SectionContainer';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

const cards = [
  {
    title: 'Specification-First Methodology',
    color: 'from-violet-500 to-purple-700',
    border: 'border-violet-500/20 hover:border-violet-400/50',
    glow: 'hover:shadow-violet-900/30',
    icon: '📐',
    points: [
      'Start with clear constitutions and technical specs',
      'Define implementation plans before writing code',
      'Build systems that are structured, maintainable, and aligned with product goals',
    ],
  },
  {
    title: 'Current Focus Areas',
    color: 'from-cyan-500 to-blue-600',
    border: 'border-cyan-500/20 hover:border-cyan-400/50',
    glow: 'hover:shadow-cyan-900/30',
    icon: '🚀',
    points: [
      'Cloud-Native Production Deployment (Docker, Kubernetes, Dapr, Ray, Kafka)',
      'Scalable distributed systems architecture',
      'AI agent integration into web platforms',
    ],
  },
];

const DevelopmentApproach: React.FC = () => (
  <div className="bg-[#0a0a15]">
    <SectionContainer id="approach">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
          Development{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            Approach
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`group relative p-7 rounded-2xl bg-white/[0.03] border transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl ${card.border} ${card.glow}`}
          >
            {/* Icon + title */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-xl shadow-lg`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">{card.title}</h3>
            </div>

            {/* Points */}
            <ul className="space-y-3">
              {card.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.color} flex-shrink-0`} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContainer>
  </div>
);

export default DevelopmentApproach;
