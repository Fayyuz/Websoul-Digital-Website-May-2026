import * as React from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { Button } from '@/src/components/ui/Button';
import { ShieldCheck, UserCheck, Building2, Lock, CheckCircle2 } from 'lucide-react';

export default function DISPAdvisoryPage() {
  return (
    <>
      <PageHeader 
        eyebrow="Capability Line 03"
        title="Defence security readiness."
        subtitle="Practical readiness and security governance support for businesses entering or operating within the Australian Defence Industry."
      />
      
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-medium text-neutral-900 tracking-tight italic">Strengthening your position in the defence market.</h2>
              <p className="text-neutral-500 text-lg leading-relaxed">
                The Defence Industry Security Program (DISP) is critical for businesses looking to work on defence contracts. Websoul Digital provides the practical advisory support needed to achieve and maintain compliance.
              </p>
              
              <div className="space-y-4">
                {[
                  'DISP Readiness & Application Support',
                  'Security Governance Uplift',
                  'Cyber Security Maturity Assessments',
                  'Personnel & Physical Security Policy',
                  'Security Culture & Awareness Training'
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 border border-neutral-100 rounded-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-900" />
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full md:w-auto">Start Your Readiness Journey</Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: 'Governance', icon: ShieldCheck },
                 { label: 'Personnel', icon: UserCheck },
                 { label: 'Physical', icon: Building2 },
                 { label: 'Cyber', icon: Lock }
               ].map((mod, i) => (
                 <div key={i} className="aspect-square bg-neutral-50 border border-neutral-100 flex flex-col items-center justify-center gap-4 text-center p-6">
                    <mod.icon className="w-8 h-8 text-brand-900 opacity-40" />
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">{mod.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
