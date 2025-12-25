import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY2NjczNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury interior living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl tracking-wider mb-6">
          TIMELESS ELEGANCE
        </h1>
        <p className="text-lg md:text-xl mb-8 tracking-wide opacity-90">
          Crafting sophisticated spaces that reflect your unique vision
        </p>
        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 tracking-wider hover:bg-white/90 transition-colors"
        >
          EXPLORE OUR WORK
          <ArrowRight size={20} />
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="w-px h-16 bg-white/50 mx-auto animate-bounce"></div>
      </div>
    </section>
  );
}
