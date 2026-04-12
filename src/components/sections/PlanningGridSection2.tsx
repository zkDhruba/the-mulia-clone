"use client";

import React from 'react';
import { Container } from '@/components/layout/Container';
import { PlanningCard } from '@/components/shared/PlanningCard';

export const PlanningGridSection2: React.FC = () => {
  const plans = [
    {
      label: "Meetings",
      title: "Your Elite Meeting Address",
      description: "Discover this ideal location featuring a selection of exclusive venues. The Grand Ballroom, exemplifying grandeur and sophistication, is perfect for extravagant events. As one of the city’s largest, spanning 2,500sqm, it comfortably accommodates up to 4,000 people.",
      image: "/images/plan-wedding-bali1.webp",
      href: "/meetings"
    },
    {
      label: "Weddings",
      title: "Happily Ever After",
      description: "In the heart of Jakarta, Hotel Mulia Senayan offers bespoke weddings with two stunning ballrooms. For a luxury ballroom wedding in Jakarta, choose the Grand Ballroom, one of the city's largest, or the exclusive Vanda Ballroom, with its crystal chandeliers, perfect for both grand and intimate celebrations.",
      image: "/images/plan-wedding-bali2.webp",
      href: "/weddings"
    }
  ];

  return (
    <section className="bg-background pb-24 lg:pb-32 pt-4 lg:pt-6">
      <Container>
        <div className="flex flex-col space-y-12 lg:space-y-16">
          {/* Section Header */}
          <h2 className="text-3xl lg:text-5xl font-serif text-brand-dark tracking-tight leading-tight">
            Plan Your Meeting or Wedding in Bali
          </h2>

          {/* Grid Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-16 lg:gap-x-6 items-stretch">
            {/* Weddings - 1/3 width */}
            <div className="lg:col-span-1">
              <PlanningCard 
                {...plans[0]}
              />
            </div>

            {/* Meetings - 2/3 width */}
            <div className="lg:col-span-2">
              <PlanningCard 
                {...plans[1]}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
