import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "The cake was so delicate it felt like a love letter. Every bite was pure poetry.",
      name: "Isabella",
      event: "Birthday Celebration"
    },
    {
      text: "She turned our small gathering into something magical. The desserts were works of art that tasted even better than they looked.",
      name: "Carlos & Maria",
      event: "Anniversary Dinner"
    },
    {
      text: "Working with her felt like having a dear friend create something special just for us. The attention to detail was extraordinary.",
      name: "Sofia",
      event: "Baby Shower"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-4">
            Sweet Words
          </h2>
          <p className="text-xl text-mocha/70 max-w-2xl mx-auto font-karla">
            The greatest joy comes from knowing that my desserts become part 
            of someone's cherished memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream/50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Quote className="h-8 w-8 text-sage mb-4" />
              
              <p className="text-mocha/80 italic mb-6 leading-relaxed font-karla">
                "{testimonial.text}"
              </p>
              
              <div className="text-right">
                <p className="font-cormorant text-mocha text-lg">
                  — {testimonial.name}
                </p>
                <p className="text-sage text-sm font-karla">
                  {testimonial.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;