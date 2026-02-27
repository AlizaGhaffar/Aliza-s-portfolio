"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const container = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero: React.FC = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07070f]">

    {/* ── Animated gradient orbs ── */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-32 -left-32 w-[560px] h-[560px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)' }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, transparent 70%)' }}
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute -bottom-24 left-1/3 w-[480px] h-[480px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)' }}
        animate={{ x: [0, 60, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <motion.div
        className="absolute top-2/3 left-1/4 w-[320px] h-[320px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>

    {/* ── Subtle grid overlay ── */}
    <div
      className="absolute inset-0 opacity-[0.025] pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />

    {/* ── Main content ── */}
    <motion.div
      className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Available badge */}
      <motion.div variants={item} className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-violet-500/30 bg-violet-500/10 text-violet-300 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={item}
        className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight mb-4 leading-none"
      >
        <span
          className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 animate-gradient-shift"
        >
          ALIZA
        </span>
        <span className="block text-white">GHAFFAR</span>
      </motion.h1>

      {/* Role */}
      <motion.p variants={item} className="text-xl sm:text-2xl font-semibold text-slate-300 mb-3">
        Certified Agentic AI Engineer{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
          &amp; Full-Stack Developer
        </span>
      </motion.p>

      {/* Tagline */}
      <motion.p variants={item} className="text-base sm:text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
        Spec-driven development for scalable AI-powered applications
      </motion.p>

      {/* Info chips */}
      <motion.div variants={item} className="flex flex-wrap justify-center gap-3 mb-10">
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm backdrop-blur-sm">
          <MapPinIcon className="h-4 w-4 text-pink-400" />
          Karachi, Pakistan
        </span>
        <a
          href="mailto:alizaghaffar23123@gmail.com"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm hover:border-violet-400/50 hover:text-violet-300 transition-colors backdrop-blur-sm"
        >
          <EnvelopeIcon className="h-4 w-4 text-cyan-400" />
          alizaghaffar23123@gmail.com
        </a>
      </motion.div>

      {/* CTAs */}
      <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
        <Link
          href="https://github.com/AlizaGhaffar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-violet-400/40 transition-all duration-300 backdrop-blur-sm"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/aliza-ghaffar-1487362bb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold hover:from-violet-500 hover:to-pink-500 transition-all duration-300 shadow-xl shadow-violet-900/50"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </Link>
      </motion.div>
    </motion.div>

    {/* ── Scroll indicator ── */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6 }}
    >
      <span className="text-xs text-slate-600 tracking-[0.2em] uppercase">scroll</span>
      <motion.div
        className="w-px h-8 bg-gradient-to-b from-violet-500 via-pink-500 to-transparent rounded-full"
        animate={{ scaleY: [1, 0.4, 1], opacity: [0.8, 0.2, 0.8] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  </section>
);

export default Hero;
