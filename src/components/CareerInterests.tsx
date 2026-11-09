import React from 'react';
import SectionContainer from './SectionContainer';

const goals = [
  {
    label: 'Short-term Goals',
    emoji: '⚡',
    gradient: 'from-pink-500 to-orange-500',
    border: 'border-pink-500/20 hover:border-pink-400/50',
    glow: 'hover:shadow-pink-900/30',
    items: [
      'Forward Deployed Engineer (FDE)',
      'Agentic AI Engineer',
      'AI Systems Engineer',
      'Full-Stack AI Developer',
    ],
    tagColor: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
  },
  {
    label: 'Long-term Vision',
    emoji: '🤖',
    gradient: 'from-violet-500 to-cyan-500',
    border: 'border-violet-500/20 hover:border-violet-400/50',
    glow: 'hover:shadow-violet-900/30',
    items: [
      'Physical AI & Robotics Engineer',
      'Working with ROS 2, NVIDIA Isaac, Gazebo, and VLA models for intelligent robotic applications',
    ],
    tagColor: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  },
];

const CareerInterests: React.FC = () => (
  <SectionContainer id="interests">
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
        Career{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
          Interests
        </span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {goals.map((goal, i) => (
        <div
          key={i}
          className={`group relative p-7 rounded-2xl bg-white/[0.03] border transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl ${goal.border} ${goal.glow}`}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${goal.gradient} flex items-center justify-center text-2xl shadow-lg`}>
              {goal.emoji}
            </div>
            <h3 className="text-lg font-bold text-white">{goal.label}</h3>
          </div>

          {/* Items */}
          <div className="flex flex-col gap-2.5">
            {goal.items.map((item, j) => (
              <div
                key={j}
                className={`px-4 py-2.5 rounded-xl text-sm border ${goal.tagColor}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionContainer>
);

export default CareerInterests;
