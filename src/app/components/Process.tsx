'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, PenTool, Hammer, CheckCircle } from 'lucide-react';
import { Carousel } from './ui/carousel';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description:
      'We begin with an in-depth consultation to understand your vision, lifestyle, and requirements. This is where we explore your preferences and establish project goals.'
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design Development',
    description:
      'Our team creates detailed design concepts, mood boards, and 3D visualizations. We present material selections, color palettes, and furniture layouts for your approval.'
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Implementation',
    description:
      'We manage every aspect of the project execution, coordinating with contractors, artisans, and suppliers to ensure quality and timelines are met.'
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Final Reveal',
    description:
      'We complete the installation with meticulous attention to detail, conducting a final walkthrough to ensure everything exceeds your expectations.'
  }
];

export function Process() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section id='process' className='py-24 px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl tracking-wider mb-4'>OUR PROCESS</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            A seamless journey from concept to completion
          </p>
        </div>

        {isMobile ? (
          <Carousel className='max-w-sm mx-auto'>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className='relative mx-2'>
                  <div className='bg-white p-8 h-full border-t-4 border-primary hover:shadow-2xl transition-all duration-500 rounded-lg'>
                    <div className='text-6xl tracking-wider text-gray-400 mb-4 font-light'>
                      {step.number}
                    </div>
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground mb-6 rounded-full shadow-lg'>
                      <Icon size={32} />
                    </div>
                    <h3 className='text-xl mb-4 tracking-wide font-semibold'>{step.title}</h3>
                    <p className='text-muted-foreground leading-relaxed text-sm'>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        ) : (
          <div className='relative'>
            {/* Timeline line */}
            <div className='hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0'>
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className='relative lg:flex lg:flex-col lg:items-center'>
                    <div className='bg-white p-8 h-full border-t-4 border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-lg relative z-10'>
                      <div className='text-6xl tracking-wider text-gray-400 mb-4 font-light'>
                        {step.number}
                      </div>
                      <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground mb-6 rounded-full shadow-xl mx-auto'>
                        <Icon size={36} />
                      </div>
                      <h3 className='text-xl mb-4 tracking-wide font-semibold text-center'>
                        {step.title}
                      </h3>
                      <p className='text-muted-foreground leading-relaxed text-center text-sm'>
                        {step.description}
                      </p>
                    </div>

                    {/* Timeline dot */}
                    <div className='hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-20'></div>

                    {/* Arrow for non-last items */}
                    {index < steps.length - 1 && (
                      <div className='hidden lg:block absolute top-20 -right-8 transform -translate-y-1/2 z-10'>
                        <div className='w-0 h-0 border-l-[12px] border-l-primary border-y-[8px] border-y-transparent'></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
