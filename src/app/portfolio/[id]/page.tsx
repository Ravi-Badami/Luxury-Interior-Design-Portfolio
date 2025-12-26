'use client';

import { use, useState, useEffect } from 'react';
import { notFound, useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { getProjectById, getRelatedProjects } from '@/data/projects';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/app/components/ui/carousel';

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const projectId = parseInt(resolvedParams.id);
  const project = getProjectById(projectId);
  const searchParams = useSearchParams();
  const router = useRouter();

  const fromHome = searchParams.get('from') === 'home';

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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
    if (!carouselApi || !isMobile) return;

    let currentIndex = 0;

    const interval = setInterval(() => {
      const total = carouselApi.scrollSnapList().length;

      if (currentIndex >= total - 1) {
        // Reset to first slide when reaching the end
        carouselApi.scrollTo(0);
        currentIndex = 0;
      } else {
        // Go to next slide
        carouselApi.scrollNext();
        currentIndex++;
      }
      setCurrentSlide(currentIndex);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [carouselApi, isMobile]);

  // Track current slide changes
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on('select', onSelect);
    return () => {
      carouselApi.off('select', onSelect);
    };
  }, [carouselApi]);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.id, project.category);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex(prev => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setLightboxIndex(prev => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (fromHome) {
      router.push('/#portfolio');
    } else {
      router.push('/portfolio');
    }
  };

  return (
    <div className='min-h-screen bg-white'>
      <div className='relative h-[70vh] md:h-[85vh] w-full overflow-hidden'>
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'>
          <div className='absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-16 text-white'>
            <button
              onClick={handleBackClick}
              className='inline-flex items-center gap-2 mb-6 text-sm tracking-wider hover:opacity-80 transition-opacity'>
              <ArrowLeft size={20} />
              BACK TO PORTFOLIO
            </button>
            <p className='text-sm tracking-widest mb-3 opacity-90'>
              {project.category} • {project.year}
            </p>
            <h1 className='text-5xl md:text-7xl tracking-wide mb-4'>{project.title}</h1>
            <p className='text-xl opacity-90'>{project.location}</p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-16 py-12 md:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20'>
          <div className='lg:col-span-2'>
            <h2 className='text-2xl md:text-3xl tracking-wide mb-4 md:mb-6'>Project Overview</h2>
            <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8'>
              {project.description}
            </p>

            <div className='bg-secondary/20 p-4 md:p-8 mb-8 md:mb-12'>
              <h3 className='text-lg md:text-2xl tracking-wide mb-3 md:mb-4'>The Challenge</h3>
              <p className='text-muted-foreground leading-relaxed mb-4 md:mb-6 text-sm md:text-base'>
                {project.challenges}
              </p>

              <h3 className='text-lg md:text-2xl tracking-wide mb-3 md:mb-4'>Our Solution</h3>
              <p className='text-muted-foreground leading-relaxed text-sm md:text-base'>
                {project.solution}
              </p>
            </div>
          </div>

          <div className='bg-secondary/10 p-6 md:p-8 h-fit sticky top-8'>
            <h3 className='text-xl tracking-wider mb-6 border-b pb-3'>PROJECT DETAILS</h3>

            {/* Mobile: Grid layout, Desktop: Vertical list */}
            <div className='grid grid-cols-2 gap-4 md:grid-cols-1 md:space-y-4 md:gap-0'>
              <div className='bg-white/50 p-3 rounded-lg md:bg-transparent md:p-0 md:rounded-none'>
                <p className='text-muted-foreground text-xs md:text-sm mb-1'>Client Type</p>
                <p className='font-medium text-sm md:text-base'>{project.clientType}</p>
              </div>

              <div className='bg-white/50 p-3 rounded-lg md:bg-transparent md:p-0 md:rounded-none'>
                <p className='text-muted-foreground text-xs md:text-sm mb-1'>Location</p>
                <p className='font-medium text-sm md:text-base'>{project.location}</p>
              </div>

              <div className='bg-white/50 p-3 rounded-lg md:bg-transparent md:p-0 md:rounded-none'>
                <p className='text-muted-foreground text-xs md:text-sm mb-1'>Completion Year</p>
                <p className='font-medium text-sm md:text-base'>{project.year}</p>
              </div>

              <div className='bg-white/50 p-3 rounded-lg md:bg-transparent md:p-0 md:rounded-none'>
                <p className='text-muted-foreground text-xs md:text-sm mb-1'>Duration</p>
                <p className='font-medium text-sm md:text-base'>{project.duration}</p>
              </div>

              <div className='bg-white/50 p-3 rounded-lg md:bg-transparent md:p-0 md:rounded-none'>
                <p className='text-muted-foreground text-xs md:text-sm mb-1'>Square Footage</p>
                <p className='font-medium text-sm md:text-base'>{project.squareFootage}</p>
              </div>

              <div className='bg-white/50 p-3 rounded-lg md:bg-transparent md:p-0 md:rounded-none'>
                <p className='text-muted-foreground text-xs md:text-sm mb-1'>Design Style</p>
                <p className='font-medium text-sm md:text-base'>{project.designStyle}</p>
              </div>

              <div className='bg-white/50 p-3 rounded-lg col-span-2 md:col-span-1 md:bg-transparent md:p-0 md:rounded-none'>
                <p className='text-muted-foreground text-xs md:text-sm mb-1'>Role</p>
                <p className='font-medium text-sm md:text-base'>{project.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-20'>
          <h2 className='text-3xl tracking-wide mb-8'>Project Gallery</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {project.images.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className='relative aspect-[4/3] overflow-hidden cursor-pointer group'>
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center'>
                  <ExternalLink
                    className='text-white opacity-0 group-hover:opacity-100 transition-opacity'
                    size={32}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mb-16 md:mb-20'>
          <h2 className='text-3xl tracking-wide mb-6 md:mb-8'>Materials & Finishes</h2>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6'>
            <div className='bg-white border-2 border-secondary/30 p-4 md:p-6 hover:border-primary transition-colors duration-300'>
              <div className='w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4'>
                <svg
                  className='w-4 h-4 md:w-6 md:h-6 text-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z'
                  />
                </svg>
              </div>
              <h3 className='text-sm md:text-lg font-medium mb-2 md:mb-4 tracking-wide'>
                FLOORING
              </h3>
              <div className='space-y-1 md:space-y-2'>
                {project.materials.flooring.map((material, index) => (
                  <p key={index} className='text-xs md:text-sm text-muted-foreground'>
                    {material}
                  </p>
                ))}
              </div>
            </div>

            <div className='bg-white border-2 border-secondary/30 p-4 md:p-6 hover:border-primary transition-colors duration-300'>
              <div className='w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4'>
                <svg
                  className='w-4 h-4 md:w-6 md:h-6 text-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                  />
                </svg>
              </div>
              <h3 className='text-sm md:text-lg font-medium mb-2 md:mb-4 tracking-wide'>WALLS</h3>
              <div className='space-y-1 md:space-y-2'>
                {project.materials.walls.map((material, index) => (
                  <p key={index} className='text-xs md:text-sm text-muted-foreground'>
                    {material}
                  </p>
                ))}
              </div>
            </div>

            <div className='bg-white border-2 border-secondary/30 p-4 md:p-6 hover:border-primary transition-colors duration-300'>
              <div className='w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4'>
                <svg
                  className='w-4 h-4 md:w-6 md:h-6 text-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
                  />
                </svg>
              </div>
              <h3 className='text-sm md:text-lg font-medium mb-2 md:mb-4 tracking-wide'>
                FURNITURE
              </h3>
              <div className='space-y-1 md:space-y-2'>
                {project.materials.furniture.map((material, index) => (
                  <p key={index} className='text-xs md:text-sm text-muted-foreground'>
                    {material}
                  </p>
                ))}
              </div>
            </div>

            <div className='bg-white border-2 border-secondary/30 p-4 md:p-6 hover:border-primary transition-colors duration-300'>
              <div className='w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4'>
                <svg
                  className='w-4 h-4 md:w-6 md:h-6 text-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  />
                </svg>
              </div>
              <h3 className='text-sm md:text-lg font-medium mb-2 md:mb-4 tracking-wide'>ACCENTS</h3>
              <div className='space-y-1 md:space-y-2'>
                {project.materials.accents.map((material, index) => (
                  <p key={index} className='text-xs md:text-sm text-muted-foreground'>
                    {material}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='mb-20'>
          <h2 className='text-3xl tracking-wide mb-8'>Color Palette</h2>
          <div className='bg-white border-2 border-secondary/30 p-8'>
            <div className='flex flex-wrap gap-8 justify-center'>
              {project.colorPalette.map((color, index) => (
                <div key={index} className='group text-center'>
                  <div
                    className='w-24 h-24 rounded-2xl shadow-lg mb-3 border-4 border-white transform group-hover:scale-110 transition-transform duration-300'
                    style={{ backgroundColor: color }}
                  />
                  <p className='text-sm font-mono tracking-wider font-medium'>{color}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mb-16 md:mb-20'>
          <h2 className='text-2xl md:text-3xl tracking-wide mb-6 md:mb-8'>Key Features</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
            {project.features.map((feature, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-white to-secondary/5 border-2 border-secondary/30 p-4 md:p-6 hover:border-primary hover:shadow-lg transition-all duration-300'>
                <div className='flex items-start gap-3 md:gap-4'>
                  <div className='w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1'>
                    <span className='text-white font-bold text-sm md:text-lg'>{index + 1}</span>
                  </div>
                  <p className='text-muted-foreground leading-relaxed pt-1 md:pt-2 text-sm md:text-base'>
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {project.testimonial && (
          <div className='bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 p-12 mb-20 relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32' />
            <div className='absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32' />

            <div className='relative z-10 max-w-4xl mx-auto text-center'>
              <svg
                className='w-16 h-16 text-primary mx-auto mb-8'
                fill='currentColor'
                viewBox='0 0 24 24'>
                <path d='M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z' />
              </svg>
              <p className='text-2xl italic text-foreground mb-8 leading-relaxed font-light'>
                &quot;{project.testimonial.text}&quot;
              </p>
              <div className='inline-block bg-white px-8 py-4 rounded-lg shadow-md'>
                <p className='font-semibold text-lg mb-1'>{project.testimonial.author}</p>
                <p className='text-sm text-muted-foreground'>{project.testimonial.role}</p>
              </div>
            </div>
          </div>
        )}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20'>
          <div className='bg-white border-2 border-secondary/30 p-6 md:p-8 hover:border-primary transition-colors duration-300'>
            <div className='flex items-center gap-3 md:gap-4 mb-4 md:mb-6'>
              <div className='w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center'>
                <svg
                  className='w-5 h-5 md:w-7 md:h-7 text-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h2 className='text-xl md:text-2xl tracking-wide'>Project Timeline</h2>
            </div>

            <div className='bg-secondary/10 p-4 md:p-6 rounded-lg mb-6 md:mb-8'>
              <p className='text-base md:text-lg text-muted-foreground'>{project.timeline}</p>
            </div>

            <h3 className='text-lg md:text-xl tracking-wide mb-3 md:mb-4 font-medium'>
              Collaborators
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3'>
              {project.collaborators.map((collaborator, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors'>
                  <div className='w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full flex-shrink-0' />
                  <span className='text-sm md:text-base text-muted-foreground'>{collaborator}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 md:p-8 hover:border-green-400 transition-colors duration-300'>
            <div className='flex items-center gap-3 md:gap-4 mb-4 md:mb-6'>
              <div className='w-10 h-10 md:w-14 md:h-14 bg-green-500/20 rounded-xl flex items-center justify-center'>
                <svg
                  className='w-5 h-5 md:w-7 md:h-7 text-green-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h2 className='text-xl md:text-2xl tracking-wide'>Sustainability</h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4'>
              {project.sustainability.map((item, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3 p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                  <div className='w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <svg
                      className='w-4 h-4 md:w-5 md:h-5 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <span className='text-sm md:text-base text-muted-foreground leading-relaxed'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {relatedProjects.length > 0 && (
          <div>
            <h2 className='text-3xl tracking-wide mb-8 text-center'>More Projects</h2>

            {/* Mobile: Carousel, Desktop: Grid */}
            {isMobile ? (
              <div>
                <Carousel setApi={setCarouselApi} className='max-w-md mx-auto'>
                  <CarouselContent className='-ml-4'>
                    {relatedProjects.map(relatedProject => (
                      <CarouselItem key={relatedProject.id} className='pl-4 basis-full'>
                        <Link href={`/portfolio/${relatedProject.id}`}>
                          <div className='group cursor-pointer'>
                            <div className='relative aspect-[4/5] overflow-hidden mb-4 rounded-lg'>
                              <ImageWithFallback
                                src={relatedProject.image}
                                alt={relatedProject.title}
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                              />
                              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center'>
                                <ExternalLink
                                  className='text-white opacity-0 group-hover:opacity-100 transition-opacity'
                                  size={24}
                                />
                              </div>
                            </div>
                            <p className='text-xs tracking-widest text-muted-foreground mb-2 text-center'>
                              {relatedProject.category} • {relatedProject.year}
                            </p>
                            <h3 className='text-lg tracking-wide mb-1 group-hover:text-primary transition-colors text-center'>
                              {relatedProject.title}
                            </h3>
                            <p className='text-sm text-muted-foreground text-center'>
                              {relatedProject.location}
                            </p>
                          </div>
                        </Link>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                {/* Carousel Indicators */}
                <div className='flex justify-center mt-6 space-x-2'>
                  {relatedProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        carouselApi?.scrollTo(index);
                        setCurrentSlide(index);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {relatedProjects.map(relatedProject => (
                  <Link key={relatedProject.id} href={`/portfolio/${relatedProject.id}`}>
                    <div className='group cursor-pointer'>
                      <div className='relative aspect-[4/5] overflow-hidden mb-4 rounded-lg'>
                        <ImageWithFallback
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
                      </div>
                      <p className='text-xs tracking-widest text-muted-foreground mb-2'>
                        {relatedProject.category} • {relatedProject.year}
                      </p>
                      <h3 className='text-xl tracking-wide mb-1 group-hover:text-primary transition-colors'>
                        {relatedProject.title}
                      </h3>
                      <p className='text-sm text-muted-foreground'>{relatedProject.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center'>
          <button
            onClick={closeLightbox}
            className='absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10'
            aria-label='Close lightbox'>
            <X size={40} />
          </button>

          <button
            onClick={prevImage}
            className='absolute left-6 text-white hover:text-gray-300 transition-colors z-10'
            aria-label='Previous image'>
            <ChevronLeft size={60} />
          </button>

          <button
            onClick={nextImage}
            className='absolute right-6 text-white hover:text-gray-300 transition-colors z-10'
            aria-label='Next image'>
            <ChevronRight size={60} />
          </button>

          <div className='max-w-7xl max-h-[90vh] px-20'>
            <img
              src={project.images[lightboxIndex]}
              alt={`${project.title} - Image ${lightboxIndex + 1}`}
              className='max-w-full max-h-[90vh] object-contain'
            />
          </div>

          <div className='absolute bottom-6 left-0 right-0 text-center text-white text-sm'>
            {lightboxIndex + 1} / {project.images.length}
          </div>
        </div>
      )}
    </div>
  );
}
