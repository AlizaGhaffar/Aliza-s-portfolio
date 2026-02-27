import React from 'react';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardStyles = [
  {
    bar:  'from-violet-500 to-pink-500',
    glow: 'hover:shadow-violet-900/30',
    tag:  ['border-violet-500/30 text-violet-300 bg-violet-500/10', 'border-pink-500/30 text-pink-300 bg-pink-500/10', 'border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-500/10'],
    overlay: 'from-violet-600/5 to-pink-600/5',
  },
  {
    bar:  'from-cyan-500 to-blue-500',
    glow: 'hover:shadow-cyan-900/30',
    tag:  ['border-cyan-500/30 text-cyan-300 bg-cyan-500/10', 'border-blue-500/30 text-blue-300 bg-blue-500/10', 'border-teal-500/30 text-teal-300 bg-teal-500/10'],
    overlay: 'from-cyan-600/5 to-blue-600/5',
  },
  {
    bar:  'from-orange-500 to-pink-500',
    glow: 'hover:shadow-orange-900/30',
    tag:  ['border-orange-500/30 text-orange-300 bg-orange-500/10', 'border-pink-500/30 text-pink-300 bg-pink-500/10', 'border-amber-500/30 text-amber-300 bg-amber-500/10'],
    overlay: 'from-orange-600/5 to-pink-600/5',
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const style = cardStyles[index % cardStyles.length];

  return (
    <div className={`group relative flex flex-col h-full rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl ${style.glow}`}>
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${style.bar} flex-shrink-0`} />

      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-start justify-between gap-3 text-lg font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r mb-3 transition-all duration-200"
          style={{ WebkitBackgroundClip: undefined }}
        >
          <span className={`group-hover/link:text-transparent group-hover/link:bg-clip-text group-hover/link:bg-gradient-to-r group-hover/link:${style.bar} transition-all duration-200`}>
            {project.title}
          </span>
          <ArrowTopRightOnSquareIcon className="h-5 w-5 flex-shrink-0 text-slate-600 group-hover/link:text-slate-300 transition-colors mt-0.5" />
        </Link>

        {/* Description */}
        {project.description && (
          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>
        )}

        {/* Tech badges */}
        {project.techStack && (
          <div className="pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              {Object.values(project.techStack)
                .flat()
                .filter(Boolean)
                .map((tech, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-1 text-xs font-medium rounded-full border ${style.tag[i % style.tag.length]}`}
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Hover glow overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${style.overlay} transition-opacity duration-300 pointer-events-none`} />
    </div>
  );
};

export default ProjectCard;
