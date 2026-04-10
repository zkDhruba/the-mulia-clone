"use client";

import React from 'react';
import { Container } from '@/components/layout/Container';
import { DestinationCard } from '@/components/shared/DestinationCard';

interface Destination {
  title: string;
  description: string;
  image: string;
  tag: string;
  href: string;
}

interface DestinationsSectionProps {
  destinations: Destination[];
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ destinations }) => {
  return (
    <section className="bg-background py-24 lg:py-32 space-y-20 lg:space-y-32">
      {/* Intro Context Area */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-20 items-start">
          {/* Left Column: Context Text */}
          <div className="lg:col-span-1 pt-2 lg:pt-4">
            <p className="text-[10px] lg:text-[11px] leading-relaxed text-text-muted tracking-wide max-w-[280px]">
              At Mulia Hotels, we celebrate life&apos;s finest moments with timeless luxury. Our exquisite accommodations and world-class facilities ensure memorable experiences, embodying elegance, comfort, and refinement, making every stay truly extraordinary.
            </p>
          </div>
          
          {/* Right Column: Hero Statement */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-dark leading-[1.05] lg:max-w-4xl tracking-tight">
              Mulia Hotels, since 1997, has set a new standard for refined luxury. From Jakarta to Bali, our properties, including Hotel Mulia Senayan and Mulia Bali, invite guests to experience glamour luxury.
            </h2>
          </div>
        </div>
      </Container>

      {/* destinations Gallery Area */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-20">
          {destinations.map((destination) => (
            <DestinationCard 
              key={destination.title}
              {...destination}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
