import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FadeInUp, StaggerChildren, StaggerChild, TiltOnHover } from '../components/animations/AnimationComponents';
import { HandDrawnDivider, HandwrittenAccent, GrainTexture } from '../components/animations/TextureComponents';
import { Heart, Clock, Star, Filter } from 'lucide-react';
import { useState } from 'react';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', label: 'Todos', icon: Star },
    { id: 'mas-amor', label: 'Con Más Amor Recibido', icon: Heart },
    { id: 'temporada', label: 'Temporada', icon: Clock },
    { id: 'veganos', label: 'Veganos', icon: Filter },
    { id: 'sin-gluten', label: 'Sin Gluten', icon: Filter },
    { id: 'clasicos', label: 'Clásicos', icon: Star },
    { id: 'sorprendentes', label: 'Sorprendentes', icon: Star },
  ];

  const menuItems = [
    {
      id: 1,
      category: 'mas-amor',
      type: 'Clásicos',
      name: 'Torta Earl Grey Lavanda',
      description: 'Delicado bizcocho infusionado con bergamota, acariciado con crema de lavanda y flores comestibles.',
      story: 'Inspirada en las tardes de té de mi abuela, esta torta combina la elegancia del Earl Grey con la serenidad de la lavanda.',
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      priceRange: 'desde $45',
      tags: ['clasicos', 'todos'],
      addOns: [
        { name: 'Flores comestibles extra', price: 8 },
        { name: 'Tarjeta personalizada', price: 5 },
        { name: 'Caja de regalo', price: 12 }
      ]
    },
    {
      id: 2,
      category: 'mas-amor',
      type: 'Favoritos',
      name: 'Macarons de Almendra y Rosa',
      description: 'Delicadas cáscaras francesas rellenas con crema de mantequilla perfumada con rosa y almendra.',
      story: 'Cada macaron es pintado a mano con colores inspirados en los atardeceres de primavera.',
      image: 'https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      priceRange: 'desde $40/docena',
      tags: ['clasicos', 'todos'],
      addOns: [
        { name: 'Colores personalizados', price: 10 },
        { name: 'Sabores especiales', price: 15 },
        { name: 'Caja de madera', price: 20 }
      ]
    },
    {
      id: 3,
      category: 'temporada',
      type: 'Temporada',
      name: 'Tartaletas de Limón y Tomillo',
      description: 'Cascarillas de hojaldre mantecoso rellenas con cuajada de limón brillante y azúcar de tomillo fresco.',
      story: 'Creadas con limones de temporada y tomillo recién cortado de mi jardín de hierbas.',
      image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      priceRange: 'desde $30/docena',
      tags: ['temporada', 'todos'],
      addOns: [
        { name: 'Hierbas aromáticas extra', price: 6 },
        { name: 'Glaseado especial', price: 8 }
      ]
    }
  ];

  const filteredItems = activeFilter === 'todos' 
    ? menuItems 
    : menuItems.filter(item => item.tags.includes(activeFilter));

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-creamy-beige to-cream overflow-hidden">
        <GrainTexture className="opacity-20" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-px bg-sage/40"></div>
                <span className="mx-4 text-sm font-source-serif text-sage/70 uppercase tracking-wider">Mi Diario Dulce</span>
                <div className="w-16 h-px bg-sage/40"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair text-dark-cocoa mb-6">
                Menú de Dulces
                <span className="block text-dusty-rose italic mt-2">Artesanales</span>
              </h1>
              
              <HandDrawnDivider className="mb-8" />
              
              <p className="text-lg text-mocha/70 leading-relaxed font-source-serif font-light max-w-3xl mx-auto">
                Cada postre aquí cuenta una historia personal. Desde 
                <HandwrittenAccent className="mx-2">clásicos reinventados</HandwrittenAccent>
                hasta creaciones sorprendentes que desafían las expectativas.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {filters.map((filter) => {
                const IconComponent = filter.icon;
                return (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === filter.id
                        ? 'bg-dusty-rose text-white shadow-lg scale-105'
                        : 'bg-creamy-beige text-mocha hover:bg-dusty-rose/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {filter.label}
                  </motion.button>
                );
              })}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <StaggerChild key={item.id}>
                <TiltOnHover>
                  <div className="bg-gradient-to-br from-creamy-beige/60 to-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-sage/10 group">
                    <div className="relative overflow-hidden">
                      <motion.img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      <div className="absolute top-4 left-4">
                        <span className="bg-dusty-rose/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {item.type}
                        </span>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-playfair text-dark-cocoa">
                          {item.name}
                        </h3>
                        <Heart className="w-5 h-5 text-dusty-rose/40 group-hover:text-dusty-rose transition-colors duration-300" />
                      </div>
                      
                      <p className="text-mocha/70 leading-relaxed mb-4 font-source-serif font-light text-sm">
                        {item.description}
                      </p>
                      
                      <div className="bg-cream/50 rounded-lg p-3 mb-4">
                        <p className="text-xs text-mocha/80 italic font-source-serif">
                          <HandwrittenAccent className="text-xs">Historia:</HandwrittenAccent> {item.story}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-dusty-rose font-medium font-source-serif">
                            {item.priceRange}
                          </span>
                          <span className="text-xs text-mocha/60">Base</span>
                        </div>
                        
                        <div className="border-t border-sage/20 pt-3">
                          <p className="text-xs text-mocha/60 mb-2 font-source-serif">Personalizaciones:</p>
                          <div className="space-y-1">
                            {item.addOns.map((addon, index) => (
                              <div key={index} className="flex justify-between text-xs">
                                <span className="text-mocha/70">{addon.name}</span>
                                <span className="text-dusty-rose">+${addon.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltOnHover>
              </StaggerChild>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-creamy-beige to-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <HandwrittenAccent className="text-2xl mb-4 block">
              ¿Algo especial en mente?
            </HandwrittenAccent>
            
            <h2 className="text-3xl font-playfair text-dark-cocoa mb-6">
              Creemos Juntos Tu Dulce Perfecto
            </h2>
            
            <p className="text-lg text-mocha/70 mb-8 font-source-serif font-light leading-relaxed">
              Cada ocasión especial merece un toque único. Comparte tu visión y 
              trabajemos juntos para crear algo que cuente exactamente tu historia.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Link 
                to="/contact"
                className="inline-block bg-dusty-rose text-cream px-10 py-4 rounded-full text-lg font-source-serif font-medium shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10">Crear Mi Dulce Especial</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-dusty-rose to-sage"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};

export default Menu;
