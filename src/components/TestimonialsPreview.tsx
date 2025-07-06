import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsPreview = () => {
  const testimonials = [
    {
      text: "La torta era tan delicada que se sintió como una carta de amor. Cada bocado fue pura poesía.",
      name: "Isabella",
      event: "Celebración de Cumpleaños"
    },
    {
      text: "Convirtió nuestra pequeña reunión en algo mágico. Los postres eran obras de arte que sabían aún mejor de lo que se veían.",
      name: "Carlos & María",
      event: "Cena de Aniversario"
    },
    {
      text: "Trabajar con ella se sintió como tener una querida amiga creando algo especial solo para nosotros. La atención al detalle fue extraordinaria.",
      name: "Sofía",
      event: "Baby Shower"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-white bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-sage/40"></div>
            <span className="mx-4 text-sm font-karla text-sage/70 uppercase tracking-wider">Testimonios</span>
            <div className="w-16 h-px bg-sage/40"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-6 text-shadow-soft">
            Palabras Dulces
          </h2>
          
          <div className="w-24 h-px bg-sage/40 mx-auto mb-6"></div>
          
          <p className="text-lg text-mocha/70 max-w-2xl mx-auto font-karla font-light leading-relaxed">
            La mayor alegría viene de saber que mis postres se convierten en parte 
            de los recuerdos entrañables de alguien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-gentle hover:shadow-soft transition-all duration-500 border border-sage/10 group hover:-translate-y-2">
              <Quote className="h-8 w-8 text-sage mb-4 group-hover:text-mocha transition-colors duration-300" />
              
              <p className="text-mocha/80 italic mb-6 leading-relaxed font-karla font-light">
                "{testimonial.text}"
              </p>
              
              <div className="text-right">
                <p className="font-cormorant text-mocha text-lg">
                  — {testimonial.name}
                </p>
                <p className="text-sage text-sm font-karla">
                  {testimonial.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;