import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import SectionContainer from './SectionContainer';

const certificates = [
  {
    title: 'Engineer AI Agents with Agent Development Kit (ADK)',
    issuer: 'Google Cloud Skills Boost',
    detail: 'April 2026',
    image: '/certificates/engineer-ai-agents-adk.webp',
    alt: 'Google Cloud skill badge: Engineer AI Agents with Agent Development Kit (ADK)',
    bar: 'from-cyan-500 to-blue-500',
    link: { label: 'Verify Credential', href: 'https://www.credly.com/go/tWjW6rxR1wLS3ZU5JwUi8A' },
  },
  {
    title: 'Certificate of Achievement — Regional Shortlist',
    issuer: 'AI Seekho 2026 Google Antigravity National Hackathon',
    detail: '12th position among 200+ teams in the Karachi Region',
    image: '/certificates/ai-seekho-2026-regional-shortlist.webp',
    alt: 'AI Seekho 2026 Certificate of Achievement presented to Aliza Ghaffar for reaching the Regional Shortlist',
    bar: 'from-orange-500 to-pink-500',
    link: { label: 'View Certificate', href: '/certificates/ai-seekho-2026-regional-shortlist.webp' },
  },
];

const Certificates: React.FC = () => (
  <SectionContainer id="certificates">
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-violet-400">
          Certificates
        </span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-violet-500 mx-auto rounded-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {certificates.map((certificate) => (
        <div
          key={certificate.title}
          className="flex flex-col h-full rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-violet-900/30"
        >
          <div className={`h-1 w-full bg-gradient-to-r ${certificate.bar} flex-shrink-0`} />

          {/* The fixed aspect ratio reserves the space, so nothing shifts when the image loads */}
          <div className="relative aspect-[16/9] w-full bg-white">
            <Image
              src={certificate.image}
              alt={certificate.alt}
              fill
              sizes="(min-width: 1024px) 496px, (min-width: 768px) 46vw, 92vw"
              className="object-contain"
            />
          </div>

          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-lg font-bold text-white mb-2">{certificate.title}</h3>
            <p className="text-slate-300 text-sm mb-1">{certificate.issuer}</p>
            <p className="text-slate-400 text-sm mb-5 flex-1">{certificate.detail}</p>
            <div>
              <Link
                href={certificate.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-motion inline-flex items-center gap-1.5 min-h-11 px-3.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-sm font-medium hover:bg-white/10 hover:border-white/20"
              >
                {certificate.link.label}
                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-slate-400" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionContainer>
);

export default Certificates;
