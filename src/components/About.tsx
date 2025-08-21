import { Clock, Target, Truck, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="om-oss" className="relative py-24 bg-[url('/Bilder/orange1.png')] bg-cover bg-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-montserrat text-5xl font-bold text-accent mb-8 md:mb-12">
                Specialister på splines
              </h2>
              
              {/* Proof Points */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-white/70" />
                  <span className="font-OpenSans font-semibold text-accent">Sedan 1959</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-white/70" />
                  <span className="font-OpenSans font-semibold text-accent">±0,01 mm</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-white/70" />
                  <span className="font-OpenSans font-semibold text-accent">Expressleverans</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-white/70" />
                  <span className="font-OpenSans font-semibold text-accent">ISO-certifierad</span>
                </div>
              </div>
              
              <div className="md:hidden my-6">
                <img
                  src="/Bilder/1.png"
                  alt="Produktion hos Ingenjörsfirman Helfer"
                  className="w-full max-w-md mx-auto rounded-xl object-cover mix-blend-hard-light opacity-80"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <div className="prose prose-lg text-accent/80">
                <p className="font-OpenSans leading-relaxed mb-6">
                  Sedan 1959 har vi tillverkat precisionsdetaljer för olika ändamål inom industrin. Vår specialitet är splines, splinesskärning, kuggskärning, kilspår och olika profiler med marknadsledande noggrannhet.
                </p>
                <p className="font-OpenSans leading-relaxed mb-6">
                  Vi dragbrotschar, hyvlar, fräser och sticker i stort sett alla typer av profiler. Som affärsidé satsar vi på utomordentligt snabb tillverkning och leverans av specialtillverkade detaljer med precision upp till ±0,01 mm.
                </p>
                <p className="font-OpenSans leading-relaxed">
                  Företaget är sedan 1982 beläget i egna lokaler i Tyresö, sydost om Stockholm, med maskiner och utrustning för komplett tillverkning. Vi har skapat ett brett kontaktnät över hela världen.
                </p>
              </div>
            </div>
            <div className="w-full hidden md:block self-center">
              <img
                src="/Bilder/1.png"
                alt="Produktion hos Ingenjörsfirman Helfer"
                className="w-full rounded-xl object-cover mix-blend-hard-light opacity-80"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
