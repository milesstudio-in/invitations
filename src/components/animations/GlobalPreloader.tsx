"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function GlobalPreloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsLoaded(true);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => setIsLoaded(true)
    });

    // Flickering text effect
    tl.to(textRef.current, {
      opacity: 1,
      duration: 0.1,
      yoyo: true,
      repeat: 3,
      ease: "steps(1)"
    })
    .to(textRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    })
    .to(textRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "power3.in"
    }, "+=0.5")
    .to(bgRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut"
    }, "-=0.4")
    .set(containerRef.current, { display: "none" });

  }, [prefersReducedMotion]);

  if (isLoaded) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none"
    >
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-luxury-white"
      />
      <div 
        ref={textRef}
        className="relative z-10 opacity-0"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-tropika tracking-wide leading-none">
            <span className="font-bold text-charcoal">Miles</span>
            <span className="font-light text-champagne">Studio</span>
          </h1>
          <span className="font-display font-medium tracking-[0.3em] md:tracking-[0.5em] text-slate/80 text-sm md:text-xl lg:text-2xl uppercase mt-2 md:mt-4">
            Invitations
          </span>
        </div>
      </div>
    </div>
  );
}
