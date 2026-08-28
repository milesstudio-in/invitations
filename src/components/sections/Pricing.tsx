"use client";

import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import MagneticElement from '../animations/MagneticElement';
import { useLanguage } from '@/context/LanguageContext';

export default function Pricing() {
  const { dict } = useLanguage();
  const pricing = dict.pricing;

  return (
    <section id="pricing" className="py-32 bg-ivory relative overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeading 
            title={pricing.title}
            subtitle={pricing.subtitle}
            eyebrow={pricing.eyebrow}
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricing.tiers.map((tier: any, index: number) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 flex flex-col h-full transition-transform duration-500 hover:-translate-y-2 ${
                tier.popular 
                  ? 'bg-charcoal text-luxury-white shadow-2xl scale-105 md:-mt-8 md:mb-8 border border-champagne/20 z-10' 
                  : 'bg-luxury-white text-charcoal border border-charcoal/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-champagne text-charcoal text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 text-center">
                <h3 className={`text-xl font-display mb-4 ${tier.popular ? 'text-champagne' : 'text-maroon'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-start justify-center gap-1">
                  <span className="text-2xl font-medium mt-2">₹</span>
                  <span className="text-6xl font-display font-bold tracking-tight">{tier.price}</span>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature: string, fIndex: number) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm">
                      <svg className={`w-5 h-5 shrink-0 mt-0.5 ${tier.popular ? 'text-champagne' : 'text-maroon'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className={tier.popular ? 'text-luxury-white/90' : 'text-slate'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <MagneticElement strength={10}>
                <a 
                  href={`https://wa.me/918489189183?text=Hi, I'm interested in the ${tier.name} package for my digital invitation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-full font-semibold uppercase tracking-widest transition-colors flex items-center justify-center text-sm ${
                    tier.popular
                      ? 'bg-champagne text-charcoal hover:bg-luxury-white'
                      : 'bg-charcoal text-luxury-white hover:bg-champagne hover:text-charcoal'
                  }`}
                >
                  {tier.cta}
                </a>
              </MagneticElement>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
