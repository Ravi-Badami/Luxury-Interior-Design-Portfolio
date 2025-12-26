'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from './ui/carousel';
import { projects } from '@/data/projects';

const categories = ['All', 'Residential', 'Commercial'];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setSelectedIndex(api.selectedScrollSnap());

    api.on('select', () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  return (
    <section id='portfolio' className='py-24 px-6 lg:px-8 bg-secondary/30'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl tracking-wider mb-4'>OUR PORTFOLIO</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            A curated selection of our most distinguished projects
          </p>
        </div>

        <div className='flex justify-center gap-4 mb-12 flex-wrap'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 tracking-wider transition-all border-2 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-white border-border hover:border-primary'
              }`}>
              {category}
            </button>
          ))}
        </div>

        <Carousel setApi={setApi} className='w-full max-w-7xl mx-auto'>
          <CarouselContent className='-ml-4'>
            {filteredProjects.map(project => (
              <CarouselItem key={project.id} className='pl-4 basis-full md:basis-1/2 lg:basis-1/3'>
                <Link href={`/portfolio/${project.id}`}>
                  <div className='group relative overflow-hidden bg-white aspect-[4/5] cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500'>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                      <div className='absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                        <p className='text-xs tracking-widest mb-2 opacity-80'>
                          {project.category} • {project.year}
                        </p>
                        <h3 className='text-2xl tracking-wide mb-2'>{project.title}</h3>
                        <p className='text-sm opacity-90 mb-4'>{project.location}</p>
                        <div className='flex items-center gap-2 text-sm tracking-wider'>
                          VIEW PROJECT <ExternalLink size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-4' />
          <CarouselNext className='right-4' />
        </Carousel>

        <div className='flex justify-center mt-8 space-x-2'>
          {api?.scrollSnapList().map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link href='/portfolio'>
            <button className='border-2 border-primary text-primary px-8 py-4 tracking-wider hover:bg-primary hover:text-primary-foreground transition-all'>
              VIEW ALL PROJECTS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
