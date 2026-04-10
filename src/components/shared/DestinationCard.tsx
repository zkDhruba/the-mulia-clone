"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { CardProps } from '@/types';
import { ImageWrapper } from '@/components/shared/ImageWrapper';

export const DestinationCard: React.FC<CardProps> = ({ 
  image, 
  title, 
  description, 
  href, 
  tag,
  className 
}) => {
  return (
    <div className={cn('group flex flex-col space-y-6', className)}>
      {/* Image Container */}
      <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
        <ImageWrapper 
          src={image} 
          alt={title || ''} 
          className="transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col space-y-3 lg:space-y-4 pr-4">
        {tag && (
          <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.3em] text-brand-dark/60">
            {tag}
          </span>
        )}
        
        <h3 className="text-xl lg:text-3xl font-serif text-brand-dark leading-tight -mt-1 group-hover:text-brand-accent transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm lg:text-sm text-text-muted leading-relaxed max-w-lg">
          {description}
        </p>
        
        {href && (
          <Link 
            href={href} 
            className="inline-flex items-center space-x-3 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.25em] text-brand-dark group/link pt-2"
          >
            <span>Explore</span>
            <div className="relative w-8 lg:w-10 h-[1.5px] bg-brand-dark/30 overflow-hidden">
               <div className="absolute inset-0 bg-brand-dark transition-transform duration-500 -translate-x-full group-hover/link:translate-x-0" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
