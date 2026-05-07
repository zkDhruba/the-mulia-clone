import React from 'react';
import { HeroSection } from "@/components/sections/HeroSection";
import { HeaderPremium } from "@/components/layout/HeaderPremium";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { PlanningGridSection } from "@/components/sections/PlanningGridSection";
import { NavbarHero } from "@/components/layout/NavbarHero";
import { ContentGrid } from "@/components/sections/ContentGrid";
import { Card } from "@/components/shared/Card";
import { PlanningGridSection2 } from '@/components/sections/PlanningGridSection2';
import { DiningHeroSection } from '@/components/sections/DiningHeroSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { withBase } from '@/lib/basePath';

export default function Home() {
  const dining = [
    {
      title: "Soleil",
      description: "Recognized as the world's best brunch, offering Mediterranean and Pan-Asian cuisine.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
      tag: "Fine Dining",
      href: "/dining/soleil"
    },
    {
      title: "Table8",
      description: "Authentic Cantonese and Szechuan delicacies in a regal setting.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
      tag: "Chinese",
      href: "/dining/table8"
    },
    {
      title: "The Cafe",
      description: "An innovative 'multi-cuisine' dining experience with various cooking theaters.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2072&auto=format&fit=crop",
      tag: "International",
      href: "/dining/the-cafe"
    }
  ];

  return (
    <div className="relative w-full">
      {/* 
        1. STATIC BACKGROUND LAYER:
        This stays pinned at the top.
      */}
      <div className="sticky top-0 h-screen w-full -z-10 overflow-hidden">
        <HeroSection 
          showContent={false}
          image={withBase("/images/hero_real_bg_1.jpg")}
        />
      </div>

      {/* 
        2. SCROLLING CONTENT LAYER:
        This layer contains the Hero Nav and Logo. 
        It scrolls normally, making the content move UP during scroll.
      */}
      <div className="relative h-screen w-full z-0 -mt-[100vh]">
        <HeroSection 
          showBackground={false}
        />
      </div>

      {/* 
        3. MAIN CONTENT LAYER:
        This section eventually covers both the image and the hero text area.
      */}
      <section className="relative z-20 bg-[#fbfbfb]">
        {/* Timeline Process Section: What We Do */}
        <TimelineSection />

        {/* Timeline Process Section: Why Choose Us */}
        <WhyChooseUsSection />

        {/* About Us Section */}
        <AboutUsSection />

        {/* HeaderPremium provides the integrated booking and nav experience seen in the reference images */}
        {/* <HeaderPremium /> */}

        {/* destinations Section */}
        {/* <DestinationsSection destinations={[
          {
            title: "Hotel Mulia Senayan & The Suites",
            description: "Opened in 1997 and rising 40 storeys high, Hotel Mulia Senayan stands as one of Jakarta's iconic luxury hotel. Offering two distinct experiences, Hotel Mulia is perfect for business and leisure, while The Suites, with dedicated butler service, prioritise privacy.",
            image: withBase("/images/destination1.webp"),
            tag: "SENAYAN, JAKARTA",
            href: withBase("/jakarta")
          },
          {
            title: "The Mulia, Mulia Resort & Villas",
            description: "Discover Bali's first integrated destination, where three unique resorts await. Enjoy beachfront luxury at The Mulia, serene all-villa sanctuaries at Mulia Villas, and vibrant entertainment at Mulia Resort, all within one exclusive compound.",
            image: withBase("/images/destination2.webp"),
            tag: "NUSA DUA, BALI",
            href: withBase("/bali")
          }
        ]} /> */}

        {/* Events Section */}
        {/* <EventsSection /> */}

        {/* Planning Section 1 */}
        {/* <PlanningGridSection /> */} 

        {/* Planning Section 2 */}
        {/* <PlanningGridSection2 /> */}

        {/* Dining Hero Section */}
        {/* <DiningHeroSection /> */}

        {/* Newsletter Section */}
        <NewsletterSection />
        
        {/* Additional sections would go here */}
      </section>
    </div>
  );
}
