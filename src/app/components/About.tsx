import { Award, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Clock, value: '500+', label: 'Projects Completed' }
];

export function About() {
  return (
    <section id='about' className='py-24 px-6 lg:px-8 bg-secondary/30'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-4xl md:text-5xl tracking-wider mb-6'>ABOUT US</h2>
            <p className='text-muted-foreground mb-6 leading-relaxed'>
              With over a decade of experience in luxury interior design, we specialize in creating
              timeless spaces that seamlessly blend elegance with functionality. Our approach is
              rooted in understanding each client&apos;s unique vision and translating it into
              reality.
            </p>
            <p className='text-muted-foreground mb-8 leading-relaxed'>
              Every project is a collaboration, where we combine our expertise with your aspirations
              to craft environments that inspire and endure. From initial concept to final
              installation, we ensure meticulous attention to detail and exceptional quality.
            </p>

            <div className='grid grid-cols-3 gap-6'>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className='text-center'>
                    <div className='inline-flex items-center justify-center w-12 h-12 bg-white mb-3'>
                      <Icon size={24} className='text-primary' />
                    </div>
                    <div className='text-3xl mb-1'>{stat.value}</div>
                    <div className='text-sm text-muted-foreground tracking-wide'>{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='relative'>
            <div className='aspect-[3/4] overflow-hidden'>
              <ImageWithFallback
                src='https://images.unsplash.com/photo-1747992021633-762a63985d01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NjY4Nzc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                alt='Interior design workspace'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute -bottom-8 -right-8 bg-white p-8 shadow-xl max-w-xs hidden lg:block'>
              <p className='text-sm tracking-wide italic'>
                &quot;Design is not just what it looks like. Design is how it works and how it makes
                you feel.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
