import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerChildren, StaggerChild } from './animations/AnimationComponents';
import { HandDrawnDivider, HandwrittenAccent } from './animations/TextureComponents';

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
    <section className="py-20 bg-gradient-to-br from-cream to-white bg-texture-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-sage/40"></div>
              <span className="mx-4 text-sm font-source-serif text-sage/70 uppercase tracking-wider">Testimonios</span>
              <div className="w-16 h-px bg-sage/40"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-playfair text-dark-cocoa mb-6">
              Palabras Dulces
            </h2>
            
            <HandDrawnDivider className="mb-6" />
            
            <p className="text-lg text-mocha/70 max-w-2xl mx-auto font-source-serif font-light leading-relaxed">
              La mayor alegría viene de saber que mis postres se convierten en parte 
              de los recuerdos <HandwrittenAccent>entrañables</HandwrittenAccent> de alguien.
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerChild key={index}>
              <motion.div 
                className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-sage/10 group relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dusty-rose to-sage"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <Quote className="h-8 w-8 text-dusty-rose mb-4 group-hover:text-sage transition-colors duration-300" />
                
                <p className="text-mocha/80 italic mb-6 leading-relaxed font-source-serif font-light">
                  "{testimonial.text}"
                </p>
                
                <div className="text-right">
                  <p className="font-playfair text-dark-cocoa text-lg">
                    — {testimonial.name}
                  </p>
                  <p className="text-dusty-rose text-sm font-source-serif">
                    {testimonial.event}
                  </p>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default TestimonialsPreview;