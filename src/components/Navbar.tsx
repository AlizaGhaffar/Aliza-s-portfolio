"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'About',     href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Approach',  href: '#approach' },
  { label: 'Interests', href: '#interests' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'bg-[#07070f]/85 backdrop-blur-md border-white/10 shadow-lg shadow-violet-950/30'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <span data-text="aliza.dev" className="font-mono font-bold text-lg bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift">
          aliza.dev
        </span>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-violet-300 text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="mailto:alizaghaffar23123@gmail.com"
            className="btn-motion btn-gradient px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-semibold shadow-lg shadow-violet-900/40"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden -mr-2 p-2.5 text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu md:hidden absolute top-full left-0 right-0 bg-[#07070f]/[0.98] border-b border-white/10 px-4 py-3 space-y-1 ${
          menuOpen ? 'is-open' : ''
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block py-3 text-slate-300 hover:text-violet-300 text-sm font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <Link
          href="mailto:alizaghaffar23123@gmail.com"
          className="btn-motion btn-gradient block mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-semibold text-center"
          onClick={() => setMenuOpen(false)}
        >
          Hire Me
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
