"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionIndicatorProps {
  sections: { id: string; name: string }[];
  color?: string;
}

export const SectionIndicator: React.FC<SectionIndicatorProps> = ({ 
  sections, 
  color = "text-[#5a4033]" 
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentActive: string | null = null;
      
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is above 30% of the viewport height,
          // and the bottom is at least 20% visible, it's considered active.
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.2) {
            currentActive = section.name;
          }
        }
      }
      
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-2 w-full flex justify-center z-[100] pointer-events-none h-0">
      <div className="flex items-center gap-12 pt-8">
        {/* Home Icon */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`pointer-events-auto opacity-40 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${color}`}
          aria-label="Back to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </button>

        {/* Section Name Wrapper to prevent layout shift */}
        <div className="min-w-[140px] flex justify-start">
          <AnimatePresence mode="wait">
            {activeSection && (
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0.4, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`${color} text-[10px] md:text-xs font-manrope font-bold uppercase tracking-[0.3em] bg-transparent whitespace-nowrap`}
              >
                {activeSection}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
