import { Mail, MessageCircle, Clock, Heart, Coffee, Sparkles } from 'lucide-react';
import ContactPageForm from '../components/ContactPageForm';
import PageTransition from '../components/PageTransition';
import { FadeIn, StaggerChildren } from '../components/animations/AnimationComponents';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me gustaría hacer una consulta sobre un pedido personalizado para mi evento especial. ¿Podrías ayudarme con los detalles?"
    );
    window.open(`https://wa.me/8095550123?text=${message}`, '_blank');
  };

  return (
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cream to-white bg-texture">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-px bg-sage/40"></div>
                <span className="mx-4 text-sm font-karla text-sage/70 uppercase tracking-wider">Pedidos Personalizados</span>
                <div className="w-16 h-px bg-sage/40"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-6 text-shadow-soft">
                Hagamos Algo
                <span className="block text-sage italic">Dulce Juntos</span>
              </h1>
              
              <div className="w-24 h-px bg-sage/40 mx-auto mb-8"></div>
              
              <p className="text-lg text-mocha/70 leading-relaxed font-karla font-light max-w-2xl mx-auto">
                Comparte tu visión y te ayudaré a darle vida. 
                Cada pedido personalizado comienza con una conversación sobre tu momento especial.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-sage/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-dusty-rose/20 rounded-full"></div>
                  <img 
                    src="https://images.pexels.com/photos/3298637/pexels-photo-3298637.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Rosa trabajando en la cocina" 
                    className="relative rounded-2xl shadow-xl"
                  />
                </div>
              </FadeIn>
              
              <FadeIn direction="right">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Coffee className="h-6 w-6 text-sage" />
                    <span className="text-sm font-karla text-sage/70 uppercase tracking-wider">Mi Proceso</span>
                  </div>
                  
                  <h2 className="text-3xl font-cormorant text-mocha">
                    Cada Conversación
                    <span className="block text-sage italic">Es el Primer Ingrediente</span>
                  </h2>
                  
                  <div className="space-y-4 text-mocha/70 font-karla leading-relaxed">
                    <p>
                      Antes de encender el horno, me siento contigo (virtualmente o en persona) 
                      para entender tu historia. ¿Es un aniversario? ¿Una celebración familiar? 
                      ¿Un momento que quieres hacer inolvidable?
                    </p>
                    
                    <p>
                      Cada detalle importa: tus sabores favoritos, alergias, el estilo que 
                      imaginas, incluso el momento del día en que se servirá. Todo esto 
                      se convierte en la receta perfecta para tu ocasión especial.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sage">
                    <Sparkles className="h-5 w-5" />
                    <span className="font-karla italic">
                      "No es solo un postre, es tu historia hecha dulce"
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerChildren>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-cormorant text-mocha mb-4">
                  ¿Cómo Prefieres Conectar?
                </h2>
                <p className="text-mocha/70 font-karla max-w-2xl mx-auto">
                  Elige la forma que te resulte más cómoda para comenzar nuestra conversación
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <MessageCircle className="h-10 w-10 text-sage" />
                  </div>
                  <h3 className="text-xl font-cormorant text-mocha mb-4">WhatsApp Directo</h3>
                  <p className="text-mocha/70 font-karla mb-6 leading-relaxed">
                    La forma más rápida para consultas urgentes, fotos de referencia y conversaciones en tiempo real
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-sage hover:bg-sage/90 text-white px-8 py-3 rounded-full font-karla font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Enviar WhatsApp
                  </button>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Mail className="h-10 w-10 text-sage" />
                  </div>
                  <h3 className="text-xl font-cormorant text-mocha mb-4">Email Detallado</h3>
                  <p className="text-mocha/70 font-karla mb-6 leading-relaxed">
                    Perfecto para compartir detalles específicos, inspiración y planificar con tiempo
                  </p>
                  <a
                    href="mailto:hello@cucinanostrard.com"
                    className="bg-mocha hover:bg-mocha/90 text-white px-8 py-3 rounded-full font-karla font-medium transition-all duration-300 transform hover:scale-105 inline-block"
                  >
                    Enviar Email
                  </a>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Coffee className="h-10 w-10 text-sage" />
                  </div>
                  <h3 className="text-xl font-cormorant text-mocha mb-4">Formulario Completo</h3>
                  <p className="text-mocha/70 font-karla mb-6 leading-relaxed">
                    Usa el formulario abajo para contarme todos los detalles de tu evento especial
                  </p>
                  <button
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-dusty-rose hover:bg-dusty-rose/90 text-white px-8 py-3 rounded-full font-karla font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Llenar Formulario
                  </button>
                </div>
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <ContactPageForm />
            </FadeIn>
          </div>
        </section>

        {/* Working Hours & Additional Info */}
        <section className="py-20 bg-sage/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerChildren>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-cormorant text-mocha mb-4">
                  Información Práctica
                </h2>
                <p className="text-mocha/70 font-karla">
                  Todo lo que necesitas saber sobre tiempos y disponibilidad
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-sage" />
                  </div>
                  <h3 className="text-lg font-cormorant text-mocha mb-4">Horario de Consultas</h3>
                  <div className="space-y-2 text-mocha/70 font-karla">
                    <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                    <p>Sábados: 10:00 AM - 4:00 PM</p>
                    <p>Domingos: Solo por cita previa</p>
                  </div>
                </div>
                
                <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-sage" />
                  </div>
                  <h3 className="text-lg font-cormorant text-mocha mb-4">Tiempo de Respuesta</h3>
                  <div className="space-y-2 text-mocha/70 font-karla">
                    <p>Respondo todos los mensajes en 24 horas</p>
                    <p>Consultas urgentes: WhatsApp</p>
                    <p>Degustaciones disponibles por cita</p>
                  </div>
                </div>
              </div>
            </StaggerChildren>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
