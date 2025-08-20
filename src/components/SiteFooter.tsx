import { Mail, Phone } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-primary text-accent py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-montserrat text-2xl font-bold mb-6">Ingenjörsfirman Helfer AB</h3>
            <p className="font-OpenSans text-white/90 leading-relaxed">
              Specialister på precisionsdetaljer och splines sedan 1959
            </p>
          </div>
          <div>
            <h4 className="font-montserrat text-xl font-bold mb-6">Kontakt</h4>
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
            <h4 className="font-montserrat text-xl font-bold mb-6">Besök oss</h4>
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
  );
};

export default SiteFooter;


