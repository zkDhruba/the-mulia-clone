import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { withBase } from '@/lib/basePath';
import { Container } from '@/components/layout/Container';
import { SectionIndicator } from '@/components/layout/SectionIndicator';

export default function WhyBaliPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#132B2B] flex flex-col font-sans overflow-hidden">
      
      {/* Header */}
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

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-end pb-12 pt-32 lg:pt-48">
        {/* Background Image with Gradient Fade */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={withBase("/images/why_bali_hero_image.jfif")} 
            alt="Pura Ulun Danu Bratan Temple in Bali" 
            fill 
            className="object-cover object-right lg:object-center"
            priority
          />
          {/* Gradient to fade from dark teal on the left to transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#132B2B] via-[#132B2B]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#132B2B]/40 via-transparent to-[#132B2B]" />
        </div>

        <Container className="relative z-10 w-full h-full flex flex-col justify-between flex-1">
          <div className="max-w-2xl mt-auto pb-24">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-ortica font-light text-white leading-[1.1] mb-8">
              Why <br />
              <span className="font-serif italic text-[#ba9264]">Bali</span> <br />
              is Different.
            </h1>
            <p className="text-[#8AACAC] text-lg md:text-xl max-w-lg leading-relaxed">
              Most emerging markets offer either growth potential or stability. Bali is one of the few places in the world that has consistently delivered both, backed by real tourism data, a strengthening economy, and a legal framework that protects foreign capital.
            </p>
          </div>
        </Container>

        {/* Hero Bottom Stats - Full Width */}
        <div className="relative z-10 w-full border-t-2 border-[#ba9264] bg-transparent">
          <Container className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="flex flex-col items-center justify-center space-y-3 py-6 md:py-0">
                <span className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-manrope font-semibold">GDP GROWTH</span>
                <span className="text-[#ba9264] text-4xl lg:text-5xl font-ortica">5.11%</span>
                <span className="text-white/40 text-[9px] md:text-[10px] font-manrope">Indonesia, 2025<sup className="text-[7px]">1</sup></span>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 py-6 md:py-0">
                <span className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-manrope font-semibold">ANNUAL TOURISTS</span>
                <span className="text-[#ba9264] text-4xl lg:text-5xl font-ortica">6.95M</span>
                <span className="text-white/40 text-[9px] md:text-[10px] font-manrope">+9.7% year-on-year<sup className="text-[7px]">2</sup></span>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 py-6 md:py-0">
                <span className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-manrope font-semibold">EXPAT RESIDENTS</span>
                <span className="text-[#ba9264] text-4xl lg:text-5xl font-ortica">50K+</span>
                <span className="text-white/40 text-[9px] md:text-[10px] font-manrope">International community, 2025</span>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-center gap-6 md:gap-12 mt-12 text-[9px] md:text-[10px] text-white/60 font-manrope uppercase tracking-[0.2em]">
              <a href="#macro" className="flex items-center gap-3 hover:text-white transition-colors group">
                <span className="text-[#ba9264] group-hover:text-white transition-colors">01</span> 
                <span className="font-semibold">ECONOMIC FOUNDATION</span>
              </a>
              <div className="w-[1px] h-4 bg-white/20 hidden md:block"></div>
              <a href="#tourism" className="flex items-center gap-3 hover:text-white transition-colors group">
                <span className="text-[#ba9264] group-hover:text-white transition-colors">02</span> 
                <span className="font-semibold">TOURISM ENGINE</span>
              </a>
            </div>
          </Container>
        </div>
      </section>

      {/* Content wrapper for SectionIndicator */}
      <div className="relative z-20">
        <SectionIndicator 
          sections={[
            { id: 'macro', name: 'Macro Economy' },
            { id: 'tourism', name: 'Tourism Surge' }
          ]} 
          color="text-[#ba9264]" 
        />

        {/* 01 Macro Economy Section */}
        <section id="macro" className="relative w-full bg-[#f5f2eb] py-24 md:py-32">
        <Container className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-[#ba9264] text-[10px] font-manrope uppercase tracking-[0.3em] font-bold">01 Macro Economy</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-ortica text-[#5a4033] mt-6 mb-8 leading-[1.1] max-w-3xl">
              A Macro Environment Built for Property Investment... <br className="hidden md:block"/> for Property Investment
            </h2>
            <p className="text-[#5a4033]/80 font-serif italic text-lg md:text-xl max-w-3xl leading-relaxed">
              Indonesia is one of Southeast Asia's most resilient economies. Defining Bali as a lifestyle apparel brand, moving with the shifts in global growing lifestyle demographics, a common grounds with more than a business environment, for the more traditional scale property asset class operators in the area.
            </p>
          </div>

          {/* Stats Blocks Repeated (as per design) */}
          {[1, 2].map((blockIndex) => (
            <div key={blockIndex} className="mb-16 last:mb-0">
              <div className="w-full bg-[#1e3b3b] p-8 md:p-12 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <h3 className="text-[#ba9264] text-5xl md:text-6xl font-ortica whitespace-nowrap">
                    505.46 <span className="text-2xl md:text-3xl">T IDR</span>
                  </h3>
                  <div className="flex flex-col space-y-2">
                    <span className="text-white font-manrope text-sm font-semibold tracking-wide">Indonesia's GDP in 2023</span>
                    <p className="text-white/60 font-serif italic text-sm md:text-base max-w-md">
                      A testament to our resilient post-pandemic recovery and strong, sustained growth among Southeast Asian economies. Bali has been an economic driver, steadily supported by the nation's rising focus on holistic growth and high numbers of global digital nomads, which significantly strengthens long-term property investments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-[#ba9264]/20">
                <div className="flex flex-col">
                  <span className="text-[#ba9264] text-4xl font-ortica mb-2">5.11%</span>
                  <span className="text-[#5a4033] text-[9px] uppercase tracking-[0.2em] font-manrope font-bold mb-4">INDONESIA GDP GROWTH RATE</span>
                  <p className="text-[#5a4033]/70 font-serif text-sm leading-relaxed">
                    Surpasses the global average of 3.1%. Bali stands out as a high-growth zone due to robust tourism and steady domestic investments into infrastructure, paving strong ways to real estate resilience and offering a highly favorable environment for investors seeking sustainable returns.
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#ba9264] text-4xl font-ortica mb-2">50K+</span>
                  <span className="text-[#5a4033] text-[9px] uppercase tracking-[0.2em] font-manrope font-bold mb-4">ACTIVE GLOBAL DIGITAL NOMADS</span>
                  <p className="text-[#5a4033]/70 font-serif text-sm leading-relaxed">
                    With Bali taking on a flexible remote work friendly visa options, a steady and growing expat base means consistent demand for premium residential and commercial spaces. A growing demographic that is moving beyond short term rentals, seeking mid-to-long term luxury homes and co-working infrastructures that support modern lifestyles.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* 02 Tourism Surge Section */}
      <section id="tourism" className="relative w-full bg-[#132B2B] py-24 md:py-32">
        <Container className="max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="text-[#ba9264] text-[10px] font-manrope uppercase tracking-[0.3em] font-bold">02 Tourism Surge</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-ortica text-white mt-6 mb-8 leading-[1.1]">
              The World Keeps Choosing Bali.
            </h2>
            <p className="text-white/70 font-serif italic text-lg md:text-xl max-w-3xl leading-relaxed">
              Bali isn't just a travel destination. For many, it's a second home. The island's appeal continues to thrive across decades, earning it consistent top rankings globally. The continuous influx of tourists fuels strong demand for high-end accommodation and premium lifestyle properties, making it an ever-reliable market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Card 1 */}
            <div className="border border-[#ba9264]/30 bg-[#163535] p-8 flex flex-col hover:bg-[#1a3d3d] transition-colors">
              <div className="w-6 h-6 bg-[#ba9264]/20 flex items-center justify-center rotate-45 mb-6">
                <div className="w-2 h-2 bg-[#ba9264]" />
              </div>
              <h4 className="text-white font-manrope text-sm font-semibold mb-4">Anything but Mainstream</h4>
              <p className="text-white/60 font-serif text-xs leading-relaxed">
                Bali continues to defend its titles and rank positions. In 2024, it placed #2 in TripAdvisor's "Best of the Best" destinations globally. Its unique blend of untouched nature, profound culture, and world-class luxury experiences creates an environment that goes beyond mere holidaying. It offers an unparalleled lifestyle, constantly driving international buyers towards premium property markets.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-[#ba9264]/30 bg-[#163535] p-8 flex flex-col hover:bg-[#1a3d3d] transition-colors">
              <div className="w-6 h-6 bg-[#86af49]/20 flex items-center justify-center rotate-45 mb-6">
                <div className="w-2 h-2 bg-[#86af49]" />
              </div>
              <h4 className="text-white font-manrope text-sm font-semibold mb-4">Consistently Top-Level Resources</h4>
              <p className="text-white/60 font-serif text-xs leading-relaxed">
                Bali was awarded "Best Island in Asia" by Travel + Leisure readers in 2023. Unlike cyclical markets, Bali's enduring appeal guarantees strong, year-round occupancy for luxury villas and upscale resorts. The consistent flow of affluent visitors seeking high-end accommodations ensures robust yields for property investors and developers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-[#ba9264]/30 bg-[#163535] p-8 flex flex-col hover:bg-[#1a3d3d] transition-colors">
              <div className="w-6 h-6 bg-[#4e8c9b]/20 flex items-center justify-center rotate-45 mb-6">
                <div className="w-2 h-2 bg-[#4e8c9b]" />
              </div>
              <h4 className="text-white font-manrope text-sm font-semibold mb-4">In-line with Global Demands</h4>
              <p className="text-white/60 font-serif text-xs leading-relaxed">
                Beyond tourism, Bali has become a primary destination for global MICE events. It successfully hosted the G20 Summit in 2022 and continues to host major international conferences. This transformation solidifies Bali as a professional hub, attracting business travelers and long-term stays, thereby diversifying the demographic of property renters and creating a dynamic housing demand.
              </p>
            </div>

             {/* Card 4 (Duplicate content to match design) */}
             <div className="border border-[#ba9264]/30 bg-[#163535] p-8 flex flex-col hover:bg-[#1a3d3d] transition-colors">
              <div className="w-6 h-6 bg-[#ba9264]/20 flex items-center justify-center rotate-45 mb-6">
                <div className="w-2 h-2 bg-[#ba9264]" />
              </div>
              <h4 className="text-white font-manrope text-sm font-semibold mb-4">Anything but Mainstream</h4>
              <p className="text-white/60 font-serif text-xs leading-relaxed">
                Bali continues to defend its titles and rank positions. In 2024, it placed #2 in TripAdvisor's "Best of the Best" destinations globally. Its unique blend of untouched nature, profound culture, and world-class luxury experiences creates an environment that goes beyond mere holidaying. It offers an unparalleled lifestyle, constantly driving international buyers towards premium property markets.
              </p>
            </div>

            {/* Card 5 (Duplicate content to match design) */}
            <div className="border border-[#ba9264]/30 bg-[#163535] p-8 flex flex-col hover:bg-[#1a3d3d] transition-colors">
              <div className="w-6 h-6 bg-[#86af49]/20 flex items-center justify-center rotate-45 mb-6">
                <div className="w-2 h-2 bg-[#86af49]" />
              </div>
              <h4 className="text-white font-manrope text-sm font-semibold mb-4">Consistently Top-Level Resources</h4>
              <p className="text-white/60 font-serif text-xs leading-relaxed">
                Bali was awarded "Best Island in Asia" by Travel + Leisure readers in 2023. Unlike cyclical markets, Bali's enduring appeal guarantees strong, year-round occupancy for luxury villas and upscale resorts. The consistent flow of affluent visitors seeking high-end accommodations ensures robust yields for property investors and developers.
              </p>
            </div>

            {/* Card 6 (Duplicate content to match design) */}
            <div className="border border-[#ba9264]/30 bg-[#163535] p-8 flex flex-col hover:bg-[#1a3d3d] transition-colors">
              <div className="w-6 h-6 bg-[#4e8c9b]/20 flex items-center justify-center rotate-45 mb-6">
                <div className="w-2 h-2 bg-[#4e8c9b]" />
              </div>
              <h4 className="text-white font-manrope text-sm font-semibold mb-4">In-line with Global Demands</h4>
              <p className="text-white/60 font-serif text-xs leading-relaxed">
                Beyond tourism, Bali has become a primary destination for global MICE events. It successfully hosted the G20 Summit in 2022 and continues to host major international conferences. This transformation solidifies Bali as a professional hub, attracting business travelers and long-term stays, thereby diversifying the demographic of property renters and creating a dynamic housing demand.
              </p>
            </div>
          </div>

          <div className="w-full border-t border-b border-[#ba9264]/50 py-8 text-center">
            <h3 className="text-[#ba9264] text-xl md:text-2xl font-serif italic mb-2">
              With Bali sweeping all these travel awards, it's easy to see why it attracts so much attention.
            </h3>
          </div>
        </Container>
      </section>
      </div>
    </div>
  );
}
