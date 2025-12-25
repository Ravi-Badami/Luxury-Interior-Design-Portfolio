import { Home, Building2, Palette, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description:
      'Transform your home into a luxurious sanctuary tailored to your lifestyle and aesthetic preferences.'
  },
  {
    icon: Building2,
    title: 'Commercial Spaces',
    description:
      'Create inspiring commercial environments that elevate your brand and enhance productivity.'
  },
  {
    icon: Palette,
    title: 'Design Consultation',
    description:
      'Expert guidance on color schemes, materials, and furnishings to bring your vision to life.'
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description:
      'Sophisticated lighting solutions that enhance ambiance and highlight architectural features.'
  }
];

export function Services() {
  return (
    <section id='services' className='py-24 px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl tracking-wider mb-4'>OUR SERVICES</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Comprehensive design solutions for discerning clients
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className='bg-white p-8 text-center hover:shadow-xl transition-shadow duration-300'>
                <div className='inline-flex items-center justify-center w-16 h-16 bg-secondary mb-6'>
                  <Icon size={32} className='text-primary' />
                </div>
                <h3 className='mb-4 tracking-wide'>{service.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
