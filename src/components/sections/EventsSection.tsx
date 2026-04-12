"use client";

import React from 'react';
import { Container } from '@/components/layout/Container';

export const EventsSection: React.FC = () => {
  return (
    <section className="bg-[#fcfcf5] py-20 lg:py-32">
      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 lg:space-y-8">
          
          {/* Kicker */}
          <h4 className="text-[14px] font-manrope font-bold uppercase text-brand-dark tracking-[0.1em]">
            Meetings &amp; Social Events With Mulia
          </h4>
          
          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-ortica font-light leading-[1.1] text-brand-dark tracking-tight max-w-3xl">
            Discover our elegant event spaces in Jakarta or Bali, perfect for your most distinguished gatherings.
          </h2>
          
          {/* Description */}
          <p className="text-sm lg:text-base font-manrope font-normal leading-relaxed text-text-muted max-w-[600px] pt-4 lg:pt-6">
            Since 1997, Mulia Hotels has been renowned for hosting heads of state, exhibitions, conferences, and both grand and intimate weddings. Our reputation for delivering the best event experiences in Bali and Jakarta ensures unforgettable moments.
          </p>
          
        </div>
      </Container>
    </section>
  );
};
