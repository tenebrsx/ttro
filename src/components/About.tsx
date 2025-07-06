import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cream to-white bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3992204/pexels-photo-3992204.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" 
              alt="Baker in kitchen with natural light" 
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-soft"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sage/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-clay/30 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-px bg-sage/40"></div>
              <span className="mx-4 text-sm font-karla text-sage/70 uppercase tracking-wider">About</span>
              <div className="w-12 h-px bg-sage/40"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-8 text-shadow-soft">
              Hello, I'm the heart
              <span className="block text-sage italic">behind Cucinanostrard</span>
            </h2>
            
            <div className="space-y-6 text-mocha/80 text-lg leading-relaxed font-karla font-light">
              <p>
                What started as Sunday afternoon baking sessions has grown into something 
                beautiful—creating sweet moments that become cherished memories. I believe 
                every celebration deserves desserts made with intention and love.
              </p>
              
              <p>
                In my kitchen, I work with seasonal ingredients and time-honored techniques, 
                crafting each dessert by hand. No shortcuts, no artificial flavors—just 
                pure ingredients transformed into something magical through patience and care.
              </p>
              
              <p>
                Every order is personal to me. Whether it's a birthday cake that makes 
                someone smile or elegant petit fours for an intimate gathering, I pour 
                my heart into creating desserts that taste like home, elevated.
              </p>
            </div>

            <div className="mt-10 p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-sage/10">
              <blockquote className="text-2xl font-cormorant text-sage italic text-center">
                "I don't just bake—
                <span className="block mt-1">I create little edible moments."</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;