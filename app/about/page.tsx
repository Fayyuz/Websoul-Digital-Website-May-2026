import * as React from 'react';

export default function AboutPage() {
  return (
    <div className="pt-40 pb-24 italic">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-display font-medium text-neutral-950 mb-8 tracking-tighter leading-[0.9]">About Websoul.</h1>
          <p className="text-xl text-neutral-500 mb-16 leading-relaxed max-w-2xl">
            Websoul Digital is a premier Australian consultancy focused on delivering high-assurance digital services, trust architecture, and DISP advisory for government and defence sectors.
          </p>
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-medium text-neutral-900 mb-4 tracking-tight">Our Mission</h2>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
              To build trusted systems in an increasingly complex digital landscape. We ensure that Australia&apos;s most critical infrastructure, government departments, and supply chains operate with integrity, security, and absolute assurance.
            </p>
            <h2 className="text-3xl font-display font-medium text-neutral-900 mt-12 mb-4 tracking-tight">Our Expertise</h2>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
              With decades of collective experience in national security and highly regulated industries, our team brings unparalleled expertise in cyber resilience, enterprise architecture, and Defence Industry Security Program (DISP) compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
