import React from 'react';
import SectionContainer from './SectionContainer';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

const projects: Project[] = [
  {
    title: 'Digital Mazdoor',
    link: 'https://digital-mazdoor-app.vercel.app/',
    description:
      "An agentic AI service platform for Pakistan's informal economy. Users describe what they need in English, Urdu, or Roman Urdu, and a pipeline of specialized agents interprets the request, matches and ranks providers, works out scheduling and pricing, simulates the booking, and handles follow-ups and disputes, with a reasoning trace explaining each decision.",
    links: [
      { label: 'Live Demo', href: 'https://digital-mazdoor-app.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/AlizaGhaffar/digital_mazdoor_app' },
      { label: 'YouTube Demo', href: 'https://youtube.com/shorts/QL0uec5Lhts' },
    ],
    youtube: { id: 'QL0uec5Lhts', title: 'Digital Mazdoor demo' },
    techStack: {
      backend: ['Python', 'FastAPI'],
      frontend: ['Next.js', 'React Native (Expo)'],
      developmentTools: ['OpenRouter (DeepSeek)'],
      skills: ['Multi-Agent Pipeline', 'Reasoning Traces'],
    },
  },
  {
    title: 'NimbusFlow — CRM Digital FTE Factory',
    link: 'https://github.com/AlizaGhaffar/The-CRM-Digital-FTE-Factory-Final-Hackathon-5',
    description:
      'An AI customer-success agent that handles support requests from Gmail, WhatsApp, and a web form. Messages flow through Kafka to an agent worker that creates tickets, analyzes sentiment, searches the knowledge base, escalates to a human when needed, and replies on the original channel.',
    links: [
      { label: 'GitHub', href: 'https://github.com/AlizaGhaffar/The-CRM-Digital-FTE-Factory-Final-Hackathon-5' },
      { label: 'YouTube Demo', href: 'https://youtu.be/pL7ZdmW453I' },
    ],
    youtube: { id: 'pL7ZdmW453I', title: 'NimbusFlow demo' },
    techStack: {
      backend: ['Python', 'FastAPI'],
      frontend: ['React'],
      database: ['PostgreSQL + pgvector'],
      developmentTools: ['OpenAI Agents SDK', 'Groq (Llama)', 'Apache Kafka', 'Docker'],
      skills: ['Gmail API', 'Twilio WhatsApp'],
    },
  },
  {
    title: 'Personal AI Employee — Hackathon 0',
    link: 'https://github.com/AlizaGhaffar/Personal-AI-Employee-Hackathon-0',
    description:
      'An AI employee built on Claude Code. Python watchers monitor Gmail, LinkedIn, Facebook, and Twitter, then items move through a planning and human-approval pipeline before it acts through MCP servers for email, social posting, and Odoo ERP. Also includes an autonomous task loop and a weekly CEO briefing.',
    links: [
      { label: 'GitHub', href: 'https://github.com/AlizaGhaffar/Personal-AI-Employee-Hackathon-0' },
      { label: 'YouTube Demo', href: 'https://youtu.be/5tyrwNKJ3GM' },
    ],
    youtube: { id: '5tyrwNKJ3GM', title: 'Personal AI Employee demo' },
    techStack: {
      backend: ['Python', 'Odoo ERP'],
      developmentTools: ['Claude Code', 'MCP Servers', 'Playwright'],
      skills: ['Gmail API', 'Facebook Graph API', 'Twitter API v2', 'Human-in-the-Loop'],
    },
  },
  {
    title: 'Token-Efficient Coding Agent',
    link: 'https://github.com/sharjeelmajeed/Token-Efficient-Coding-Agent',
    description:
      'A team project: a policy-enforced coding agent built around a single FastAPI core that owns security policy, execution, persistence, and budget accounting, with thin CLI, VS Code, and read-only GitHub PR review clients. Every file edit and command needs a human approval bound to the exact diff, commands run in a network-disabled Docker sandbox, and nine switchable token-saving techniques cut model usage.',
    links: [{ label: 'GitHub', href: 'https://github.com/sharjeelmajeed/Token-Efficient-Coding-Agent' }],
    techStack: {
      backend: ['Python', 'FastAPI'],
      frontend: ['VS Code Extension (TypeScript)', 'Typer CLI'],
      database: ['SQLite'],
      developmentTools: ['Maxim AI Bifrost', 'Ollama', 'Tavily', 'Docker'],
      skills: ['Token Optimization', 'Human-in-the-Loop', 'Sandboxed Execution'],
    },
  },
  {
    title: 'Smart Buyer AI',
    link: 'https://frontend-beta-eight-18.vercel.app/',
    description:
      'A knowledge-based system that finds international companies likely to buy raw sheep wool, duck down, or cashmere. It crawls company websites, extracts grounded facts with offline NLP, and reasons over product rules to classify each lead with an explainable evidence score, cutting the false-positive rate from 85% to 15%.',
    links: [
      { label: 'Live Demo', href: 'https://frontend-beta-eight-18.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/AlizaGhaffar/Smart-Buyer-AI' },
    ],
    techStack: {
      backend: ['Python', 'FastAPI', 'BeautifulSoup'],
      frontend: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
      developmentTools: ['pytest', 'Docker'],
      skills: ['Knowledge Representation & Reasoning', 'NLP Extraction', 'Explainable AI'],
    },
  },
  {
    title: 'Physical AI Robotics Book with RAG-based Chatbot',
    link: 'https://physical-ai-robotics-book.vercel.app/',
    links: [{ label: 'GitHub', href: 'https://github.com/AlizaGhaffar/hackathon-physical-ai---robotics-book' }],
    techStack: {
      frontend: ['Docusaurus', 'React', 'TypeScript'],
      backend: ['Python', 'FastAPI'],
      database: ['Qdrant', 'Neon PostgreSQL'],
      developmentTools: ['OpenAI API', 'Cohere Embeddings'],
      skills: ['RAG Chatbot'],
    },
    description:
      'A book on physical AI robotics integrated with a RAG-based chatbot for interactive learning and query answering. Showcases the application of AI in robotics and interactive documentation.',
  },
  {
    title: 'AI Todo Chatbot',
    link: 'https://todo-ai-chatbot-lime.vercel.app/',
    links: [{ label: 'GitHub', href: 'https://github.com/AlizaGhaffar/todo-ai-chatbot' }],
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
    links: [{ label: 'GitHub', href: 'https://github.com/AlizaGhaffar/fullstack-todo-app-with-subagents' }],
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
