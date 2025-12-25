import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Design Consultation',
    price: '2,500',
    description: 'Perfect for single room transformations',
    features: [
      'Initial consultation (2 hours)',
      'Concept mood board',
      'Color scheme recommendations',
      'Furniture layout plan',
      'Shopping list with sources',
      'Email support for 30 days',
    ],
    popular: false,
  },
  {
    name: 'Full Design Package',
    price: '15,000',
    description: 'Comprehensive design for your entire space',
    features: [
      'Everything in Design Consultation',
      'Detailed floor plans & elevations',
      '3D renderings & visualizations',
      'Custom furniture design',
      'Material & finish specifications',
      'Contractor coordination',
      'Project management',
      'Installation supervision',
      '90-day support period',
    ],
    popular: true,
  },
  {
    name: 'Luxury Turnkey',
    price: 'Custom',
    description: 'White-glove service from concept to completion',
    features: [
      'Everything in Full Design Package',
      'Bespoke furniture & custom pieces',
      'Art curation & procurement',
      'Lighting design & installation',
      'Smart home integration',
      'Landscape coordination',
      'Full project procurement',
      'On-site project management',
      'Lifetime support & maintenance',
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-wider mb-4">
            INVESTMENT PACKAGES
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flexible options tailored to your project scope and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white p-8 relative ${
                pkg.popular ? 'ring-2 ring-primary shadow-2xl scale-105' : 'shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1 text-sm tracking-widest">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl tracking-wide mb-3">
                  {pkg.name}
                </h3>
                <div className="mb-2">
                  <span className="text-sm">Starting from</span>
                  <div className="text-4xl mt-1">
                    {pkg.price === 'Custom' ? (
                      <span>{pkg.price}</span>
                    ) : (
                      <>
                        <span className="text-2xl">$</span>
                        {pkg.price}
                      </>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 tracking-widest transition-all ${
                  pkg.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          <p className="text-sm">
            All packages can be customized to your specific needs. Contact us for a detailed quote.
          </p>
        </div>
      </div>
    </section>
  );
}
