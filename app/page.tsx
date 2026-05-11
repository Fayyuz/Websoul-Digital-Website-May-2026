import * as React from 'react';
import Link from 'next/link';
import { HeroSection, TrustBand } from '@/src/components/sections/HeroSection';
import { ServicesOverview } from '@/src/components/sections/ServicesOverview';
import { WhyWebsoulSection } from '@/src/components/sections/WhyWebsoulSection';
import { GatewayReadinessForm } from '@/src/components/sections/GatewayReadinessForm';
import { Button } from '@/src/components/ui/Button';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBand />
      <ServicesOverview />
      <WhyWebsoulSection />

      {/* Sectors Section */}
      <section className="py-24 bg-white border-y border-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-900 font-bold mb-4 italic">Sectors Served</h2>
            <p className="text-3xl md:text-5xl font-display font-medium text-neutral-900 tracking-tight">Capability for Australia&apos;s secure future.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Australian Government',
              'Defence Industry',
              'Government Suppliers',
              'Regulated Sectors',
              'Critical Infrastructure',
              'Community Safety'
            ].map((sector, i) => (
              <div key={i} className="p-6 border border-neutral-100 bg-neutral-50/50 flex flex-col items-center text-center justify-center hover:bg-white hover:border-brand-200 hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 flex items-center justify-center mb-4 text-brand-900">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gateway Readiness CTA Section */}
      <section className="py-24 bg-brand-900 text-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-300 font-bold mb-6">Gateway Readiness</h2>
                <p className="text-4xl md:text-5xl font-display font-medium mb-8 tracking-tight">Are you ready to operate in trusted markets?</p>
                <p className="text-brand-100 text-lg leading-relaxed mb-8 opacity-80">
                  Assess your current security posture and governance maturity. Our structured assessment helps you identify gaps and accelerate your journey to compliance.
                </p>
                <ul className="space-y-4 mb-10">
                  {['DISP Readiness Assessment', 'Security Governance Uplift', 'Policy & Documentation Review', 'Trust Workflow Integration'].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <GatewayReadinessForm />
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-display font-medium text-neutral-950 mb-8 tracking-tight">Trusted capability starts here</h2>
            <p className="text-lg text-neutral-500 mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you need better screening, stronger digital delivery, or clearer security readiness, Websoul Digital helps you move forward with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Talk to Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button variant="outline" size="lg">Work With Websoul</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
