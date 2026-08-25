"use client";

import { useRef } from 'react';
import Container from '../ui/Container';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import MagneticElement from '../animations/MagneticElement';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const { dict, language } = useLanguage();

  useGSAPAnimation((context, gsap) => {
    if (!textRef.current || !subtitleRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current.children,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power4.out", delay: 2 }
    )
    .fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-white/40 via-luxury-white/90 to-luxury-white" />
        {/* Subtle Gold radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-champagne/10 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        
        <h1 ref={textRef} className={`font-display font-bold text-charcoal tracking-tighter uppercase flex flex-col items-center py-4 ${
          language === 'ta' 
            ? 'text-4xl md:text-5xl lg:text-[5.5rem] leading-[1.3] md:leading-[1.2]' 
            : 'text-5xl md:text-7xl lg:text-[10rem] leading-[1.1] md:leading-[0.9] overflow-hidden'
        }`}>
          <div className="block">{dict.hero.titleLine1}</div>
          <div className="block text-maroon">{dict.hero.titleLine2}</div>
        </h1>

        <div ref={subtitleRef} className="mt-12 flex flex-col items-center">
          <p className="text-lg md:text-xl text-slate max-w-2xl font-light italic mb-8">
            {dict.hero.description}
          </p>
          
          <MagneticElement strength={40}>
            <a href="#pathirikkai" className="group flex items-center gap-4 text-charcoal hover:text-champagne transition-colors">
              <span className="text-sm uppercase tracking-widest font-semibold">{dict.hero.cta}</span>
              <div className="w-10 h-14 border border-charcoal/20 group-hover:border-champagne rounded-full flex justify-center p-2 transition-colors">
                <div className="w-1.5 h-1.5 bg-charcoal group-hover:bg-champagne rounded-full animate-bounce" />
              </div>
            </a>
          </MagneticElement>
        </div>

      </Container>
    </section>
  );
}
