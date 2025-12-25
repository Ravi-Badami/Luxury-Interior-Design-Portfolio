import { Sparkles, Heart, Lightbulb, Shield } from 'lucide-react';

const values = [
  {
    icon: Sparkles,
    title: 'Timeless Elegance',
    description: 'We create designs that transcend trends, focusing on classic beauty and enduring style that will remain relevant for years to come.',
  },
  {
    icon: Heart,
    title: 'Client-Centered Approach',
    description: 'Your vision is our priority. We listen, understand, and collaborate to ensure every detail reflects your unique personality and lifestyle.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Quality',
    description: 'We blend cutting-edge design techniques with the finest materials and craftsmanship to deliver exceptional results.',
  },
  {
    icon: Shield,
    title: 'Integrity & Trust',
    description: 'Transparency, honesty, and professionalism guide every project. We build lasting relationships based on trust and mutual respect.',
  },
];

export function Philosophy() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-wider mb-4">
            OUR DESIGN PHILOSOPHY
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Luxe Interiors, we believe that exceptional design is more than aesthetics—it's about creating
            spaces that enhance your life, inspire your daily routines, and stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center">
                    <Icon size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl tracking-wide mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-secondary/30 p-8 md:p-12 border-l-4 border-primary">
          <p className="text-xl md:text-2xl italic leading-relaxed text-center">
            "We don't just design spaces—we craft experiences. Every project is an opportunity to tell
            a story, evoke emotion, and create an environment where life's most precious moments unfold."
          </p>
          <p className="text-center mt-6 tracking-wider text-muted-foreground">
            — Alexandra Morgan, Founder
          </p>
        </div>
      </div>
    </section>
  );
}
