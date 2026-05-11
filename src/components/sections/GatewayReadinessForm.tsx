'use client';

import * as React from 'react';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

export function GatewayReadinessForm() {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 1500);
  };

  return (
    <div className="bg-white border border-neutral-100 rounded-sm shadow-2xl shadow-brand-900/5 p-8 md:p-12 max-w-2xl mx-auto">
      {step === 1 && (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-display font-medium text-neutral-900 mb-2">Gateway Readiness Assessment</h3>
            <p className="text-neutral-500 text-sm">Initial structured enquiry for organizations requiring trust or security readiness support.</p>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Full Name</label>
                <input type="text" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-100 rounded-sm text-sm focus:bg-white focus:border-brand-900 focus:outline-none transition-all" placeholder="John Citizen" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Organisation</label>
                <input type="text" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-100 rounded-sm text-sm focus:bg-white focus:border-brand-900 focus:outline-none transition-all" placeholder="Company Pty Ltd" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Operating Environment</label>
              <select className="w-full px-4 py-3 bg-neutral-50 border border-neutral-100 rounded-sm text-sm focus:bg-white focus:border-brand-900 focus:outline-none transition-all">
                <option>Federal Government</option>
                <option>Defence Supply Chain</option>
                <option>Critical Infrastructure</option>
                <option>Regulated Industry</option>
                <option>Other / Not Specified</option>
              </select>
            </div>

            <Button className="w-full" onClick={() => setStep(2)}>
              Next Step
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-display font-medium text-neutral-900 mb-2">Project & Trust Details</h3>
            <p className="text-neutral-500 text-sm">Please provide more detail about your specific requirements.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Readiness Stage</label>
              <div className="grid grid-cols-2 gap-4">
                {['Initial Enquiry', 'Action Planning', 'Uplift Required', 'Audit Ready'].map((s) => (
                  <label key={s} className="flex items-center gap-3 p-3 border border-neutral-100 rounded-sm cursor-pointer hover:bg-brand-50 transition-colors">
                    <input type="radio" name="stage" className="accent-brand-900" />
                    <span className="text-xs text-neutral-700">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Brief Summary</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-100 rounded-sm text-sm focus:bg-white focus:border-brand-900 focus:outline-none transition-all" placeholder="Tell us about the project or security requirement..."></textarea>
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 accent-brand-900" id="consent" required />
              <label htmlFor="consent" className="text-[10px] text-neutral-400 leading-relaxed uppercase tracking-wider">
                I consent to Websoul Digital processing my data for the purpose of this enquiry.
              </label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
              <Button type="submit" isLoading={isSubmitting}>Submit Assessment</Button>
            </div>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="text-center py-12 space-y-6">
          <div className="w-16 h-16 bg-brand-100 text-brand-900 mx-auto rounded-full flex items-center justify-center">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-display font-medium text-neutral-900 tracking-tight">Assessment Received</h3>
          <p className="text-neutral-500 max-w-sm mx-auto">
            Our team will review your readiness data and contact you within one business day to discuss next steps.
          </p>
          <Button variant="outline" onClick={() => setStep(1)}>Start New Assessment</Button>
        </div>
      )}
    </div>
  );
}
