"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ImageWrapper } from '@/components/shared/ImageWrapper';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { withBase } from '@/lib/basePath';

interface HeroProps {
  image?: string;
  overlayOpacity?: number;
  showBackground?: boolean;
  showContent?: boolean;
}

const navButtons = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Why Bali", href: "#bali" },
  { label: "About Us", href: withBase("/about") },
  { label: "Contact Us", href: "#contact-us" },
];

export const HeroSection: React.FC<HeroProps> = ({
  image,
  overlayOpacity = 20,
  showBackground = true,
  showContent = true,
}) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Layer */}
      {showBackground && (
        <div className="absolute inset-0 z-0">
          <ImageWrapper 
            src={image} 
            alt="Hero Background" 
            fill 
            priority
            className="object-cover" 
          />
          <div 
            className="absolute inset-0 bg-black/20" 
            style={{ opacity: overlayOpacity / 100 }}
          />
          {/* Visual Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
        </div>
      )}

      {showContent && (
        <Container className="relative z-10 flex flex-col h-full items-center text-white">
          {/* Top Navigation Buttons - Positioned manually from top */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-24 lg:mt-32 flex flex-wrap justify-center gap-4 lg:gap-6 w-full"
          >
            {navButtons.map((btn, index) => (
              <Link
                key={index}
                href={btn.href}
                className="px-8 py-2.5 border border-white rounded-xl text-[14px] lg:text-[16px] font-manrope font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-[2px]"
              >
                {btn.label}
              </Link>
            ))}
          </motion.div>

          {/* Centered Logo and Subtitle - Centered in the screen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center justify-center -mt-10 lg:-mt-20"
          >
            <h1 className="text-[5rem] md:text-[8rem] lg:text-[12rem] font-ortica font-light tracking-[-0.02em] leading-none mb-1">
              RAWASI
            </h1>
            <p className="text-base md:text-lg lg:text-2xl font-manrope font-light uppercase tracking-[0.5em] text-white/95">
              PROPERTY DEVELOPMENT
            </p>
          </motion.div>

          {/* Bottom CTA - Positioned from bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-32 lg:mb-40"
          >
            <Link
              href="#what-we-do"
              className="px-14 py-4 bg-white text-[#4a3a2a] text-[10px] lg:text-[12px] font-manrope font-bold uppercase tracking-[0.25em] hover:bg-olive-600/95 hover:text-white transition-all duration-300 shadow-2xl"
            >
              LEARN MORE
            </Link>
          </motion.div>
        </Container>
      )}
    </section>
  );
};
