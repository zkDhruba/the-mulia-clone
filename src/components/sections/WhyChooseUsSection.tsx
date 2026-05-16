"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

const whySteps = [
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: "Proven Model",
    description: ["Proven method to deliver consistent returns"],
  },
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/>
        <path d="M12 8v4l3 3"/>
        <path d="M3.3 10h2.7"/>
        <path d="M18 10h2.7"/>
        <path d="M12 3.3V6"/>
        <path d="M12 18v2.7"/>
      </svg>
    ),
    title: "Full-Cycle Control",
    description: ["Our projects are executed with our in-house teams from start to finish"],
  },
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/>
        <path d="M17 12c0 4.5-4 7-5 7s-5-2.5-5-7 4-7 5-7 5 2.5 5 7"/>
        <path d="M12 5v14"/>
        <path d="M5 12h14"/>
      </svg>
    ),
    title: "Absolute Passivity",
    description: ["Hands off investment with regular communication and updates"],
  },
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: "Risk Management",
    description: ["We protect all investments and are fully compliant"],
  },
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" x2="6" y1="1" y2="4"/>
        <line x1="10" x2="10" y1="1" y2="4"/>
        <line x1="14" x2="14" y1="1" y2="4"/>
      </svg>
    ),
    title: "Preferred Return",
    description: ["We return investor money and profits first"],
  },
];

export const WhyChooseUsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Intro fades out and moves up slightly
  const introOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 1], [1, 1, 0, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.10, 0.30, 1], ["0vh", "0vh", "-10vh", "-10vh"]);

  // Timeline starts pushed down (25vh), and moves up to center (0vh) as intro fades
  const timelineY = useTransform(scrollYProgress, [0, 0.10, 0.30, 1], ["25vh", "25vh", "0vh", "0vh"]);

  // Timeline progress bar starts fading in as it moves up
  const progressBarOpacity = useTransform(scrollYProgress, [0, 0.10, 0.30, 1], [0, 0, 1, 1]);

  // Progress line scales after the initial positioning phase
  // We map the scroll segments exactly to the physical dot positions (0%, 25%, 50%, 75%, 100%)
  const progressLineScaleX = useTransform(
    scrollYProgress, 
    [0.30, 0.44, 0.58, 0.72, 0.86, 1], 
    [0, 0.25, 0.50, 0.75, 1, 1]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Only start changing steps AFTER the synchronized intro phase (latest > 0.30)
    if (latest <= 0.30) {
      if (activeStep !== 0) setActiveStep(0);
    } else {
      // Remaining 70% of scroll is split evenly among the 5 steps
      const progressInTimeline = (latest - 0.30) / 0.70;
      const step = Math.min(Math.floor(progressInTimeline * whySteps.length), whySteps.length - 1);
      if (step !== activeStep && step >= 0) {
        setActiveStep(step);
      }
    }
  });

  const handleDotClick = (index: number) => {
    if (!containerRef.current) return;
    
    // The total scrollable distance within this section
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    
    // Target progress calculation: Intro ends at 0.30. We add a tiny buffer (0.005) to ensure the step activates while keeping the bar right on the dot.
    const targetProgress = 0.30 + (index / whySteps.length) * 0.70 + 0.005;
    
    // Absolute top position of the container relative to the document
    const { top } = containerRef.current.getBoundingClientRect();
    const absoluteTop = window.scrollY + top;
    
    // Calculate final scroll position
    const targetScrollY = absoluteTop + (targetProgress * scrollableDistance);
    
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  return (
    <section id="why-choose-us" ref={containerRef} className="relative w-full h-[250vh] bg-[#f5f2eb]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
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
                  {whySteps[activeStep].icon}
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-ortica font-light text-[#5a4033] mb-8 tracking-tight">
                  {whySteps[activeStep].title}
                </h2>

                {/* Description */}
                {whySteps[activeStep].description && whySteps[activeStep].description.length > 0 && (
                  <div className="flex flex-col items-center space-y-2">
                    {whySteps[activeStep].description.map((line, index) => (
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
                {whySteps.map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <button 
                      onClick={() => handleDotClick(i)}
                      className={cn(
                        "w-[14px] h-[14px] rounded-full border-[1.5px] transition-all duration-500 bg-[#f5f2eb] hover:scale-125 focus:outline-none cursor-pointer",
                        i <= activeStep 
                          ? "border-[#5a4033]" 
                          : "border-[#dcd8d0]"
                      )}
                      aria-label={`Go to step ${i + 1}`}
                    >
                      {/* Inner dot fill for active steps */}
                      <div className={cn(
                        "w-full h-full rounded-full transition-opacity duration-500",
                        i <= activeStep ? "bg-[#5a4033] opacity-100" : "opacity-0"
                      )} />
                    </button>
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

        {/* Intro Section: Why Choose Us */}
        <motion.div 
          className="absolute top-[18%] left-0 right-0 z-50 flex flex-col items-center px-4 text-center pointer-events-none"
          suppressHydrationWarning
          style={{ 
            opacity: mounted ? introOpacity : 1, 
            y: mounted ? introY : "0vh" 
          }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-ortica font-light text-[#5a4033] mb-6 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl lg:text-[1.35rem] font-serif italic text-[#5a4033] max-w-3xl leading-[1.6]">
            We do things a little differently.
          </p>
          <p className="text-lg md:text-xl lg:text-[1.35rem] font-serif italic text-[#5a4033] max-w-3xl leading-[1.6]">
            Here&apos;s how we work.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
