
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-accent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="font-georgia text-4xl md:text-6xl font-bold text-accent mb-6 animate-fade-in">
              Ingenjörsfirman Helfer – specialisten på splines
            </h1>
            <p className="font-helvetica text-lg md:text-xl text-accent/90 mb-8 leading-relaxed">
              Sedan 1959 har vi tillverkat precisionsdetaljer med fokus på snabb tillverkning och leverans.
              Vår specialitet är splines och vår erfarenhet garanterar högsta kvalitet i varje detalj.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-helvetica transition-all duration-300 transform hover:scale-105">
                Begär offert
              </Button>
              <Button size="lg" variant="outline" className="text-accent border-accent hover:bg-accent/10 font-helvetica">
                Läs mer om oss
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Om oss Section */}
      <section id="om-oss" className="py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-georgia text-4xl font-bold text-primary mb-8 text-center">
              Om oss
            </h2>
            <div className="prose prose-lg mx-auto text-secondary">
              <p className="font-helvetica leading-relaxed mb-6">
                Sedan 1959 har vi tillverkat precisionsdetaljer för olika ändamål inom industrin. Vår specialitet är splines, splinesskärning, ut- och invändig, kuggskärning, ut- och invändigt, kilspår, fyrkanter, sexkanter, rektangulära, olika profiler m m.
              </p>
              <p className="font-helvetica leading-relaxed mb-6">
                Vi dragbrotschar, hyvlar, fräser och sticker i stort sett alla typer av profiler. Som affärsidé satsar vi på utomordentligt snabb tillverkning och leverans av specialtillverkade detaljer. Vi har också ett stort sortiment av splineshylsor och kopplingar på lager.
              </p>
              <p className="font-helvetica leading-relaxed">
                Vår erfarenhet är sålunda mycket lång med ett gediget kunnande och vi har skapat ett brett kontaktnät över hela världen. Vi har maskiner och utrustning för komplett tillverkning. Företaget är sedan 1982 beläget i egna lokaler i Tyresö, sydost om Stockholm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tjänster Section */}
      <section id="tjanster" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-georgia text-4xl font-bold text-primary mb-16 text-center">
            Våra tjänster
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1">
                  <h3 className="font-georgia text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="font-helvetica text-secondary leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-georgia text-4xl font-bold text-primary mb-8 text-center">
              Kontakta oss
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="font-georgia text-2xl font-bold text-primary mb-6">Företagsinformation</h3>
                <div className="space-y-4 font-helvetica text-secondary">
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
                <h3 className="font-georgia text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Kontaktpersoner
                </h3>
                <div className="space-y-6">
                  {contacts.map((contact, index) => (
                    <div key={index} className="font-helvetica">
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
              <h3 className="font-georgia text-2xl font-bold mb-6">Ingenjörsfirman Helfer AB</h3>
              <p className="font-helvetica text-white/90 leading-relaxed">
                Specialister på precisionsdetaljer och splines sedan 1959
              </p>
            </div>
            <div>
              <h4 className="font-georgia text-xl font-bold mb-6">Kontakt</h4>
              <div className="font-helvetica text-white/90 space-y-4">
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5" /> splines@helfer.se
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> +46 8 712 30 06
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-georgia text-xl font-bold mb-6">Besök oss</h4>
              <address className="font-helvetica text-white/90 not-italic leading-relaxed">
                Antennvägen 12<br />
                135 48 Tyresö
              </address>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="font-helvetica text-white/70 text-sm">
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
    description: "Specialiserade på ut- och invändig splinesskärning med högsta precision. Vi erbjuder snabb tillverkning och leverans av specialtillverkade detaljer."
  },
  {
    title: "Kuggskärning & Profiler",
    description: "Expertis inom ut- och invändig kuggskärning, samt tillverkning av olika profiler som fyrkanter, sexkanter och rektangulära former."
  },
  {
    title: "Dragbrotschning & Fräsning",
    description: "Vi utför dragbrotschning, hyvling och fräsning av alla typer av profiler med modern utrustning och omfattande erfarenhet."
  }
];

const contacts = [
  { name: "Veronica Eriksson", role: "Ekonomi" },
  { name: "Conny Sjölander", role: "Produktionsansvarig" },
  { name: "Patricio Toro", role: "Produktionsansvarig" },
  { name: "Tobias Persson", role: "Operatör" }
];

export default Index;
