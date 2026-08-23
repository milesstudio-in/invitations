"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

const demos = [
  {
    title: "Engagement Design",
    category: "Engagement",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800",
    link: "/engagement",
    description: "A beautiful and simple digital invitation to announce your engagement.",
  },
  {
    title: "Wedding Design",
    category: "Marriage",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    link: "/wedding",
    description: "An elegant digital invitation to share all your wedding details with guests.",
  },
  {
    title: "Birthday Design",
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800",
    link: "/birthday",
    description: "A fun and colorful digital invitation for your birthday celebration.",
  }
];

export default function DemoWebsites() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAPAnimation((context, gsap, ScrollTrigger) => {
    if (!sectionRef.current) return;

    const cards = gsap.utils.toArray('.demo-card');
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="demos" className="py-32 bg-luxury-white relative overflow-hidden">
      <Container>
        <SectionHeading 
          title="Curated Experiences."
          subtitle="Explore our meticulously crafted template designs, ready to be personalized for your event."
          eyebrow="Live Demos"
          align="center"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {demos.map((demo, index) => (
            <div key={index} className="demo-card group flex flex-col">
              {/* Image Container with Hover Effect */}
              <Link href={demo.link} className="relative w-full aspect-[3/4] overflow-hidden rounded-sm mb-6 block bg-charcoal/5">
                <Image 
                  src={demo.image}
                  alt={demo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
                    <span className="bg-luxury-white text-charcoal px-8 py-3 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-champagne transition-colors shadow-lg">
                      View Demo
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card Content */}
              <div className="flex flex-col flex-grow text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <span className="text-maroon font-medium uppercase tracking-widest text-xs border border-maroon/20 px-3 py-1 rounded-full">
                    {demo.category}
                  </span>
                </div>
                <h3 className="text-3xl font-display font-medium text-charcoal mb-3 group-hover:text-champagne transition-colors duration-300">
                  {demo.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed font-body mb-6 flex-grow">
                  {demo.description}
                </p>
                <Link href={demo.link} className="md:hidden inline-flex items-center justify-center gap-2 text-charcoal font-medium text-xs tracking-widest uppercase hover:text-maroon transition-colors w-fit mx-auto group/link">
                  <span className="border-b border-charcoal/30 pb-0.5 group-hover/link:border-maroon transition-colors">View Demo</span>
                  <span className="transform transition-transform group-hover/link:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
