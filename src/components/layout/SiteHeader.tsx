'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Button } from '../ui/Button';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Trust Services', href: '/trust-services' },
  { name: 'Digital Consultancy', href: '/digital-consultancy' },
  { name: 'DISP Advisory', href: '/disp-advisory' },
  { name: 'Contact', href: '/contact' },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.05)']
  );

  return (
    <motion.header
      style={{
        backgroundColor: headerBg,
        borderBottom: `1px solid`,
        borderColor: headerBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
    >
      <div className="container-custom h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-900 flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold leading-none tracking-tight text-neutral-950">
              WEBSOUL
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 leading-none mt-1">
              DIGITAL
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-brand-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="primary" size="sm" className="ml-4 uppercase tracking-widest text-[10px] font-bold">
              Talk to Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-neutral-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden bg-white border-b border-neutral-100"
      >
        <div className="container-custom py-12 flex flex-col gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-2xl font-display font-medium text-neutral-950 italic"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button variant="primary" className="w-full mt-4">
              Talk to Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}
