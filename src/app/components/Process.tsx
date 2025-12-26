'use client';

import { useState, useEffect } from 'react';
import {
  MessageSquare,
  Compass,
  Ruler,
  Package,
  FileCheck,
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { Carousel } from './ui/carousel';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Private Consultation & Discovery',
    subtitle: 'Where the relationship begins',
    description:
      'Confidential, in-depth conversations to understand vision, lifestyle, aspirations, and practical requirements.'
  },
  {
    number: '02',
    icon: Compass,
    title: 'Design Direction & Concept Creation',
    subtitle: 'Defining the narrative',
    description:
      'Translate the brief into a refined design direction with clear aesthetic language and creative intent.'
  },
  {
    number: '03',
    icon: Ruler,
    title: 'Spatial Planning & Design Development',
    subtitle: 'Where beauty meets precision',
    description:
      'Meticulously developed layouts that enhance flow, proportion, and long-term usability.'
  },
  {
    number: '04',
    icon: Package,
    title: 'Materials, Finishes & Furnishings',
    subtitle: 'Curated, never generic',
    description:
      'Bespoke sourcing of finishes and furnishings with emphasis on craftsmanship and longevity.'
  },
  {
    number: '05',
    icon: FileCheck,
    title: 'Procurement & Project Stewardship',
    subtitle: 'Seamless execution, expertly managed',
    description: 'Oversight of ordering, timelines, and coordination with trusted specialists.'
  },
  {
    number: '06',
    icon: Sparkles,
    title: 'Installation, Styling & Final Reveal',
    subtitle: 'The moment it all comes together',
    description:
      'Precise installation and styling resulting in a composed, ready-to-enjoy interior.'
  },
  {
    number: '07',
    icon: HeartHandshake,
    title: 'Ongoing Care & Support',
    subtitle: 'Our commitment doesnt end at handover',
    description:
      'Continued availability for fine-tuning, future enhancements, and ongoing guidance.'
  }
];

export function Process() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id='process' className='py-32 px-6 lg:px-12 bg-neutral-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='max-w-3xl mb-24'>
          <p className='text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 font-light'>
            How we work
          </p>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-neutral-900 leading-tight font-light'>
            A considered process built on trust
          </h2>
          <p className='text-lg text-neutral-600 leading-relaxed font-light'>
            Every project begins with listening. What follows is a carefully structured journey
            designed to translate your vision into spaces that feel both timeless and deeply
            personal.
          </p>
        </div>

        {/* Process Steps */}
        {isMobile ? (
          <Carousel className='max-w-md mx-auto'>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className='px-3'>
                  <div className='bg-white p-10 h-full border-l border-neutral-200 hover:border-neutral-400 transition-colors duration-700'>
                    <div className='text-[5rem] leading-none font-serif text-neutral-300 mb-8 font-light'>
                      {step.number}
                    </div>
                    <div className='w-12 h-12 flex items-center justify-center mb-8'>
                      <Icon size={28} strokeWidth={1} className='text-neutral-700' />
                    </div>
                    <p className='text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3 font-light'>
                      {step.subtitle}
                    </p>
                    <h3 className='text-xl font-serif mb-6 text-neutral-900 leading-snug font-normal'>
                      {step.title}
                    </h3>
                    <p className='text-neutral-600 leading-relaxed text-[15px] font-light'>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        ) : (
          <div className='space-y-2'>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className='group grid grid-cols-12 gap-8 lg:gap-12 items-start bg-white border-l border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-700 p-10 lg:p-12'>
                  {/* Number */}
                  <div className='col-span-2 lg:col-span-1'>
                    <div className='text-[4rem] lg:text-[5rem] leading-none font-serif text-neutral-300 font-light'>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className='col-span-2 lg:col-span-1 flex items-start pt-2'>
                    <div className='w-12 h-12 flex items-center justify-center'>
                      <Icon
                        size={28}
                        strokeWidth={1}
                        className='text-neutral-700 transition-transform duration-500 group-hover:scale-110'
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='col-span-8 lg:col-span-10'>
                    <p className='text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3 font-light'>
                      {step.subtitle}
                    </p>
                    <h3 className='text-2xl lg:text-3xl font-serif mb-4 text-neutral-900 leading-snug font-normal'>
                      {step.title}
                    </h3>
                    <p className='text-neutral-600 leading-relaxed text-base lg:text-lg font-light max-w-2xl'>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
