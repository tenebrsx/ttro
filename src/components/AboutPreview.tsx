import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cream to-white bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/images/chef-photo.png"
                alt="Chef and team behind Cucinanostrard"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-soft"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-dusty-rose/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-clay/30 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-px bg-dusty-rose/40"></div>
              <span className="mx-4 text-sm font-karla text-dusty-rose/70 uppercase tracking-wider">
                Acerca de
              </span>
              <div className="w-12 h-px bg-dusty-rose/40"></div>
            </div>

            <h2 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-8 text-shadow-soft">
              Hola, soy el corazón
              <span className="block text-dusty-rose italic">
                detrás de Cucinanostrard
              </span>
            </h2>

            <div className="space-y-6 text-mocha/80 text-lg leading-relaxed font-karla font-light">
              <p>
                Lo que comenzó como sesiones de repostería los domingos por la
                tarde se ha convertido en algo hermoso—crear momentos dulces que
                se convierten en recuerdos entrañables.
              </p>

              <p>
                En mi cocina, trabajo con ingredientes de temporada y técnicas
                consagradas, elaborando cada postre a mano. Sin atajos, sin
                sabores artificiales—solo ingredientes puros transformados en
                algo mágico.
              </p>
            </div>

            <div className="mt-10 p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-dusty-rose/10">
              <blockquote className="text-2xl font-cormorant text-dusty-rose italic text-center">
                &ldquo;No solo horneo&mdash;
                <span className="block mt-1">
                  creo pequeños momentos comestibles.&rdquo;
                </span>
              </blockquote>
            </div>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block text-dusty-rose hover:text-mocha transition-colors duration-300 font-karla font-medium"
              >
                Lee mi historia completa →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
