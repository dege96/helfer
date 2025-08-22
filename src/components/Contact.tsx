import { Mail, Phone, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const contacts = [
  { name: "Conny Sjölander", role: "Produktionsansvarig" },
  { name: "Patricio Toro", role: "Produktionsansvarig" },
  { name: "Tobias Persson", role: "Operatör" },
];

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-[linear-gradient(160deg,_rgb(84_96_113),_rgb(1_23_63_/_41%),_#4b5c71)]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat text-4xl font-bold text-accent mb-10 text-center">Kontakta oss</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Företagsinformation */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="font-OpenSans text-xl text-accent flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Företagsinformation
                </CardTitle>
              </CardHeader>
              <CardContent className="font-OpenSans text-accent/90 space-y-4">
                <a
                  href="https://www.google.com/maps?q=Ingenj%C3%B6rsfirman+Helfer+AB,+Antennv%C3%A4gen+12,+135+48+Tyres%C3%B6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Öppna adressen i Google Maps"
                  className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white"
                >
                  <address className="not-italic">
                    Ingenjörsfirman Helfer AB<br />
                    Antennvägen 12<br />
                    135 48 Tyresö
                  </address>
                </a>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+4687123006" className="hover:text-white transition-colors">+46 8 712 30 06</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:splines@helfer.se" className="hover:text-white transition-colors">splines@helfer.se</a>
                </p>
              </CardContent>
            </Card>

            {/* Kontaktpersoner */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-accent" />
                <h3 className="font-OpenSans text-xl font-bold text-accent">Kontaktpersoner</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {contacts.map((contact, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
                    <CardContent className="py-5">
                      <h4 className="text-accent font-bold font-OpenSans">{contact.name}</h4>
                      <p className="text-accent/80 font-OpenSans">{contact.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Karta */}
          <div className="mt-12">
            <h3 className="font-montserrat text-2xl font-bold text-accent mb-4 text-center md:text-left">Hitta hit</h3>
            <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden border border-white/20 shadow-lg bg-white/10 backdrop-blur-md">
              <iframe
                title="Karta - Ingenjörsfirman Helfer AB"
                src="https://www.google.com/maps?q=Antennv%C3%A4gen+12%2C+135+48+Tyres%C3%B6&output=embed&hl=sv"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


