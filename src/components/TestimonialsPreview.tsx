import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerChildren, StaggerChild } from './animations/AnimationComponents';
import { HandDrawnDivider, HandwrittenAccent } from './animations/TextureComponents';

const TestimonialsPreview = () => {
  const testimonials = [
    {
      text: "La torta era tan delicada que se sintió como una carta de amor. Cada bocado fue pura poesía.",
      name: "Isabella",
      event: "Celebración de Cumpleaños",
      image: "/images/testimonials/testimonial-1.jpg",
      rating: 5
    },
    {
      text: "Convirtió nuestra pequeña reunión en algo mágico. Los postres eran obras de arte que sabían aún mejor de lo que se veían.",
      name: "Carlos & María",
      event: "Cena de Aniversario",
      image: "/images/testimonials/testimonial-2.jpg",
      rating: 5
    },
    {
      text: "Trabajar con ella se sintió como tener una querida amiga creando algo especial solo para nosotros. La atención al detalle fue extraordinaria.",
      name: "Sofía",
      event: "Baby Shower",
      image: "/images/testimonials/testimonial-3.jpg",
      rating: 5
    }
  ];
  
  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

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
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-sage/10 group relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dusty-rose to-sage"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Profile image and quote */}
                <div className="flex items-start mb-4">
                  <div className="relative mr-4 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-dusty-rose/30 shadow-md">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/fallback-dessert.jpg';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-dusty-rose/30 to-sage/30 flex items-center justify-center">
                          <span className="text-xl font-playfair text-dusty-rose">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                      <Quote className="h-4 w-4 text-dusty-rose group-hover:text-sage transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-playfair text-dark-cocoa text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-dusty-rose text-sm font-source-serif">
                      {testimonial.event}
                    </p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial text */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-1 h-8 w-8 text-dusty-rose/10 transform rotate-180" />
                  <p className="text-mocha/80 italic mb-6 leading-relaxed font-source-serif font-light pl-4 pr-2">
                    "{testimonial.text}"
                  </p>
                  <Quote className="absolute -bottom-2 -right-1 h-8 w-8 text-dusty-rose/10" />
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-dusty-rose/5 to-transparent rounded-tl-full"
                  animate={{ 
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default TestimonialsPreview;