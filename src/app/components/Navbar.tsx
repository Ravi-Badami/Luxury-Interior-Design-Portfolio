"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`${isScrolled ? 'hidden' : 'block'} bg-primary text-primary-foreground py-2 px-6 lg:px-8 text-sm`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+15551234567" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={14} />
              <span className="hidden sm:inline">+1 (555) 123-4567</span>
            </a>
            <a href="mailto:hello@luxeinteriors.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={14} />
              <span className="hidden sm:inline">hello@luxeinteriors.com</span>
            </a>
          </div>
          <div className="text-xs tracking-wider hidden md:block">
            COMPLIMENTARY CONSULTATION AVAILABLE
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg py-4 mt-0' : 'bg-transparent py-6 mt-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl tracking-widest">
              LUXE INTERIORS
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-wider hover:text-muted-foreground transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wider hover:bg-primary/90 transition-colors"
              >
                BOOK NOW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-6 pb-4 border-t border-border pt-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm tracking-wider hover:text-muted-foreground transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wider hover:bg-primary/90 transition-colors text-center mt-2"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}