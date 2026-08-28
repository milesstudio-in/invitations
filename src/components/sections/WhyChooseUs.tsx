"use client";

import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

export default function WhyChooseUs() {
  const { dict } = useLanguage();
  const why = dict.whyChooseUs;

  return (
    <section id="features" className="py-32 bg-charcoal text-luxury-white relative overflow-hidden">
      {/* Abstract Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-champagne-dark/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeading 
            title={why.title}
            eyebrow={why.eyebrow}
            align="center"
            theme="dark"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {why.features.map((feature: any, index: number) => (
            <div key={index} className="p-8 rounded-3xl bg-ivory/5 border border-luxury-white/10 hover:bg-ivory/10 transition-colors duration-300">
              <div className="w-12 h-12 bg-champagne/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-luxury-white">{feature.title}</h3>
              <p className="text-slate text-sm leading-relaxed text-luxury-white/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}