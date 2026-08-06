"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "A Midsummer Dream",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Velvet & Vine",
    category: "Engagement",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "The Glass House",
    category: "Reception",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1200",
  }
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  
  // Mobile autoplay logic
  useEffect(() => {
    if (!isMobile) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isMobile, currentIndex]);

  useGSAPAnimation((context, gsap, ScrollTrigger) => {
    const isMobileDevice = window.innerWidth <= 1024;
    if (!sectionRef.current || !containerRef.current || isMobile || isMobileDevice) return;
    
    const cards = gsap.utils.toArray('.featured-card');
    
    // Horizontal scroll animation for desktop
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
      }
    });

    tl.to(cards, {
      xPercent: -100 * (cards.length - 1),
      ease: "none",
    });
    
  }, { scope: sectionRef, dependencies: [isMobile] });

  // Mobile translation effect
  useEffect(() => {
    if (isMobile && containerRef.current) {
      containerRef.current.style.transform = `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 2}rem))`;
      containerRef.current.style.transition = 'transform 0.5s ease-in-out';
    } else if (containerRef.current) {
      containerRef.current.style.transform = '';
      containerRef.current.style.transition = '';
    }
  }, [currentIndex, isMobile]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section ref={sectionRef} className="py-24 h-screen bg-charcoal overflow-hidden flex flex-col justify-center">
      <Container className="mb-12">
        <SectionHeading 
          title="Recent Commissions."
          subtitle="A selection of our latest bespoke digital experiences."
          eyebrow="Featured Work"
          align="left"
          className="text-luxury-white m-0"
        />
      </Container>
      
      <div className="pl-4 md:pl-8 lg:pl-[max(2rem,calc((100vw-1440px)/2+2rem))] overflow-hidden">
        <div ref={containerRef} className="flex gap-8 w-fit md:!transform-none md:!transition-none">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="featured-card w-[85vw] md:w-[60vw] max-w-[900px] shrink-0 group relative overflow-hidden rounded-2xl aspect-[16/9]"
            >
              <Image 
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-champagne font-medium uppercase tracking-widest text-sm mb-3">
                      {project.category}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-display font-medium text-luxury-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="hidden md:flex w-16 h-16 rounded-full border border-white/20 items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-champagne group-hover:border-champagne group-hover:text-charcoal transition-all duration-normal text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Navigation Arrows */}
        {isMobile && (
          <div className="flex gap-4 mt-8 md:hidden">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:bg-champagne active:text-charcoal transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:bg-champagne active:text-charcoal transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
