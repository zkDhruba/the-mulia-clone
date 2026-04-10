"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({ text, className }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.2"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  const words = text.split(" ");

  return (
    <p 
      ref={containerRef} 
      className={cn(
        "flex flex-wrap w-full text-gradient-gold", 
        className
      )}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        
        return (
          <Word 
            key={i} 
            progress={smoothProgress} 
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
};

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span className="inline-flex mr-[0.25em] whitespace-nowrap">
      {characters.map((char, i) => {
        const charStart = range[0] + (i * step);
        const charEnd = range[0] + ((i + 1) * step);
        return (
          <Character key={i} progress={progress} range={[charStart, charEnd]}>
            {char}
          </Character>
        );
      })}
    </span>
  );
};

interface CharacterProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  
  return (
    <motion.span 
      style={{ opacity }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};


