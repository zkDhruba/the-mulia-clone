"use client";

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { ImageWrapper } from '@/components/shared/ImageWrapper';
import { motion } from 'framer-motion';

export const NewsletterSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add newsletter submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="mt-16 relative w-full py-16 lg:py-24 overflow-hidden flex items-center min-h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWrapper 
          src="/images/form.jpg" 
          alt="Mulia Newsletter" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45 z-10" />
      </div>

      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-ortica text-white leading-[1.1] tracking-tight max-w-md">
              Sign Up for Exclusive Mulia Updates
            </h2>
          </motion.div>

          {/* Right Column: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div className="flex flex-col space-y-1">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors font-manrope text-sm lg:text-base italic"
                required
              />
            </div>

            <div className="flex flex-col space-y-1">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors font-manrope text-sm lg:text-base italic"
                required
              />
            </div>

            <div className="flex flex-col space-y-1">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors font-manrope text-sm lg:text-base italic"
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="px-10 py-2.5 rounded-full bg-white text-brand-dark text-[10px] font-manrope font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95"
              >
                Submit
              </button>
            </div>
          </motion.form>

        </div>
      </Container>
    </section>
  );
};
