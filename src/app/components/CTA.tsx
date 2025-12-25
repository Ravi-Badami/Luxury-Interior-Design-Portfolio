import { Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTA() {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjB2aWV3fGVufDF8fHx8MTc2NjYwNTU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-6xl tracking-wider mb-6">
          READY TO TRANSFORM YOUR SPACE?
        </h2>
        <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
          Schedule a complimentary consultation to discuss your vision and explore how we can bring it to life
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 tracking-wider hover:bg-white/90 transition-colors"
          >
            <Calendar size={20} />
            BOOK CONSULTATION
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white px-8 py-4 tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            VIEW PORTFOLIO
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
