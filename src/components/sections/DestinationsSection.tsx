"use client";

import React from 'react';
import { Container } from '@/components/layout/Container';
import { DestinationCard } from '@/components/shared/DestinationCard';
import { ScrollRevealText } from '@/components/shared/ScrollRevealText';

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
            <p className="text-sm lg:text-base leading-relaxed text-text-muted tracking-wide max-w-[280px]">
              At Mulia Hotels, we celebrate life&apos;s finest moments with timeless luxury. Our exquisite accommodations and world-class facilities ensure memorable experiences, embodying elegance, comfort, and refinement, making every stay truly extraordinary.
            </p>
          </div>
          
          {/* Right Column: Hero Statement with Scroll Reveal Effect */}
          <div className="lg:col-span-3">
            <ScrollRevealText 
              className="text-2xl md:text-3xl lg:text-5xl font-ortica font-light leading-[1.05] lg:max-w-4xl tracking-tight"
              text="Mulia Hotels, since 1997, has set a new standard for refined luxury. From Jakarta to Bali, our properties, including Hotel Mulia Senayan and Mulia Bali, invite guests to experience glamour luxury."
            />
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
