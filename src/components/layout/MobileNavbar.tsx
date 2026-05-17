'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { withBase } from '@/lib/basePath';

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when offcanvas is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className="md:hidden fixed top-6 right-6 z-[100]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="w-12 h-12 rounded-full bg-[#132B2B]/90 backdrop-blur-md flex items-center justify-center text-[#ba9264] border border-[#ba9264]/30 shadow-lg"
        >
          {isOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 8h16M4 16h16"></path></svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-[90] bg-[#132B2B] flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col space-y-10 text-center">
              <Link 
                href={withBase("/")} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-ortica text-[#F5EED8] hover:text-[#ba9264] transition-colors"
              >
                Home
              </Link>
              <Link 
                href={withBase("/why-bali")} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-ortica text-[#F5EED8] hover:text-[#ba9264] transition-colors"
              >
                Why Bali
              </Link>
              <Link 
                href={withBase("/about")} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-ortica text-[#F5EED8] hover:text-[#ba9264] transition-colors"
              >
                About Us
              </Link>
            </nav>
            
            {/* Contact info in mobile menu */}
            <div className="absolute bottom-12 flex flex-col items-center gap-4">
              <Link href="mailto:info@rawasi.co.uk" className="text-[#ba9264] font-manrope text-sm uppercase tracking-widest">
                info@rawasi.co.uk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
