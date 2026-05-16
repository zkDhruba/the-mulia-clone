"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'what-we-do', name: 'What We Do' },
  { id: 'why-choose-us', name: 'Why Choose Us' },
  { id: 'bali', name: 'Why Bali' },
  { id: 'contact-us', name: 'Contact Us' },
];

export const SectionIndicator: React.FC = () => {
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
    <div className="sticky top-8 w-full flex justify-center z-[100] pointer-events-none h-0">
      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.4, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[#5a4033] text-[10px] md:text-xs font-manrope font-bold uppercase tracking-[0.3em] bg-transparent"
          >
            {activeSection}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
