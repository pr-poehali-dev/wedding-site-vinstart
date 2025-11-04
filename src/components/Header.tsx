import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/projects/36f31bed-1b6e-4080-b847-e41fe15aab77/files/0cf6bfed-ec76-4f0a-b4f5-453b640d37a3.jpg" 
            alt="VINSTART" 
            className="h-12 w-12 object-cover rounded-full"
          />
          <span className="font-serif text-2xl font-semibold text-primary">VINSTART</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection('video')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Видео
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Услуги
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all"
          >
            Связаться
          </button>
        </nav>

        <button className="md:hidden text-primary">
          <Icon name="Menu" size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
