import React from 'react';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Project } from '@/types';
import YouTubeEmbed from './YouTubeEmbed';

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
    <div className={`group relative flex flex-col h-full rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl ${style.glow}`}>
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${style.bar} flex-shrink-0`} />

      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-start justify-between gap-3 text-lg font-bold mb-3"
        >
          {/* White text fades out on hover to reveal the gradient clipped behind it */}
          <span className={`text-white bg-clip-text bg-gradient-to-r ${style.bar} group-hover/link:text-transparent transition-colors duration-200`}>
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

        {/* Video demo */}
        {project.youtube && <YouTubeEmbed id={project.youtube.id} title={project.youtube.title} />}

        {/* Project links */}
        {project.links && (
          <div className="relative z-10 flex flex-wrap gap-2 mb-4">
            {project.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-motion inline-flex items-center gap-1.5 min-h-11 px-3.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-sm font-medium hover:bg-white/10 hover:border-white/20"
              >
                {link.label}
                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-slate-400" aria-hidden="true" />
              </Link>
            ))}
          </div>
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
