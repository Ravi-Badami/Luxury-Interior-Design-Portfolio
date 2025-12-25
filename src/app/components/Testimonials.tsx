import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1573164573938-c9a3db2e84ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzY2Njg4OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'Working with Luxe Interiors transformed our home beyond our wildest dreams. Their attention to detail and understanding of our vision was exceptional. Every space now feels like a masterpiece.',
    rating: 5,
    project: 'Full Home Renovation',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    image: 'https://images.unsplash.com/photo-1650369026145-ba99580124fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY2Njg4OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'The team created an ambiance that perfectly reflects our brand. Our customers constantly compliment the interior design. It has been instrumental in our success.',
    rating: 5,
    project: 'Commercial Restaurant Design',
  },
  {
    id: 3,
    name: 'Emily Roberts',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1764438246710-83c535cada80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2NjU5ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'Professional, creative, and incredibly talented. They transformed our office into a space that inspires productivity and impresses clients. Highly recommended!',
    rating: 5,
    project: 'Corporate Office Design',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-wider mb-4">
            CLIENT TESTIMONIALS
          </h2>
          <p className="opacity-90 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white text-foreground p-8 md:p-12 shadow-2xl">
            <Quote className="absolute top-8 left-8 opacity-10" size={80} />
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6 justify-center">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-lg md:text-xl leading-relaxed mb-8 text-center italic">
                "{testimonials[activeIndex].text}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="tracking-wide">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonials[activeIndex].project}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-white w-12' : 'bg-white/40'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
