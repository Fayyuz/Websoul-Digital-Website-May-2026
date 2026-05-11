'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Zap, Globe, Lock } from 'lucide-react';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-white">
      {/* Background Graphic Motif */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
           <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
             <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
           </pattern>
           <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-brand-50 border border-brand-100 mb-8"
          >
            <Shield className="w-3 h-3 text-brand-900" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-900 font-bold">
              Websoul Digital
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.9] tracking-tight text-neutral-950 mb-8"
          >
            Trusted people.<br />
            Secure delivery.<br />
            Stronger organisations.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-500 leading-relaxed mb-12 max-w-2xl"
          >
            Websoul Digital helps build the capability needed to operate with confidence in trusted environments. We integrate Trust Services, Digital Consultancy, and DISP Advisory under one brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="group">
              Discuss Your Needs
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Our Services
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function TrustBand() {
  const items = [
    { icon: Globe, label: 'Australian-owned' },
    { icon: Shield, label: 'Canberra-based' },
    { icon: Lock, label: 'Security-focused' },
    { icon: Zap, label: 'Delivery-led' },
    { icon: Shield, label: 'Government-aware' },
    { icon: Lock, label: 'Defence-aware' },
  ];

  return (
    <div className="border-y border-neutral-100 bg-neutral-50/50 py-8 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center md:justify-start group">
              <item.icon className="w-4 h-4 text-neutral-400 group-hover:text-brand-900 transition-colors" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-neutral-900 transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
