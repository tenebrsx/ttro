import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../hooks/useScrollToTop';
import Logo from './Logo';

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
        <img 
          src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Artisanal desserts on rustic table" 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      </div>

      {/* Content - Layered directly on image */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <Heart className="h-8 w-8 text-cream/80 mr-3" />
          <Logo size="lg" className="filter brightness-0 invert" />
          <Heart className="h-8 w-8 text-cream/80 ml-3" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-cormorant text-cream mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          Hecho con Amor,
          <span className="block text-cream/90 italic mt-2">De Mi Cocina a la Tuya</span>
        </h1>
        
        <div className="w-16 h-px bg-cream/60 mx-auto mb-6"></div>
        
        <p className="text-lg sm:text-xl text-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed font-karla font-light" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
          Postres artesanales caseros para cualquier ocasión especial.
          <span className="block mt-2 text-base italic text-cream/80">
            Elaborados con ingredientes de temporada y atención personal a cada dulce detalle.
          </span>
        </p>
        
        <button 
          onClick={goToMenu}
          className="bg-sage text-cream px-8 py-4 rounded-full text-lg hover:bg-mocha transition-all duration-300 transform hover:scale-105 shadow-lg font-karla"
        >
          Ver Dulces Especiales
        </button>
      </div>
    </section>
  );
};

export default Hero;