"use client";

import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';

const mockups = [
  { image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=400', align: 'mt-12' },
  { image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400', align: 'mt-0' },
  { image: 'https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&fit=crop&q=80&w=400', align: 'mt-24' },
];

export default function PhoneMockup() {
  return (
    <section className="py-24 md:py-32 bg-luxury-white overflow-hidden">
      <Container>
        <SectionHeading 
          title="Designed for the Modern Guest."
          subtitle="A flawless mobile experience that looks stunning in the palm of their hand. No app downloads required."
          eyebrow="Mobile Experience"
        />

        <div className="flex justify-center gap-6 md:gap-12 mt-20 perspective-1000">
          {mockups.map((mockup, idx) => (
            <div 
              key={idx}
              className={`relative w-[280px] h-[600px] shrink-0 rounded-[40px] border-[12px] border-charcoal bg-charcoal overflow-hidden shadow-premium ${mockup.align}`}
              style={{
                transform: `rotateY(${idx === 0 ? '15deg' : idx === 2 ? '-15deg' : '0deg'}) scale(${idx === 1 ? '1.05' : '1'})`,
              }}
            >
              {/* Dynamic Island Placeholder */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[25px] bg-charcoal rounded-b-[20px] z-20" />
              
              <div className="relative w-full h-full bg-ivory rounded-[28px] overflow-hidden">
                <Image 
                  src={mockup.image}
                  alt="Invitation Preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
