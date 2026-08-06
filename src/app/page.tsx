import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import PathirikkaiReveal from '@/components/sections/PathirikkaiReveal';
import ServiceStory from '@/components/sections/ServiceStory';
import CityMarquee from '@/components/sections/CityMarquee';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-white text-charcoal selection:bg-champagne selection:text-white">
      <Navbar />
      
      <Hero />
      <PathirikkaiReveal />
      <ServiceStory />
      <CityMarquee />
      <Contact />
      
      <Footer />
    </main>
  );
}
