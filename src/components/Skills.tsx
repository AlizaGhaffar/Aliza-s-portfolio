import React from 'react';
import SectionContainer from './SectionContainer';

interface SkillCategory {
  category: string;
  technologies: string;
  gradient: string;
  border: string;
  glow: string;
  tagColor: string;
}

const skills: SkillCategory[] = [
  {
    category: 'AI / Agent Development',
    technologies: 'OpenAI Agents SDK, OpenAI Agent Kit, RAG-based Chatbots',
    gradient: 'from-violet-500 to-purple-700',
    border: 'border-violet-500/25 hover:border-violet-400/50',
    glow: 'hover:shadow-violet-900/30',
    tagColor: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  },
  {
    category: 'MCP Ecosystem',
    technologies: 'MCP Server Development, FastMCP',
    gradient: 'from-cyan-500 to-blue-600',
    border: 'border-cyan-500/25 hover:border-cyan-400/50',
    glow: 'hover:shadow-cyan-900/30',
    tagColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  },
  {
    category: 'Frontend',
    technologies: 'Next.js 15, TypeScript, Tailwind CSS',
    gradient: 'from-blue-500 to-indigo-600',
    border: 'border-blue-500/25 hover:border-blue-400/50',
    glow: 'hover:shadow-blue-900/30',
    tagColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  },
  {
    category: 'Backend',
    technologies: 'Python, FastAPI',
    gradient: 'from-orange-500 to-amber-600',
    border: 'border-orange-500/25 hover:border-orange-400/50',
    glow: 'hover:shadow-orange-900/30',
    tagColor: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
  },
  {
    category: 'Database',
    technologies: 'Neon Database',
    gradient: 'from-emerald-500 to-green-600',
    border: 'border-emerald-500/25 hover:border-emerald-400/50',
    glow: 'hover:shadow-emerald-900/30',
    tagColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
  {
    category: 'DevOps & Tools',
    technologies: 'Docker, Git',
    gradient: 'from-pink-500 to-rose-600',
    border: 'border-pink-500/25 hover:border-pink-400/50',
    glow: 'hover:shadow-pink-900/30',
    tagColor: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
  },
  {
    category: 'Currently Learning',
    technologies: 'Kubernetes, Dapr, Ray, Kafka',
    gradient: 'from-teal-500 to-cyan-600',
    border: 'border-teal-500/25 hover:border-teal-400/50',
    glow: 'hover:shadow-teal-900/30',
    tagColor: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
  },
  {
    category: 'Future Focus',
    technologies: 'ROS 2, NVIDIA Isaac, Gazebo, VLA Models',
    gradient: 'from-fuchsia-500 to-violet-600',
    border: 'border-fuchsia-500/25 hover:border-fuchsia-400/50',
    glow: 'hover:shadow-fuchsia-900/30',
    tagColor: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20',
  },
];

const Skills: React.FC = () => (
  <div className="bg-[#0a0a15]">
    <SectionContainer id="skills">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
          Technical{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
            Skills
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`group relative p-5 rounded-2xl bg-white/[0.03] border transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl ${skill.border} ${skill.glow}`}
          >
            {/* Category badge */}
            <div className={`inline-flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r ${skill.gradient} mb-4 shadow-md`}>
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {skill.category}
              </span>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {skill.technologies.split(', ').map((tech, j) => (
                <span
                  key={j}
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${skill.tagColor} transition-colors`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  </div>
);

export default Skills;
