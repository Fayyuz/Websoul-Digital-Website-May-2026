import * as React from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { Button } from '@/src/components/ui/Button';
import { Zap, ShieldCheck, Network, Award, Building2, Terminal } from 'lucide-react';

export default function DigitalConsultancyPage() {
  return (
    <>
      <PageHeader 
        eyebrow="Capability Line 02"
        title="Secure digital delivery for a stronger Australia."
        subtitle="We provide security-cleared consultancy expertise across ICT, cyber, and digital transformation for government and defence sectors."
      />
      
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: 'Program & Project Delivery', desc: 'End-to-end management of complex ICT programs with a focus on security and governance.' },
              { icon: ShieldCheck, title: 'Cyber Uplift', desc: 'Practical security improvements tailored to national security and defence requirements.' },
              { icon: Network, title: 'Cloud Transformation', desc: 'Secure migration and management of cloud environments in protected ecosystems.' },
              { icon: Award, title: 'Governance & Assurance', desc: 'Ensuring your digital investments meet stringent compliance and quality standards.' },
              { icon: Building2, title: 'Service Transition', desc: 'Smooth operational handover and transformation of ICT services.' },
              { icon: Terminal, title: 'Technical Strategy', desc: 'Strategic architecture and technology roadmaps for trusted environments.' }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-neutral-100 hover:border-brand-200 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-brand-50 flex items-center justify-center rounded-sm mb-8">
                  <item.icon className="w-6 h-6 text-brand-900" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="bg-brand-900 p-12 md:p-20 relative overflow-hidden">
             {/* Technical Motif */}
             <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
               <svg viewBox="0 0 100 100" height="100%" width="100%" preserveAspectRatio="none">
                 <path d="M0 0L100 100M100 0L0 100" stroke="white" strokeWidth="0.5" />
                 <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.2" fill="none" />
               </svg>
             </div>
             
             <div className="relative z-10 max-w-2xl">
               <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-8 tracking-tight italic">Why choose Websoul for Digital Consultancy?</h2>
               <p className="text-brand-100 text-lg mb-10 opacity-80">
                 Our team brings deep experience in national security and defence environments. We understand the specific constraints and requirements of security-cleared delivery.
               </p>
               <Button variant="secondary" size="lg">Discuss a Project</Button>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
