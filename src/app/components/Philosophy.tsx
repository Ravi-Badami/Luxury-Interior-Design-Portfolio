'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Heart, Lightbulb, Shield } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from './ui/carousel';

const values = [
  {
    icon: Sparkles,
    title: 'Timeless Elegance',
    description:
      'We create designs that transcend trends, focusing on classic beauty and enduring style that will remain relevant for years to come.'
  },
  {
    icon: Heart,
    title: 'Client-Centered Approach',
    description:
      'Your vision is our priority. We listen, understand, and collaborate to ensure every detail reflects your unique personality and lifestyle.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Quality',
    description:
      'We blend cutting-edge design techniques with the finest materials and craftsmanship to deliver exceptional results.'
  },
  {
    icon: Shield,
    title: 'Integrity & Trust',
    description:
      'Transparency, honesty, and professionalism guide every project. We build lasting relationships based on trust and mutual respect.'
  }
];

export function Philosophy() {
  const [api, setApi] = useState<CarouselApi>();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play functionality for mobile carousel
  useEffect(() => {
    if (!api || !isMobile) return;

    let currentIndex = 0;

    const interval = setInterval(() => {
      const total = api.scrollSnapList().length;

      if (currentIndex >= total - 1) {
        // Reset to first slide when reaching the end
        api.scrollTo(0);
        currentIndex = 0;
      } else {
        // Go to next slide
        api.scrollNext();
        currentIndex++;
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [api, isMobile]);

  return (
    <section className='py-16 md:py-24 px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl tracking-wider mb-3 md:mb-4'>
            OUR DESIGN PHILOSOPHY
          </h2>
          <p className='text-muted-foreground max-w-3xl mx-auto leading-relaxed text-sm md:text-base'>
            At Luxe Interiors, we believe that exceptional design is more than aesthetics—it&apos;s
            about creating spaces that enhance your life, inspire your daily routines, and stand the
            test of time.
          </p>
        </div>

        {/* Values Section */}
        {isMobile ? (
          <Carousel setApi={setApi} className='max-w-md mx-auto mb-12'>
            <CarouselContent className='-ml-2'>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <CarouselItem key={index} className='pl-2 basis-full'>
                    <div className='bg-white p-6 rounded-xl shadow-lg border border-border/50'>
                      <div className='flex flex-col items-center text-center gap-4'>
                        <div className='w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center rounded-full'>
                          <Icon size={28} />
                        </div>
                        <div>
                          <h3 className='text-xl tracking-wide mb-3 font-medium'>{value.title}</h3>
                          <p className='text-muted-foreground leading-relaxed text-sm'>
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16'>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className='flex gap-4 md:gap-6'>
                  <div className='flex-shrink-0'>
                    <div className='w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground flex items-center justify-center'>
                      <Icon size={24} className='md:w-8 md:h-8' />
                    </div>
                  </div>
                  <div>
                    <h3 className='text-xl md:text-2xl tracking-wide mb-2 md:mb-3'>
                      {value.title}
                    </h3>
                    <p className='text-muted-foreground leading-relaxed text-sm md:text-base'>
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className='bg-secondary/30 p-6 md:p-8 lg:p-12 border-l-4 border-primary'>
          <p className='text-lg md:text-xl lg:text-2xl italic leading-relaxed text-center'>
            &quot;We don&apos;t just design spaces—we craft experiences. Every project is an
            opportunity to tell a story, evoke emotion, and create an environment where life&apos;s
            most precious moments unfold.&quot;
          </p>
          <p className='text-center mt-4 md:mt-6 tracking-wider text-muted-foreground text-sm md:text-base'>
            — Alexandra Morgan, Founder
          </p>
        </div>
      </div>
    </section>
  );
}
