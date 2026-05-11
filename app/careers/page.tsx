import * as React from 'react';

export default function CareersPage() {
  return (
    <div className="pt-40 pb-24 italic">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-display font-medium text-neutral-950 mb-8 tracking-tighter leading-[0.9]">Careers.</h1>
          <p className="text-xl text-neutral-500 mb-16 leading-relaxed max-w-2xl">
            Join a collective of elite professionals building the future of trusted digital infrastructure in Australia.
          </p>
          <div className="bg-neutral-50 p-12 border border-neutral-100 rounded-lg">
            <h2 className="text-3xl font-display font-medium text-neutral-900 mb-4 tracking-tight">Open Opportunities</h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl">
              We are always looking for cleared professionals (NV1, NV2, TSPV) across architecture, security, and advisory roles.
            </p>
            <p className="text-md text-neutral-500 font-mono uppercase tracking-widest">
              Please email your CV to <a href="mailto:hello@websoul.com.au" className="text-brand-900 hover:underline">hello@websoul.com.au</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
