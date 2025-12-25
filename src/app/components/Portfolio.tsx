"use client";

import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Living',
    category: 'Residential',
    location: 'Manhattan, NY',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY2NjczNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Serene Bedroom',
    category: 'Residential',
    location: 'Beverly Hills, CA',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1588796460666-590f1d712a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tfGVufDF8fHx8MTc2NjYyODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Elegant Dining',
    category: 'Residential',
    location: 'Miami, FL',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1758977403395-5ae10579231f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbXxlbnwxfHx8fDE3NjY2NDk1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    title: 'Luxury Kitchen',
    category: 'Residential',
    location: 'San Francisco, CA',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2NjIwODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    title: 'Spa Bathroom',
    category: 'Residential',
    location: 'Chicago, IL',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1658760046471-896cbc719c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMG1hcmJsZXxlbnwxfHx8fDE3NjY2NzQyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    title: 'Hotel Lobby',
    category: 'Commercial',
    location: 'Las Vegas, NV',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NjY0MDM4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

const categories = ['All', 'Residential', 'Commercial'];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-wider mb-4">
            OUR PORTFOLIO
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of our most distinguished projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 tracking-wider transition-all border-2 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-white border-border hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-white aspect-[4/5] cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs tracking-widest mb-2 opacity-80">{project.category} • {project.year}</p>
                  <h3 className="text-2xl tracking-wide mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{project.location}</p>
                  <div className="flex items-center gap-2 text-sm tracking-wider">
                    VIEW PROJECT <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary px-8 py-4 tracking-wider hover:bg-primary hover:text-primary-foreground transition-all">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}