"use client";

import React from 'react';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';

export const AboutUsSection: React.FC = () => {
  return (
    <section id="about-us" className="relative w-full py-24 md:py-32 bg-[#f5f2eb] overflow-hidden">
      <Container className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center">
          
          {/* Main Icon/Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10"
          >
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Magnifying Glass Handle */}
                <path d="M70 70L90 90" stroke="#000000" strokeWidth="6" strokeLinecap="round" />
                {/* Magnifying Glass Circle */}
                <circle cx="45" cy="45" r="35" stroke="#000000" strokeWidth="4" />
                {/* Person Icon Inside */}
                <circle cx="45" cy="40" r="12" fill="#000000" />
                <path d="M25 70C25 60 30 54 45 54C60 54 65 60 65 70" fill="#000000" />
              </svg>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-ortica font-light text-[#5a4033] mb-16 text-center"
          >
            About Us
          </motion.h2>

          {/* Text Content */}
          <div className="space-y-8 max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-[1.25rem] font-serif italic text-[#151c0e] leading-relaxed text-left"
            >
              Rawasi Developments was founded in 2023 with a single focus: to build high-yield real estate investments that generate strong, clearly defined returns for investors.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-[1.25rem] font-serif italic text-[#151c0e] leading-relaxed text-left"
            >
              Recognising property development as the most resilient asset class, we identified Southeast Asia — and specifically Bali — as the optimal market: high growth, lower entry costs, and sustained global demand.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-[1.25rem] font-serif italic text-[#151c0e] leading-relaxed text-left"
            >
              We have built a proven model which is secure, scalable, and repeatable.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-[1.25rem] font-serif italic text-[#151c0e] leading-relaxed text-left"
            >
              We have since a skilled in-house team spanning legal, architecture, construction, project management, and sales — giving us full control over every phase of the development lifecycle.
            </motion.p>
          </div>
        </div>
      </Container>

      {/* Decorative "R" in corner (optional but matches image) */}
      {/* <div className="absolute top-12 left-12 opacity-10 hidden md:block">
         <span className="text-6xl font-ortica text-[#5a4033]">R</span>
      </div> */}
    </section>
  );
};
