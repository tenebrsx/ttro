import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Instagram-style images for the gallery
  const images = [
    {
      src: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Tarta artesanal con decoración natural",
      caption: "Nuestras tartas son obras de arte comestibles ✨"
    },
    {
      src: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Tartaletas delicadas con hierbas frescas",
      caption: "Sabores frescos que despiertan los sentidos 🌿"
    },
    {
      src: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Galletas rústicas sobre superficie de madera",
      caption: "Tradición y sabor en cada mordisco 🍪"
    },
    {
      src: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Panna cotta elegante con frutos rojos",
      caption: "Elegancia italiana en cada cucharada 🫐"
    },
    {
      src: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Trufas de chocolate artesanales",
      caption: "Chocolate premium, hecho con amor 🍫"
    },
    {
      src: "https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Arreglo colorido de macarons",
      caption: "Colores vibrantes, sabores únicos 🌈"
    },
    {
      src: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Mousse de chocolate con decoración dorada",
      caption: "Lujo y sofisticación en cada postre ✨"
    },
    {
      src: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Cheesecake con frutas de temporada",
      caption: "Cremosidad perfecta con toques naturales 🍓"
    },
    {
      src: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Cupcakes decorados con flores comestibles",
      caption: "Pequeñas joyas dulces para ocasiones especiales 🧁"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-4">
            Momentos Dulces
          </h2>
          <p className="text-xl text-mocha/70 max-w-2xl mx-auto font-karla">
            Un vistazo a los postres que he creado con amor. 
            Cada uno hecho con intención, cuidado y un toque de magia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Instagram-style overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sage/10 to-clay/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <Instagram className="w-12 h-12 text-sage mx-auto mb-4" />
            <h3 className="text-2xl font-cormorant text-mocha mb-2">
              Síguenos en Instagram
            </h3>
            <p className="text-mocha/70 mb-6 font-karla">
              Descubre más creaciones deliciosas y momentos especiales
            </p>
            <a 
              href="https://www.instagram.com/cucinanostrard/?hl=en" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sage text-cream px-8 py-4 rounded-full text-lg hover:bg-mocha transition-all duration-300 transform hover:scale-105 shadow-lg font-karla"
            >
              <Instagram className="w-5 h-5" />
              @cucinanostrard
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain"
              />
              
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                <p className="text-lg font-karla">{images[selectedImage].caption}</p>
              </div>
              
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-sage transition-colors duration-200"
              >
                <X className="h-8 w-8" />
              </button>
              
              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-sage transition-colors duration-200"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-sage transition-colors duration-200"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;