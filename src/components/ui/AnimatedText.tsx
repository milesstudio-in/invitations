"use client";

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from './Container';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  type?: 'words' | 'lines' | 'chars';
  delay?: number;
}

export default function AnimatedText({
  text,
  className,
  as: Component = 'h2',
  type = 'words',
  delay = 0
}: AnimatedTextProps) {
  const textRef = useRef<any>(null);

  useGSAP(() => {
    if (!textRef.current) return;
    
    // We'll split the text manually for simple word/char splitting without SplitText plugin
    // since SplitText is a premium GSAP plugin.
    const elements = textRef.current.querySelectorAll('.animate-item');
    
    gsap.fromTo(elements, 
      {
        y: 50,
        opacity: 0,
        rotateX: -20,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: textRef });

  const renderContent = () => {
    if (type === 'words') {
      return text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pt-4 pb-4 -mt-4 -mb-4 mr-[0.25em]">
          <span className="animate-item inline-block origin-bottom">{word}</span>
        </span>
      ));
    }
    
    if (type === 'chars') {
      return text.split('').map((char, i) => (
        <span key={i} className="inline-block overflow-hidden pt-4 pb-4 -mt-4 -mb-4">
          <span className="animate-item inline-block origin-bottom">{char === ' ' ? '\u00A0' : char}</span>
        </span>
      ));
    }
    
    // Lines fallback to words for now as true lines require complex calculation or SplitText
    return text.split(' ').map((word, i) => (
      <span key={i} className="inline-block overflow-hidden pt-4 pb-4 -mt-4 -mb-4 mr-[0.25em]">
        <span className="animate-item inline-block origin-bottom">{word}</span>
      </span>
    ));
  };

  return (
    <Component ref={textRef} className={cn("perspective-1000", className)}>
      {renderContent()}
    </Component>
  );
}
