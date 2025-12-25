import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const transformations = [
  {
    id: 1,
    title: 'Living Room Transformation',
    before: 'https://images.unsplash.com/photo-1657040899606-b22f17a6afd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBsaXZpbmclMjByb29tJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NjY2ODg5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    after: 'https://images.unsplash.com/photo-1639145044835-ec083afa6ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2NjQ0NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A complete transformation from dated to contemporary luxury',
  },
  {
    id: 2,
    title: 'Modern Bedroom Redesign',
    before: 'https://images.unsplash.com/photo-1587177139620-987629766ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMG1hdGVyaWFsc3xlbnwxfHx8fDE3NjY2ODg5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    after: 'https://images.unsplash.com/photo-1588796460666-590f1d712a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tfGVufDF8fHx8MTc2NjYyODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Elevated comfort meets sophisticated design',
  },
];

export function BeforeAfter() {
  const [activeProject, setActiveProject] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % transformations.length);
    setSliderPosition(50);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + transformations.length) % transformations.length);
    setSliderPosition(50);
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-wider mb-4">
            BEFORE & AFTER
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Witness the transformative power of exceptional design
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className="relative aspect-[16/10] overflow-hidden bg-black cursor-ew-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={handleMouseUp}
          >
            {/* After Image */}
            <img
              src={transformations[activeProject].after}
              alt="After"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Before Image with clip */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={transformations[activeProject].before}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <ChevronLeft size={16} className="absolute left-2" />
                <ChevronRight size={16} className="absolute right-2" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 text-sm tracking-wide">
              BEFORE
            </div>
            <div className="absolute top-4 right-4 bg-white/90 text-black px-4 py-2 text-sm tracking-wide">
              AFTER
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-2xl tracking-wide mb-2">
              {transformations[activeProject].title}
            </h3>
            <p className="text-muted-foreground mb-6">
              {transformations[activeProject].description}
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={prevProject}
                className="w-12 h-12 bg-white border border-border hover:bg-secondary transition-colors flex items-center justify-center"
                aria-label="Previous project"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextProject}
                className="w-12 h-12 bg-white border border-border hover:bg-secondary transition-colors flex items-center justify-center"
                aria-label="Next project"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
