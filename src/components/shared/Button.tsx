import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/types';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  isLoading, 
  leftIcon, 
  rightIcon, 
  href, 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider';
  
  const variants = {
    primary: 'bg-brand-alocasia text-text-alt hover:bg-brand-accent hover:text-brand-alocasia',
    secondary: 'bg-brand-sage text-brand-alocasia hover:bg-brand-accent hover:text-brand-alocasia',
    outline: 'border border-brand-alocasia text-brand-alocasia hover:bg-brand-alocasia hover:text-text-alt',
    text: 'text-brand-alocasia hover:text-brand-accent',
    ghost: 'bg-transparent text-brand-alocasia hover:bg-brand-bg-secondary hover:text-brand-accent',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg font-bold',
  };

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], sizes[size], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} disabled={isLoading} {...props}>
      {content}
    </button>
  );
};
