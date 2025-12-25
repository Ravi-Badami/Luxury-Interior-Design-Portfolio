import { MessageSquare, PenTool, Hammer, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We begin with an in-depth consultation to understand your vision, lifestyle, and requirements. This is where we explore your preferences and establish project goals.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design Development',
    description: 'Our team creates detailed design concepts, mood boards, and 3D visualizations. We present material selections, color palettes, and furniture layouts for your approval.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Implementation',
    description: 'We manage every aspect of the project execution, coordinating with contractors, artisans, and suppliers to ensure quality and timelines are met.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Final Reveal',
    description: 'We complete the installation with meticulous attention to detail, conducting a final walkthrough to ensure everything exceeds your expectations.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-wider mb-4">
            OUR PROCESS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A seamless journey from concept to completion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white p-8 h-full border-t-4 border-primary hover:shadow-xl transition-shadow duration-300">
                  <div className="text-6xl tracking-wider text-secondary mb-4">
                    {step.number}
                  </div>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="mb-4 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-px bg-border">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rotate-45"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}