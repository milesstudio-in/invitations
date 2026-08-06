"use client";

import { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';
import Badge from '../ui/Badge';
import { cn } from '../ui/Container';

const portfolioItems = [
  {
    id: 1,
    title: 'The Royal Symphony',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1200',
    featured: true
  },
  {
    id: 2,
    title: 'Midnight Velvet',
    category: 'Reception',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    id: 3,
    title: 'Golden Horizon',
    category: 'Engagement',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    id: 4,
    title: 'Ivory & Gold',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&fit=crop&q=80&w=1200',
    featured: true
  },
];

const categories = ['All', 'Wedding', 'Engagement', 'Reception'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = portfolioItems.filter(item => 
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-ivory">
      <Container size="wide">
        <SectionHeading 
          title="Selected Masterpieces."
          subtitle="Explore our gallery of recently crafted digital experiences. Each piece is a unique reflection of our clients' stories."
          eyebrow="Portfolio"
        />

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium font-body transition-all duration-normal",
                activeCategory === cat 
                  ? "bg-charcoal text-luxury-white" 
                  : "bg-transparent border border-charcoal/20 text-charcoal hover:border-charcoal"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className={cn(
                "group cursor-pointer",
                item.featured ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              <div className={cn(
                "relative rounded-2xl overflow-hidden mb-6",
                item.featured ? "aspect-video" : "aspect-[4/5] md:aspect-square"
              )}>
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-normal" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-display font-medium text-charcoal mb-2">{item.title}</h3>
                  <p className="text-slate font-body text-sm uppercase tracking-widest">{item.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-champagne group-hover:border-champagne group-hover:text-charcoal transition-all duration-normal">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
