import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FadeInUp,
  StaggerChildren,
  StaggerChild,
  TiltOnHover,
} from "../components/animations/AnimationComponents";
import {
  HandDrawnDivider,
  HandwrittenAccent,
  GrainTexture,
} from "../components/animations/TextureComponents";
import {
  Heart,
  Clock,
  Star,
  Filter,
  ChefHat,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";
import DessertCustomizer from "../components/DessertCustomizer";
import PageTransition from "../components/PageTransition";
import { products } from "../data/products";
import { formatPriceFrom } from "../utils/currency";

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [showCustomizer, setShowCustomizer] = useState(false);

  const filters = [
    { id: "todos", label: "Todos", icon: Star },
    { id: "mas-amor", label: "Con Más Amor Recibido", icon: Heart },
    { id: "temporada", label: "Temporada", icon: Clock },
    { id: "veganos", label: "Veganos", icon: Filter },
    { id: "sin-gluten", label: "Sin Gluten", icon: Filter },
    { id: "clasicos", label: "Clásicos", icon: Star },
    { id: "sorprendentes", label: "Sorprendentes", icon: Star },
  ];

  // Use actual products from data
  const menuItems = products
    .filter((product) => product.available)
    .map((product) => ({
      id: product.id,
      category: product.featured ? "mas-amor" : product.category,
      type: product.subcategory || product.category,
      name: product.name,
      description: product.description,
      story: `${product.shortDescription} - ${product.preparationTime} de preparación.`,
      image:
        product.thumbnailImage ||
        product.images[0] ||
        "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      priceRange: formatPriceFrom(product.price),
      tags: [...product.tags, "todos"],
      rating: product.rating,
      preparationTime: product.preparationTime,
      serves: product.serves,
      addOns: product.customizations.map((custom) => ({
        name: custom,
        price: Math.floor(Math.random() * 15) + 5,
      })),
    }));

  const filteredItems =
    activeFilter === "todos"
      ? menuItems
      : menuItems.filter((item) => item.tags.includes(activeFilter));

  return (
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-creamy-beige to-cream overflow-hidden">
          <GrainTexture className="opacity-20" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-px bg-dusty-rose/40"></div>
                  <span className="mx-4 text-sm font-source-serif text-dusty-rose/70 uppercase tracking-wider">
                    Mi Diario Dulce
                  </span>
                  <div className="w-16 h-px bg-dusty-rose/40"></div>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair text-dark-cocoa mb-6">
                  Menú de Dulces
                  <span className="block text-dusty-rose italic mt-2">
                    Artesanales
                  </span>
                </h1>

                <HandDrawnDivider className="mb-8" />

                <p className="text-lg text-mocha/70 leading-relaxed font-source-serif font-light max-w-3xl mx-auto mb-8">
                  Cada postre es creado con amor, usando ingredientes frescos y
                  técnicas artesanales. Desde nuestros clásicos favoritos hasta
                  creaciones estacionales únicas.
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Menu Content */}
        <>
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
                            ? "bg-dusty-rose text-white shadow-lg scale-105"
                            : "bg-creamy-beige text-mocha hover:bg-dusty-rose/20"
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
                      <Link
                        to={`/product/${item.id}`}
                        className="block bg-gradient-to-br from-creamy-beige/60 to-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-dusty-rose/10 group"
                      >
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
                            <h3 className="text-xl font-playfair text-dark-cocoa group-hover:text-dusty-rose transition-colors">
                              {item.name}
                            </h3>
                            <Heart className="w-5 h-5 text-dusty-rose/40 group-hover:text-dusty-rose transition-colors duration-300" />
                          </div>

                          <p className="text-mocha/70 leading-relaxed mb-4 font-source-serif font-light text-sm line-clamp-3">
                            {item.description}
                          </p>

                          {/* Rating and Info */}
                          <div className="flex items-center justify-between mb-4 text-xs text-mocha/70">
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span>{item.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{item.preparationTime}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-3 h-3" />
                              <span>{item.serves}</span>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-dusty-rose font-medium font-source-serif">
                                {item.priceRange}
                              </span>
                              <span className="text-xs bg-dusty-rose/10 text-dusty-rose px-2 py-1 rounded-full">
                                Ver detalles →
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </TiltOnHover>
                  </StaggerChild>
                ))}
              </StaggerChildren>
            </div>
          </section>
        </>

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
                Cada ocasión especial merece un toque único. Comparte tu visión
                y trabajemos juntos para crear algo que cuente exactamente tu
                historia.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-dusty-rose text-cream px-10 py-4 rounded-full text-lg font-source-serif font-medium shadow-lg relative overflow-hidden"
                >
                  <span className="relative z-10">Crear Mi Dulce Especial</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-dusty-rose to-blush"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              {/* Custom Dessert Builder Button */}
              <motion.button
                onClick={() => setShowCustomizer(true)}
                className="mt-6 inline-flex items-center space-x-2 bg-gradient-to-r from-warm-blush to-dusty-rose text-white px-8 py-4 rounded-full text-lg font-source-serif font-medium shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChefHat className="w-5 h-5" />
                <span>Crear Mi Postre Personalizado</span>
                <Sparkles className="w-5 h-5" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-mocha to-dark-cocoa"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </FadeInUp>
          </div>
        </section>

        {/* Dessert Customizer Modal */}
        <AnimatePresence>
          {showCustomizer && (
            <DessertCustomizer onClose={() => setShowCustomizer(false)} />
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Menu;
