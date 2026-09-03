import Container from '../ui/Container';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-luxury-white pt-24 pb-8 overflow-hidden relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-tropika tracking-wide mb-6">
              <span className="text-luxury-white font-medium">Miles</span>
              <span className="text-champagne font-light ml-1">Studio</span>
            </h3>
            <p className="text-slate/80 font-body max-w-sm leading-relaxed mb-8">
              A luxury digital invitation studio crafting bespoke, cinematic experiences for the world's most discerning hosts.
            </p>
            <div className="flex gap-6">
              <a href="https://instagram.com/milesstudio.in" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne transition-colors">Instagram</a>
              <a href="https://milesstudio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne transition-colors">Main Website</a>
              <a href="https://wa.me/918489189183" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne transition-colors">WhatsApp</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-slate mb-6">Studio</h4>
            <ul className="space-y-4">
              <li><Link href="#portfolio" className="text-white/80 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="#services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-slate mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate text-sm">
            &copy; {currentYear} Miles Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate">
            <span>Designed with</span>
            <span className="text-champagne">♥</span>
            <span>in standard beyond ordinary.</span>
          </div>
        </div>

        {/* Massive text at the bottom */}
        <div className="w-full flex justify-center translate-y-[20%] pointer-events-none select-none overflow-hidden h-[12vw] min-h-[100px]">
          <h1 className="text-[15vw] leading-none font-tropika font-bold text-white/[0.02] uppercase tracking-tighter whitespace-nowrap">
            MILES STUDIO
          </h1>
        </div>
      </Container>
    </footer>
  );
}
