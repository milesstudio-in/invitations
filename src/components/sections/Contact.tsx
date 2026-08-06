"use client";

import { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import MagneticElement from '../animations/MagneticElement';

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    "Wedding Invitation",
    "Engagement",
    "Reception",
    "Housewarming",
    "Baby Shower",
    "Other Event"
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const servicesText = selectedServices.length > 0 
      ? `I am interested in: ${selectedServices.join(', ')}.` 
      : 'I would like to know more about your digital invitations.';
      
    const message = `Hello MilesStudio.Invitations! 👋\n\n${servicesText}\n\nMy name is ${name} and my contact number is ${phone}. Let's discuss!`;
    const whatsappUrl = `https://wa.me/918489189183?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank');
      setIsSuccess(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-32 bg-luxury-white relative overflow-hidden">
      
      {/* Abstract Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80vw] md:w-[40vw] h-[40vw] bg-champagne-dark/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-col justify-between h-full max-w-xl">
            <div>
              <SectionHeading 
                title="Let's make your event unforgettable."
                subtitle="If you're ready to invite your guests in style, let's talk. Reach out directly or fill the form — we respond within 24 hours."
                eyebrow="Get In Touch"
                align="left"
              />
              
              <div className="mt-12 space-y-10">
                
                {/* Email */}
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-maroon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-slate mb-1">Email</h4>
                    <a href="mailto:milesstudio.in@gmail.com" className="text-xl md:text-2xl font-display text-charcoal hover:text-maroon transition-colors">
                      milesstudio.in@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-maroon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-slate mb-1">WhatsApp Fast Track</h4>
                    <a href="https://wa.me/918489189183" className="text-xl md:text-2xl font-display text-charcoal hover:text-maroon transition-colors block mb-2">
                      +91 84891 89183
                    </a>
                    <span className="text-sm text-maroon bg-maroon/10 px-3 py-1 rounded-full font-medium">Usually responds in 1 hour</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side: Glassmorphic Form */}
          <div className="relative border-gradient rounded-3xl p-8 md:p-12 shadow-premium bg-ivory/80 backdrop-blur-xl">
            
            {isSuccess ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-champagne/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-3xl font-display text-charcoal mb-4">Request Sent!</h3>
                <p className="text-slate">Thank you for reaching out. We will connect with you via WhatsApp or Email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate uppercase tracking-widest">Name <span className="text-maroon">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal focus:outline-none focus:border-maroon transition-colors"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate uppercase tracking-widest">Phone / WhatsApp <span className="text-maroon">*</span></label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal focus:outline-none focus:border-maroon transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-semibold text-slate uppercase tracking-widest">What do you need help with? <span className="text-maroon">*</span></label>
                  <div className="flex flex-wrap gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 ${
                          selectedServices.includes(service)
                            ? 'bg-maroon border-maroon text-luxury-white'
                            : 'bg-transparent border-charcoal/20 text-charcoal hover:border-maroon'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <MagneticElement strength={20}>
                    <button 
                      type="submit"
                      disabled={isSubmitting || selectedServices.length === 0}
                      className="w-full bg-charcoal text-luxury-white py-4 rounded-xl font-semibold uppercase tracking-widest hover:bg-champagne hover:text-charcoal transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Request'}
                      {!isSubmitting && <span>&rarr;</span>}
                    </button>
                  </MagneticElement>
                </div>
              </form>
            )}

          </div>

        </div>
      </Container>
    </section>
  );
}
