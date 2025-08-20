import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import References from "@/components/References";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  useEffect(() => {
    // Hantera hash-navigation när sidan laddas
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1); // Ta bort '#'
      const element = document.getElementById(sectionId);
      if (element) {
        // Vänta lite så att sidan hinner ladda helt
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    // Hantera hash-ändringar när man redan är på sidan
    const handleHashChange = () => {
      if (window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-accent">
      <Navigation/>
      
      <main id="main" role="main">
        <Hero />
        
        <Services />

        <About />

        {/* Referenser Section */}
        <References />

        <Contact />
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
