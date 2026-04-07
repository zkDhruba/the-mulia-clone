import React from 'react';
import { cn } from '@/lib/utils';
import { BaseProps } from '@/types';

export const Container: React.FC<BaseProps> = ({ children, className }) => {
  return (
    <div className={cn('mx-auto w-full max-w-[var(--spacing-container)] px-[var(--spacing-global)]', className)}>
      {children}
    </div>
  );
};
