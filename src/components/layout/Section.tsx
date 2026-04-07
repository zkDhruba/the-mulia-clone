import React from 'react';
import { cn } from '@/lib/utils';
import { SectionProps } from '@/types';

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  id, 
  variant = 'light',
  padding = 'medium' 
}) => {
  const variants = {
    light: 'bg-background text-foreground',
    dark: 'bg-brand-alocasia text-text-alt',
    brand: 'bg-brand-bg-secondary text-brand-alocasia',
  };

  const paddings = {
    none: 'py-0',
    small: 'py-8 lg:py-12',
    medium: 'py-16 lg:py-24',
    large: 'py-24 lg:py-32',
  };

  return (
    <section 
      id={id} 
      className={cn(
        'relative w-full overflow-hidden',
        variants[variant],
        paddings[padding],
        className
      )}
    >
      {children}
    </section>
  );
};
