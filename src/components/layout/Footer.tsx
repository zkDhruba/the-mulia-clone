'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

const SocialIcon: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => (
  <Link 
    href={href} 
    aria-label={label} 
    className="w-6 h-6 flex items-center justify-center text-brand-dark hover:text-brand-dark/50 transition-colors duration-300"
  >
    {children}
  </Link>
);

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--footer-height', `${height}px`);
      }
    };
    updateFooterHeight();
    window.addEventListener('resize', updateFooterHeight);
    return () => window.removeEventListener('resize', updateFooterHeight);
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className="fixed bottom-0 left-0 right-0 z-0 bg-[#e5e4ce]"
    >
      <Container className="pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">

          {/* Bali Section */}
          <div className="lg:col-span-5 border-r border-[#c1c193] pr-8 lg:pr-12">
            <h3 className="text-2xl font-ortica text-brand-dark mb-10">Bali</h3>
            
            <div className="grid grid-cols-2 gap-8">
              {/* Bali Links */}
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark block mb-3">Hotels</span>
                  <nav className="flex flex-col space-y-1">
                    <Link href="/bali/the-mulia" className="text-[11px] font-manrope text-brand-dark hover:text-brand-dark/60 transition-colors">The Mulia</Link>
                    <Link href="/bali/resort" className="text-[11px] font-manrope text-brand-dark hover:text-brand-dark/60 transition-colors">Mulia Resort</Link>
                    <Link href="/bali/villas" className="text-[11px] font-manrope text-brand-dark hover:text-brand-dark/60 transition-colors">Mulia Villas</Link>
                  </nav>
                </div>
                
                <div className="flex flex-col space-y-2 mt-8">
                  <Link href="/bali/weddings" className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark">Weddings</Link>
                  <Link href="/bali/meetings" className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark">Meetings</Link>
                  <Link href="/bali/dining" className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark">Dining</Link>
                </div>
              </div>

              {/* Bali Info */}
              <div className="space-y-4">
                <p className="text-[11px] font-manrope text-brand-dark/60 leading-relaxed max-w-[200px]">
                  Jl. Raya Nusa Dua Selatan, Kawasan Sawangan Nusa Dua 80362 Bali, Indonesia
                </p>
                <div className="flex flex-col space-y-0.5 pt-1">
                  <Link href="mailto:reservation@themulia.com" className="text-[11px] font-manrope text-brand-dark/60 hover:text-brand-dark transition-colors">reservation@themulia.com</Link>
                  <Link href="mailto:info.bali@themulia.com" className="text-[11px] font-manrope text-brand-dark/60 hover:text-brand-dark transition-colors">info.bali@themulia.com</Link>
                </div>
                <Link href="tel:+623613017777" className="text-[11px] font-manrope text-brand-dark/60 block">+62 361 301 7777</Link>

                {/* Social Grid */}
                <div className="space-y-2 pt-4">
                  <div className="flex gap-4">
                    <SocialIcon href="#" label="Instagram"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></SocialIcon>
                    <SocialIcon href="#" label="Facebook"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></SocialIcon>
                    <SocialIcon href="#" label="LinkedIn"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></SocialIcon>
                    <SocialIcon href="#" label="X"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></SocialIcon>
                  </div>
                  <div className="flex gap-4">
                    <SocialIcon href="#" label="YouTube"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></SocialIcon>
                    <SocialIcon href="#" label="TikTok"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></SocialIcon>
                    <SocialIcon href="#" label="WeChat"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8.281 3.7c-4.141 0-7.502 2.906-7.502 6.5s3.361 6.5 7.502 6.5c.375 0 .75-.031 1.125-.094L11.531 18.2l-.188-1.594c2.53-.876 4.437-2.906 4.437-4.406 0-3.594-3.361-6.502-7.502-6.502zm5.719 4.313c-.188 0-.375.031-.563.031 2.999 1.094 5 3.313 5 5.75 0 .625-.125 1.219-.406 1.781l.469 1.188.125.125 1.719-.938c1.375.813 3.094 1.313 4.969 1.313 3.938 0 7.125-2.781 7.125-6.219s-3.188-6.219-7.125-6.219c-3.938 0-7.125 2.781-7.125 6.219a1 1 0 102 0c0-2.313 2.219-4.219 5.125-4.219S19.563 8.35c5.125 3 0 5.125-4.219 5.125-4.219s5.125 4.219 0 .281 4.219z"/></svg></SocialIcon>
                    <SocialIcon href="#" label="WhatsApp"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></SocialIcon>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-6 h-6 border border-brand-dark/20 flex items-center justify-center text-[8px] font-bold text-brand-dark/60">HRH</span>
                    <span className="w-6 h-6 border border-brand-dark/20 flex items-center justify-center text-[8px] font-bold text-brand-dark/60">N</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Jakarta Section */}
          <div className="lg:col-span-5 border-r border-[#c1c193] pr-8 lg:px-12">
            <h3 className="text-2xl font-ortica text-brand-dark mb-10">Jakarta</h3>
            
            <div className="grid grid-cols-2 gap-8">
              {/* Jakarta Links */}
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark block mb-3">Hotels</span>
                  <nav className="flex flex-col space-y-1">
                    <Link href="/jakarta/hotel-mulia" className="text-[11px] font-manrope text-brand-dark hover:text-brand-dark/60 transition-colors">Hotel Mulia</Link>
                    <Link href="/jakarta/the-suites" className="text-[11px] font-manrope text-brand-dark hover:text-brand-dark/60 transition-colors">The Suites</Link>
                  </nav>
                </div>
                
                <div className="flex flex-col space-y-2 mt-8 focus-visible:">
                  <Link href="/jakarta/weddings" className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark">Weddings</Link>
                  <Link href="/jakarta/meetings" className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark">Meetings</Link>
                  <Link href="/jakarta/dining" className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark">Dining</Link>
                </div>
              </div>

              {/* Jakarta Info */}
              <div className="space-y-4">
                <p className="text-[11px] font-manrope text-brand-dark/60 leading-relaxed max-w-[200px]">
                  Jl. Asia Afrika Senayan Jakarta 10270, Indonesia
                </p>
                <div className="flex flex-col space-y-0.5 pt-1">
                  <Link href="mailto:reservation@hotelmulia.com" className="text-[11px] font-manrope text-brand-dark/60 hover:text-brand-dark transition-colors">reservation@hotelmulia.com</Link>
                  <Link href="mailto:info.jakarta@hotelmulia.com" className="text-[11px] font-manrope text-brand-dark/60 hover:text-brand-dark transition-colors">info.jakarta@hotelmulia.com</Link>
                </div>
                <Link href="tel:+62215747777" className="text-[11px] font-manrope text-brand-dark/60 block">+62 21 574 7777</Link>

                {/* Social Grid */}
                <div className="space-y-2 pt-4">
                  <div className="flex gap-4">
                    <SocialIcon href="#" label="Instagram"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></SocialIcon>
                    <SocialIcon href="#" label="Facebook"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></SocialIcon>
                    <SocialIcon href="#" label="LinkedIn"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></SocialIcon>
                    <SocialIcon href="#" label="X"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></SocialIcon>
                  </div>
                  <div className="flex gap-4">
                    <SocialIcon href="#" label="YouTube"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></SocialIcon>
                    <SocialIcon href="#" label="TikTok"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></SocialIcon>
                    <SocialIcon href="#" label="WhatsApp"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></SocialIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Links Column */}
          <div className="lg:col-span-2 lg:text-right">
            <nav className="flex flex-col space-y-2 pt-1">
              <Link href="/privileges" className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-[#5a6e3c] hover:text-brand-dark transition-colors">Mulia Privileges</Link>
              <Link href="/gift" className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark hover:text-brand-dark/60 transition-colors">Mulia Gift</Link>
              <Link href="/blog" className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark hover:text-brand-dark/60 transition-colors">Blog</Link>
              <Link href="/careers" className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark hover:text-brand-dark/60 transition-colors">Careers</Link>
              <Link href="/gds" className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark hover:text-brand-dark/60 transition-colors">GDS</Link>
              <Link href="/contact" className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-[#c4883a] hover:text-brand-dark transition-colors">Contact Us</Link>
              <Link href="/awards" className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-brand-dark hover:text-brand-dark/60 transition-colors">Awards</Link>
            </nav>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#c1c193] py-6 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            {/* Small Mulia logo variant */}
            <div className="w-8 h-8 rounded-full border border-[#c1c193] flex items-center justify-center text-[10px] font-serif text-brand-dark/40">
              M
            </div>
            <span className="text-[10px] font-manrope text-brand-dark/40 tracking-wide">
              © 2024 PT. MULIA GRAHA TATALESTARI. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-manrope text-brand-dark/40 tracking-wide">
            <Link href="/general" className="hover:text-brand-dark transition-colors">General</Link>
            <span className="opacity-30">/</span>
            <Link href="/privacy" className="hover:text-brand-dark transition-colors">Privacy Policy</Link>
            <span className="opacity-30">/</span>
            <Link href="/terms" className="hover:text-brand-dark transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
