import * as React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-500 flex items-center justify-center rounded-sm">
                <ShieldCheck className="text-neutral-950 w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold leading-none tracking-tight">WEBSOUL</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 leading-none mt-1">DIGITAL</span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Trusted capability for Australia&apos;s secure future. High-assurance consultancy for government, defence, and regulated industry.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-500 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-500 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] font-bold mb-8 text-brand-400 italic">Capabilities</h4>
            <ul className="space-y-4">
              {[
                { name: 'Trust Services', href: '/trust-services' },
                { name: 'Digital Consultancy', href: '/digital-consultancy' },
                { name: 'DISP Advisory', href: '/disp-advisory' },
                { name: 'Security Uplift', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] font-bold mb-8 text-brand-400 italic">Organisation</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Websoul', href: '/about' },
                { name: 'Careers', href: '/careers' },
                { name: 'News & Insights', href: '#' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-xs font-mono uppercase tracking-[0.3em] font-bold mb-8 text-brand-400 italic">Get in Touch</h4>
             <ul className="space-y-6">
                <li className="flex gap-4">
                   <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                   <div className="text-sm">
                      <span className="block text-neutral-500 text-[10px] uppercase tracking-widest mb-1">Email</span>
                      <span className="text-neutral-200">hello@websoul.com.au</span>
                   </div>
                </li>
                <li className="flex gap-4">
                   <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                   <div className="text-sm">
                      <span className="block text-neutral-500 text-[10px] uppercase tracking-widest mb-1">Location</span>
                      <span className="text-neutral-200">Canberra, ACT</span>
                   </div>
                </li>
             </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            © {currentYear} Websoul Digital Pty Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] font-mono text-neutral-500 hover:text-white uppercase tracking-widest">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] font-mono text-neutral-500 hover:text-white uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
