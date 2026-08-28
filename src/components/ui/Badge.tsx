import { HTMLAttributes, ReactNode } from 'react';
import { cn } from './Container';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'accent' | 'secondary';
}

export default function Badge({
  children,
  variant = 'default',
  className,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-charcoal/5 text-charcoal",
    outline: "border border-charcoal/20 text-charcoal",
    accent: "bg-champagne/10 text-champagne-dark",
    secondary: "border border-luxury-white/20 text-luxury-white"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-body uppercase tracking-wider",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
