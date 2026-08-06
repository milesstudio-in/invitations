import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const tiers = [
  {
    name: "Elegant",
    price: "Reserve",
    description: "A refined digital presence for intimate gatherings, delivered with grace.",
    features: [
      "Custom Typography Selection",
      "Single Page Scrolling Layout",
      "Standard RSVP Form",
      "Google Maps Integration",
      "1 Revision Round",
      "Hosted for 6 Months"
    ]
  },
  {
    name: "Premium",
    price: "Inquire",
    description: "Our most sought-after experience, featuring cinematic motion and robust guest management.",
    features: [
      "Everything in Elegant",
      "Custom Domain Name",
      "Cinematic Scroll Animations",
      "Advanced RSVP with Dietary Logic",
      "Curated Photo Gallery",
      "3 Revision Rounds",
      "Hosted for 1 Year"
    ],
    highlight: true
  },
  {
    name: "Bespoke",
    price: "Commission",
    description: "A completely custom-engineered masterpiece with no limitations on creativity.",
    features: [
      "Everything in Premium",
      "Original Art Direction & Illustration",
      "Custom 3D / WebGL Elements",
      "Multi-Language Support",
      "Dedicated Project Manager",
      "Unlimited Revisions",
      "Hosted Indefinitely"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-ivory">
      <Container>
        <SectionHeading 
          title="An Investment in Elegance."
          subtitle="Transparent, value-driven tiers designed to match the scale and ambition of your celebration."
          eyebrow="Pricing"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <div 
              key={idx}
              className={`relative bg-luxury-white p-8 md:p-10 rounded-2xl border transition-all duration-normal hover:-translate-y-2 hover:shadow-premium ${
                tier.highlight 
                  ? 'border-champagne shadow-floating md:-translate-y-4' 
                  : 'border-warm-grey-100 shadow-subtle'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-champagne text-charcoal px-4 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-display font-medium text-charcoal mb-2">{tier.name}</h3>
              <p className="text-slate text-sm h-10 mb-8">{tier.description}</p>
              
              <div className="text-3xl font-display font-medium text-charcoal mb-8 pb-8 border-b border-warm-grey-100">
                {tier.price}
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-champagne shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal/80 text-sm font-body">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.highlight ? 'primary' : 'outline'} 
                className="w-full"
              >
                {tier.price === 'Commission' ? 'Request Consultation' : 'Select ' + tier.name}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
