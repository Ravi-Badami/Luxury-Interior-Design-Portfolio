export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  clientType: string;
  duration: string;
  squareFootage: string;
  designStyle: string;
  role: string;
  challenges: string;
  solution: string;
  images: string[];
  materials: {
    flooring: string[];
    walls: string[];
    furniture: string[];
    accents: string[];
  };
  colorPalette: string[];
  features: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  collaborators: string[];
  timeline: string;
  sustainability: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Living',
    category: 'Residential',
    location: 'Manhattan, NY',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY2NjczNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description:
      'A stunning contemporary living space that seamlessly blends modern aesthetics with timeless elegance.',
    clientType: 'Private Residence',
    duration: '6 months',
    squareFootage: '3,500 sq ft',
    designStyle: 'Contemporary Luxury',
    role: 'Lead Interior Designer',
    challenges:
      "The client wanted a space that felt both grand and intimate, with a neutral palette that wouldn't feel cold or sterile.",
    solution:
      'We incorporated warm textures through natural materials, layered lighting to create ambiance, and custom furniture pieces that add personality while maintaining the clean aesthetic.',
    images: [
      'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY2NjczNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1080',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1080',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1080',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1080'
    ],
    materials: {
      flooring: ['Italian Marble', 'White Oak Hardwood', 'Wool Area Rugs'],
      walls: ['Venetian Plaster', 'Silk Wallpaper', 'Custom Paneling'],
      furniture: ['Bouclé Upholstery', 'Leather Accent Chairs', 'Velvet Cushions'],
      accents: ['Brushed Brass', 'Smoked Glass', 'Polished Chrome']
    },
    colorPalette: ['#F5F5F0', '#D4C5B9', '#8B7355', '#2C2C2C', '#C9A96E'],
    features: [
      'Custom built-in entertainment unit',
      'Automated curtain and lighting system',
      'Concealed bar with wine storage',
      'Statement chandelier with dimming controls'
    ],
    testimonial: {
      text: 'The transformation exceeded our expectations. Every detail was thoughtfully considered, creating a space that truly feels like home.',
      author: 'Sarah & Michael Thompson',
      role: 'Homeowners'
    },
    collaborators: [
      'Premier Construction Group',
      'Lumina Lighting Design',
      'Artisan Woodworks NYC'
    ],
    timeline: 'Design: 2 months | Construction: 4 months',
    sustainability: [
      'LED lighting throughout',
      'Low-VOC paints and finishes',
      'Sustainable hardwood certification'
    ]
  },
  {
    id: 2,
    title: 'Serene Bedroom',
    category: 'Residential',
    location: 'Beverly Hills, CA',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1588796460666-590f1d712a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tfGVufDF8fHx8MTc2NjYyODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description:
      'A tranquil master bedroom retreat designed to promote relaxation and restful sleep.',
    clientType: 'Private Residence',
    duration: '4 months',
    squareFootage: '1,200 sq ft',
    designStyle: 'Modern Zen',
    role: 'Lead Interior Designer',
    challenges:
      'Creating a cocoon-like atmosphere while maintaining an open, airy feel in a large bedroom suite.',
    solution:
      'Strategic use of soft textures, layered window treatments for light control, and a calming neutral palette with organic materials.',
    images: [
      'https://images.unsplash.com/photo-1588796460666-590f1d712a2e?w=1080',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1080',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1080',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1080'
    ],
    materials: {
      flooring: ['Wide Plank Oak', 'Plush Carpet', 'Natural Fiber Rugs'],
      walls: ['Textured Wallcovering', 'Acoustic Paneling', 'Soft Paint Finish'],
      furniture: ['Linen Upholstery', 'Cashmere Throws', 'Silk Bedding'],
      accents: ['Aged Bronze', 'Natural Stone', 'Ceramic Details']
    },
    colorPalette: ['#FDFBF7', '#E8DFD0', '#A89F91', '#6B675E', '#3D3935'],
    features: [
      'Custom headboard with integrated reading lights',
      'Motorized blackout shades',
      'Walk-in closet with smart organization',
      'Spa-inspired ensuite bathroom'
    ],
    collaborators: ['Beverly Hills Builders', 'Smart Home Solutions', 'Luxury Bedding Co'],
    timeline: 'Design: 1.5 months | Construction: 2.5 months',
    sustainability: [
      'Organic cotton bedding',
      'Energy-efficient climate control',
      'Natural material preference'
    ]
  },
  {
    id: 3,
    title: 'Elegant Dining',
    category: 'Residential',
    location: 'Miami, FL',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1758977403395-5ae10579231f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbXxlbnwxfHx8fDE3NjY2NDk1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description:
      'A sophisticated dining room perfect for both intimate dinners and grand entertaining.',
    clientType: 'Private Residence',
    duration: '3 months',
    squareFootage: '800 sq ft',
    designStyle: 'Classic Contemporary',
    role: 'Lead Interior Designer',
    challenges: 'Balancing formal elegance with approachable comfort for everyday use.',
    solution:
      'Timeless furniture pieces paired with modern art and lighting, creating a space that transitions seamlessly from casual to formal.',
    images: [
      'https://images.unsplash.com/photo-1758977403395-5ae10579231f?w=1080',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1080',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1080'
    ],
    materials: {
      flooring: ['Herringbone Oak', 'Marble Inlay'],
      walls: ['Wainscoting', 'Grasscloth Wallpaper', 'Crown Molding'],
      furniture: ['Velvet Dining Chairs', 'Solid Walnut Table', 'Leather Accents'],
      accents: ['Crystal Chandelier', 'Gold Leaf Details', 'Mirrored Surfaces']
    },
    colorPalette: ['#FFFFFF', '#C5B8A5', '#8E7C5E', '#4A4A4A', '#D4AF37'],
    features: [
      'Custom dining table seats 12',
      'Built-in wine display',
      'Statement chandelier',
      'Integrated sound system'
    ],
    collaborators: ['Miami Luxury Builders', 'Artisan Furniture Makers', 'Crystal Lighting Import'],
    timeline: 'Design: 1 month | Construction: 2 months',
    sustainability: [
      'Reclaimed wood elements',
      'LED chandelier conversion',
      'Local artisan partnerships'
    ]
  },
  {
    id: 4,
    title: 'Luxury Kitchen',
    category: 'Residential',
    location: 'San Francisco, CA',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2NjIwODMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description:
      'A chef-inspired kitchen combining professional functionality with residential warmth.',
    clientType: 'Private Residence',
    duration: '5 months',
    squareFootage: '1,000 sq ft',
    designStyle: 'Modern Transitional',
    role: 'Lead Interior Designer',
    challenges:
      "Incorporating commercial-grade appliances without sacrificing the home's aesthetic.",
    solution:
      'Integrated appliances with custom cabinetry, professional-grade features hidden behind elegant facades.',
    images: [
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?w=1080',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1080',
      'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=1080',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1080'
    ],
    materials: {
      flooring: ['Large Format Porcelain', 'Radiant Heating'],
      walls: ['Quartz Slab Backsplash', 'Custom Cabinetry', 'Plaster Ceiling'],
      furniture: ['Leather Bar Stools', 'Marble Countertops'],
      accents: ['Matte Black Fixtures', 'Brass Hardware', 'Glass Pendant Lights']
    },
    colorPalette: ['#FFFFFF', '#2C3E50', '#BDA589', '#708090', '#000000'],
    features: [
      'Professional range with custom hood',
      'Walk-in pantry with organization system',
      'Large island with prep sink',
      'Wine refrigeration and display'
    ],
    collaborators: [
      'SF Premium Contractors',
      'European Kitchen Systems',
      'Culinary Design Consultants'
    ],
    timeline: 'Design: 2 months | Construction: 3 months',
    sustainability: [
      'Energy Star appliances',
      'Water-efficient fixtures',
      'Recycled glass countertop options'
    ]
  },
  {
    id: 5,
    title: 'Spa Bathroom',
    category: 'Residential',
    location: 'Chicago, IL',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1658760046471-896cbc719c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMG1hcmJsZXxlbnwxfHx8fDE3NjY2NzQyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A resort-style master bathroom featuring spa amenities and luxurious materials.',
    clientType: 'Private Residence',
    duration: '4 months',
    squareFootage: '600 sq ft',
    designStyle: 'Spa Luxury',
    role: 'Lead Interior Designer',
    challenges: 'Creating a hotel spa experience within residential scale and budget.',
    solution:
      'Focus on key luxury elements like steam shower, soaking tub, and premium materials while maintaining practical storage.',
    images: [
      'https://images.unsplash.com/photo-1658760046471-896cbc719c9d?w=1080',
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1080',
      'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?w=1080'
    ],
    materials: {
      flooring: ['Heated Marble Tile', 'Non-Slip Stone'],
      walls: ['Book-Matched Marble Slabs', 'Waterproof Plaster', 'Glass Shower Enclosure'],
      furniture: ['Teak Bench', 'Marble Vanity'],
      accents: ['Polished Nickel', 'Chrome Fixtures', 'Alabaster Lighting']
    },
    colorPalette: ['#F8F8F8', '#E5DDD5', '#9B8B7E', '#5D5D5D', '#FFFFFF'],
    features: [
      'Freestanding soaking tub',
      'Walk-in steam shower',
      'Dual vanities with custom lighting',
      'Heated floors and towel warmers'
    ],
    collaborators: [
      'Chicago Elite Construction',
      'Spa Systems International',
      'Marble Importers Ltd'
    ],
    timeline: 'Design: 1.5 months | Construction: 2.5 months',
    sustainability: [
      'Water-saving shower systems',
      'Eco-friendly stone sealers',
      'LED ambient lighting'
    ]
  },
  {
    id: 6,
    title: 'Hotel Lobby',
    category: 'Commercial',
    location: 'Las Vegas, NV',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NjY0MDM4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    description:
      'A grand hotel lobby designed to create memorable first impressions and encourage guest interaction.',
    clientType: 'Boutique Hotel',
    duration: '8 months',
    squareFootage: '5,000 sq ft',
    designStyle: 'Contemporary Glamour',
    role: 'Lead Interior Designer',
    challenges:
      'High traffic durability while maintaining luxury aesthetic, plus accommodating diverse guest needs.',
    solution:
      'Commercial-grade materials with residential styling, flexible seating zones, and dramatic lighting for ambiance.',
    images: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1080',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1080',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1080',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1080'
    ],
    materials: {
      flooring: ['Large Format Porcelain', 'Inlaid Brass Details', 'Area Rugs'],
      walls: ['Acoustic Panels', 'Stone Feature Wall', 'Metallic Wallcovering'],
      furniture: ['Commercial-Grade Velvet', 'Leather Seating', 'Metal Frames'],
      accents: ['Statement Chandeliers', 'Bronze Sculptures', 'Art Glass']
    },
    colorPalette: ['#1A1A1A', '#C9A961', '#E8E8E8', '#6B4423', '#F5F5F5'],
    features: [
      'Double-height ceiling with chandelier',
      'Multiple seating zones',
      'Reception desk with backlit onyx',
      'Living wall installation'
    ],
    collaborators: [
      'Vegas Commercial Builders',
      'Hospitality Furnishings Inc',
      'Architectural Lighting Design'
    ],
    timeline: 'Design: 3 months | Construction: 5 months',
    sustainability: [
      'Durable commercial materials reducing replacement',
      'Energy-efficient lighting system',
      'Indoor air quality monitoring'
    ]
  }
];

export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getRelatedProjects(
  currentId: number,
  category: string,
  limit: number = 3
): Project[] {
  return projects
    .filter(project => project.id !== currentId && project.category === category)
    .slice(0, limit);
}
