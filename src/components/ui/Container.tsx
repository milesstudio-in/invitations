import { ReactNode, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'default' | 'wide' | 'narrow';
}

export default function Container({ 
  children, 
  size = 'default', 
  className,
  ...props 
}: ContainerProps) {
  return (
    <div 
      className={cn(
        "mx-auto px-4 md:px-8",
        {
          "max-w-[1440px]": size === 'default',
          "max-w-[1600px]": size === 'wide',
          "max-w-[800px]": size === 'narrow',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
