import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const features = [
  {
    title: "Cinematic Motion",
    description: "Every interaction is carefully choreographed. We don't just animate; we direct your story.",
    icon: "01"
  },
  {
    title: "Bespoke Design",
    description: "No templates. No repetition. Your invitation is a completely original composition tailored to your aesthetic.",
    icon: "02"
  },
  {
    title: "Editorial Typography",
    description: "We pair premium, hand-selected typefaces to create hierarchy and rhythm that feels like a luxury magazine.",
    icon: "03"
  },
  {
    title: "Flawless Performance",
    description: "Buttery smooth 60fps scrolling, optimized assets, and instant loading times across all devices.",
    icon: "04"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="services" className="py-24 md:py-32 bg-ivory">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="sticky top-32">
            <SectionHeading 
              title="A Standard Beyond the Ordinary."
              subtitle="We believe an invitation is the prologue to your event. It should set the tone, evoke emotion, and build anticipation."
              eyebrow="Why ÉTUDE"
              align="left"
              className="mb-8"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <Card 
                key={idx} 
                className={`p-8 ${idx % 2 === 1 ? 'sm:mt-12' : ''}`}
                hoverEffect="lift"
              >
                <div className="text-3xl font-display font-light text-champagne mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-medium text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
