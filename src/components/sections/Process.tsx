import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    number: "01",
    title: "Consultation & Vision",
    description: "We begin by understanding your story, your aesthetic preferences, and the tone of your event. We discuss colors, typography, and the overall mood."
  },
  {
    number: "02",
    title: "Art Direction",
    description: "Our designers craft a moodboard and initial digital mockups, establishing the visual language and layout structure of your invitation."
  },
  {
    number: "03",
    title: "Development & Motion",
    description: "Once approved, our engineers bring the design to life with fluid animations, ensuring perfect performance across all devices."
  },
  {
    number: "04",
    title: "Review & Launch",
    description: "You receive a private staging link. After final tweaks, we deploy your invitation to a custom domain, ready to be shared with your guests."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-ivory">
      <Container>
        <SectionHeading 
          title="The Path to Perfection."
          subtitle="Our process is intimate, collaborative, and entirely bespoke. We don't use templates; we build from scratch."
          eyebrow="Our Process"
        />

        <div className="max-w-4xl mx-auto mt-20 relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[1px] bg-charcoal/10 -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Number Circle */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-ivory border border-charcoal/20 rounded-full flex items-center justify-center font-display font-medium text-champagne z-10 -translate-x-1/2">
                  {step.number}
                </div>

                <div className={`md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <h3 className="text-2xl font-display font-medium text-charcoal mb-4 pt-2">
                    {step.title}
                  </h3>
                  <p className="text-slate font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
