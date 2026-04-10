"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/shared/Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Bali', href: '/bali' },
  { label: 'Jakarta', href: '/jakarta' },
  { label: 'The Mulia', href: '/the-mulia' },
  { label: 'Resort', href: '/resort' },
  { label: 'Villas', href: '/villas' },
  { label: 'Dining', href: '/dining' },
  { label: 'Offers', href: '/offers' },
];

export const NavbarMain: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-background shadow-sm py-2 transition-all duration-300">
        <Container className="flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <span className="text-2xl font-bold uppercase tracking-widest text-brand-dark transition-colors duration-300">
              Mulia
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-xs font-semibold uppercase tracking-widest text-brand-dark transition-colors duration-300 hover:text-brand-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              size="sm" 
              variant="primary" 
              className="hidden lg:flex"
            >
              Book Now
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 relative z-50" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className={cn(
                'w-6 h-0.5 mb-1.5 transition-all duration-300 bg-brand-dark',
                isMenuOpen && 'translate-y-2 rotate-45'
              )} />
              <div className={cn(
                'w-6 h-0.5 mb-1.5 transition-all duration-300 bg-brand-dark',
                isMenuOpen && 'opacity-0'
              )} />
              <div className={cn(
                'w-6 h-0.5 transition-all duration-300 bg-brand-dark',
                isMenuOpen && '-translate-y-2 -rotate-45'
              )} />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 top-[60px] z-40 bg-background flex flex-col"
          >
            <nav className="flex flex-col items-center space-y-6 pt-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  className="text-2xl font-light uppercase tracking-widest text-brand-dark hover:text-brand-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-8 w-full max-w-xs px-4">
                <Button className="w-full" size="lg">Book Now</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
