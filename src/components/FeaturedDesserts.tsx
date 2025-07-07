import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import {
  formatPriceFrom,
  formatPriceFromWithQuantity,
} from "../utils/currency";
import { useCart } from "../contexts/CartContext";

const FeaturedDesserts = () => {
  const { addItem } = useCart();

  const featuredDesserts = [
    {
      id: "tarta-chocolate-premium",
      name: "Tarta de Chocolate Premium",
      description:
        "Exquisita tarta de chocolate belga con capas de ganache sedoso, crema de vainilla Madagascar y decoración de frutos rojos frescos.",
      image:
        "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: 45,
      priceDisplay: formatPriceFrom(45),
      story: "Perfecta para celebrar momentos íntimos",
      rating: 5,
      preparationTime: "2-3 días",
      tags: ["Premium", "Chocolate"],
      popularity: "bestseller" as const,
    },
    {
      id: "macarons-franceses-clasicos",
      name: "Macarons Franceses Clásicos",
      description:
        "Caja de 12 macarons auténticos franceses elaborados con técnica tradicional. Incluye sabores clásicos: vainilla, chocolate, fresa, limón, pistacho y lavanda.",
      image:
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: 24,
      priceDisplay: formatPriceFromWithQuantity(24, "docena"),
      story: "Perfectos para regalar o disfrutar en una ocasión especial",
      rating: 5,
      preparationTime: "1-2 días",
      tags: ["Auténtico", "Francés"],
      popularity: "seasonal" as const,
    },
    {
      id: "tiramisu-individual-premium",
      name: "Tiramisú Individual Premium",
      description:
        "Auténtico tiramisú italiano servido en elegantes copas individuales. Elaborado con mascarpone italiano, café espresso dominicano y cacao importado.",
      image:
        "https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: 12,
      priceDisplay: formatPriceFrom(12),
      story: "Una experiencia gourmet que transporta directamente a Italia",
      rating: 5,
      preparationTime: "1-2 días",
      tags: ["Italiano", "Premium"],
      popularity: "trending" as const,
    },
  ];

  const handleAddToCart = (dessert: (typeof featuredDesserts)[0]) => {
    addItem({
      id: dessert.id,
      name: dessert.name,
      price: dessert.price,
      image: dessert.image,
    });
  };

  return (
    <section className="py-20 bg-creamy-beige bg-texture-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-dusty-rose/40"></div>
            <span className="mx-4 text-sm font-karla text-dusty-rose/70 uppercase tracking-wider">
              Mis Favoritos
            </span>
            <div className="w-16 h-px bg-dusty-rose/40"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-6">
            Dulces que Abrazan
            <span className="block text-dusty-rose italic mt-2">el Alma</span>
          </h2>

          <p className="text-lg text-mocha/70 max-w-2xl mx-auto font-karla font-light leading-relaxed">
            Cada uno de estos postres nació de un momento especial, una emoción,
            una historia que quería compartir contigo a través del sabor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredDesserts.map((dessert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-gentle hover:shadow-warm transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={dessert.image}
                  alt={dessert.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Popularity Badge */}
                {dessert.popularity === "bestseller" && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-dusty-rose to-warm-blush text-white px-3 py-1 rounded-full text-xs font-karla font-medium">
                    Más Popular
                  </div>
                )}
                {dessert.popularity === "trending" && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-mocha to-dark-cocoa text-white px-3 py-1 rounded-full text-xs font-karla font-medium">
                    Tendencia
                  </div>
                )}
                {dessert.popularity === "seasonal" && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-sage to-green-600 text-white px-3 py-1 rounded-full text-xs font-karla font-medium">
                    Temporada
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-cormorant text-mocha font-medium leading-tight">
                    {dessert.name}
                  </h3>
                  <div className="flex items-center space-x-1 ml-2">
                    {[...Array(dessert.rating)].map((_, i) => (
                      <span key={i} className="text-dusty-rose text-sm">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-mocha/70 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {dessert.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <p className="text-dusty-rose font-medium text-lg font-cormorant">
                    {dessert.priceDisplay}
                  </p>
                  <span className="text-xs text-mocha/60 bg-cream px-2 py-1 rounded-full">
                    {dessert.preparationTime}
                  </span>
                </div>

                <p className="text-xs text-mocha/60 italic mb-4">
                  {dessert.story}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {dessert.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-dusty-rose/10 text-dusty-rose px-2 py-1 rounded-full font-karla"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Link
                    to={`/product/${dessert.id}`}
                    className="flex-1 text-center bg-cream text-mocha py-2 px-4 rounded-xl font-karla font-medium hover:bg-dusty-rose/10 transition-colors duration-200 text-sm"
                  >
                    Ver Detalles
                  </Link>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAddToCart(dessert)}
                    className="bg-dusty-rose text-white py-2 px-4 rounded-xl font-karla font-medium hover:bg-mocha transition-colors duration-200 flex items-center space-x-1 text-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Agregar</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-mocha/70 mb-8 font-karla font-light italic">
            Cada postre es una carta de amor escrita con azúcar
          </p>

          <Link
            to="/menu"
            className="inline-block bg-dusty-rose text-cream px-10 py-4 rounded-full text-lg font-karla font-medium shadow-lg hover:bg-mocha transition-colors"
          >
            Explorar Todos Mis Dulces
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDesserts;
