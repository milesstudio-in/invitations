"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

export default function PathirikkaiReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const flapTopRef = useRef<HTMLDivElement>(null);
  const flapBottomRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAPAnimation((context, gsap, ScrollTrigger) => {
    if (!containerRef.current) return;

    // The Pathirikkai opening animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", // 2 viewport heights to scroll through the animation
        pin: true,
        scrub: 1,
      }
    });

    // 1. Open the top flap
    tl.to(flapTopRef.current, {
      rotateX: 180,
      duration: 1,
      ease: "power1.inOut"
    }, 0);

    // 2. Open the bottom flap
    tl.to(flapBottomRef.current, {
      rotateX: -180,
      duration: 1,
      ease: "power1.inOut"
    }, 0.5);

    // 3. Zoom into the content inside
    tl.to(cardRef.current, {
      scale: 1.5,
      yPercent: 10,
      duration: 1.5,
      ease: "power2.inOut"
    }, 1);

    // 4. Fade in the text inside
    tl.fromTo(contentRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      1.5
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen bg-luxury-white overflow-hidden flex items-center justify-center perspective-1000">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-ivory)_0%,_var(--color-luxury-white)_100%)] opacity-80" />
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-4">An Experience Like Physical Mail</h2>
          <p className="text-slate max-w-md mx-auto">Scroll down to unveil your invitation</p>
        </div>

        {/* The 3D Card Container */}
        <div 
          ref={cardRef} 
          className="relative w-[300px] h-[400px] md:w-[400px] md:h-[550px] transform-style-3d shadow-premium"
        >
          {/* Inside Content (The actual digital invite) */}
          <div className="absolute inset-0 bg-ivory rounded-lg overflow-hidden border border-white/5">
            {/* Background Texture/Image inside */}
            <div className="absolute inset-0 opacity-20">
              <Image 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" 
                alt="Mandala Texture" 
                fill 
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover mix-blend-overlay"
              />
            </div>
            
            <div ref={contentRef} className="relative h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full border border-champagne flex items-center justify-center mb-6">
                <span className="text-champagne font-display text-2xl">ॐ</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-2">Arjun & Priya</h3>
              <p className="text-champagne text-sm uppercase tracking-widest mb-6">Invite you to their wedding</p>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent my-6" />
              
              <div className="text-slate text-sm space-y-2">
                <p>Muhurtham</p>
                <p className="text-charcoal font-medium">Sunday, 24th August</p>
                <p>Chennai</p>
              </div>
            </div>
          </div>

          {/* Top Flap (Closes over the top half) */}
          <div 
            ref={flapTopRef} 
            className="absolute top-0 left-0 w-full h-1/2 bg-maroon origin-top transform-style-3d shadow-[0_10px_20px_rgba(0,0,0,0.15)] rounded-t-lg z-20 border-b border-black/10"
          >
            {/* Front of Top Flap */}
            <div className="absolute inset-0 backface-hidden flex items-end justify-center pb-6">
              <div className="w-12 h-12 rounded-full bg-champagne border-2 border-maroon flex items-center justify-center translate-y-1/2 shadow-md">
                <span className="text-maroon text-xs font-bold">A&P</span>
              </div>
            </div>
            {/* Back of Top Flap (Inside) */}
            <div className="absolute inset-0 backface-hidden bg-ivory opacity-95" style={{ transform: 'rotateX(180deg)' }} />
          </div>

          {/* Bottom Flap (Closes over the bottom half) */}
          <div 
            ref={flapBottomRef} 
            className="absolute bottom-0 left-0 w-full h-1/2 bg-maroon origin-bottom transform-style-3d shadow-[0_-10px_20px_rgba(0,0,0,0.15)] rounded-b-lg z-10 border-t border-black/10"
          >
            <div className="absolute inset-0 backface-hidden flex items-center justify-center">
              <p className="text-champagne/80 font-display text-4xl uppercase tracking-widest mt-12 drop-shadow-sm">Pathirikkai</p>
            </div>
            <div className="absolute inset-0 backface-hidden bg-ivory opacity-95" style={{ transform: 'rotateX(180deg)' }} />
          </div>

        </div>
      </Container>
    </section>
  );
}
