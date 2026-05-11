import * as React from 'react';

export function PageHeader({ title, subtitle, eyebrow }: { title: string; subtitle: string; eyebrow: string }) {
  return (
    <section className="pt-44 pb-24 bg-white border-b border-neutral-100 italic">
      <div className="container-custom">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-brand-900 font-bold block mb-6">{eyebrow}</span>
          <h1 className="text-5xl md:text-8xl font-display font-medium text-neutral-950 mb-8 tracking-tighter leading-[0.9]">{title}</h1>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
