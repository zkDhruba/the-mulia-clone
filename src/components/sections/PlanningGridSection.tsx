"use client";

import React from 'react';
import { Container } from '@/components/layout/Container';
import { PlanningCard } from '@/components/shared/PlanningCard';

export const PlanningGridSection: React.FC = () => {
  const plans = [
    {
      label: "Weddings",
      title: "Say 'Yes' at Mulia Bali",
      description: "For those seeking pure elegance, The Mulia, Mulia Resort & Villas - Nusa Dua, Bali offers glamorous wedding settings. Choose from three chapels, two ballrooms, and eight dining venues. Our dedicated team personalises every detail, from floral arrangements to custom cakes, ensuring your dream wedding comes true.",
      image: "/images/planning-bali-1.webp",
      href: "/weddings"
    },
    {
      label: "Meetings",
      title: "Built For World Leaders",
      description: "From Heads of State discussions to corporate retreats and social gatherings, Mulia Bali offers an unparalleled meeting experience. Our beachfront resort boasts state-of-the-art facilities and versatile spaces, meticulously designed to accommodate any event.",
      image: "/images/planning-bali-2.webp",
      href: "/meetings"
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
            {/* Weddings - 2/3 width */}
            <div className="lg:col-span-2">
              <PlanningCard 
                {...plans[0]}
              />
            </div>

            {/* Meetings - 1/3 width */}
            <div className="lg:col-span-1">
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
