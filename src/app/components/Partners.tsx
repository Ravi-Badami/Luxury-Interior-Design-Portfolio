const partners = [
  'Herman Miller',
  'Knoll',
  'Restoration Hardware',
  'Poliform',
  'B&B Italia',
  'Flos',
  'Minotti',
  'Cassina',
];

export function Partners() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-lg tracking-widest text-muted-foreground mb-2">
            TRUSTED PARTNERS
          </h3>
          <p className="text-sm text-muted-foreground">
            We collaborate with world-renowned brands to deliver exceptional quality
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-center py-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <span className="text-sm tracking-wide">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
