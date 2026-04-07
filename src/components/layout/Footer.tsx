import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/shared/Heading';
import { Text } from '@/components/shared/Text';
import { Section } from '@/components/layout/Section';

export const Footer: React.FC = () => {
  const footerLinks = {
    hotels: [
      { label: 'The Mulia', href: '/the-mulia' },
      { label: 'Mulia Resort', href: '/resort' },
      { label: 'Mulia Villas', href: '/villas' },
      { label: 'Hotel Mulia Jakarta', href: '/jakarta' },
    ],
    experience: [
      { label: 'Dining', href: '/dining' },
      { label: 'Spa & Wellness', href: '/spa' },
      { label: 'Weddings', href: '/weddings' },
      { label: 'Meetings', href: '/meetings' },
    ],
    company: [
      { label: 'Careers', href: '/careers' },
      { label: 'Awards', href: '/awards' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  };

  return (
    <Section variant="dark" padding="large" className="pb-12 lg:pb-16 border-t border-brand-alocasia/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-6">
            <Heading as="h4" variant="card" className="text-white">Mulia</Heading>
            <Text className="text-white/60 max-w-xs">
              Experience the pinnacle of luxury with Mulia Hotels & Resorts. 
              Award-winning destinations in Bali and Jakarta.
            </Text>
          </div>

          {[
            { title: 'Our Hotels', links: footerLinks.hotels },
            { title: 'Experiences', links: footerLinks.experience },
            { title: 'Company', links: footerLinks.company },
          ].map((group) => (
            <div key={group.title} className="space-y-6">
              <Heading as="h5" variant="card" className="text-white/40 text-sm">{group.title}</Heading>
              <nav className="flex flex-col space-y-3">
                {group.links.map((link) => (
                  <Link 
                    key={link.label} 
                    href={link.href} 
                    className="text-white/80 hover:text-brand-accent transition-colors text-sm uppercase tracking-widest"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Text variant="caption" className="text-white/30 text-[10px]">
            © {new Date().getFullYear()} Mulia Hotels & Resorts. All Rights Reserved.
          </Text>
          <div className="flex space-x-6 text-white/30 text-[10px] uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
