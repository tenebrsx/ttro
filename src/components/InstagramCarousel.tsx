import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Heart,
  MessageCircle,
} from "lucide-react";
import OptimizedImage from "./OptimizedImage";

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
}

const InstagramCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Instagram posts with real image paths
  const posts: InstagramPost[] = [
    {
      id: "1",
      image: "/images/instagram/chocolate-raspberry-tart.jpg",
      caption: "Tartaleta de frambuesa con crema de vainilla artesanal ✨",
      likes: 127,
      comments: 23,
      timeAgo: "2h",
    },
    {
      id: "2",
      image: "/images/instagram/vanilla-caramel-macarons.jpg",
      caption: "Proceso de decoración de un pastel de bodas 🎂",
      likes: 203,
      comments: 45,
      timeAgo: "5h",
    },
    {
      id: "3",
      image: "/images/instagram/berry-cheesecake.jpg",
      caption: "Macarons frescos del día en colores pasteles 🌸",
      likes: 156,
      comments: 31,
      timeAgo: "1d",
    },
    {
      id: "4",
      image: "/images/instagram/decorated-cookies.jpg",
      caption: "Tiramisú individual con cacao importado 🍫",
      likes: 189,
      comments: 28,
      timeAgo: "2d",
    },
    {
      id: "5",
      image: "/images/instagram/strawberry-cupcakes.jpg",
      caption: "Mesa de postres para evento corporativo 🏢",
      likes: 241,
      comments: 52,
      timeAgo: "3d",
    },
    {
      id: "6",
      image: "/images/instagram/buttercream-class.jpg",
      caption: "Clase magistral de decoración con buttercream 🎨",
      likes: 178,
      comments: 39,
      timeAgo: "4d",
    },
  ];

  // Handle image loading errors
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    e.currentTarget.src = "/images/fallback-dessert.jpg";
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % posts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, posts.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cream via-white to-dusty-rose/10 bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-sage/40"></div>
            <span className="mx-4 text-sm font-source-serif text-sage/70 uppercase tracking-wider">
              Síguenos en Instagram
            </span>
            <div className="w-16 h-px bg-sage/40"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-playfair text-dark-cocoa mb-6">
            Momentos
            <span className="block text-dusty-rose italic">Dulces</span>
          </h2>

          <div className="w-24 h-px bg-sage/40 mx-auto mb-8"></div>

          <p className="text-lg text-dark-cocoa/70 leading-relaxed font-source-serif max-w-2xl mx-auto">
            Descubre el proceso detrás de cada creación y los momentos
            especiales que hacemos posibles.
          </p>
        </div>

        {/* Instagram-style carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="relative bg-white rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Header */}
            <div className="flex items-center p-4 border-b border-gray-100">
              <div className="w-10 h-10 bg-gradient-to-br from-dusty-rose to-sage rounded-full flex items-center justify-center mr-3">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-source-serif font-semibold text-dark-cocoa">
                  @cucinanostrard
                </h3>
                <p className="text-sm text-dark-cocoa/60">Santo Domingo, RD</p>
              </div>
            </div>

            {/* Image container */}
            <div className="relative aspect-square overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <OptimizedImage
                    src={posts[currentSlide].image}
                    alt={posts[currentSlide].caption}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                    fallbackSrc="/images/fallback-dessert.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 group"
              >
                <ChevronLeft className="w-4 h-4 text-dark-cocoa group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 group"
              >
                <ChevronRight className="w-4 h-4 text-dark-cocoa group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1"
                  >
                    <Heart className="w-6 h-6 text-dusty-rose" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1"
                  >
                    <MessageCircle className="w-6 h-6 text-dark-cocoa" />
                  </motion.button>
                </div>
                <span className="text-sm text-dark-cocoa/60 font-source-serif">
                  {posts[currentSlide].timeAgo}
                </span>
              </div>

              <p className="text-sm text-dark-cocoa/80 mb-3 font-source-serif">
                <span className="font-semibold">
                  {posts[currentSlide].likes}
                </span>{" "}
                me gusta
              </p>

              <p className="text-sm text-dark-cocoa font-source-serif leading-relaxed">
                <span className="font-semibold">cucinanostrard</span>{" "}
                {posts[currentSlide].caption}
              </p>

              <p className="text-sm text-dark-cocoa/60 mt-2 font-source-serif">
                Ver los {posts[currentSlide].comments} comentarios
              </p>
            </div>
          </motion.div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-dusty-rose w-6"
                    : "bg-dark-cocoa/30 hover:bg-dusty-rose/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <motion.a
            href="https://www.instagram.com/cucinanostrard/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-dusty-rose to-sage text-white rounded-full font-source-serif font-medium hover:shadow-lg transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Síguenos en Instagram
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;
