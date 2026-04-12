"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ImageWrapper } from '@/components/shared/ImageWrapper';
import Link from 'next/link';

export const DiningHeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] lg:h-[80vh] min-h-[500px] max-h-[800px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWrapper 
          src="/images/dining.webp" 
          alt="Mulia Dining" 
          fill 
          priority
          className="object-cover transition-transform duration-[20s] ease-linear hover:scale-110" 
        />
        {/* Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-black/35 z-10" />
      </div>

      {/* Content Area */}
      <Container className="relative z-20 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6 lg:space-y-8">
          
          {/* Kicker */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block text-xs lg:text-sm font-manrope font-bold uppercase tracking-[0.3em] text-white/90"
          >
            The Best Restaurants &amp; Bars
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-[5rem] font-ortica font-light leading-tight tracking-tight"
          >
            Mulia Dining
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm lg:text-base font-manrope font-normal leading-relaxed text-white/80 max-w-2xl mx-auto"
          >
            At Mulia Hotels, we pride ourselves on innovative culinary arts, from authentic Indonesian flavours to global gastronomy experiences and handcrafted cocktails at our luxury hotels in Jakarta and Bali.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <Link 
              href="/dining/bali"
              className="px-10 py-3.5 rounded-full bg-white text-brand-alocasia text-xs font-manrope font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/20 hover:text-white hover:backdrop-blur-md border border-transparent hover:border-white/30"
            >
              Bali Restaurants
            </Link>
            <Link 
              href="/dining/jakarta"
              className="px-10 py-3.5 rounded-full bg-white text-brand-alocasia text-xs font-manrope font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/20 hover:text-white hover:backdrop-blur-md border border-transparent hover:border-white/30"
            >
              Jakarta Restaurants
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
