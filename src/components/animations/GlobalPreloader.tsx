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
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-charcoal tracking-tighter uppercase">
          <span className="text-maroon">Miles</span> Studio
        </h1>
      </div>
    </div>
  );
}
