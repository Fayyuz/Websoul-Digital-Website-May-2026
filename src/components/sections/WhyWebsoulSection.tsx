'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Target, Settings, MousePointer2, ShieldCheck } from 'lucide-react';

export function WhyWebsoulSection() {
  const features = [
    {
      title: 'Integrated trust model',
      description: 'We connect screening, delivery, and security readiness into one cohesive framework, reducing friction across your operations.',
      icon: Target
    },
    {
      title: 'Built for high-trust environments',
      description: 'Our methodology is designed specifically for government, defence, and critical infrastructure where security is paramount.',
      icon: ShieldCheck
    },
    {
      title: 'Practical and delivery-led',
      description: 'We prioritize outcomes over activity. Our consultants focus on practical implementation that builds lasting capability.',
      icon: Settings
    },
    {
      title: 'Boutique and responsive',
      description: 'As a specialized firm, we provide senior-led engagement and the flexibility to move faster than larger consultancies.',
      icon: MousePointer2
    }
  ];

  return (
    <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-300 font-bold mb-6">
              The Websoul Advantage
            </h2>
            <p className="text-4xl md:text-6xl font-display font-medium leading-[1.1] mb-8 tracking-tight">
              Bridging the gap between trust and execution.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-xl">
              Most organisations treat screening, digital delivery, and security readiness as separate challenges. Websoul connects them through an integrated model that strengthens your entire organisation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-sm bg-brand-800 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-brand-200" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white">{f.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square bg-brand-950 rounded-sm p-1 overflow-hidden border border-brand-800">
             {/* Abstract technical graphic motif */}
             <div className="absolute inset-0 opacity-20">
               <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M10 10H90V90H10V10Z" stroke="white" strokeWidth="0.5" />
                 <path d="M30 10V90" stroke="white" strokeWidth="0.2" />
                 <path d="M70 10V90" stroke="white" strokeWidth="0.2" />
                 <line x1="10" y1="30" x2="90" y2="30" stroke="white" strokeWidth="0.2" />
                 <line x1="10" y1="70" x2="90" y2="70" stroke="white" strokeWidth="0.2" />
                 <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
                 <circle cx="50" cy="50" r="5" fill="white" />
                 <path d="M10 10L90 90" stroke="white" strokeWidth="0.1" />
                 <path d="M90 10L10 90" stroke="white" strokeWidth="0.1" />
               </svg>
             </div>
             
             <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
               <div className="text-center">
                 <div className="text-[120px] font-display font-medium leading-none mb-4 text-brand-800">
                   01
                 </div>
                 <div className="text-xs font-mono uppercase tracking-[0.4em] text-brand-400">
                   Integrated Model
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
