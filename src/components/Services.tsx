import React from 'react';
import { Users, Calendar, Utensils } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Intimate Dinners",
      description: "Perfect for couples or small groups of 2-10 people. I'll create a personalized dining experience in the comfort of your home.",
      features: ["Custom menu planning", "Fresh ingredient sourcing", "Professional plating", "Cleanup included"]
    },
    {
      icon: Calendar,
      title: "Event Catering",
      description: "Make your special occasions unforgettable—birthdays, anniversaries, micro-weddings, or any celebration that deserves exceptional food.",
      features: ["Event planning support", "Dietary accommodations", "Elegant presentation", "Flexible service styles"]
    },
    {
      icon: Utensils,
      title: "Custom Experiences",
      description: "From cooking classes to wine pairings, I'll design a culinary experience that's uniquely yours.",
      features: ["Personalized themes", "Interactive cooking", "Wine selections", "Recipe sharing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair text-stone-800 mb-4">
            What I Offer
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Every service is tailored to your vision, your space, and your people. 
            Let's create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                <service.icon className="h-8 w-8 text-amber-600" />
              </div>
              
              <h3 className="text-2xl font-playfair text-stone-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-stone-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-stone-600">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-xl font-playfair text-amber-700 italic mb-4">
            "Sofia turned our anniversary into pure magic. Every bite was a love letter."
          </blockquote>
          <p className="text-stone-600">— Maria & James, Anniversary Dinner</p>
        </div>
      </div>
    </section>
  );
};

export default Services;