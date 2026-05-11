'use client';

import * as React from 'react';
import { type HTMLMotionProps, motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-brand-900 text-white hover:bg-brand-800 shadow-sm',
      secondary: 'bg-brand-100 text-brand-900 hover:bg-brand-200 shadow-sm',
      outline: 'border border-neutral-200 bg-transparent hover:bg-brand-50 text-neutral-900',
      ghost: 'bg-transparent hover:bg-brand-50 text-neutral-700',
      link: 'bg-transparent text-brand-900 underline-offset-4 hover:underline p-0',
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-6 text-sm font-medium',
      lg: 'h-14 px-8 text-base font-medium',
      icon: 'h-10 w-10',
    };

    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50 overflow-hidden',
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && children}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
