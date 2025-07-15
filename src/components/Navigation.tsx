import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Home, Info, Briefcase, Image, Phone, Book } from "lucide-react";
import Logo from '/Logo_w-text.svg';
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/#om-oss", label: "Om oss", isExternal: true },
    { href: "/#tjanster", label: "Tjänster", isExternal: true },
    { href: "/referensbilder", label: "Referensbilder", isExternal: false },
    { href: "/#referenser", label: "Referenser", isExternal: true },
    { href: "/#kontakt", label: "Kontakt", isExternal: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="font-georgia text-2xl font-bold text-primary">
            <Link to="/">
              <img src={Logo} alt="Helfer logotyp" className="h-10" />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 font-OpenSans">
            {navItems.map((item) => (
              item.isExternal ? (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="text-white hover:text-white/60 transition-colors duration-200 flex items-center gap-2"
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={item.label}
                  to={item.href} 
                  className="text-white hover:text-white/60 transition-colors duration-200 flex items-center gap-2"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:block">
          <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-OpenSans transition-all duration-300 transform hover:scale-105" onClick={() => window.location.href = 'mailto:splines@helfer.se?subject=Offertförfrågan'}>
                  Kontakta oss
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
          <div className="md:hidden mt-4 pb-4 space-y-4 font-OpenSans animate-fade-in">
            {navItems.map((item) => (
              item.isExternal ? (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="block text-white hover:text-white/80 transition-colors duration-200 flex items-center gap-2 py-2"
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={item.label}
                  to={item.href} 
                  className="block text-white hover:text-white/80 transition-colors duration-200 flex items-center gap-2 py-2"
                >
                  {item.label}
                </Link>
              )
            ))}
                <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-OpenSans transition-all duration-300 transform hover:scale-105" onClick={() => window.location.href = 'mailto:splines@helfer.se?subject=Offertförfrågan'}>
                  Kontakta oss
                </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
