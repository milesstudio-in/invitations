import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from './Container';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  asChild,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-body font-medium transition-all duration-fast ease-out outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
  
  const variants = {
    primary: "bg-champagne text-charcoal hover:bg-champagne-light shadow-subtle hover:shadow-medium",
    secondary: "bg-charcoal text-luxury-white hover:bg-graphite shadow-subtle hover:shadow-medium",
    outline: "border border-charcoal/20 text-charcoal hover:bg-charcoal/5",
    ghost: "text-charcoal hover:bg-charcoal/5"
  };
  
  const sizes = {
    sm: "h-9 px-4 text-sm rounded-full",
    md: "h-12 px-8 text-base rounded-full",
    lg: "h-14 px-10 text-lg rounded-full"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
