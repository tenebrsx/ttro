import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FadeInUp } from './animations/AnimationComponents';
import { GrainTexture } from './animations/TextureComponents';
import { scrollToTop } from '../hooks/useScrollToTop';

const EmotionalStorySection = () => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate('/menu');
    setTimeout(() => scrollToTop(), 100);
  };

  const goToContact = () => {
    navigate('/contact');
    setTimeout(() => scrollToTop(), 100);
  };
  return (
    <section className="relative py-20 bg-gradient-to-br from-creamy-beige to-cream overflow-hidden">
      {/* Background texture */}
      <GrainTexture />
      
      {/* Background image with parallax effect */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img 
            src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Postres artesanales con frutos rojos"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-creamy-beige/80 to-cream/70" />
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main title */}
          <FadeInUp delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair text-dark-cocoa leading-tight">
                Hecho con Amor,
                <span className="block text-dusty-rose italic mt-2">De Mi Cocina a la Tuya</span>
              </h2>
            </motion.div>
          </FadeInUp>

          {/* Subtitle */}
          <FadeInUp delay={0.6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <p className="text-lg sm:text-xl text-mocha/80 font-source-serif font-light leading-relaxed max-w-2xl mx-auto">
                Postres artesanales hechos a mano con ingredientes reales.
              </p>
            </motion.div>
          </FadeInUp>

          {/* Call to action buttons */}
          <FadeInUp delay={1.0}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={goToMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-dusty-rose text-cream px-8 py-4 rounded-full text-lg font-source-serif font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver Menú
              </motion.button>
              
              <motion.button
                onClick={goToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-dark-cocoa px-8 py-4 rounded-full text-lg font-source-serif font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-sage/20"
              >
                Haz Pedido
              </motion.button>
            </motion.div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default EmotionalStorySection;
