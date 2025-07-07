import React from "react";
import { Link } from "react-router-dom";
import {
  formatPriceFrom,
  formatPriceFromWithQuantity,
} from "../utils/currency";
// Animation components would be imported here if needed
// import {
//   FadeInUp,
//   StaggerChildren,
//   StaggerChild,
// } from "./animations/AnimationComponents";

const FeaturedDesserts = () => {
  const featuredDesserts = [
    {
      name: "Torta Earl Grey Lavanda",
      description:
        "El aroma de bergamota se encuentra con la delicadeza de la lavanda en un bizcocho que susurra historias de jardines ingleses.",
      image:
        "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: formatPriceFrom(45),
      story: "Perfecta para celebrar momentos íntimos",
      rating: 5,
      preparationTime: "2-3 días",
      tags: ["Elegante", "Especial"],
      popularity: "bestseller" as const,
    },
    {
      name: "Tartaletas de Limón y Tomillo",
      description:
        "Cada bocado es como caminar descalza por el jardín al amanecer: fresco, vibrante y lleno de promesas.",
      image:
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: formatPriceFromWithQuantity(30, "docena"),
      story: "Ideales para reuniones familiares",
      rating: 5,
      preparationTime: "1-2 días",
      tags: ["Fresco", "Natural"],
      popularity: "seasonal" as const,
    },
    {
      name: "Macarons de Almendra y Rosa",
      description:
        "Delicados como pétalos de rosa, crujientes como un primer beso, suaves como un abrazo maternal.",
      image:
        "https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: formatPriceFromWithQuantity(40, "docena"),
      story: "Para esos momentos que merecen ser inolvidables",
      rating: 5,
      preparationTime: "2-3 días",
      tags: ["Delicado", "Romántico"],
      popularity: "trending" as const,
    },
  ];

  return (
    <section className="py-20 bg-creamy-beige bg-texture-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-dusty-rose/40"></div>
            <span className="mx-4 text-sm font-karla text-dusty-rose/70 uppercase tracking-wider">
              Mis Favoritos
            </span>
            <div className="w-16 h-px bg-dusty-rose/40"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-6">
            Dulces que Abrazan
            <span className="block text-dusty-rose italic mt-2">el Alma</span>
          </h2>

          <p className="text-lg text-mocha/70 max-w-2xl mx-auto font-karla font-light leading-relaxed">
            Cada uno de estos postres nació de un momento especial, una emoción,
            una historia que quería compartir contigo a través del sabor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredDesserts.map((dessert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-gentle hover:shadow-warm transition-all duration-300 overflow-hidden"
            >
              <img
                src={dessert.image}
                alt={dessert.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-cormorant text-mocha mb-2">
                  {dessert.name}
                </h3>
                <p className="text-mocha/70 text-sm mb-3">
                  {dessert.description}
                </p>
                <p className="text-dusty-rose font-medium mb-2">
                  {dessert.price}
                </p>
                <p className="text-xs text-mocha/60 italic">{dessert.story}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-mocha/70 mb-8 font-karla font-light italic">
            Cada postre es una carta de amor escrita con azúcar
          </p>

          <Link
            to="/menu"
            className="inline-block bg-dusty-rose text-cream px-10 py-4 rounded-full text-lg font-karla font-medium shadow-lg hover:bg-mocha transition-colors"
          >
            Explorar Todos Mis Dulces
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDesserts;
