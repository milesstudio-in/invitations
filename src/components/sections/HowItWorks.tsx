"use client";

import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

export default function HowItWorks() {
  const { dict } = useLanguage();
  const how = dict.howItWorks;

  return (
    <section id="how-it-works" className="py-32 bg-luxury-white relative overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeading 
            title={how.title}
            eyebrow={how.eyebrow}
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-charcoal/10 -z-10 -translate-y-1/2"></div>
          
          {how.steps.map((step: any, index: number) => (
            <div key={index} className="relative bg-luxury-white p-8 rounded-3xl border border-charcoal/5 shadow-soft text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-champagne/20 rounded-full flex items-center justify-center mb-6 text-2xl font-display text-champagne-dark border border-champagne/30">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal">{step.title.replace(/^\d+\.\s*/, '')}</h3>
              <p className="text-slate text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}