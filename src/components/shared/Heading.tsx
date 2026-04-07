import React from 'react';
import { cn } from '@/lib/utils';
import { BaseProps } from '@/types';

interface HeadingProps extends BaseProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'display' | 'title' | 'subtitle' | 'card';
  align?: 'left' | 'center' | 'right';
}

export const Heading: React.FC<HeadingProps> = ({ 
  children, 
  as: Component = 'h2', 
  variant = 'title', 
  align = 'left',
  className 
}) => {
  const variants = {
    display: 'text-5xl lg:text-8xl font-light tracking-tighter uppercase leading-none',
    title: 'text-3xl lg:text-5xl font-light uppercase tracking-wide leading-tight',
    subtitle: 'text-xl lg:text-2xl font-normal uppercase tracking-widest text-brand-accent',
    card: 'text-lg lg:text-xl font-medium uppercase tracking-wider',
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <Component className={cn(variants[variant], alignments[align], className)}>
      {children}
    </Component>
  );
};
