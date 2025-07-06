import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerChildren, StaggerChild, TiltOnHover } from './animations/AnimationComponents';
import { HandDrawnDivider, HandwrittenAccent } from './animations/TextureComponents';

const FeaturedDesserts = () => {
  const featuredDesserts = [
    {
      name: "Torta Earl Grey Lavanda",
      description: "Delicado bizcocho infusionado con bergamota, acariciado con crema de lavanda",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "desde $45"
    },
    {
      name: "Tartaletas de Limón y Tomillo",
      description: "Cascarillas de hojaldre mantecoso rellenas con cuajada de limón brillante y azúcar de tomillo fresco",
      image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "desde $30/docena"
    },
    {
      name: "Macarons de Almendra y Rosa",
      description: "Delicadas cáscaras rellenas con crema de mantequilla perfumada con rosa y almendra",
      image: "https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "desde $40/docena"
    }
  ];

  return (
    <section className="py-20 bg-creamy-beige bg-texture-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-sage/40"></div>
              <span className="mx-4 text-sm font-source-serif text-sage/70 uppercase tracking-wider">Destacados</span>
              <div className="w-16 h-px bg-sage/40"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-playfair text-dark-cocoa mb-6">
              Dulces Especiales
            </h2>
            
            <HandDrawnDivider className="mb-6" />
            
            <p className="text-lg text-mocha/70 max-w-2xl mx-auto font-source-serif font-light leading-relaxed">
              Una muestra de lo que hace especial cada creación—elaborados con ingredientes de temporada 
              y hechos por encargo con <HandwrittenAccent>amor</HandwrittenAccent>.
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredDesserts.map((dessert, index) => (
            <StaggerChild key={index}>
              <TiltOnHover>
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-cream/60 to-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-sage/10 relative">
                    <div className="relative overflow-hidden">
                      <motion.img 
                        src={dessert.image} 
                        alt={dessert.name}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="p-6 relative">
                      <div className="absolute top-0 left-6 w-8 h-px bg-dusty-rose/60 transform -translate-y-3"></div>
                      
                      <h3 className="text-xl font-playfair text-dark-cocoa mb-3">
                        {dessert.name}
                      </h3>
                      <p className="text-mocha/70 leading-relaxed mb-4 font-source-serif font-light text-sm">
                        {dessert.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-dusty-rose font-medium font-source-serif italic">
                          {dessert.price}
                        </span>
                        <motion.div 
                          className="w-4 h-4 rounded-full bg-dusty-rose/20"
                          whileHover={{ scale: 1.2, backgroundColor: 'rgba(212, 165, 165, 0.6)' }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TiltOnHover>
            </StaggerChild>
          ))}
        </StaggerChildren>

        <FadeInUp delay={0.8}>
          <div className="text-center">
            <HandDrawnDivider className="mb-6" />
            
            <p className="text-mocha/70 mb-8 font-source-serif font-light italic">
              Descubre la colección completa de dulces artesanales
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Link 
                to="/menu"
                className="inline-block bg-dusty-rose text-cream px-10 py-4 rounded-full text-lg font-source-serif font-medium shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10">Ver Menú Completo</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-dusty-rose to-sage"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default FeaturedDesserts;