'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Process', href: '/process' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? 'hidden' : 'block'
        } bg-primary text-primary-foreground py-2 px-6 lg:px-8 text-sm`}>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <div className='flex items-center gap-6'>
            <a
              href='tel:+15551234567'
              className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
              <Phone size={14} />
              <span className='hidden sm:inline'>+1 (555) 123-4567</span>
            </a>
            <a
              href='mailto:hello@luxeinteriors.com'
              className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
              <Mail size={14} />
              <span className='hidden sm:inline'>hello@luxeinteriors.com</span>
            </a>
          </div>
          <div className='text-xs tracking-wider hidden md:block'>
            COMPLIMENTARY CONSULTATION AVAILABLE
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-lg py-4 mt-0'
            : 'bg-transparent py-6 mt-10'
        }`}>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='text-2xl tracking-widest'>
              LUXE INTERIORS
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center gap-8'>
              {navLinks.map(link => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm tracking-wider transition-colors relative group ${
                      isActive ? 'text-primary' : 'hover:text-muted-foreground'
                    }`}>
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                  </Link>
                );
              })}
              <Link
                href='/contact'
                className='bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wider hover:bg-primary/90 transition-colors'>
                BOOK NOW
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='lg:hidden p-2'
              aria-label='Toggle menu'>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className='lg:hidden mt-6 mx-2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-border/50 overflow-hidden'>
              <div className='px-6 py-6'>
                <div className='flex flex-col space-y-1'>
                  {navLinks.map(link => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-base tracking-wider transition-all duration-200 rounded-lg ${
                          isActive
                            ? 'bg-primary/10 text-primary font-medium border-l-4 border-primary'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                        }`}>
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
                <div className='mt-6 pt-4 border-t border-border/30'>
                  <Link
                    href='/contact'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='block w-full bg-primary text-primary-foreground px-6 py-4 text-base font-medium tracking-wider hover:bg-primary/90 transition-colors text-center rounded-lg shadow-sm'>
                    BOOK NOW
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
