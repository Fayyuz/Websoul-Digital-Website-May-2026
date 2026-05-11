import * as React from 'react';

export default function TermsPage() {
  return (
    <div className="pt-40 pb-24 italic">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-display font-medium text-neutral-950 mb-8 tracking-tighter leading-[0.9]">Terms of Service.</h1>
          <p className="text-xl text-neutral-500 mb-16 leading-relaxed max-w-2xl">
            Our terms of engagement and website usage.
          </p>
          <div className="space-y-8 prose prose-neutral max-w-none">
            <p className="text-lg text-neutral-600 leading-relaxed">
              By using the Websoul Digital website, you agree to these Terms of Service. Information provided on this site is for general advisory purposes and does not constitute formal consulting advice until a formal engagement is established.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
