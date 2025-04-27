
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-georgia text-4xl md:text-5xl font-bold text-white mb-6">
              Precisionsdetaljer och splines sedan 1959
            </h1>
            <p className="font-helvetica text-lg md:text-xl text-white/90 mb-8">
              Vi levererar högkvalitativa precisionsdetaljer med fokus på snabb tillverkning och leverans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-accent font-helvetica">
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
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="font-georgia text-3xl font-bold text-primary mb-6">
              60 års erfarenhet av precision
            </h2>
            <p className="font-helvetica text-secondary mb-8">
              Sedan 1959 har Ingenjörsfirman Helfer AB varit en ledande aktör inom precisionsdetaljer och splines. 
              Vår långa erfarenhet och gedigen kunskap garanterar högsta kvalitet i varje projekt.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-accent/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-georgia text-3xl font-bold text-primary mb-12 text-center">
            Våra tjänster
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-georgia text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="font-helvetica text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-georgia text-3xl font-bold text-primary mb-6">
              Kontakta oss
            </h2>
            <p className="font-helvetica text-secondary mb-8">
              Vill du veta mer om hur vi kan hjälpa dig med ditt projekt? 
              Kontakta oss för en kostnadsfri konsultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-helvetica">
                Begär offert
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-helvetica">
                Ring oss
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-georgia text-xl font-bold mb-4">Ingenjörsfirman Helfer AB</h3>
              <p className="font-helvetica text-white/90">Specialister på precisionsdetaljer och splines sedan 1959</p>
            </div>
            <div>
              <h4 className="font-georgia text-lg font-bold mb-4">Kontakt</h4>
              <p className="font-helvetica text-white/90">
                Email: info@helfer.se<br />
                Tel: 08-123 45 67
              </p>
            </div>
            <div>
              <h4 className="font-georgia text-lg font-bold mb-4">Besök oss</h4>
              <p className="font-helvetica text-white/90">
                Industrivägen 12<br />
                123 45 Stockholm
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const services = [
  {
    title: "Precisionsdetaljer",
    description: "Specialtillverkade komponenter med högsta precision för krävande applikationer."
  },
  {
    title: "Splines",
    description: "Expertis inom tillverkning av olika typer av splines med garanterad kvalitet."
  },
  {
    title: "Konsulttjänster",
    description: "Teknisk rådgivning och projektledning för optimala resultat."
  }
];

export default Index;
