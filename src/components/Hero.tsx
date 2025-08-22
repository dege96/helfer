import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-primary pt-40 pb-12 md:pt-48 md:pb-24 overflow-hidden h-screen md:max-h-[700px] flex md:items-center min-h-screen">
      <div className="absolute inset-0 bg-[url('/BG_noblur2.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Bottom fade overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
      <div className="container relative z-10 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-16 h-full">
          <div className="max-w-3xl flex flex-col justify-center h-full">
            <p className="font-montserrat text-lg md:text-xl text-white/90 mb-4 uppercase tracking-wide">
              Ingenjörsfirman Helfer
            </p>
            <h1 className="font-montserrat text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in bg-gradient-to-r from-[#9D7627] via-[#E9CF8C] to-[#9D7627] bg-clip-text text-transparent">
              Precision i varje detalj sedan 1959
            </h1>
            <p className="font-OpenSans text-lg md:text-xl text-accent/90 mb-8 leading-relaxed opacity-90">
              Specialanpassade precisionskomponenter – från splines och kuggskärning till unika profiler, med marknadsledande noggrannhet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                variant="glassmorphism"
                className="font-OpenSans"
                onClick={() =>
                  (window.location.href =
                    'mailto:splines@helfer.se?subject=Offertförfrågan')
                }
              >
                Begär offert
              </Button>
            </div>
          </div>
          <div className="md:text-center md:ml-8 relative flex-1 flex items-center justify-center h-full">
            <img
              src="/BoltVector.svg"
              alt="Vektorillustration av en bult"
              className="mx-auto max-h-65 absolute"
              draggable={false}
            />
            <img
              src="/Bolts.png"
              alt="Mekaniska komponenter"
              className="hidden md:block mx-auto max-h-90 drop-shadow-xl grayscale relative z-10"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
