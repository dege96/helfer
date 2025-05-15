import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Users } from "lucide-react";
import Bolts from '/public/Bolts.png'; // Justera sökvägen om det behövs
import BoltVector from '/public/BoltVector.svg';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { useEffect } from "react";
import References from "@/components/References";

const Index = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-accent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' fill-opacity='0.03' d='M0,86L48,102C96,118,192,150,288,150C384,150,480,118,576,112.7C672,107,768,129,864,139.3C960,150,1056,150,1152,128.7C1248,107,1344,65,1392,43.3L1440,22L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z' transform='rotate(0) translate(0, 60)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            zIndex: 0,
          }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-16">
            <div className="max-w-3xl">
              <h1 className="font-OpenSans text-4xl md:text-6xl font-bold text-accent mb-6 animate-fade-in bg-gradient-to-r from-[#93ABD0] to-[#c5ceda] bg-clip-text text-transparent">
               Precision i varje detalj sedan 1959
              </h1>
              <p className="font-OpenSans text-lg md:text-xl text-accent/90 mb-8 leading-relaxed">
              Specialanpassade precisionskomponenter snabbt och effektivt – från splines och kuggskärning till unika profiler, med marknadsledande noggrannhet.
</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-OpenSans transition-all duration-300 transform hover:scale-105" onClick={() => window.location.href = 'mailto:splines@helfer.se?subject=Offertförfrågan'}>
                  Begär offert
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:text-white hover:bg-white/10 font-OpenSans transition-all duration-300 transform hover:scale-105">
                  Läs mer om oss
                </Button>
              </div>
            </div>
            <div className="md:text-center md:ml-8 relative">
              <img
                src={BoltVector}
                alt="Vector illustration of a bolt"
                className="mx-auto max-h-65 absolute"
                draggable={false}
              />
              <img
                src={Bolts}
                alt="Mekaniska komponenter"
                className="mx-auto max-h-90 drop-shadow-xl grayscale relative z-10"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Om oss Section */}
      <section id="om-oss" className="py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-OpenSans text-4xl font-bold text-primary mb-8 text-center">
              Om oss
            </h2>
            <div className="prose prose-lg mx-auto text-secondary">
              <p className="font-OpenSans leading-relaxed mb-6">
                Sedan 1959 har vi tillverkat precisionsdetaljer för olika ändamål inom industrin. Vår specialitet är splines, splinesskärning, ut- och invändig, kuggskärning, ut- och invändigt, kilspår, fyrkanter, sexkanter, rektangulära, olika profiler m m.
              </p>
              <p className="font-OpenSans leading-relaxed mb-6">
                Vi dragbrotschar, hyvlar, fräser och sticker i stort sett alla typer av profiler. Som affärsidé satsar vi på utomordentligt snabb tillverkning och leverans av specialtillverkade detaljer. Vi har också ett stort sortiment av splineshylsor och kopplingar på lager.
              </p>
              <p className="font-OpenSans leading-relaxed">
                Vår erfarenhet är sålunda mycket lång med ett gediget kunnande och vi har skapat ett brett kontaktnät över hela världen. Vi har maskiner och utrustning för komplett tillverkning. Företaget är sedan 1982 beläget i egna lokaler i Tyresö, sydost om Stockholm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tjänster Section */}
      <section id="tjanster" className="py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-OpenSans text-4xl font-bold text-primary mb-16 text-center bg-none">
            Våra tjänster
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group border-primary/10 bg-accent/30 shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="pb-0">
                  <CardTitle className="font-OpenSans font-bold text-primary pb-4">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="font-OpenSans">
                  <p className="text-secondary leading-relaxed">{service.description}</p>
                </CardContent>
                
                <CardFooter className="pt-2">
                  <a href="#kontakt" className="inline-flex items-center text-primary hover:text-secondary transition-colors font-medium group">
                    Läs mer
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referenser Section */}
      <References />

      {/* Kontakt Section */}
      <section id="kontakt" className="py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-OpenSans text-4xl font-bold text-primary mb-8 text-center">
              Kontakta oss
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="font-OpenSans text-2xl font-bold text-primary mb-6">Företagsinformation</h3>
                <div className="space-y-4 font-OpenSans text-secondary">
                  <p className="flex items-start gap-2">
                    Ingenjörsfirman Helfer AB<br />
                    Antennvägen 12<br />
                    135 48 Tyresö
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <a href="tel:+4687123006" className="hover:text-primary transition-colors">
                      +46 8 712 30 06
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:splines@helfer.se" className="hover:text-primary transition-colors">
                      splines@helfer.se
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-OpenSans text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Kontaktpersoner
                </h3>
                <div className="space-y-6">
                  {contacts.map((contact, index) => (
                    <div key={index} className="font-OpenSans">
                      <h4 className="text-primary font-bold">{contact.name}</h4>
                      <p className="text-secondary">{contact.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-accent py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-OpenSans text-2xl font-bold mb-6">Ingenjörsfirman Helfer AB</h3>
              <p className="font-OpenSans text-white/90 leading-relaxed">
                Specialister på precisionsdetaljer och splines sedan 1959
              </p>
            </div>
            <div>
              <h4 className="font-OpenSans text-xl font-bold mb-6">Kontakt</h4>
              <div className="font-OpenSans text-white/90 space-y-4">
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5" /> splines@helfer.se
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> +46 8 712 30 06
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-OpenSans text-xl font-bold mb-6">Besök oss</h4>
              <address className="font-OpenSans text-white/90 not-italic leading-relaxed">
                Antennvägen 12<br />
                135 48 Tyresö
              </address>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="font-OpenSans text-white/70 text-sm">
              © {new Date().getFullYear()} Ingenjörsfirman Helfer AB. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const services = [
  {
    title: "Splines & Splinesskärning",
    description: "Specialiserade på ut- och invändig splinesskärning med högsta precision. Vi erbjuder snabb tillverkning och leverans av specialtillverkade detaljer.",
    icon: <svg className="w-8 h-8 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  },
  {
    title: "Kuggskärning & Profiler",
    description: "Expertis inom ut- och invändig kuggskärning, samt tillverkning av olika profiler som fyrkanter, sexkanter och rektangulära former.",
    icon: <svg className="w-8 h-8 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  },
  {
    title: "Dragbrotschning & Fräsning",
    description: "Vi utför dragbrotschning, hyvling och fräsning av alla typer av profiler med modern utrustning och omfattande erfarenhet.",
    icon: <svg className="w-8 h-8 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
  }
];

const contacts = [
  { name: "Conny Sjölander", role: "Produktionsansvarig" },
  { name: "Patricio Toro", role: "Produktionsansvarig" },
  { name: "Tobias Persson", role: "Operatör" }
];

export default Index;
