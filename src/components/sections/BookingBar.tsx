"use client";

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/shared/Button';
import { cn } from '@/lib/utils';

export const BookingBar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn(
      "w-full bg-white/95 backdrop-blur-md shadow-2xl py-6 lg:py-8 border-y border-brand-sage/20",
      className
    )}>
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Booking Inputs Placeholder */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-16 w-full lg:w-auto">
            <div className="flex flex-col space-y-2 group cursor-pointer">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-accent">Check-In / Out</span>
              <span className="text-sm font-medium border-b border-brand-sage group-hover:border-brand-accent transition-colors pb-1">
                Select Dates
              </span>
            </div>
            
            <div className="flex flex-col space-y-2 group cursor-pointer">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-accent">Guests</span>
              <span className="text-sm font-medium border-b border-brand-sage group-hover:border-brand-accent transition-colors pb-1">
                2 Adults, 0 Children
              </span>
            </div>

            <div className="flex flex-col space-y-2 group cursor-pointer">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-accent">Destination</span>
              <span className="text-sm font-medium border-b border-brand-sage group-hover:border-brand-accent transition-colors pb-1">
                Explore All Hotels
              </span>
            </div>
          </div>

          <Button size="lg" className="w-full lg:w-auto shadow-md">
            Check Availability
          </Button>
        </div>
      </Container>
    </div>
  );
};
