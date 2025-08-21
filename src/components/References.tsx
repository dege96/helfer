import { useEffect, useRef, type ComponentType } from 'react';
import { Building2, Factory, Settings, Briefcase, Clock } from 'lucide-react';

const References = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  type ReferenceItem = {
    name: string;
    logo?: string;
    icon?: ComponentType<{ className?: string; "aria-label"?: string }>;
    url?: string;
  };

  const references: ReferenceItem[] = [
    { name: 'Haningestrand Golfklubb', logo: '/References/haningestrandgolfklubb.jpg', url: 'https://www.haningestrand.se/' },
    { name: 'Annas', logo: '/References/annas.jpg', url: 'https://www.annas.se/' },
    { name: 'Företag B', icon: Factory },
    { name: 'Företag C', icon: Settings },
    { name: 'Företag D', icon: Briefcase },
    { name: 'Företag E', icon: Clock },
  ];

  return (
    <section id="referenser" ref={sectionRef} className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat text-4xl font-bold text-primary mb-8 text-center">
            Våra samarbetspartners
          </h2>
          <div className="prose prose-lg mx-auto text-secondary mb-12">
            <p className="font-OpenSans leading-relaxed text-center">
              Vi är stolta över att samarbeta med ledande företag inom industrin. Tillsammans skapar vi högkvalitativa lösningar för framtiden.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {references.map((reference) => (
              <div
                key={reference.name}
                className={`w-full h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${reference.url ? 'cursor-pointer' : ''}`}
                onClick={() => reference.url && window.open(reference.url, '_blank')}
              >
                {reference.logo ? (
                  <img
                    src={reference.logo}
                    alt={`${reference.name} logotyp`}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : reference.icon ? (
                  <reference.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" aria-label={`${reference.name} ikon`} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References; 