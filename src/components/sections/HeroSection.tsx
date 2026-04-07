"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/shared/Heading';
import { Text } from '@/components/shared/Text';
import { Button } from '@/components/shared/Button';
import { ImageWrapper } from '@/components/shared/ImageWrapper';
import { cn } from '@/lib/utils';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  overlayOpacity?: number;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  fullHeight?: boolean;
}

export const HeroSection: React.FC<HeroProps> = ({
  title = "Award-Winning Luxury Hotels",
  subtitle = "Experience the Extraordinary",
  description = "Book directly on our website for exclusive rates and special offers on business or leisure stays in Jakarta and Bali.",
  image,
  overlayOpacity = 40,
  ctaText = "Check Availability",
  ctaHref = "#",
  secondaryCtaText,
  secondaryCtaHref,
  fullHeight = true,
}) => {
  return (
    <section className={cn(
      "relative w-full h-full overflow-hidden flex items-center justify-center pt-24",
    )}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <ImageWrapper 
          src={image} 
          alt={title} 
          fill 
          priority
          className="object-cover" 
        />
        <div 
          className="absolute inset-0 bg-black" 
          style={{ opacity: overlayOpacity / 100 }}
        />
        {/* Visual Overlays (Gradient/Fade like in original) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      <Container className="relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6 lg:space-y-8"
        >
          {subtitle && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block text-sm lg:text-base uppercase tracking-[0.3em] font-semibold text-brand-sage mb-4"
            >
              {subtitle}
            </motion.span>
          )}

          <Heading as="h1" variant="display" className="text-white">
            {title}
          </Heading>

          {description && (
            <Text variant="lead" className="text-white/80 max-w-2xl mx-auto mt-6">
              {description}
            </Text>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" href={ctaHref}>
              {ctaText}
            </Button>
            {secondaryCtaText && (
              <Button size="lg" variant="outline" href={secondaryCtaHref} className="text-white border-white hover:bg-white hover:text-brand-dark">
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </motion.div>
      </Container>

      {/* Hero Navigation/Divider (Optional) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  );
};
