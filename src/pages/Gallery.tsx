import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas las Fotos' },
    { id: 'cakes', name: 'Tortas' },
    { id: 'events', name: 'Eventos' },
    { id: 'process', name: 'Detrás de Escena' }
  ];

  const images = [
    {
      src: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Torta artesanal con estilo natural",
      category: "cakes",
      title: "Torta Earl Grey Lavanda"
    },
    {
      src: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Delicadas tartaletas con hierbas frescas",
      category: "events",
      title: "Tartaletas de Limón y Tomillo para Fiesta de Jardín"
    },
    {
      src: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Galletas rústicas en superficie de madera",
      category: "process",
      title: "Recién Salidas del Horno"
    },
    {
      src: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Elegante panna cotta con frutas del bosque",
      category: "events",
      title: "Postre de Cena de Aniversario"
    },
    {
      src: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Trufas de chocolate artesanales",
      category: "process",
      title: "Trufas Hechas a Mano"
    },
    {
      src: "https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Arreglo de macarons coloridos",
      category: "cakes",
      title: "Torre de Macarons para Boda"
    },
    {
      src: "https://images.pexels.com/photos/3992204/pexels-photo-3992204.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Baker working in natural light",
      category: "process",
      title: "Morning Prep"
    },
    {
      src: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Celebration cake setup",
      category: "events",
      title: "Birthday Celebration"
    },
    {
      src: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Dessert table arrangement",
      category: "events",
      title: "Baby Shower Dessert Table"
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-white bg-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-sage/40"></div>
            <span className="mx-4 text-sm font-karla text-sage/70 uppercase tracking-wider">Gallery</span>
            <div className="w-16 h-px bg-sage/40"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-6 text-shadow-soft">
            Sweet Moments &
            <span className="block text-sage italic">Beautiful Memories</span>
          </h1>
          
          <div className="w-24 h-px bg-sage/40 mx-auto mb-8"></div>
          
          <p className="text-lg text-mocha/70 leading-relaxed font-karla font-light max-w-2xl mx-auto">
            A glimpse into the desserts I've lovingly crafted and the celebrations they've been part of. 
            Each one made with intention, care, and a touch of magic.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-sage/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-karla transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-sage text-cream shadow-gentle'
                    : 'bg-cream/60 text-mocha/70 hover:bg-sage/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white bg-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-gentle hover:shadow-soft transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                onClick={() => openLightbox(index)}
              >
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-cormorant text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-gradient-to-br from-cream to-white bg-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Instagram className="h-8 w-8 text-sage mr-3" />
            <h2 className="text-3xl font-cormorant text-mocha">
              Follow My Sweet Journey
            </h2>
          </div>
          
          <p className="text-lg text-mocha/70 mb-8 font-karla font-light">
            See what I've been baking and get inspired for your next celebration
          </p>
          
          <a 
            href="https://www.instagram.com/cucinanostrard/?hl=en" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sage text-cream px-10 py-4 rounded-full text-lg hover:bg-mocha transition-all duration-500 transform hover:scale-105 shadow-gentle hover:shadow-soft font-karla font-medium"
          >
            @cucinanostrard
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <img 
              src={filteredImages[selectedImage].src} 
              alt={filteredImages[selectedImage].alt}
              className="w-full h-full object-contain"
            />
            
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-sage transition-colors duration-200 bg-black/20 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-sage transition-colors duration-200 bg-black/20 rounded-full p-2"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-sage transition-colors duration-200 bg-black/20 rounded-full p-2"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image title */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white font-cormorant text-xl bg-black/20 rounded-full px-4 py-2 backdrop-blur-sm">
                {filteredImages[selectedImage].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;