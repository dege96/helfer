import Navigation from "@/components/Navigation";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ZoomIn, Download, Share2 } from "lucide-react";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Button } from "@/components/ui/button";

const imageList = [
  { 
    src: "/Bilder/TranspBg/1.png", 
    alt: "Splinekomponent med kuggprofil",
    title: "Splinekomponent",
    description: "Precisionstillverkad splinekomponent med exakt kuggprofil"
  },
  { 
    src: "/Bilder/TranspBg/2.png", 
    alt: "Precisionstillverkad axel med splines",
    title: "Axel med splines",
    description: "Högkvalitativ axel med precisionssplines"
  },
  { 
    src: "/Bilder/TranspBg/3.png", 
    alt: "Kugghylsa med invändig splines",
    title: "Kugghylsa",
    description: "Specialtillverkad kugghylsa med invändiga splines"
  },
  { 
    src: "/Bilder/TranspBg/4.png", 
    alt: "Set med olika splineshylsor",
    title: "Splineshylsor",
    description: "Komplett sortiment av splineshylsor"
  },
  { 
    src: "/Bilder/TranspBg/5.png", 
    alt: "Detaljbild av splineshylsa",
    title: "Detaljbild",
    description: "Närbild som visar precisionen i våra splines"
  },
  { 
    src: "/Bilder/TranspBg/6.png", 
    alt: "Industriell splinekomponent med gänga",
    title: "Industriell komponent",
    description: "Robust splinekomponent för tunga industrimiljöer"
  },
  { 
    src: "/Bilder/TranspBg/7.png", 
    alt: "Närbild på invändiga splines",
    title: "Invändiga splines",
    description: "Exakt precision i invändiga splines"
  },
];

const Referensbilder = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const handleDownload = (imageSrc: string, imageTitle: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `${imageTitle}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (image: typeof imageList[0]) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.title,
          text: image.description,
          url: window.location.href
        });
      } catch (error) {
        console.log('Dela avbrutet');
      }
    } else {
      // Fallback: kopiera länk till urklipp
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-accent">
      <Navigation />
      
      {/* Hero-sektion med förbättrad visuell hierarki */}
      <section className="pt-20 md:pt-28 pb-4 md:pb-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Referensbilder
            </h1>
            
            <p className="font-OpenSans text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8">
              Här ser du exempel på våra specialtillverkade precisionsdetaljer och splines. Klicka på en bild för att se den i större format.
            </p>
            
            {/* Här tog vi bort CTA-knapparna enligt önskemål */}
          </div>
        </div>
      </section>

      {/* Förbättrat bildgalleri med modern layout */}
      <section id="gallery" className="pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {imageList.map((image, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl overflow-hidden"
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => setSelectedIndex(index)}
              >
                {/* Bildcontainer med förbättrad visuell feedback */}
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-scale-down transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay med bildinformation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-montserrat font-bold text-lg mb-2">{image.title}</h3>
                      <p className="font-OpenSans text-sm text-white/90">{image.description}</p>
                    </div>
                  </div>
                  
                  {/* Hover-effekter och ikoner */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <ZoomIn className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>
                
                {/* Bildtitel under bilden */}
                <div className="p-4">
                  <h3 className="font-montserrat font-semibold text-primary text-lg mb-2">
                    {image.title}
                  </h3>
                  <p className="font-OpenSans text-secondary text-sm leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Förbättrad lightbox med modern design */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="sm:max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none">
          <DialogTitle>
            <VisuallyHidden>Bildvisare - {selectedIndex !== null ? imageList[selectedIndex].title : ''}</VisuallyHidden>
          </DialogTitle>
          <div className="relative">
            {/* Kontrollknappar */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <Button
                size="sm"
                variant="glassmorphism"
                onClick={() => (selectedIndex !== null) && handleShare(imageList[selectedIndex])}
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
              >
                <Share2 className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="glassmorphism"
                onClick={() => (selectedIndex !== null) && handleDownload(imageList[selectedIndex].src, imageList[selectedIndex].title)}
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
              >
                <Download className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="glassmorphism"
                onClick={() => setSelectedIndex(null)}
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Förstorad bild med förbättrad styling */}
            {selectedIndex !== null && (
              <div className="text-center relative">
                <img 
                  src={imageList[selectedIndex].src} 
                  alt={imageList[selectedIndex].alt} 
                  className="max-w-full max-h-[80vh] object-contain mx-auto rounded-2xl bg-black/40 backdrop-blur-lg shadow-2xl"
                />
                {/* Bildinformation under bilden */}
                <div className="mt-4 bg-black/80 backdrop-blur-md rounded-xl p-4 text-white inline-block mx-auto max-w-[90vw]">
                  <h3 className="font-montserrat font-bold text-xl mb-2">{imageList[selectedIndex].title}</h3>
                  <p className="font-OpenSans text-white/90 text-sm sm:text-base">{imageList[selectedIndex].description}</p>
                </div>

                {/* Vänster/Höger pilar */}
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white p-2 rounded-full"
                  onClick={() => setSelectedIndex((prev) => prev === null ? prev : (prev - 1 + imageList.length) % imageList.length)}
                  aria-label="Föregående bild"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white p-2 rounded-full"
                  onClick={() => setSelectedIndex((prev) => prev === null ? prev : (prev + 1) % imageList.length)}
                  aria-label="Nästa bild"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Referensbilder;