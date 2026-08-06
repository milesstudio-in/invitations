import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';

const features = [
  {
    title: "Custom Domain",
    description: "Your invitation lives on a personalized, premium URL (e.g., thesmiths.com) to ensure a flawless first impression.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Smart RSVP System",
    description: "A seamless, elegant form that syncs directly to a private dashboard, managing dietary requirements, plus-ones, and song requests.",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Curated Galleries",
    description: "Display your engagement shoots or journey together in a beautiful, masonry-style gallery with lightbox support.",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800"
  }
];

export default function PremiumFeatures() {
  return (
    <section className="py-24 md:py-32 bg-luxury-white">
      <Container>
        <SectionHeading 
          title="Beyond the Basics."
          subtitle="We engineer functional elegance. Every feature is designed to enhance the guest experience while providing you with powerful tools."
          eyebrow="Features"
        />

        <div className="space-y-24 mt-20">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image 
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-display font-medium text-charcoal mb-6">
                  {feature.title}
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
