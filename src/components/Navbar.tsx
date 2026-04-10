import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black tracking-tighter uppercase italic">
          <span className="text-accent-yellow">Foodie</span> <span className="text-accent-red">Munch</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-accent-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="tel:7500888206" className="btn-primary py-2 px-6 text-xs">
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-background/98 z-[99] flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-4xl font-black text-white hover:text-accent-yellow transition-colors italic uppercase"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <div className="flex space-x-8 mt-12">
          <a href="#" className="text-accent-yellow hover:scale-110 transition-transform"><Coffee size={32} /></a>
          <a href="tel:7500888206" className="text-accent-red hover:scale-110 transition-transform"><Phone size={32} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
