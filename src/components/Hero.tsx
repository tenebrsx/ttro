import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Logo from "./Logo";

const Hero = () => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate("/menu");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sección de inicio"
      role="region"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-dusty-rose/30 via-warm-blush/20 to-soft-rose/30"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/30"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <Logo
            size="lg"
            className="filter brightness-0 invert"
            alt="Cucinanostrard Logo"
          />
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-cormorant text-cream mb-6 leading-tight"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
        >
          <span className="sr-only">Cucinanostrard - </span>
          Hecho con
          <span className="block text-cream/90 italic mt-2">amor,</span>
          <span className="block text-cream/90 italic">servicio con</span>
          <span className="block text-cream/90 italic">dulzura</span>
        </h1>

        <div
          className="w-24 h-px bg-cream/60 mx-auto mb-8"
          aria-hidden="true"
        ></div>

        <p
          className="text-lg sm:text-xl text-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed font-karla font-light"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
        >
          Cucinanostrard no es una tienda, es
          <br />
          un diario de recetas vivas. Cada dulce es
          <br />
          pensado, horneado y decorado por mí,
          <br />
          para ti.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            onClick={goToMenu}
            className="bg-gradient-to-r from-dusty-rose to-warm-blush text-cream px-10 py-4 rounded-full text-lg font-karla font-medium shadow-xl relative overflow-hidden border-2 border-white/20"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Ver el menú de postres"
          >
            <span className="relative z-10 tracking-wide">Ver el menú</span>
          </motion.button>

          <motion.button
            onClick={goToContact}
            className="bg-white/90 text-mocha px-10 py-4 rounded-full text-lg font-karla font-medium shadow-lg relative overflow-hidden hover:bg-white transition-all duration-300 border-2 border-dusty-rose/30"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Hacer un pedido personalizado"
          >
            <span className="relative z-10 tracking-wide">
              Haz un pedido personalizado
            </span>
          </motion.button>
        </div>

        {/* Floating indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-cream/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Desplazarse hacia abajo para descubrir más"
          role="button"
        >
          <div className="flex flex-col items-center">
            <ChevronDown
              className="w-6 h-6 text-cream/80 mb-1"
              aria-hidden="true"
            />
            <p className="text-cream/80 text-sm font-karla">Descubre más</p>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
