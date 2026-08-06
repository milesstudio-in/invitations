import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function LivePreview() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-luxury-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionHeading 
              title="Experience It Yourself."
              subtitle="Interact with a live demo. See the fluid animations, feel the premium typography, and understand why an ÉTUDE invitation is different."
              eyebrow="Live Demo"
              align="left"
              className="mb-8"
            />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="bg-champagne hover:bg-champagne-light text-charcoal shadow-none">
                Open Fullscreen Demo
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-graphite border border-white/10 flex items-center justify-center shadow-premium group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
            <div className="w-16 h-16 rounded-full bg-luxury-white/90 flex items-center justify-center text-charcoal z-20 shadow-floating cursor-pointer group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" />
              </svg>
            </div>
            {/* Placeholder for the iframe or video demo */}
            <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
          </div>
        </div>
      </Container>
    </section>
  );
}
