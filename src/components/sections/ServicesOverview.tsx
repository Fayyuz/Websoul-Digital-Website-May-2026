'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, UserCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Button } from '../ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  comingSoon?: boolean;
  className?: string;
}

function ServiceCard({ title, description, icon: Icon, href, comingSoon, className }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group p-8 bg-white border border-neutral-100 rounded-sm flex flex-col h-full hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300",
        className
      )}
    >
      <div className="w-12 h-12 bg-brand-50 flex items-center justify-center rounded-sm mb-8 group-hover:bg-brand-900 transition-colors duration-300">
        <Icon className="w-6 h-6 text-brand-900 group-hover:text-white transition-colors duration-300" />
      </div>
      
      {comingSoon && (
        <span className="inline-block px-2 py-0.5 rounded-full bg-brand-50 text-[9px] font-mono text-brand-900 font-bold uppercase tracking-wider mb-4 border border-brand-100">
          Coming Soon
        </span>
      )}
      
      <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4 tracking-tight leading-tight">
        {title}
      </h3>
      <p className="text-neutral-500 text-sm leading-relaxed mb-10 flex-grow">
        {description}
      </p>
      
      <Link href={href} className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-brand-900 group-hover:gap-4 transition-all duration-300">
        Learn More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

export function ServicesOverview() {
  const services = [
    {
      title: 'Trust Services',
      description: 'Identity, document, and background screening services for secure Australian workforces. Including police checks and verified onboarding workflows.',
      icon: UserCheck,
      href: '/trust-services',
      comingSoon: true,
    },
    {
      title: 'Digital Consultancy',
      description: 'Security-cleared ICT, cyber, cloud transformation, and program delivery. Built for government and defence environments where execution matters.',
      icon: Server,
      href: '/digital-consultancy',
    },
    {
      title: 'DISP Advisory',
      description: 'Defence Industry Security Program readiness, governance uplift, and security documentation support for businesses entering the defence market.',
      icon: ShieldCheck,
      href: '/disp-advisory',
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-900 font-bold mb-4 italic">
              Our Capabilities
            </h2>
            <p className="text-4xl md:text-5xl font-display font-medium text-neutral-900 tracking-tight leading-[1.1]">
              Integrated trust for high-consequence environments.
            </p>
          </div>
          <Button variant="outline" className="shrink-0">
            View All Services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
