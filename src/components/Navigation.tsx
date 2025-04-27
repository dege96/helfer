
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-accent/80 border-b border-primary/10 sticky top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="font-georgia text-2xl font-bold text-primary">
            Helfer AB
          </div>
          
          <div className="hidden md:flex space-x-8 font-helvetica">
            <a href="#about" className="text-secondary hover:text-primary transition-colors duration-200">Om oss</a>
            <a href="#services" className="text-secondary hover:text-primary transition-colors duration-200">Tjänster</a>
            <a href="#expertise" className="text-secondary hover:text-primary transition-colors duration-200">Expertis</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors duration-200">Kontakt</a>
          </div>

          <div className="hidden md:block">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary hover:bg-primary-light text-accent font-helvetica transition-all duration-300"
            >
              Begär offert
            </Button>
          </div>

          <button 
            className="md:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 font-helvetica animate-fade-in">
            <a href="#about" className="block text-secondary hover:text-primary transition-colors duration-200">Om oss</a>
            <a href="#services" className="block text-secondary hover:text-primary transition-colors duration-200">Tjänster</a>
            <a href="#expertise" className="block text-secondary hover:text-primary transition-colors duration-200">Expertis</a>
            <a href="#contact" className="block text-secondary hover:text-primary transition-colors duration-200">Kontakt</a>
            <Button 
              variant="default" 
              size="lg" 
              className="w-full bg-primary hover:bg-primary-light text-accent transition-all duration-300"
            >
              Begär offert
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
