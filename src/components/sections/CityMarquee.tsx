"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import Container from '../ui/Container';
import { useLanguage } from '@/context/LanguageContext';

export default function CityMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const { dict } = useLanguage();

  useGSAPAnimation((context, gsap) => {
    if (!marqueeRef.current) return;
    
    // Duplicate the content to create a seamless loop
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.fromTo(marqueeRef.current,
      { xPercent: 0 },
      { xPercent: -50, duration: 20, ease: "none" }
    );
  }, { scope: containerRef });

  const locations = dict.marquee.locations;

  return (
    <section ref={containerRef} className="py-24 bg-luxury-white border-y border-white/5 overflow-hidden">
      <Container className="mb-12 text-center">
        <h2 className="text-champagne text-sm uppercase tracking-widest font-semibold">
          {dict.marquee.serving}
        </h2>
      </Container>
      
      <div className="relative flex whitespace-nowrap overflow-hidden py-4">
        {/* Gradient Masks for fading effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-luxury-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-luxury-white to-transparent z-10" />
        
        <div ref={marqueeRef} className="flex gap-16 md:gap-32 px-8">
          {[...locations, ...locations, ...locations].map((loc, idx) => (
            <div key={idx} className="flex items-center gap-16 md:gap-32">
              <span className="text-4xl md:text-6xl font-display text-charcoal/50 uppercase tracking-tight">
                {loc}
              </span>
              <span className="w-4 h-4 bg-champagne rounded-full opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
