import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { withBase } from '@/lib/basePath';

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#f5f2eb] flex flex-col">
      {/* Header with Logo */}
      <header className="absolute top-0 w-full flex justify-center p-6 md:p-10 z-50 bg-yellow-100/10">
        <Link href={withBase("/")} className="relative block transition-transform hover:scale-105">
          <Image 
            src={withBase("/logos/rawasi_logo.png")} 
            alt="Rawasi Logo" 
            width={110} 
            height={110}
            className="object-contain"
          />
        </Link>
      </header>
      
      <main className="flex-grow">
        <AboutUsSection />
      </main>
    </div>
  );
}