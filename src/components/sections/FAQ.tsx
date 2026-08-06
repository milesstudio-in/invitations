"use client";

import { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { cn } from '../ui/Container';

const faqs = [
  {
    question: "How long does it take to create a digital invitation?",
    answer: "For our Elegant tier, expect a turnaround of 1-2 weeks. Premium takes 3-4 weeks, and Bespoke projects vary depending on complexity but typically range from 6-8 weeks."
  },
  {
    question: "Can we use our own custom domain?",
    answer: "Yes. Premium and Bespoke tiers include a custom domain (e.g., yournames.com) for the duration of your hosting period. Elegant tier uses a premium subdomain."
  },
  {
    question: "How does the RSVP system work?",
    answer: "Our smart RSVP form collects guest information, dietary requirements, plus-ones, and any custom questions you need. All data is securely synced to a private Google Sheet or dashboard for easy management."
  },
  {
    question: "Are the invitations mobile-friendly?",
    answer: "Absolutely. We employ a mobile-first design philosophy. Your invitation will look and perform flawlessly on any device, screen size, or browser."
  },
  {
    question: "Can we make changes after the invitation is sent?",
    answer: "Yes, you can update details like time, venue, or itinerary even after sending. Your guests will always see the most up-to-date information when they refresh the link."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-ivory">
      <Container size="narrow">
        <SectionHeading 
          title="Common Inquiries."
          subtitle="Everything you need to know about our process, pricing, and deliverables."
          eyebrow="FAQ"
        />

        <div className="mt-16 border-t border-charcoal/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-charcoal/10">
                <button
                  className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="text-xl md:text-2xl font-display font-medium text-charcoal group-hover:text-champagne-dark transition-colors pr-8">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:border-champagne group-hover:text-champagne-dark transition-colors relative">
                    <span className="absolute w-3 h-[1.5px] bg-currentColor" />
                    <span className={cn("absolute w-[1.5px] h-3 bg-currentColor transition-transform duration-300", isOpen && "rotate-90 scale-0")} />
                  </span>
                </button>
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    isOpen ? "max-h-[300px] opacity-100 mb-8" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-slate leading-relaxed font-body pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
