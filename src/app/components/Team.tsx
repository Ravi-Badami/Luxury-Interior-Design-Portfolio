'use client';

import { Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from './ui/carousel';

const team = [
  {
    name: 'Alexandra Morgan',
    role: 'Founder & Lead Designer',
    image:
      'https://images.unsplash.com/photo-1573164573938-c9a3db2e84ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzY2Njg4OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: '15+ years of experience in luxury interior design with a focus on timeless elegance.',
    linkedin: '#',
    email: 'alexandra@luxeinteriors.com'
  },
  {
    name: 'David Chen',
    role: 'Senior Interior Architect',
    image:
      'https://images.unsplash.com/photo-1650369026145-ba99580124fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY2Njg4OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Specializes in spatial planning and creating functional yet beautiful environments.',
    linkedin: '#',
    email: 'david@luxeinteriors.com'
  },
  {
    name: 'Sophie Laurent',
    role: 'Color & Materials Specialist',
    image:
      'https://images.unsplash.com/photo-1764438246710-83c535cada80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2NjU5ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Expert in curating color palettes and sourcing rare materials from around the world.',
    linkedin: '#',
    email: 'sophie@luxeinteriors.com'
  }
];

export function Team() {
  const [isMobile, setIsMobile] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!api) return;

    setSelectedIndex(api.selectedScrollSnap());

    api.on('select', () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className='py-24 px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl tracking-wider mb-4'>MEET OUR TEAM</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>

        {isMobile ? (
          <div>
            <Carousel setApi={setApi} className='w-full max-w-4xl mx-auto'>
              <CarouselContent className='-ml-4'>
                {team.map((member, index) => (
                  <CarouselItem key={index} className='pl-4 basis-full'>
                    <div className='group mx-2'>
                      <div className='relative aspect-[3/4] overflow-hidden mb-6'>
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500'
                        />
                        <div className='absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                      </div>
                      <h3 className='text-xl tracking-wide mb-2'>{member.name}</h3>
                      <p className='text-muted-foreground mb-3 tracking-wide text-sm'>
                        {member.role}
                      </p>
                      <p className='text-xs text-muted-foreground leading-relaxed mb-4'>
                        {member.bio}
                      </p>
                      <div className='flex gap-3'>
                        <a
                          href={member.linkedin}
                          className='w-8 h-8 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center'
                          aria-label='LinkedIn'>
                          <Linkedin size={14} />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className='w-8 h-8 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center'
                          aria-label='Email'>
                          <Mail size={14} />
                        </a>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='left-2' />
              <CarouselNext className='right-2' />
            </Carousel>

            {/* Carousel Indicators */}
            <div className='flex justify-center mt-6 space-x-2'>
              {api?.scrollSnapList().map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === selectedIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            {team.map((member, index) => (
              <div key={index} className='group'>
                <div className='relative aspect-[3/4] overflow-hidden mb-6'>
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500'
                  />
                  <div className='absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                </div>
                <h3 className='text-2xl tracking-wide mb-2'>{member.name}</h3>
                <p className='text-muted-foreground mb-3 tracking-wide'>{member.role}</p>
                <p className='text-sm text-muted-foreground leading-relaxed mb-4'>{member.bio}</p>
                <div className='flex gap-3'>
                  <a
                    href={member.linkedin}
                    className='w-10 h-10 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center'
                    aria-label='LinkedIn'>
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className='w-10 h-10 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center'
                    aria-label='Email'>
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
