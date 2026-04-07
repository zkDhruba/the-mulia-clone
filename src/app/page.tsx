import React from 'react';
import { HeroSection } from "@/components/sections/HeroSection";
import { BookingBar } from "@/components/sections/BookingBar";
import { ContentGrid } from "@/components/sections/ContentGrid";
import { Card } from "@/components/shared/Card";
import { NavbarHero } from "@/components/layout/NavbarHero";
import { NavbarMain } from "@/components/layout/NavbarMain";

export default function Home() {
  const destinations = [
    {
      title: "Mulia Bali",
      description: "Nusa Dua's most stunning beachfront resort featuring The Mulia, Mulia Resort & Mulia Villas.",
      image: "https://images.unsplash.com/photo-1573843225102-0ca084c6d46d?q=80&w=2070&auto=format&fit=crop",
      tag: "Bali",
      href: "/bali"
    },
    {
      title: "Hotel Mulia Jakarta",
      description: "Sophisticated luxury in the heart of Jakarta's business district with world-class dining.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      tag: "Jakarta",
      href: "/jakarta"
    },
    {
      title: "Mulia Villas",
      description: "Private pathways lead to exclusive villas with private pools and personalized butler service.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop",
      tag: "Luxury",
      href: "/villas"
    }
  ];

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
        Sticky Hero Layer:
        -sticky top-0 pins it to the viewport.
        -h-screen makes it fill the view.
        --z-10 ensures it stays behind the main content.
      */}
      <div className="sticky top-0 h-screen w-full -z-10 overflow-hidden">
        <NavbarHero />
        <HeroSection 
          title="Extraordinary Luxury Awaits"
          subtitle="Mulia Hotels & Resorts"
          description="Indulge in a world of refined elegance and exceptional service in Bali and Jakarta."
          ctaText="Book Your Stay"
          secondaryCtaText="Explore Destinations"
          secondaryCtaHref="#destinations"
        />
      </div>

      {/* 
        Main Content Layer:
        -relative z-20 pulls it above the sticky hero.
        -bg-white (or any opaque background) ensures it covers the hero as you scroll.
      */}
      <section className="relative z-20 bg-white">
        {/* NavbarMain becomes sticky when it reaches the top, seamlessly replacing NavbarHero */}
        <NavbarMain />
        
        {/* Booking Bar */}
        <div className="relative z-20 w-full bg-white pt-4 lg:pt-8 shadow-sm">
          <BookingBar />
        </div>

        {/* Destinations Grid */}
        <div className="bg-white py-10 lg:py-20">
          <ContentGrid 
            // id="destinations"
            title="Our Award-Winning Destinations"
            subtitle="Explore Mulia"
            description="From the white sands of Nusa Dua to the vibrant heart of Jakarta, discover luxury that knows no bounds."
            centered
          >
            {destinations.map((dest) => (
              <Card key={dest.title} {...dest} />
            ))}
          </ContentGrid>
        </div>

        {/* Experience Section Placeholder */}
        <div className="bg-brand-bg-secondary w-full py-20 lg:py-32">
          <ContentGrid 
            title="Culinary Journeys"
            subtitle="Dining at Mulia"
            description="Savor world-class flavors across our diverse range of restaurants and lounges."
            centered
          >
            {dining.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </ContentGrid>
        </div>
        
        {/* Additional sections would go here */}
      </section>
    </div>
  );
}
