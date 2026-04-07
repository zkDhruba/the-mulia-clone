import React from 'react';
import { cn } from '@/lib/utils';
import { BaseProps } from '@/types';

interface TextProps extends BaseProps {
  as?: 'p' | 'span' | 'p' | 'div';
  variant?: 'base' | 'lead' | 'small' | 'caption';
  align?: 'left' | 'center' | 'right';
  weight?: 'light' | 'normal' | 'medium' | 'bold';
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  as: Component = 'p', 
  variant = 'base', 
  align = 'left',
  weight = 'normal',
  className 
}) => {
  const variants = {
    base: 'text-base leading-relaxed',
    lead: 'text-lg lg:text-xl leading-relaxed font-light',
    small: 'text-sm leading-tight',
    caption: 'text-xs uppercase tracking-widest text-text-muted',
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  return (
    <Component className={cn(variants[variant], alignments[align], weights[weight], className)}>
      {children}
    </Component>
  );
};
