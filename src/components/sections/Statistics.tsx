"use client";

import { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import { useInView } from '@/hooks/useInView';

const stats = [
  { value: 500, suffix: '+', label: 'Events Celebrated' },
  { value: 50, suffix: '+', label: 'Unique Designs' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 12, suffix: '+', label: 'Countries Reached' },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-champagne mb-4">
      {count}{suffix}
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-24 bg-luxury-white border-y border-warm-grey-100">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-slate font-body text-sm md:text-base uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
