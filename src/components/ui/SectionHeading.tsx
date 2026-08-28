import { HTMLAttributes } from 'react';
import { cn } from './Container';
import Badge from './Badge';
import AnimatedText from './AnimatedText';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
}

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  theme = 'light',
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        "flex flex-col space-y-6 mb-16 md:mb-24",
        {
          "items-start text-left": align === 'left',
          "items-center text-center mx-auto": align === 'center',
          "text-charcoal": theme === 'light',
          "text-luxury-white": theme === 'dark'
        },
        className
      )}
      {...props}
    >
      {eyebrow && (
        <Badge variant={theme === 'dark' ? 'secondary' : 'outline'} className="opacity-80">
          {eyebrow}
        </Badge>
      )}
      
      <AnimatedText 
        text={title} 
        as="h2" 
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl text-balance",
          align === 'center' && "max-w-4xl"
        )} 
      />
      
      {subtitle && (
        <p className={cn(
          "text-lg font-body max-w-2xl leading-relaxed mt-4",
          theme === 'dark' ? "text-luxury-white/70" : "text-slate",
          align === 'center' && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
