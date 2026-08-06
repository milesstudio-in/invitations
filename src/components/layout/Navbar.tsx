"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import MagneticElement from '../animations/MagneticElement';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4 bg-luxury-white/90 backdrop-blur-md border-b border-charcoal/5' : 'py-8 bg-transparent'
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50 group">
              <span className="font-display font-bold text-2xl tracking-tighter text-charcoal">
                Pathi<span className="text-champagne">rikkai</span>.
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-8">
                {['Services', 'Contact'].map((item) => (
                  <MagneticElement key={item} strength={20}>
                    <Link 
                      href={`#${item.toLowerCase()}`}
                      className="text-sm font-medium text-slate hover:text-charcoal transition-colors uppercase tracking-widest"
                    >
                      {item}
                    </Link>
                  </MagneticElement>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <MagneticElement strength={30}>
                <Link 
                  href="https://wa.me/918489189183" 
                  target="_blank"
                  className="group flex items-center gap-3 bg-charcoal text-luxury-white px-6 py-3 rounded-full hover:bg-champagne hover:text-charcoal transition-all duration-300"
                >
                  <span className="text-sm font-semibold tracking-wide uppercase">WhatsApp Us</span>
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </Link>
              </MagneticElement>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden relative z-50 w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-luxury-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-[2px] bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`w-full h-[2px] bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-[2px] bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </nav>
        </Container>
      </header>

      {/* Full Screen Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-luxury-white transition-transform duration-700 ease-in-out md:hidden flex flex-col justify-center ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Container className="flex flex-col gap-8 h-full justify-center">
          {['Services', 'Contact'].map((item, i) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-4xl font-display text-charcoal uppercase tracking-widest hover:text-champagne transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item}
            </Link>
          ))}
          
          <div className="mt-8 border-t border-charcoal/10 pt-8">
            <Link 
              href="https://wa.me/918489189183"
              className="inline-flex items-center gap-4 text-2xl font-display text-champagne"
            >
              WhatsApp Us &rarr;
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
