"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../ui/Container';

const Icons = {
  Wedding: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-20 h-20 md:w-24 md:h-24 text-champagne mx-auto md:mx-0">
      <circle cx="9" cy="12" r="6" />
      <circle cx="15" cy="12" r="6" />
    </svg>
  ),
  Engagement: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-20 h-20 md:w-24 md:h-24 text-champagne mx-auto md:mx-0">
      <path d="M6 5 L18 5 L22 11 L12 21 L2 11 Z" />
      <path d="M2 11 L22 11" />
      <path d="M6 5 L12 11 L18 5" />
    </svg>
  ),
  Baby: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-20 h-20 md:w-24 md:h-24 text-champagne mx-auto md:mx-0">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  Birthday: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-20 h-20 md:w-24 md:h-24 text-champagne mx-auto md:mx-0">
      <path d="M20 21H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2z" />
      <path d="M12 12v-5" />
      <path d="M12 4s-1-1-1-2 1-2 1-2 1 1 1 2-1 2-1 2z" fill="currentColor"/>
    </svg>
  ),
  House: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-20 h-20 md:w-24 md:h-24 text-champagne mx-auto md:mx-0">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
};

const services = [
  {
    id: 'wedding',
    icon: <Icons.Wedding />,
    title: 'Weddings',
    subtitle: 'Thirumanam',
    description: 'Share your love story and wedding details with a beautiful, interactive digital invitation.',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'engagement',
    icon: <Icons.Engagement />,
    title: 'Engagement',
    subtitle: 'Nitchayathartham',
    description: 'Announce your union to the world with an elegant, sharable digital invitation.',
    img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'baby',
    icon: <Icons.Baby />,
    title: 'Baby Shower',
    subtitle: 'Valaikappu',
    description: 'Celebrate the upcoming arrival of your little one with friends and family.',
    img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'naming',
    icon: <Icons.Baby />,
    title: 'Naming Ceremony',
    subtitle: 'Peyar Suttum Vizha',
    description: 'Welcome your newborn and share their beautiful name with the world.',
    img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'birthday',
    icon: <Icons.Birthday />,
    title: '1st Birthday',
    subtitle: 'Ayush Homam',
    description: 'Make their first milestone memorable with an interactive digital story.',
    img: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'house',
    icon: <Icons.House />,
    title: 'Housewarming',
    subtitle: 'Gruhapravesam',
    description: 'Invite your loved ones to bless your new home and share in your joy.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600'
  }
];

