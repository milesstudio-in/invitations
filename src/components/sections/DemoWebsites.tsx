"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { useLanguage } from '@/context/LanguageContext';

const rawDemos = [
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
  const { dict } = useLanguage();

  const demos = [
    {
      ...rawDemos[0],
      title: dict.demos.engagement.title,
      category: dict.demos.engagement.category,
      description: dict.demos.engagement.desc,
    },
    {
      ...rawDemos[1],
      title: dict.demos.wedding.title,
      category: dict.demos.wedding.category,
      description: dict.demos.wedding.desc,
    },
    {
      ...rawDemos[2],
      title: dict.demos.birthday.title,
      category: dict.demos.birthday.category,
      description: dict.demos.birthday.desc,
    }
  ];

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
          title={dict.demos.title}
          subtitle={dict.demos.subtitle}
          eyebrow={dict.demos.eyebrow}
          align="center"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {demos.map((demo, index) => (
            <Link 
              key={index} 
              href={demo.link} 
              className="demo-card group relative w-full aspect-[4/5] overflow-hidden rounded-md block bg-charcoal"
            >
              {/* Background Image */}
              <Image 
                src={demo.image}
                alt={demo.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
              />
              
              {/* Gradient Overlay for Text Readability & Mood */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Card Content (Overlaid at bottom) */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                <div className="transform translate-y-0 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                  
                  <div className="flex items-center mb-4">
                    <span className="text-champagne font-medium uppercase tracking-widest text-[10px] border border-champagne/30 px-3 py-1 rounded-full backdrop-blur-md bg-charcoal/20">
                      {demo.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-display font-medium text-luxury-white mb-3">
                    {demo.title}
                  </h3>
                  
                  <p className="text-luxury-white/70 text-sm leading-relaxed font-body mb-6 max-w-sm">
                    {demo.description}
                  </p>

                  {/* Divider and Call to Action */}
                  <div className="flex items-center justify-between pt-6 border-t border-luxury-white/20 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-champagne flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-champagne block"></span>
                      {dict.demos.viewDemo}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-champagne/50 flex items-center justify-center text-champagne transform -rotate-45 group-hover:rotate-0 transition-transform duration-700">
                      &rarr;
                    </span>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
