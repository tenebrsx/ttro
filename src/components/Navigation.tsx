import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cream/95 backdrop-blur-sm shadow-gentle' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Logo size="md" className="group-hover:opacity-80 transition-opacity duration-200" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`font-karla transition-colors duration-200 ${
                isActive('/') ? 'text-sage' : 'text-mocha hover:text-sage'
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/about"
              className={`font-karla transition-colors duration-200 ${
                isActive('/about') ? 'text-sage' : 'text-mocha hover:text-sage'
              }`}
            >
              Acerca de
            </Link>
            <Link 
              to="/menu"
              className={`font-karla transition-colors duration-200 ${
                isActive('/menu') ? 'text-sage' : 'text-mocha hover:text-sage'
              }`}
            >
              Menú
            </Link>
            <Link 
              to="/gallery"
              className={`font-karla transition-colors duration-200 ${
                isActive('/gallery') ? 'text-sage' : 'text-mocha hover:text-sage'
              }`}
            >
              Galería
            </Link>
            <Link 
              to="/contact"
              className="bg-sage text-cream px-4 py-2 rounded-full hover:bg-mocha transition-all duration-300 transform hover:scale-105 font-karla"
            >
              Pedidos Personalizados
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-mocha hover:text-sage transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-cream/95 backdrop-blur-sm border-t border-sage/20 rounded-b-2xl shadow-gentle">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/"
                className={`block w-full text-left px-3 py-2 rounded-lg font-karla transition-colors duration-200 ${
                  isActive('/') ? 'text-sage bg-sage/10' : 'text-mocha hover:text-sage hover:bg-sage/5'
                }`}
              >
                Inicio
              </Link>
              <Link 
                to="/about"
                className={`block w-full text-left px-3 py-2 rounded-lg font-karla transition-colors duration-200 ${
                  isActive('/about') ? 'text-sage bg-sage/10' : 'text-mocha hover:text-sage hover:bg-sage/5'
                }`}
              >
                Acerca de
              </Link>
              <Link 
                to="/menu"
                className={`block w-full text-left px-3 py-2 rounded-lg font-karla transition-colors duration-200 ${
                  isActive('/menu') ? 'text-sage bg-sage/10' : 'text-mocha hover:text-sage hover:bg-sage/5'
                }`}
              >
                Menú
              </Link>
              <Link 
                to="/gallery"
                className={`block w-full text-left px-3 py-2 rounded-lg font-karla transition-colors duration-200 ${
                  isActive('/gallery') ? 'text-sage bg-sage/10' : 'text-mocha hover:text-sage hover:bg-sage/5'
                }`}
              >
                Galería
              </Link>
              <Link 
                to="/contact"
                className="block w-full text-left px-3 py-2 bg-sage text-cream rounded-lg hover:bg-mocha transition-colors duration-200 font-karla mt-2"
              >
                Pedidos Personalizados
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;