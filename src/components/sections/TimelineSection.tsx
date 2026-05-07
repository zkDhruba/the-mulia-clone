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
    description: [] // No description for Tab 1 as requested
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5"/>
        <path d="M8 18h1"/>
        <path d="M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"/>
      </svg>
    ),
    title: "We Buy",
    description: [
      "-We source below-market land opportunities",
      "-Focus on high-growth markets",
      "-Ensure the best entry points for success."
    ]
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18h18"/>
        <path d="M19 14h-4"/>
        <path d="M15 14v-4a2 2 0 0 0-2-2h-3L8 14"/>
        <path d="M8 14H4v4"/>
        <circle cx="7" cy="18" r="2"/>
        <circle cx="17" cy="18" r="2"/>
      </svg>
    ),
    title: "We Build",
    description: [
      "We manage every project from start to finish",
      "Our development team maintain strict control over:",
      "quality, timelines, and budget"
    ]
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
        <path d="m21 3-6 6"/>
        <path d="m21 14-6-6"/>
      </svg>
    ),
    title: "We Sell",
    description: [
      "We handle sales and marketing entirely in-house",
      "Ensure every property reaches the right buyers at the right price",
      "with seamless legal completion from offer to transfer."
    ]
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="6"/>
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18"/>
        <path d="M7 6h1v4"/>
        <path d="m16.71 13.88.49-.22a2 2 0 0 0 1.2-1.74l-.2-1.2a2 2 0 0 0-1.74-1.2l-.5-.08a2 2 0 0 1-1.74-1.2l-.2-1.2a2 2 0 0 1 1.2-1.74l.49-.22"/>
      </svg>
    ),
    title: "You Earn",
    description: [
      "We structure every project around one outcome. Your return.",
      "We put investors first"
    ]
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
  // Using [0, 0.10, 0.30, 1] ensures a dead zone at the start (10%), followed by a long, 
  // smooth 20% transition where the fade-out and movement are perfectly synchronized.
  const introOpacity = useTransform(scrollYProgress, [0, 0.15, 0.2, 1], [1, 1, 0, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.10, 0.30, 1], ["0vh", "0vh", "-10vh", "-10vh"]);

  // Timeline starts pushed down (25vh), and moves up to center (0vh) as intro fades
  const timelineY = useTransform(scrollYProgress, [0, 0.10, 0.30, 1], ["25vh", "25vh", "0vh", "0vh"]);

  // Timeline progress bar starts fading in as it moves up
  const progressBarOpacity = useTransform(scrollYProgress, [0, 0.10, 0.30, 1], [0, 0, 1, 1]);

  // Progress line scales after the initial positioning phase
  const progressLineScaleX = useTransform(scrollYProgress, [0.30, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Only start changing steps AFTER the synchronized intro phase (latest > 0.30)
    if (latest <= 0.30) {
      if (activeStep !== 0) setActiveStep(0);
    } else {
      // Remaining 70% of scroll is split evenly among the 5 steps
      const progressInTimeline = (latest - 0.30) / 0.70;
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
                className="flex flex-col items-center w-full"
              >
                {/* Icon */}
                <div className="mb-4 text-[#5a4033]">
                  {steps[activeStep].icon}
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-ortica font-light text-[#5a4033] mb-8 tracking-tight">
                  {steps[activeStep].title}
                </h2>

                {/* Description */}
                {steps[activeStep].description && steps[activeStep].description.length > 0 && (
                  <div className="flex flex-col items-center space-y-2">
                    {steps[activeStep].description.map((line, index) => (
                      <p key={index} className="text-[17px] md:text-[19px] font-serif italic text-[#5a4033] max-w-2xl mx-auto text-center leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                )}
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
