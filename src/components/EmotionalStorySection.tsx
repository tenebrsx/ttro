import { motion } from 'framer-motion';
import { FadeInUp } from './animations/AnimationComponents';
import { HandwrittenAccent, GrainTexture } from './animations/TextureComponents';

const EmotionalStorySection = () => {
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
          <div className="w-full h-full bg-gradient-to-r from-sage/20 to-transparent" />
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <FadeInUp delay={0.2}>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-sage/30 to-clay/30 flex items-center justify-center">
                  <div className="text-center text-mocha/40">
                    <div className="text-6xl mb-4">👩‍🍳</div>
                    <p className="text-sm font-source-serif">
                      Imagen: Chef creando con amor
                    </p>
                  </div>
                </div>
                
                {/* Overlay texture */}
                <div className="absolute inset-0 bg-gradient-to-t from-mocha/20 to-transparent" />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-dusty-rose/20 rounded-full blur-sm"
              />
              
              <motion.div
                animate={{
                  y: [0, 5, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-warm-sage/20 rounded-full blur-sm"
              />
            </div>
          </FadeInUp>

          {/* Right side - Content */}
          <FadeInUp delay={0.4}>
            <div className="space-y-8">
              {/* Handwritten accent */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center lg:text-left"
              >
                <HandwrittenAccent className="text-2xl">
                  Con amor
                </HandwrittenAccent>
              </motion.div>

              {/* Main quote */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-center lg:text-left"
              >
                <blockquote className="text-3xl md:text-4xl lg:text-5xl font-playfair text-dark-cocoa leading-tight">
                  "Cada postre lleva un mensaje 
                  <span className="italic text-dusty-rose"> invisible </span>
                  de cariño."
                </blockquote>
              </motion.div>

              {/* Supporting text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-center lg:text-left"
              >
                <p className="text-lg text-mocha/80 font-source-serif font-light leading-relaxed">
                  Detrás de cada creación hay horas de cuidado, 
                  ingredientes elegidos con amor y la intención de 
                  hacer que tu momento especial sea memorable.
                </p>
              </motion.div>

              {/* Signature line */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="text-center lg:text-left"
              >
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="w-12 h-px bg-sage/40" />
                  <span className="font-dancing text-dusty-rose text-lg">
                    Cucinanostrard
                  </span>
                  <div className="w-12 h-px bg-sage/40" />
                </div>
              </motion.div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default EmotionalStorySection;
