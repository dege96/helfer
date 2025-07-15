import Navigation from "@/components/Navigation";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

const imageList = [
  { src: "/Bilder/TranspBg/1.png", alt: "Splinekomponent med kuggprofil" },
  { src: "/Bilder/TranspBg/2.png", alt: "Precisionstillverkad axel med splines" },
  { src: "/Bilder/TranspBg/3.png", alt: "Kugghylsa med invändig splines" },
  { src: "/Bilder/TranspBg/4.png", alt: "Set med olika splineshylsor" },
  { src: "/Bilder/TranspBg/5.png", alt: "Detaljbild av splineshylsa" },
  { src: "/Bilder/TranspBg/6.png", alt: "Industriell splinekomponent med gänga" },
  { src: "/Bilder/TranspBg/7.png", alt: "Närbild på invändiga splines" },
];

const Referensbilder = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-accent">
      <Navigation />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-OpenSans text-4xl font-bold text-primary mb-12 text-center">
            Referensbilder
          </h1>
          
          <p className="font-OpenSans text-secondary text-center max-w-3xl mx-auto mb-12">
            Här ser du exempel på våra specialtillverkade precisionsdetaljer och splines. 
            Klicka på en bild för att se den i större format.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {imageList.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square relative overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-scale-down grayscale"
                  loading="lazy" // För bättre laddprestanda
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox för att visa förstärkt bild */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none">
          <DialogTitle>
            <VisuallyHidden>Bildvisare</VisuallyHidden>
          </DialogTitle>
          <div className="relative">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-primary/75 text-white rounded-full p-2 hover:bg-primary transition-colors"
              aria-label="Stäng"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Förstorad bild" 
                className="max-w-full max-h-[85vh] object-contain mx-auto rounded-md bg-black/30 backdrop-blur-md grayscale"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Referensbilder; 