import React from 'react';
import { AboutUsSection } from '@/components/sections/AboutUsSection';

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#f5f2eb] flex flex-col">
      {/* 
        You might want to include your Navbar or HeaderPremium here 
        if it's not already in the root layout.
      */}
      
      <main className="flex-grow">
        <AboutUsSection />
      </main>
    </div>
  );
}