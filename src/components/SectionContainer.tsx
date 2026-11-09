"use client";

import React from 'react';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, children, className = '' }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-80px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // The transform sits on an inner wrapper so the anchor target (#id) is never offset,
  // which keeps navbar links landing in the correct place.
  return (
    <section
      id={id}
      className={`py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