export default function ServiceStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  
  // Mobile autoplay logic
  useEffect(() => {
    if (!isMobile) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isMobile, currentIndex]);

  useGSAPAnimation((context, gsap, ScrollTrigger) => {
    const isMobileDevice = window.innerWidth <= 1024;
    if (!sectionRef.current || !pinRef.current || isMobile || isMobileDevice) return;
    
    // Pin the entire layout for desktop
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${services.length * 100}%`,
        pin: pinRef.current,
        scrub: 1,
      }
    });

    // Dynamic timeline generation based on number of services
    for (let i = 0; i < services.length - 1; i++) {
      const startTime = i * 2;
      tl.to(textRefs.current[i], { opacity: 0, y: -50, duration: 1 }, startTime)
        .to(imgRefs.current[i], { opacity: 0, scale: 1.1, duration: 1 }, startTime)
        .fromTo(textRefs.current[i + 1], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, startTime)
        .fromTo(imgRefs.current[i + 1], { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 }, startTime);
    }

    // Keep the last state visible for a bit
    tl.to({}, { duration: 1 });

  }, { scope: sectionRef, dependencies: [isMobile] });

  // Mobile translation effect
  useEffect(() => {
    if (!isMobile) return;
    
    // Animate all text and images based on currentIndex
    services.forEach((_, i) => {
      if (i === currentIndex) {
        gsap.to(textRefs.current[i], { opacity: 1, y: 0, duration: 0.5 });
        gsap.to(imgRefs.current[i], { opacity: 1, scale: 1, duration: 0.5 });
      } else {
        gsap.to(textRefs.current[i], { opacity: 0, y: i < currentIndex ? -20 : 20, duration: 0.5 });
        gsap.to(imgRefs.current[i], { opacity: 0, scale: i < currentIndex ? 1.05 : 0.95, duration: 0.5 });
      }
    });
  }, [currentIndex, isMobile]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % services.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section id="services" ref={sectionRef} className="relative bg-luxury-white w-full">
      <div 
        ref={pinRef}
        className="w-full h-[100svh] bg-luxury-white overflow-hidden flex flex-col items-center justify-center md:border-t md:border-charcoal/5 relative"
      >
        <Container className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 pt-20 pb-8 lg:py-0">
          
          {/* Left Side: Big Text & Icons */}
          <div className="w-full lg:w-1/2 h-48 lg:h-96 relative flex items-center justify-center lg:justify-start">
            {services.map((service, index) => (
              <div 
                key={service.id}
                ref={el => { textRefs.current[index] = el }}
                className={`absolute inset-0 flex flex-col justify-center text-center md:text-left ${index !== 0 ? 'opacity-0' : ''}`}
              >
                <div className="mb-4 lg:mb-8 scale-75 lg:scale-100 origin-center lg:origin-left">{service.icon}</div>
                <h2 className="text-3xl lg:text-6xl font-display font-bold text-charcoal tracking-tight leading-none mb-1 lg:mb-2">
                  {service.title}
                </h2>
                <h3 className="text-lg lg:text-4xl font-display text-maroon/80 mb-2 lg:mb-6 uppercase tracking-widest">
                  {service.subtitle}
                </h3>
                <p className="text-sm lg:text-xl text-slate max-w-sm mx-auto lg:mx-0">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center items-center flex-1 min-h-0">
            {/* Phone Bezel */}
            <div className="relative w-[220px] h-[450px] lg:w-[320px] lg:h-[650px] bg-charcoal rounded-[2.5rem] lg:rounded-[3rem] p-2 lg:p-3 shadow-premium border border-charcoal/20 z-10 shrink-0">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-4 lg:top-6 left-1/2 -translate-x-1/2 w-16 lg:w-24 h-5 lg:h-6 bg-luxury-white rounded-full z-30" />

              {/* Phone Screen (Mask) */}
              <div className="absolute inset-0 m-2 lg:m-3 bg-black rounded-[2rem] lg:rounded-[2.25rem] overflow-hidden">
                {services.map((service, index) => (
                  <div 
                    key={service.id}
                    ref={el => { imgRefs.current[index] = el }}
                    className={`absolute inset-0 ${index !== 0 ? 'opacity-0' : ''}`}
                  >
                    <div className="absolute top-0 left-0 w-full h-[600px] lg:h-[900px] animate-pan-y will-change-transform">
                      <Image 
                        src={service.img}
                        alt={service.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 768px) 280px, 320px"
                        className="object-cover object-top"
                      />
                    </div>
                    {/* Gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-4 right-4 lg:bottom-8 lg:left-6 lg:right-6 text-luxury-white">
                      <h4 className="font-display text-xl lg:text-2xl font-bold">{service.title}</h4>
                      <p className="text-[10px] lg:text-xs uppercase tracking-widest opacity-80">Invitation Design</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Navigation Arrows */}
            {isMobile && (
              <div className="absolute top-1/2 -translate-y-1/2 w-full px-4 flex justify-between z-40 pointer-events-none md:hidden">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-luxury-white border border-charcoal/10 flex items-center justify-center text-charcoal shadow-md active:bg-champagne active:text-charcoal transition-colors pointer-events-auto -translate-x-4"
                  aria-label="Previous service"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-luxury-white border border-charcoal/10 flex items-center justify-center text-charcoal shadow-md active:bg-champagne active:text-charcoal transition-colors pointer-events-auto translate-x-4"
                  aria-label="Next service"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

        </Container>
      </div>
    </section>
  );
}
