import { Award, TrendingUp, Users, Star } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Best Interior Design Firm 2024',
    organization: 'Design Excellence Awards'
  },
  {
    icon: Star,
    title: 'Top 50 Interior Designers',
    organization: 'Architectural Digest'
  },
  {
    icon: TrendingUp,
    title: 'Innovation in Design Award',
    organization: 'International Design Council'
  },
  {
    icon: Users,
    title: 'Client Choice Award',
    organization: 'Houzz'
  }
];

const certifications = [
  'NCIDQ Certified',
  'LEED Accredited Professional',
  'Certified Interior Designer (CID)',
  'ASID Professional Member'
];

export function Awards() {
  return (
    <section className='py-24 px-6 lg:px-8 bg-secondary/30'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl tracking-wider mb-4'>AWARDS & RECOGNITION</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Industry recognition for excellence in design
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16'>
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className='bg-white p-8 text-center hover:shadow-xl transition-shadow duration-300'>
                <div className='inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground mb-4'>
                  <Icon size={32} />
                </div>
                <h3 className='mb-2 text-lg tracking-wide'>{achievement.title}</h3>
                <p className='text-sm text-muted-foreground'>{achievement.organization}</p>
              </div>
            );
          })}
        </div>

        <div className='bg-white p-8 md:p-12'>
          <h3 className='text-2xl tracking-wide mb-8 text-center'>Professional Certifications</h3>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className='text-center py-4 border border-border hover:border-primary transition-colors'>
                <p className='tracking-wide'>{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
