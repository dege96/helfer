import { useEffect, useRef } from 'react';

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

  const references = [
    { name: 'Haningestrand Golfklubb', logo: '/References/haningestrandgolfklubb.jpg'},
  ];

  return (
    <section id="referenser" ref={sectionRef} className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-OpenSans text-4xl font-bold text-primary mb-8 text-center">
            Våra samarbetspartners
          </h2>
          <div className="prose prose-lg mx-auto text-secondary mb-12">
            <p className="font-OpenSans leading-relaxed text-center">
              Vi är stolta över att samarbeta med ledande företag inom industrin. Tillsammans skapar vi högkvalitativa lösningar för framtiden.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center cursor-pointer" onClick={() => window.open('https://www.haningestrand.se/', '_blank')}>
            {references.map((reference) => (
              <div
                key={reference.name}
                className="w-full h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={reference.logo}
                  alt={`${reference.name} logotyp`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References; 