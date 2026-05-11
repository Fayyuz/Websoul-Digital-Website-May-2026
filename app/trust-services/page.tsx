import * as React from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { Button } from '@/src/components/ui/Button';
import { UserCheck } from 'lucide-react';

export default function TrustServicesPage() {
  return (
    <>
      <PageHeader 
        eyebrow="Capability Line 01"
        title="Trusted screening and identity services."
        subtitle="Building the foundation of workforce trust through identity verification, document validation, and background screening."
      />
      
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-neutral-400 mb-6 italic">Personnel Security</h3>
                <h2 className="text-3xl md:text-4xl font-display font-medium text-neutral-900 mb-6 tracking-tight italic">Workforce integrity starts with screening.</h2>
                <p className="text-neutral-500 leading-relaxed mb-8">
                  Websoul Digital provides high-assurance screening services designed for Australian industries where trust is a core requirement. We combine technology with rigorous process to ensure you mobilize the right people reliably.
                </p>
                <ul className="space-y-4">
                  {['National Police Checks', 'Identity Document Verification', 'Background & Reference Screening', 'Secure Onboarding Workflows'].map((s, i) => (
                    <li key={i} className="flex gap-3 items-center text-sm font-medium text-neutral-700 uppercase tracking-widest text-[11px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-900" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2 aspect-square bg-brand-50 border border-brand-100 flex items-center justify-center p-12">
                 <UserCheck className="w-32 h-32 text-brand-900 opacity-20" />
              </div>
            </div>

            <div className="p-12 border border-brand-100 bg-brand-50/20 text-center">
               <span className="inline-block px-3 py-1 bg-brand-900 text-white text-[10px] uppercase font-mono tracking-widest mb-6">Coming Soon</span>
               <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4 italic">Next Generation Trust Services</h3>
               <p className="text-neutral-500 max-w-xl mx-auto text-sm leading-relaxed mb-8">
                 We are currently finalizing our digital screening platform for Australian businesses. Built to meet government and defence-alignment standards.
               </p>
               <Button>Register Interest for Early Access</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
