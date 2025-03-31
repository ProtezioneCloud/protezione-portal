import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.google.title'), href: '#google-services' },
    { name: t('nav.other.title'), href: '#other-services' },
    { name: t('nav.learning'), href: '#learning' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-8",
        isScrolled 
          ? "py-3 glass shadow-soft" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center gap-2 group"
        >
          <Shield className="h-7 w-7 text-accent group-hover:text-primary transition-colors duration-300" />
          <span className="font-display font-semibold text-xl">protezione.cloud</span>
        </a>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-foreground/80 hover:text-accent transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
            </a>
          ))}
          
          <LanguageSwitcher />
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div 
        className={cn(
          "md:hidden fixed inset-x-0 glass border-t border-border shadow-soft overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium py-2 text-foreground/80 hover:text-accent transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
