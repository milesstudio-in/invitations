"use client";

import { useState } from 'react';
import Container from '../ui/Container';

const testimonials = [
  {
    quote: "Working with ÉTUDE was like watching an artist paint. They didn't just build a website; they captured the exact essence and mood of our wedding.",
    author: "Elena & James",
    event: "Lake Como Wedding"
  },
  {
    quote: "Our guests were blown away. The RSVP process was so incredibly smooth, and the design felt more like a luxury brand than a typical invitation.",
    author: "The Patel Family",
    event: "Grand Reception"
  },
  {
    quote: "Meticulous attention to detail. From the typography to the fluid animations, everything screamed premium quality.",
    author: "Sarah Jenkins",
    event: "Corporate Gala"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-charcoal text-luxury-white relative overflow-hidden">
      {/* Large background quote mark */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 text-[200px] md:text-[400px] font-display font-bold text-white/5 leading-none select-none pointer-events-none">
        "
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="min-h-[250px] flex flex-col justify-center">
            <p className="text-2xl md:text-4xl lg:text-5xl font-display font-light leading-relaxed mb-12 text-balance transition-opacity duration-500">
              {testimonials[currentIndex].quote}
            </p>
            
            <div>
              <p className="text-lg font-medium text-champagne mb-1">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm text-silver uppercase tracking-widest">
                {testimonials[currentIndex].event}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-16">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'bg-champagne w-6' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
