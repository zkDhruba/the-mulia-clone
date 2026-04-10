"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const HeaderPremium: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState("The Mulia");
  const [dates, setDates] = useState("04/10/26 - 04/10/26");
  const [guests, setGuests] = useState("Add guests");

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#f3f3ea] border-b border-black/[0.05] transition-all duration-300">
      <Container className="px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Logo Area */}
          <Link href="/" className="flex-shrink-0 mr-8 lg:mr-12">
            <img 
              src="https://cdn.prod.website-files.com/6624ff6a5db57a668993dd4c/6628d4f8c1482560a4868fb4_Logo%20Gradient.svg" 
              alt="Mulia Logo" 
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* Integrated Booking Bar - Desktop */}
          <div className="hidden lg:flex flex-1 items-center justify-between max-w-4xl mx-auto border-l border-r border-black/[0.08]">
            {/* Property Select */}
            <div className="flex-1 px-8 py-2 flex flex-col cursor-pointer hover:bg-black/[0.02] transition-colors group">
              <span className="text-[11px] font-manrope font-semibold uppercase tracking-wider text-black/40 mb-1">Property</span>
              <div className="flex items-center justify-between">
                <span className="text-sm font-manrope font-normal text-brand-alocasia">{selectedProperty}</span>
              </div>
            </div>

            <div className="h-12 w-[1px] bg-black/[0.08]" />

            {/* Dates Select */}
            <div className="flex-1 px-8 py-2 flex flex-col cursor-pointer hover:bg-black/[0.02] transition-colors group">
              <span className="text-[11px] font-manrope font-semibold uppercase tracking-wider text-black/40 mb-1">Dates</span>
              <span className="text-sm font-manrope font-normal text-brand-alocasia">{dates}</span>
            </div>

            <div className="h-12 w-[1px] bg-black/[0.08]" />

            {/* Guests Select */}
            <div className="flex-1 px-8 py-2 flex flex-col cursor-pointer hover:bg-black/[0.02] transition-colors group">
              <span className="text-[11px] font-manrope font-semibold uppercase tracking-wider text-black/40 mb-1">Guest(s)</span>
              <span className="text-sm font-manrope font-normal text-black/30 group-hover:text-brand-alocasia transition-colors">{guests}</span>
            </div>

            {/* Action Button */}
            <div className="px-6">
              <button className="bg-brand-alocasia text-white rounded-full px-8 py-3.5 text-[11px] font-manrope font-bold uppercase tracking-[0.15em] hover:bg-black transition-all duration-300 shadow-sm">
                CHECK AVAILABILITY
              </button>
            </div>
          </div>

          {/* Right Side Icons & Mobile Toggle */}
          <div className="flex items-center gap-4 lg:gap-8 ml-8">
            {/* Language Icon */}
            <button className="text-brand-alocasia hover:opacity-60 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>
            
            {/* Hamburger Menu */}
            <button className="flex flex-col gap-[5px] group p-2">
              <div className="w-6 h-[1.5px] bg-brand-alocasia transition-all group-hover:w-4" />
              <div className="w-6 h-[1.5px] bg-brand-alocasia transition-all group-hover:w-5" />
              <div className="w-6 h-[1.5px] bg-brand-alocasia transition-all" />
            </button>
          </div>
        </div>

        {/* Mobile Search Trigger - visible on smaller screens */}
        <div className="lg:hidden pb-4">
          <button className="w-full bg-brand-alocasia text-white rounded-md py-3 text-xs font-bold uppercase tracking-widest">
            Search
          </button>
        </div>
      </Container>
    </header>
  );
};

