import { HTMLAttributes } from 'react';
import { cn } from './Container';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: 'subtle' | 'accent' | 'bold';
  orientation?: 'horizontal' | 'vertical';
}

export default function Divider({
  variant = 'subtle',
  orientation = 'horizontal',
  className,
  ...props
}: DividerProps) {
  const variants = {
    subtle: "border-warm-grey-100",
    accent: "border-champagne/30",
    bold: "border-charcoal/10"
  };

  return (
    <hr
      className={cn(
        "border-0 border-t",
        variants[variant],
        {
          "w-full h-[1px]": orientation === 'horizontal',
          "h-full w-[1px] border-t-0 border-l": orientation === 'vertical'
        },
        className
      )}
      {...props}
    />
  );
}
