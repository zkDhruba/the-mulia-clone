"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

// Using inline SVGs to match the aesthetic and avoid missing dependencies
const steps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
        <path d="M18 14h-8"/>
        <path d="M15 18h-5"/>
        <path d="M10 6h8v4h-8V6Z"/>
      </svg>
    ),
    title: "We Develop",
    subtitle: "FOUNDATION & VISION",
    description: "We identify land opportunity, shape the vision, and structure the project foundation—ensuring the development is positioned for long-term success."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
    ),
    title: "We Design",
    subtitle: "ARCHITECTURE & PLANNING",
    description: "Our architectural team crafts innovative and sustainable designs that harmonize with the environment while maximizing aesthetic appeal and functional utility."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
        <path d="M9 22v-4h6v4"/>
        <path d="M8 6h.01"/>
        <path d="M16 6h.01"/>
        <path d="M12 6h.01"/>
        <path d="M12 10h.01"/>
        <path d="M12 14h.01"/>
        <path d="M16 10h.01"/>
        <path d="M16 14h.01"/>
        <path d="M8 10h.01"/>
        <path d="M8 14h.01"/>
      </svg>
    ),
    title: "We Build",
    subtitle: "CONSTRUCTION & EXECUTION",
    description: "With rigorous project management and premium materials, we bring the vision to life, ensuring quality construction and timely delivery."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
      </svg>
    ),
    title: "We Manage",
    subtitle: "OPERATIONS & HANDOVER",
    description: "We provide comprehensive property management services to ensure your investment maintains its value and delivers exceptional experiences to residents."
  }
];

export const TimelineSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // useScroll tracks the progress of the target element within the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine the active step based on scroll percentage.
    // E.g., for 4 steps: 0-0.25 is step 0, 0.25-0.5 is step 1, etc.
    const step = Math.min(Math.floor(latest * steps.length), steps.length - 1);
    if (step !== activeStep) {
      setActiveStep(step);
    }
  });

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#fbfbfb]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Content Area */}
        <Container className="flex-1 flex flex-col items-center justify-center w-full px-4 text-center max-w-2xl mx-auto pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              {/* Icon Badge */}
              <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#162721] text-white flex items-center justify-center mb-8 shadow-xl">
                {steps[activeStep].icon}
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-ortica font-light text-[#162721] mb-5 tracking-tight">
                {steps[activeStep].title}
              </h2>

              {/* Subtitle */}
              <h3 className="text-[9px] md:text-[11px] font-manrope font-bold text-[#8a8a8a] uppercase tracking-[0.25em] mb-8">
                {steps[activeStep].subtitle}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-[15px] font-manrope text-[#8a8a8a] font-light leading-relaxed max-w-xl mx-auto">
                {steps[activeStep].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </Container>

        {/* Timeline Progress Bar Area */}
        <div className="w-full max-w-xl mx-auto pb-24 px-8 md:px-16">
          <div className="relative w-full">
            {/* Progress Lines Container */}
            <div className="absolute top-1/2 left-[7px] right-[7px] h-[1px] -translate-y-1/2 z-0">
              {/* Background Line */}
              <div className="absolute inset-0 bg-[#e0e0e0] w-full h-full" />
              
              {/* Active Progress Line (Driven by scroll) */}
              <motion.div 
                className="absolute left-0 top-0 h-full bg-[#162721] origin-left"
                style={{ scaleX: scrollYProgress }}
              />
            </div>

            {/* Dots Container */}
            <div className="relative z-10 flex justify-between items-center w-full">
              {steps.map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div 
                    className={cn(
                      "w-[14px] h-[14px] rounded-full border-[1.5px] transition-colors duration-500",
                      i <= activeStep 
                        ? "bg-[#162721] border-[#162721]" 
                        : "bg-[#fbfbfb] border-[#162721]"
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Start/Finish Labels */}
          <div className="flex justify-between items-center w-full mt-5">
            <span className="text-[9px] font-serif text-[#a0a0a0] uppercase tracking-widest translate-x-[-20%]">Start</span>
            <span className="text-[9px] font-serif text-[#a0a0a0] uppercase tracking-widest translate-x-[20%]">Finish</span>
          </div>
        </div>

      </div>
    </section>
  );
};
