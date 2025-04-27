
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="font-georgia text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Precisionsdetaljer och splines sedan 1959
            </h1>
            <p className="font-helvetica text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Vi levererar högkvalitativa precisionsdetaljer med fokus på snabb tillverkning och leverans.
              Vår erfarenhet garanterar precision i varje detalj.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-accent font-helvetica transition-all duration-300 transform hover:scale-105">
                Begär offert
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-helvetica">
                Läs mer om oss
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-georgia text-4xl font-bold text-primary mb-8 text-center">
              60 års erfarenhet av precision
            </h2>
            <p className="font-helvetica text-secondary text-lg leading-relaxed mb-12 text-center">
              Sedan 1959 har Ingenjörsfirman Helfer AB varit en ledande aktör inom precisionsdetaljer och splines. 
              Vår långa erfarenhet och gedigna kunskap garanterar högsta kvalitet i varje projekt.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-2 bg-primary mb-6 rounded"></div>
                <h3 className="font-georgia text-xl font-bold text-primary mb-4">Precision</h3>
                <p className="font-helvetica text-secondary">Högsta precision i varje detalj vi producerar.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-2 bg-primary mb-6 rounded"></div>
                <h3 className="font-georgia text-xl font-bold text-primary mb-4">Kvalitet</h3>
                <p className="font-helvetica text-secondary">Kvalitetssäkring i alla led av processen.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-2 bg-primary mb-6 rounded"></div>
                <h3 className="font-georgia text-xl font-bold text-primary mb-4">Leverans</h3>
                <p className="font-helvetica text-secondary">Snabb och pålitlig leverans till våra kunder.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-georgia text-4xl font-bold text-primary mb-8">
              Kontakta oss
            </h2>
            <p className="font-helvetica text-secondary text-lg mb-12">
              Vill du veta mer om hur vi kan hjälpa dig med ditt projekt? 
              Kontakta oss för en kostnadsfri konsultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="bg-primary hover:bg-primary-light font-helvetica flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Begär offert
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 font-helvetica flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Ring oss
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
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
                  <Mail className="w-5 h-5" /> info@helfer.se
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> 08-123 45 67
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-georgia text-xl font-bold mb-6">Besök oss</h4>
              <address className="font-helvetica text-white/90 not-italic leading-relaxed">
                Industrivägen 12<br />
                123 45 Stockholm
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
    title: "Precisionsdetaljer",
    description: "Specialtillverkade komponenter med högsta precision för krävande applikationer. Vi använder den senaste tekniken för att säkerställa perfekt passform."
  },
  {
    title: "Splines",
    description: "Expertis inom tillverkning av olika typer av splines med garanterad kvalitet. Vår erfarenhet säkerställer optimal funktion."
  },
  {
    title: "Konsulttjänster",
    description: "Teknisk rådgivning och projektledning för optimala resultat. Vi hjälper dig genom hela processen från idé till färdig produkt."
  }
];

export default Index;
