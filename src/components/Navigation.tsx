import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Info, Briefcase, Image, Phone, Book } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { pathname } = useLocation();
  const darkText = pathname === '/referensbilder';

  // lyssna på scroll för att ändra bakgrund
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: "/#om-oss", label: "Om oss", isExternal: true },
    { href: "/#tjanster", label: "Tjänster", isExternal: true },
    { href: "/referensbilder", label: "Referensbilder", isExternal: false },
    { href: "/#referenser", label: "Referenser", isExternal: true },
    { href: "/#kontakt", label: "Kontakt", isExternal: true },
  ];

  // Funktion för mjuk scroll till sektioner
  const smoothScrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2); // Ta bort '/#'
      const element = document.getElementById(sectionId);
      if (element) {
        // Om vi är på samma sida, scrolla till sektionen
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Om vi är på en annan sida, navigera till huvudsidan och scrolla till sektionen
        window.location.href = href;
      }
    }
    // Stäng mobilmenyn automatiskt efter klick
    setIsMenuOpen(false);
  };

  // Funktion för att navigera till huvudsidan och scrolla till sektion
  const navigateToSection = (href: string) => {
    if (href.startsWith('/#')) {
      // Om vi inte är på huvudsidan, navigera dit först
      if (window.location.pathname !== '/') {
        window.location.href = href;
      } else {
        // Om vi redan är på huvudsidan, scrolla till sektionen
        smoothScrollToSection(href);
      }
    }
  };

  const handleContactClick = () => {
    const subject = "Offertförfrågan";
    // Eftersom mailto inte stödjer HTML, kan vi använda ** för att indikera fetstil i texten.
    const body = `Jag önskar begära en offert för ett uppdrag relaterat till:

Typ av komponent/tjänst: [Beskrivning – t.ex. splines, kuggskärning, unik profil etc.]
Material: [Om känt]
Mängd/volym: [Ange uppskattat antal eller serie]
Toleranser/noggrannhetskrav: [Om aktuellt]
Övrig information: [CAD-ritningar, leveranstid, specifika krav etc.]`;

    window.location.href = `mailto:splines@helfer.se?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Skip Link för tillgänglighet */}
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Hoppa till huvudinnehåll
      </a>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#6d4d10]/[.1] backdrop-blur-sm' : 'bg-transparent'} ${darkText ? 'text-[#0D1B2A]' : 'text-white'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-montserrat text-2xl font-bold text-primary">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={darkText ? '/Logo.svg' : '/Logo_w-text.svg'} alt="Helfer logotyp" className="h-10" />
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-8 font-OpenSans">
              {navItems.map((item) => (
                item.isExternal ? (
                  <button 
                    key={item.label}
                    onClick={() => navigateToSection(item.href)}
                    className={`${darkText ? 'text-[#0D1B2A] hover:text-[#0D1B2A]/60' : 'text-white hover:text-white/60'} transition-colors duration-200 flex items-center gap-2 bg-transparent border-none cursor-pointer`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link 
                    key={item.label}
                    to={item.href} 
                    onClick={() => window.scrollTo(0, 0)}
                    className={`${darkText ? 'text-[#0D1B2A] hover:text-[#0D1B2A]/60' : 'text-white hover:text-white/60'} transition-colors duration-200 flex items-center gap-2`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            <div className="hidden md:block">
            <Button size="lg" variant="glassmorphism" className={`font-OpenSans ${darkText ? 'text-[#0D1B2A]' : ''}`} onClick={handleContactClick} style={{ mixBlendMode: 'difference' }}>
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
                  <button 
                    key={item.label}
                    onClick={() => navigateToSection(item.href)}
                    className={`block ${darkText ? 'text-[#0D1B2A] hover:text-[#0D1B2A]/80' : 'text-white hover:text-white/80'} transition-colors duration-200 flex items-center gap-2 py-2 bg-transparent border-none cursor-pointer w-full text-left`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link 
                    key={item.label}
                    to={item.href} 
                    onClick={() => window.scrollTo(0, 0)}
                    className={`block ${darkText ? 'text-[#0D1B2A] hover:text-[#0D1B2A]/80' : 'text-white hover:text-white/80'} transition-colors duration-200 flex items-center gap-2 py-2`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
                  <Button size="lg" variant="glassmorphism" className="font-OpenSans" onClick={handleContactClick}>
                    Kontakta oss
                  </Button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
