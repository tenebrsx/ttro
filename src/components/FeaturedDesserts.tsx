import React from 'react';
import { Link } from 'react-router-dom';

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
    <section className="py-20 bg-white bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-sage/40"></div>
            <span className="mx-4 text-sm font-karla text-sage/70 uppercase tracking-wider">Destacados</span>
            <div className="w-16 h-px bg-sage/40"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-6 text-shadow-soft">
            Dulces Especiales
          </h2>
          
          <div className="w-24 h-px bg-sage/40 mx-auto mb-6"></div>
          
          <p className="text-lg text-mocha/70 max-w-2xl mx-auto font-karla font-light leading-relaxed">
            Una muestra de lo que hace especial cada creación—elaborados con ingredientes de temporada 
            y hechos por encargo con amor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredDesserts.map((dessert, index) => (
            <div key={index} className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-cream/60 to-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-gentle hover:shadow-soft transition-all duration-500 border border-sage/10">
                <img 
                  src={dessert.image} 
                  alt={dessert.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6 relative">
                  <div className="absolute top-0 left-6 w-8 h-px bg-sage/30 transform -translate-y-3"></div>
                  
                  <h3 className="text-xl font-cormorant text-mocha mb-3 text-shadow-soft">
                    {dessert.name}
                  </h3>
                  <p className="text-mocha/70 leading-relaxed mb-4 font-karla font-light text-sm">
                    {dessert.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-sage font-medium font-karla italic">
                      {dessert.price}
                    </span>
                    <div className="w-4 h-4 rounded-full bg-sage/20 group-hover:bg-sage/40 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="w-16 h-px bg-sage/40 mx-auto mb-6"></div>
          
          <p className="text-mocha/70 mb-8 font-karla font-light italic">
            Descubre la colección completa de dulces artesanales
          </p>
          
          <Link 
            to="/menu"
            className="inline-block bg-sage text-cream px-10 py-4 rounded-full text-lg hover:bg-mocha transition-all duration-500 transform hover:scale-105 shadow-gentle hover:shadow-soft font-karla font-medium"
          >
            Ver Menú Completo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDesserts;