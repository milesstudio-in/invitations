"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Hide cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || prefersReducedMotion) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Set initial position off-screen
    gsap.set([cursor, dot], { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    
    // QuickSetters for performance
    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.5, ease: "power3" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.5, ease: "power3" });
    const xToDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToDot(e.clientX);
      yToDot(e.clientY);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Interactive element hover effects
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, .featured-card');
    
    const onElementHover = () => {
      gsap.to(cursor, { scale: 1.5, opacity: 0.5, duration: 0.3 });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };
    
    const onElementLeave = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onElementHover);
      el.addEventListener('mouseleave', onElementLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onElementHover);
        el.removeEventListener('mouseleave', onElementLeave);
      });
    };
  }, [isVisible, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`fixed top-0 left-0 w-10 h-10 rounded-full border border-charcoal/30 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      <div 
        ref={dotRef} 
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-charcoal pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  );
}
