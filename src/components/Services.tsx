import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const services = [
  {
    title: "Splines & Splinesskärning",
    description:
      "Specialiserade på ut- och invändig splinesskärning med högsta precision. Vi erbjuder snabb tillverkning och leverans av specialtillverkade detaljer.",
    image: "/Bilder/JDG_0309.JPG",
  },
  {
    title: "Kuggskärning & Profiler",
    description:
      "Expertis inom ut- och invändig kuggskärning, samt tillverkning av olika profiler som fyrkanter, sexkanter och rektangulära former.",
    image: "/Bilder/JDG_0266.JPG",
  },
  {
    title: "Dragbrotschning & Fräsning",
    description:
      "Vi utför dragbrotschning, hyvling och fräsning av alla typer av profiler med modern utrustning och omfattande erfarenhet.",
    image: "/Bilder/JDG_0287.JPG",
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-16 text-center">
          Våra produktområden
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 transform overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="font-OpenSans font-bold text-primary text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="font-OpenSans pb-6">
                <p className="text-secondary leading-relaxed hidden md:block">
                  {service.description}
                </p>
              </CardContent>

              
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;


