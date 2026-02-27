import React from 'react';
import SectionContainer from './SectionContainer';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

const projects: Project[] = [
  {
    title: 'Physical AI Robotics Book with RAG-based Chatbot',
    link: 'https://physical-ai-robotics-book.vercel.app/',
    description:
      'A book on physical AI robotics integrated with a RAG-based chatbot for interactive learning and query answering. Showcases the application of AI in robotics and interactive documentation.',
  },
  {
    title: 'AI Todo Chatbot',
    link: 'https://todo-ai-chatbot-lime.vercel.app/',
    description: 'An AI-powered Todo Chatbot that understands natural language commands to manage tasks intelligently.',
    techStack: {
      backend: ['MCP Server'],
      developmentTools: ['OpenAI Agents SDK'],
      skills: ['Agentic Architecture', 'Conversation Persistence', 'Secure Authentication'],
    },
  },
  {
    title: 'Full-Stack Todo Application',
    link: 'https://fullstack-todo-app-with-subagents.vercel.app/',
    description: 'A robust full-stack todo application demonstrating modern web development practices with AI-powered subagents.',
    techStack: {
      backend: ['FastAPI (async/await)'],
      orm: ['SQLModel'],
      database: ['Neon PostgreSQL'],
      authentication: ['JWT + bcrypt'],
      frontend: ['Next.js 15', 'TypeScript', 'Tailwind CSS'],
      developmentTools: ['Claude Code Agents'],
      packageManager: ['uv', 'npm'],
    },
  },
  {
    title: 'Personal AI Employee — Autonomous Business Assistant',
    link: 'https://github.com/AlizaGhaffar/Personal-AI-Employee-Hackathon-0',
    description:
      'Built a fully autonomous AI employee using Claude Code that monitors Gmail, LinkedIn, Facebook, and Twitter, manages Odoo ERP, and posts social media content — all with a human-in-the-loop approval pipeline.',
    techStack: {
      backend: ['Python', 'Odoo ERP'],
      developmentTools: ['Claude Code', 'Anthropic API', 'MCP Servers', 'Playwright'],
      skills: ['Gmail API', 'Facebook Graph API', 'Twitter API v2', 'Human-in-the-Loop'],
    },
  },
];

const Projects: React.FC = () => (
  <SectionContainer id="projects">
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
          Projects
        </span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  </SectionContainer>
);

export default Projects;
