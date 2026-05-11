import * as React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/src/components/sections/ContactForm';

export default function ContactPage() {
  return (
    <div className="pt-40 pb-24 italic">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-display font-medium text-neutral-950 mb-8 tracking-tighter leading-[0.9]">Talk to Us.</h1>
          <p className="text-xl text-neutral-500 mb-16 leading-relaxed max-w-2xl">
            Whether you are a government department, a defence supplier, or a consultant looking for your next high-trust role, we are here to discuss how we can work together.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-50 flex items-center justify-center rounded-sm shrink-0">
                  <Mail className="w-6 h-6 text-brand-900" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1 text-lg">Email Us</h4>
                  <p className="text-neutral-500 italic">hello@websoul.com.au</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-50 flex items-center justify-center rounded-sm shrink-0">
                  <Phone className="w-6 h-6 text-brand-900" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1 text-lg">Call Us</h4>
                  <p className="text-neutral-500">+61 XX XXX XXX</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-50 flex items-center justify-center rounded-sm shrink-0">
                  <MapPin className="w-6 h-6 text-brand-900" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1 text-lg">Location</h4>
                  <p className="text-neutral-500 text-sm">Canberra, Australian Capital Territory<br />Focused on National Security and Defence Hubs</p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
