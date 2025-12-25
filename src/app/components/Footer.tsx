export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl tracking-wider mb-4">LUXE INTERIORS</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Creating timeless luxury spaces that inspire and endure.
            </p>
          </div>

          <div>
            <h4 className="tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#home" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#portfolio" className="hover:opacity-100 transition-opacity">Portfolio</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="tracking-wide mb-4">Newsletter</h4>
            <p className="text-sm opacity-80 mb-4">
              Subscribe to receive design inspiration and exclusive updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-2 bg-white text-primary hover:bg-white/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Luxe Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
