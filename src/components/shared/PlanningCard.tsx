"use client";

import React from 'react';
import Link from 'next/link';
import { ImageWrapper } from '@/components/shared/ImageWrapper';
import { withBase } from '@/lib/basePath';

interface PlanningCardProps {
  label: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const PlanningCard: React.FC<PlanningCardProps> = ({ 
  label, 
  title, 
  description, 
  image, 
  href 
}) => {
  return (
    <div className="group flex flex-col space-y-6">
      {/* Image Container */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[400px] overflow-hidden rounded-sm">
        <ImageWrapper 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col space-y-3 max-w-[400px]">
        <span className="text-[12px] font-manrope font-bold uppercase tracking-[0.15em] text-brand-dark/60">
          {label}
        </span>
        
        <h3 className="text-2xl font-serif text-brand-dark leading-tight -mt-1 group-hover:text-brand-accent transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm font-manrope font-normal text-text-muted leading-relaxed">
          {description}
        </p>
        
        <Link 
          href={withBase(href)} 
          className="inline-flex items-center space-x-4 text-[12px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark group/link pt-2"
        >
          <span>Explore</span>
          <div className="relative w-12 h-[1px] bg-brand-dark/30 overflow-hidden">
             <div className="absolute inset-0 bg-brand-dark transition-transform duration-500 -translate-x-full group-hover/link:translate-x-0" />
          </div>
        </Link>
      </div>
    </div>
  );
};
