'use client';

import * as React from 'react';
import { Button } from '@/src/components/ui/Button';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="p-8 bg-brand-50 border border-brand-100 rounded-sm text-center">
        <h3 className="text-xl font-display font-medium text-brand-900 mb-2 italic">Enquiry Received</h3>
        <p className="text-sm text-neutral-600">Thank you for contacting Websoul Digital. Our team will be in touch shortly.</p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>Send Another</Button>
      </div>
    );
  }

  return (
    <div className="p-8 bg-neutral-50/50 border border-neutral-100 rounded-sm italic">
      <h3 className="text-xl font-bold text-neutral-900 mb-6">Send an Enquiry</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-900" required />
          <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-900" required />
        </div>
        <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-900" required />
        <select className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-900" required>
          <option value="">Interested in...</option>
          <option value="trust">Trust Services</option>
          <option value="consultancy">Digital Consultancy</option>
          <option value="disp">DISP Advisory</option>
          <option value="careers">Careers</option>
        </select>
        <textarea placeholder="How can we help?" rows={4} className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-900" required></textarea>
        <Button type="submit" isLoading={isSubmitting} className="w-full py-4 text-xs font-bold uppercase tracking-[0.2em]">Submit Enquiry</Button>
      </form>
    </div>
  );
}
