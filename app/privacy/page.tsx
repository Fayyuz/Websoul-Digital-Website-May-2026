import * as React from 'react';

export default function PrivacyPage() {
  return (
    <div className="pt-40 pb-24 italic">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-display font-medium text-neutral-950 mb-8 tracking-tighter leading-[0.9]">Privacy Policy.</h1>
          <p className="text-xl text-neutral-500 mb-16 leading-relaxed max-w-2xl">
            How we manage and protect your information.
          </p>
          <div className="space-y-8 prose prose-neutral max-w-none">
            <p className="text-lg text-neutral-600 leading-relaxed">
              At Websoul Digital, we take privacy and security seriously. This Privacy Policy outlines how we collect, use, and safeguard your personal information in accordance with Australian Privacy Principles (APPs).
            </p>
            <h3 className="text-2xl font-display font-medium text-neutral-900 mt-8 mb-4 tracking-tight">Information Collection</h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We collect minimal information required to provide our consulting and advisory services. This may include contact details submitted via our website.
            </p>
            <h3 className="text-2xl font-display font-medium text-neutral-900 mt-8 mb-4 tracking-tight">Data Security</h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Information provided to us is protected using industry-standard protocols, aligned with our high-assurance consulting standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
