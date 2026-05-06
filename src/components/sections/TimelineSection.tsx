"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

// Using inline SVGs to match the aesthetic and avoid missing dependencies
const steps = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Our Model",
    subtitle: "FOUNDATION & VISION",
    description: "We identify land opportunity, shape the vision, and structure the project foundation—ensuring the development is positioned for long-term success."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Intro fades out and moves up slightly
  const introOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.15], ["0vh", "-10vh"]);

  // Timeline starts pushed down (25vh), and moves up to center (0vh) as intro fades
  const timelineY = useTransform(scrollYProgress, [0, 0.15], ["25vh", "0vh"]);

  // Timeline progress bar starts fading in as it moves up, to avoid jarring sliding from bottom edge
  const progressBarOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  // Progress line scales after the initial positioning phase
  const progressLineScaleX = useTransform(scrollYProgress, [0.15, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Only start changing steps AFTER the intro phase (latest > 0.15)
    if (latest <= 0.15) {
      if (activeStep !== 0) setActiveStep(0);
    } else {
      // Remaining 85% of scroll is split evenly among the 4 steps
      const progressInTimeline = (latest - 0.15) / 0.85;
      const step = Math.min(Math.floor(progressInTimeline * steps.length), steps.length - 1);
      if (step !== activeStep && step >= 0) {
        setActiveStep(step);
      }
    }
  });

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#f5f2eb]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Intro Section: What We Do */}
        <motion.div 
          className="absolute top-[18%] left-0 right-0 flex flex-col items-center px-4 text-center pointer-events-none"
          style={{ opacity: introOpacity, y: introY }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-ortica font-light text-[#5a4033] mb-6 tracking-tight">
            What We Do
          </h2>
          <p className="text-lg md:text-xl lg:text-[1.35rem] font-serif italic text-[#5a4033] max-w-3xl leading-[1.6]">
            A proven, end-to-end process built to protect your capital<br className="hidden md:block"/>
            keep you completely passive<br className="hidden md:block"/>
            and deliver on every metric
          </p>
        </motion.div>

        {/* Timeline Content Area */}
        <motion.div 
          className="absolute inset-0 flex flex-col pointer-events-auto"
          style={{ y: timelineY }}
        >
          <Container className="flex-1 flex flex-col items-center justify-center w-full px-4 text-center max-w-2xl mx-auto pt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                {/* Icon */}
                <div className="mb-4 text-[#5a4033]">
                  {steps[activeStep].icon}
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-ortica font-light text-[#5a4033] mb-5 tracking-tight">
                  {steps[activeStep].title}
                </h2>
              </motion.div>
            </AnimatePresence>
          </Container>

          {/* Timeline Progress Bar Area */}
          <motion.div 
            className="w-full max-w-xl mx-auto pb-20 px-8 md:px-16"
            style={{ opacity: progressBarOpacity }}
          >
            <div className="relative w-full">
              {/* Progress Lines Container */}
              <div className="absolute top-1/2 left-[7px] right-[7px] h-[1px] -translate-y-1/2 z-0">
                {/* Background Line */}
                <div className="absolute inset-0 bg-[#dcd8d0] w-full h-full" />
                
                {/* Active Progress Line (Driven by scroll) */}
                <motion.div 
                  className="absolute left-0 top-0 w-full h-full bg-[#5a4033] origin-left"
                  style={{ scaleX: progressLineScaleX }}
                />
              </div>

              {/* Dots Container */}
              <div className="relative z-10 flex justify-between items-center w-full">
                {steps.map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div 
                      className={cn(
                        "w-[14px] h-[14px] rounded-full border-[1.5px] transition-colors duration-500 bg-[#f5f2eb]",
                        i <= activeStep 
                          ? "border-[#5a4033]" 
                          : "border-[#dcd8d0]"
                      )}
                    >
                      {/* Inner dot fill for active steps */}
                      <div className={cn(
                        "w-full h-full rounded-full transition-opacity duration-500",
                        i <= activeStep ? "bg-[#5a4033] opacity-100" : "opacity-0"
                      )} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Start/Finish Labels */}
            <div className="flex justify-between items-center w-full mt-4">
              <span className="text-[9px] font-serif text-[#a8a39a] uppercase tracking-widest translate-x-[-20%]">Start</span>
              <span className="text-[9px] font-serif text-[#a8a39a] uppercase tracking-widest translate-x-[20%]">Finish</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

