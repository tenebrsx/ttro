import { Mail, MapPin, MessageCircle, Clock, Heart } from 'lucide-react';
import ContactPageForm from '../components/ContactPageForm';

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-white bg-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-sage" />
              </div>
              <h3 className="text-lg font-cormorant text-mocha mb-2">Envíame un Email</h3>
              <p className="text-mocha/70 font-karla">hello@cucinanostrard.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-sage" />
              </div>
              <h3 className="text-lg font-cormorant text-mocha mb-2">WhatsApp</h3>
              <p className="text-mocha/70 font-karla">(809) 555-0123</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-sage" />
              </div>
              <h3 className="text-lg font-cormorant text-mocha mb-2">Ubicada en</h3>
              <p className="text-mocha/70 font-karla">Santo Domingo, RD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactPageForm />
        </div>
      </section>

      {/* Working Hours & Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
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
            
            <div className="text-center">
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
        </div>
      </section>
    </div>
  );
};

export default Contact;
