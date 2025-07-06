import { Heart, Clock, Award, Users } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Hecho con Amor",
      description: "Cada postre es elaborado con cuidado genuino y atención al detalle"
    },
    {
      icon: Clock,
      title: "Técnicas Consagradas",
      description: "Métodos tradicionales combinados con creatividad moderna"
    },
    {
      icon: Award,
      title: "Ingredientes de Calidad",
      description: "Solo los mejores ingredientes de temporada y locales llegan a mi cocina"
    },
    {
      icon: Users,
      title: "Toque Personal",
      description: "Cada pedido es personalizado según tu visión y necesidades dietéticas"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-white bg-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-sage/40"></div>
            <span className="mx-4 text-sm font-karla text-sage/70 uppercase tracking-wider">Acerca de</span>
            <div className="w-16 h-px bg-sage/40"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-6 text-shadow-soft">
            El Corazón Detrás de
            <span className="block text-sage italic">Cada Creación Dulce</span>
          </h1>
          
          <div className="w-24 h-px bg-sage/40 mx-auto mb-8"></div>
          
          <p className="text-lg text-mocha/70 leading-relaxed font-karla font-light max-w-2xl mx-auto">
            Bienvenidos a mi mundo de postres artesanales, donde cada creación cuenta una historia 
            y cada bocado está hecho con intención, amor y los mejores ingredientes.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3992204/pexels-photo-3992204.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" 
                alt="Baker in kitchen with natural light" 
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-soft"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sage/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-clay/30 rounded-full blur-lg"></div>
            </div>

            <div>
              <h2 className="text-3xl font-cormorant text-mocha mb-6">
                Hello, I'm the heart behind Cucinanostrard
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

              <div className="mt-10 p-6 bg-cream/40 backdrop-blur-sm rounded-2xl border border-sage/10">
                <blockquote className="text-2xl font-cormorant text-sage italic text-center">
                  "I don't just bake—
                  <span className="block mt-1">I create little edible moments."</span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-cream to-white bg-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-cormorant text-mocha mb-6">
              What Makes Each Creation Special
            </h2>
            <div className="w-24 h-px bg-sage/40 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage/30 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-lg font-cormorant text-mocha mb-3">
                  {value.title}
                </h3>
                <p className="text-mocha/70 font-karla font-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-cormorant text-mocha mb-8">
            My Baking Philosophy
          </h2>
          
          <div className="space-y-8 text-mocha/80 text-lg leading-relaxed font-karla font-light">
            <p>
              I believe that the best desserts come from a place of joy and intention. 
              Each ingredient is chosen with care, each technique honored with patience, 
              and each creation infused with the love that makes food truly nourishing.
            </p>
            
            <p>
              Seasonality guides my menu—fresh berries in summer, warm spices in winter, 
              and the bright citrus of spring. I source locally when possible, supporting 
              our community while ensuring the freshest flavors reach your table.
            </p>
            
            <p>
              Most importantly, I see each order as an opportunity to be part of your story. 
              Whether it's a quiet birthday celebration or an intimate wedding, my desserts 
              are designed to complement your moment, not overshadow it.
            </p>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};

export default About;