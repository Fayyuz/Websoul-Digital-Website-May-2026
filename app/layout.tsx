import * as React from 'react';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/src/components/layout/SiteHeader';
import { SiteFooter } from '@/src/components/layout/SiteFooter';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Websoul Digital | Trusted People. Secure Delivery.',
  description: 'Premium Australian consultancy providing trust services, digital delivery, and DISP readiness support for government and defence sectors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased text-neutral-900 selection:bg-brand-900 selection:text-white">
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-grow">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
