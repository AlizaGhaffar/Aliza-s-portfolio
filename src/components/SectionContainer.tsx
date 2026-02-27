"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, children, className = '' }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};

export default SectionContainer;
