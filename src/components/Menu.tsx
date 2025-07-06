import React from 'react';

const Menu = () => {
  const dishes = [
    {
      name: "Wild Mushroom Risotto",
      description: "Creamy Arborio rice with foraged mushrooms, truffle oil, and fresh herbs",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Mains"
    },
    {
      name: "Herb-Crusted Salmon",
      description: "Fresh Atlantic salmon with dill, lemon, and seasonal vegetables",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Mains"
    },
    {
      name: "Burrata & Heirloom Tomatoes",
      description: "Fresh burrata with garden tomatoes, basil, and aged balsamic",
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Starters"
    },
    {
      name: "Lavender Panna Cotta",
      description: "Silky vanilla custard infused with lavender and honey",
      image: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Desserts"
    },
    {
      name: "Braised Short Ribs",
      description: "Slow-cooked beef with red wine, root vegetables, and fresh thyme",
      image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Mains"
    },
    {
      name: "Chocolate Soufflé",
      description: "Warm, airy chocolate soufflé with vanilla bean ice cream",
      image: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Desserts"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair text-stone-800 mb-4">
            The Menu
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            A glimpse into the seasonal, locally-sourced dishes I love to create. 
            Every menu is personalized for your event and dietary preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <div key={index} className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="bg-stone-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <span className="text-sm text-amber-600 font-medium mb-2 block">
                    {dish.category}
                  </span>
                  <h3 className="text-xl font-playfair text-stone-800 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Request Custom Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;