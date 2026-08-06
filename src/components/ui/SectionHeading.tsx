import { HTMLAttributes } from 'react';
import { cn } from './Container';
import Badge from './Badge';
import AnimatedText from './AnimatedText';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        "flex flex-col space-y-6 mb-16 md:mb-24",
        {
          "items-start text-left": align === 'left',
          "items-center text-center mx-auto": align === 'center'
        },
        className
      )}
      {...props}
    >
      {eyebrow && (
        <Badge variant="outline" className="opacity-80">
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
          "text-lg text-slate font-body max-w-2xl leading-relaxed mt-4",
          align === 'center' && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
