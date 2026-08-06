import { HTMLAttributes, ReactNode } from 'react';
import { cn } from './Container';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverEffect?: 'lift' | 'glow' | 'none';
}

export default function Card({
  children,
  hoverEffect = 'lift',
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-luxury-white rounded-2xl overflow-hidden border border-warm-grey-100 transition-all duration-normal ease-out",
        {
          "hover:shadow-premium hover:-translate-y-2": hoverEffect === 'lift',
          "hover:shadow-[0_0_40px_rgba(201,169,110,0.15)] hover:border-champagne/30": hoverEffect === 'glow'
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
