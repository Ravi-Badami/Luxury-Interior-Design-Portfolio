'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { getProjectById, getRelatedProjects } from '@/data/projects';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const projectId = parseInt(resolvedParams.id);
  const project = getProjectById(projectId);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
            <Link
              href='/portfolio'
              className='inline-flex items-center gap-2 mb-6 text-sm tracking-wider hover:opacity-80 transition-opacity'>
              <ArrowLeft size={20} />
              BACK TO PORTFOLIO
            </Link>
            <p className='text-sm tracking-widest mb-3 opacity-90'>
              {project.category} • {project.year}
            </p>
            <h1 className='text-5xl md:text-7xl tracking-wide mb-4'>{project.title}</h1>
            <p className='text-xl opacity-90'>{project.location}</p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-16 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20'>
          <div className='lg:col-span-2'>
            <h2 className='text-3xl tracking-wide mb-6'>Project Overview</h2>
            <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
              {project.description}
            </p>

            <div className='bg-secondary/20 p-8 mb-12'>
              <h3 className='text-2xl tracking-wide mb-4'>The Challenge</h3>
              <p className='text-muted-foreground leading-relaxed mb-6'>{project.challenges}</p>

              <h3 className='text-2xl tracking-wide mb-4'>Our Solution</h3>
              <p className='text-muted-foreground leading-relaxed'>{project.solution}</p>
            </div>
          </div>

          <div className='bg-secondary/10 p-8 h-fit sticky top-8'>
            <h3 className='text-xl tracking-wider mb-6 border-b pb-3'>PROJECT DETAILS</h3>

            <div className='space-y-4 text-sm'>
              <div>
                <p className='text-muted-foreground mb-1'>Client Type</p>
                <p className='font-medium'>{project.clientType}</p>
              </div>

              <div>
                <p className='text-muted-foreground mb-1'>Location</p>
                <p className='font-medium'>{project.location}</p>
              </div>

              <div>
                <p className='text-muted-foreground mb-1'>Completion Year</p>
                <p className='font-medium'>{project.year}</p>
              </div>

              <div>
                <p className='text-muted-foreground mb-1'>Project Duration</p>
                <p className='font-medium'>{project.duration}</p>
              </div>

              <div>
                <p className='text-muted-foreground mb-1'>Square Footage</p>
                <p className='font-medium'>{project.squareFootage}</p>
              </div>

              <div>
                <p className='text-muted-foreground mb-1'>Design Style</p>
                <p className='font-medium'>{project.designStyle}</p>
              </div>

              <div>
                <p className='text-muted-foreground mb-1'>Role</p>
                <p className='font-medium'>{project.role}</p>
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

        <div className='mb-20'>
          <h2 className='text-3xl tracking-wide mb-8'>Materials & Finishes</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-white border-2 border-secondary/30 p-6 hover:border-primary transition-colors duration-300'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                <svg
                  className='w-6 h-6 text-primary'
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
              <h3 className='text-lg font-medium mb-4 tracking-wide'>FLOORING</h3>
              <div className='space-y-2'>
                {project.materials.flooring.map((material, index) => (
                  <p key={index} className='text-sm text-muted-foreground'>
                    {material}
                  </p>
                ))}
              </div>
            </div>

            <div className='bg-white border-2 border-secondary/30 p-6 hover:border-primary transition-colors duration-300'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                <svg
                  className='w-6 h-6 text-primary'
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
              <h3 className='text-lg font-medium mb-4 tracking-wide'>WALLS</h3>
              <div className='space-y-2'>
                {project.materials.walls.map((material, index) => (
                  <p key={index} className='text-sm text-muted-foreground'>
                    {material}
                  </p>
                ))}
              </div>
            </div>

            <div className='bg-white border-2 border-secondary/30 p-6 hover:border-primary transition-colors duration-300'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                <svg
                  className='w-6 h-6 text-primary'
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
              <h3 className='text-lg font-medium mb-4 tracking-wide'>FURNITURE</h3>
              <div className='space-y-2'>
                {project.materials.furniture.map((material, index) => (
                  <p key={index} className='text-sm text-muted-foreground'>
                    {material}
                  </p>
                ))}
              </div>
            </div>

            <div className='bg-white border-2 border-secondary/30 p-6 hover:border-primary transition-colors duration-300'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                <svg
                  className='w-6 h-6 text-primary'
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
              <h3 className='text-lg font-medium mb-4 tracking-wide'>ACCENTS</h3>
              <div className='space-y-2'>
                {project.materials.accents.map((material, index) => (
                  <p key={index} className='text-sm text-muted-foreground'>
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

        <div className='mb-20'>
          <h2 className='text-3xl tracking-wide mb-8'>Key Features</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {project.features.map((feature, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-white to-secondary/5 border-2 border-secondary/30 p-6 hover:border-primary hover:shadow-lg transition-all duration-300'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <span className='text-white font-bold text-lg'>{index + 1}</span>
                  </div>
                  <p className='text-muted-foreground leading-relaxed pt-2'>{feature}</p>
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

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20'>
          <div className='bg-white border-2 border-secondary/30 p-8 hover:border-primary transition-colors duration-300'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center'>
                <svg
                  className='w-7 h-7 text-primary'
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
              <h2 className='text-2xl tracking-wide'>Project Timeline</h2>
            </div>

            <div className='bg-secondary/10 p-6 rounded-lg mb-8'>
              <p className='text-lg text-muted-foreground'>{project.timeline}</p>
            </div>

            <h3 className='text-xl tracking-wide mb-4 font-medium'>Collaborators</h3>
            <div className='space-y-3'>
              {project.collaborators.map((collaborator, index) => (
                <div
                  key={index}
                  className='flex items-center gap-3 p-3 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors'>
                  <div className='w-2 h-2 bg-primary rounded-full flex-shrink-0' />
                  <span className='text-muted-foreground'>{collaborator}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-8 hover:border-green-400 transition-colors duration-300'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center'>
                <svg
                  className='w-7 h-7 text-green-600'
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
              <h2 className='text-2xl tracking-wide'>Sustainability</h2>
            </div>

            <div className='space-y-4'>
              {project.sustainability.map((item, index) => (
                <div
                  key={index}
                  className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                  <div className='w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <svg
                      className='w-5 h-5 text-white'
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
                  <span className='text-muted-foreground leading-relaxed'>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {relatedProjects.length > 0 && (
          <div>
            <h2 className='text-3xl tracking-wide mb-8 text-center'>More Projects</h2>
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
