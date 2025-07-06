import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollToTop } from '../hooks/useScrollToTop';
import Logo from './Logo';
import { FadeInUp, FloatingElement } from './animations/AnimationComponents';
import { GrainTexture, HandwrittenAccent } from './animations/TextureComponents';

const Hero = () => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate('/menu');
    // Ensure we scroll to top after navigation
    setTimeout(() => scrollToTop(), 100);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Artisanal desserts on rustic table" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        
        {/* Grain texture overlay */}
        <GrainTexture className="opacity-30" />
      </div>

      {/* Content - Layered directly on image */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp delay={0.2}>
          <div className="flex items-center justify-center mb-6">
            <FloatingElement>
              <Heart className="h-8 w-8 text-cream/80 mr-3" />
            </FloatingElement>
            <Logo size="lg" className="filter brightness-0 invert" />
            <FloatingElement>
              <Heart className="h-8 w-8 text-cream/80 ml-3" />
            </FloatingElement>
          </div>
        </FadeInUp>
        
        <FadeInUp delay={0.4}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair text-cream mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Hecho con Amor,
            <span className="block text-cream/90 italic mt-2">De Mi Cocina a la Tuya</span>
          </h1>
        </FadeInUp>
        
        <FadeInUp delay={0.6}>
          <div className="w-16 h-px bg-cream/60 mx-auto mb-6"></div>
        </FadeInUp>
        
        <FadeInUp delay={0.8}>
          <p className="text-lg sm:text-xl text-cream/90 mb-4 max-w-2xl mx-auto leading-relaxed font-source-serif font-light" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
            Postres artesanales caseros para cualquier ocasión especial.
          </p>
          <p className="text-base italic text-cream/80 mb-8 max-w-xl mx-auto" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
            <HandwrittenAccent className="text-cream/90">
              Elaborados con ingredientes de temporada
            </HandwrittenAccent>
            <br />
            y atención personal a cada dulce detalle.
          </p>
        </FadeInUp>
        
        <FadeInUp delay={1.0}>
          <motion.button 
            onClick={goToMenu}
            className="bg-dusty-rose text-cream px-8 py-4 rounded-full text-lg font-source-serif font-medium shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <span className="relative z-10">Ver Dulces Especiales</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-dusty-rose to-sage"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Hero;