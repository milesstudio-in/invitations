import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'Wedding', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800' },
  { name: 'Engagement', image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800' },
  { name: 'Reception', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800' },
  { name: 'Birthday', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800' },
  { name: 'Baby Shower', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800' },
  { name: 'Corporate Events', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800' },
];

export default function Categories() {
  return (
    <section className="py-24 md:py-32 bg-luxury-white">
      <Container>
        <SectionHeading 
          title="Curated for Every Occasion."
          subtitle="From intimate gatherings to grand celebrations, our digital experiences adapt perfectly to your event's unique narrative."
          eyebrow="Capabilities"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href={`#${category.name.toLowerCase().replace(' ', '-')}`}
              className="group relative h-[400px] rounded-2xl overflow-hidden block"
            >
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-normal z-10" />
              <Image 
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-slow ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent">
                <h3 className="text-2xl font-display text-luxury-white font-medium">
                  {category.name}
                </h3>
                <div className="w-0 h-[1px] bg-champagne mt-4 group-hover:w-12 transition-all duration-normal ease-out" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
