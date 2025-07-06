import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, MapPin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-mocha text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Logo size="md" className="filter brightness-0 invert" />
            </div>
            <p className="text-cream/80 leading-relaxed font-karla font-light max-w-md">
              Creando experiencias dulces con amor, 
              ingredientes de temporada y atención personal a cada detalle.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/cucinanostrard/?hl=en" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-sage transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <span className="text-cream/60 font-karla text-sm">@cucinanostrard</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-cormorant mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className="text-cream/80 hover:text-sage transition-colors duration-200 font-karla"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="text-cream/80 hover:text-sage transition-colors duration-200 font-karla"
                >
                  Acerca de
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu"
                  className="text-cream/80 hover:text-sage transition-colors duration-200 font-karla"
                >
                  Menú
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery"
                  className="text-cream/80 hover:text-sage transition-colors duration-200 font-karla"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-cream/80 hover:text-sage transition-colors duration-200 font-karla"
                >
                  Pedidos Personalizados
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-cormorant mb-4">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-sage" />
                <span className="text-cream/80 font-karla text-sm">hello@cucinanostrard.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-sage" />
                <span className="text-cream/80 font-karla text-sm">(809) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-sage" />
                <span className="text-cream/80 font-karla text-sm">Santo Domingo, DR</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/60 font-karla">
            © 2024 Cucinanostrard. Elaborado en Santo Domingo con alma.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;