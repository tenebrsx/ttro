import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos los Dulces' },
    { id: 'cakes', name: 'Tortas' },
    { id: 'pastries', name: 'Pastelería' },
    { id: 'cookies', name: 'Galletas' },
    { id: 'seasonal', name: 'Temporada' }
  ];

  const desserts = [
    {
      name: "Torta Earl Grey Lavanda",
      description: "Delicado bizcocho infusionado con bergamota, acariciado con crema de lavanda y terminado con flores comestibles",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "desde $45",
      category: "cakes",
      serves: "6-8 personas"
    },
    {
      name: "Tartaletas de Limón y Tomillo",
      description: "Cascarillas de hojaldre mantecoso rellenas con cuajada de limón brillante y azúcar de tomillo fresco, adornadas con limón confitado",
      image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "desde $30/docena",
      category: "pastries",
      serves: "12 piezas"
    },
    {
      name: "Galletas de Miel y Romero",
      description: "Galletas doradas y desmenuzables con miel de flores silvestres y romero del jardín, espolvoreadas con sal marina",
      image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "desde $25/docena",
      category: "cookies",
      serves: "12 piezas"
    },
    {
      name: "Panna Cotta de Vainilla",
      description: "Natilla sedosa con vainilla de Madagascar, coronada con compota de fruta de temporada y menta",
      image: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "desde $8 c/u",
      category: "seasonal",
      serves: "Individual"
    },
    {
      name: "Trufas de Chocolate y Naranja",
      description: "Ganache de chocolate negro rico con cáscara de naranja confitada, enrollado en polvo de cacao",
      image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "desde $35/docena",
      category: "seasonal",
      serves: "12 piezas"
    },
    {
      name: "Macarons de Almendra y Rosa",
      description: "Delicadas cáscaras rellenas con crema de mantequilla perfumada con rosa y crema de almendra, terminadas con pétalos de rosa secos",
      image: "https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "desde $40/docena",
      category: "pastries",
      serves: "12 piezas"
    },
    {
      name: "Galette Rústica de Manzana",
      description: "Masa libre con manzanas especiadas, mantequilla dorada y un toque de cardamomo",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "desde $35",
      category: "seasonal",
      serves: "4-6 personas"
    },
    {
      name: "Torta de Celebración",
      description: "Torta personalizada de tres capas con tu elección de sabores, crema de mantequilla y decoración elegante",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "desde $85",
      category: "cakes",
      serves: "12-15 personas"
    }
  ];

  const filteredDesserts = activeCategory === 'all' 
    ? desserts 
    : desserts.filter(dessert => dessert.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-white bg-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-sage/40"></div>
            <span className="mx-4 text-sm font-karla text-sage/70 uppercase tracking-wider">Menú</span>
            <div className="w-16 h-px bg-sage/40"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-6 text-shadow-soft">
            Dulces Especiales &
            <span className="block text-sage italic">Creaciones Personalizadas</span>
          </h1>
          
          <div className="w-24 h-px bg-sage/40 mx-auto mb-8"></div>
          
          <p className="text-lg text-mocha/70 leading-relaxed font-karla font-light max-w-2xl mx-auto">
            Cada postre es elaborado con ingredientes de temporada y hecho por encargo. 
            Cada bocado cuenta una historia de atención cuidadosa y amor genuino por el oficio.
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

      {/* Menu Items */}
      <section className="py-20 bg-white bg-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDesserts.map((dessert, index) => (
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
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-sage font-medium font-karla italic">
                        {dessert.price}
                      </span>
                      <span className="text-xs text-mocha/50 font-karla">
                        {dessert.serves}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="py-20 bg-gradient-to-br from-cream to-white bg-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-cormorant text-mocha mb-6">
            Don't See What You're Looking For?
          </h2>
          
          <p className="text-lg text-mocha/70 mb-8 font-karla font-light">
            Every event is unique. Let's create something special just for your celebration.
          </p>
          
          <Link 
            to="/contact"
            className="inline-block bg-sage text-cream px-10 py-4 rounded-full text-lg hover:bg-mocha transition-all duration-500 transform hover:scale-105 shadow-gentle hover:shadow-soft font-karla font-medium"
          >
            Request Custom Creation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Menu;