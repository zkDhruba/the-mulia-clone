"use client";

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

export const HeaderPremium: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-brand-dark/5 py-4 lg:py-3 transition-all duration-300">
      <Container>
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
             <div className="flex flex-col items-center">
                <span className="text-3xl font-serif text-brand-dark tracking-tighter transition-transform duration-300 group-hover:scale-105">M</span>
                <span className="text-[7px] uppercase tracking-[0.4em] font-bold text-brand-dark -mt-1">Mulia</span>
             </div>
          </Link>

          {/* Integrated Booking Controls - Desktop */}
          <div className="hidden lg:flex items-center bg-white/40 rounded-full px-8 py-2 border border-brand-dark/10 divide-x divide-brand-dark/10">
            <div className="px-6 flex flex-col cursor-pointer hover:opacity-70 transition-opacity">
              <span className="text-[9px] uppercase tracking-widest font-bold text-brand-dark/50">Property</span>
              <span className="text-xs font-medium text-brand-dark">The Mulia</span>
            </div>
            
            <div className="px-6 flex flex-col cursor-pointer hover:opacity-70 transition-opacity">
              <span className="text-[9px] uppercase tracking-widest font-bold text-brand-dark/50">Dates</span>
              <span className="text-xs font-medium text-brand-dark italic">04/10/26 - 04/10/26</span>
            </div>
            
            <div className="px-6 flex flex-col cursor-pointer hover:opacity-70 transition-opacity">
              <span className="text-[9px] uppercase tracking-widest font-bold text-brand-dark/50">Guest(s)</span>
              <span className="text-xs font-medium text-brand-dark">Add guests</span>
            </div>

            <div className="pl-6">
              <button className="bg-brand-dark text-white rounded-full px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-alocasia transition-all duration-300 shadow-lg">
                Check Availability
              </button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <button className="hidden sm:flex items-center text-brand-dark hover:opacity-60 transition-opacity">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  <path d="M2 12h20"/>
               </svg>
            </button>
            
            <button className="flex flex-col items-end space-y-1.5 group cursor-pointer p-2">
               <div className="w-6 h-[1.5px] bg-brand-dark transition-all group-hover:w-4" />
               <div className="w-4 h-[1.5px] bg-brand-dark transition-all group-hover:w-6" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
