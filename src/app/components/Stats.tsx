import { TrendingUp, Users, Award, Building } from 'lucide-react';

const statistics = [
  {
    icon: TrendingUp,
    value: '15+',
    label: 'Years of Excellence',
    description: 'Delivering exceptional design'
  },
  {
    icon: Users,
    value: '500+',
    label: 'Happy Clients',
    description: 'Satisfied homeowners & businesses'
  },
  {
    icon: Award,
    value: '50+',
    label: 'Design Awards',
    description: 'Industry recognition'
  },
  {
    icon: Building,
    value: '$50M+',
    label: 'Projects Completed',
    description: 'In total project value'
  }
];

export function Stats() {
  return (
    <section className='py-24 px-6 lg:px-8 bg-primary text-primary-foreground'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className='text-center'>
                <div className='inline-flex items-center justify-center w-16 h-16 bg-white/10 mb-6'>
                  <Icon size={32} />
                </div>
                <div className='text-5xl mb-3 tracking-wide'>{stat.value}</div>
                <h3 className='text-xl tracking-wide mb-2'>{stat.label}</h3>
                <p className='text-sm opacity-80'>{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
