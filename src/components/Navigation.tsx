import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("es"); // 'es' for Spanish, 'en' for English
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-gentle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Logo
              size="md"
              className="group-hover:opacity-80 transition-opacity duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-karla transition-colors duration-200 ${
                isActive("/")
                  ? "text-dusty-rose"
                  : "text-mocha hover:text-dusty-rose"
              }`}
            >
              {currentLanguage === "es" ? "Inicio" : "Home"}
            </Link>
            <Link
              to="/about"
              className={`font-karla transition-colors duration-200 ${
                isActive("/about")
                  ? "text-dusty-rose"
                  : "text-mocha hover:text-dusty-rose"
              }`}
            >
              {currentLanguage === "es" ? "Acerca de" : "About"}
            </Link>
            <Link
              to="/menu"
              className={`font-karla transition-colors duration-200 ${
                isActive("/menu")
                  ? "text-dusty-rose"
                  : "text-mocha hover:text-dusty-rose"
              }`}
            >
              {currentLanguage === "es" ? "Menú" : "Menu"}
            </Link>
            <Link
              to="/gallery"
              className={`font-karla transition-colors duration-200 ${
                isActive("/gallery")
                  ? "text-dusty-rose"
                  : "text-mocha hover:text-dusty-rose"
              }`}
            >
              {currentLanguage === "es" ? "Galería" : "Gallery"}
            </Link>
            <Link
              to="/contact"
              className="bg-dusty-rose text-cream px-4 py-2 rounded-full hover:bg-mocha transition-all duration-300 transform hover:scale-105 font-karla"
            >
              {currentLanguage === "es"
                ? "Pedidos Personalizados"
                : "Custom Orders"}
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-1 text-mocha hover:text-dusty-rose transition-colors duration-200 p-1 rounded-full hover:bg-dusty-rose/10"
                aria-label="Change language"
              >
                <Globe className="h-5 w-5" />
                <span className="text-sm font-karla">
                  {currentLanguage === "es" ? "ES" : "EN"}
                </span>
              </button>

              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-sage/10"
                  >
                    <button
                      onClick={() => {
                        setCurrentLanguage("es");
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-karla ${currentLanguage === "es" ? "bg-dusty-rose/10 text-dusty-rose" : "text-mocha hover:bg-dusty-rose/5 hover:text-dusty-rose"}`}
                    >
                      <span className="flex items-center">
                        <span className="mr-2">🇪🇸</span> Español
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setCurrentLanguage("en");
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-karla ${currentLanguage === "en" ? "bg-dusty-rose/10 text-dusty-rose" : "text-mocha hover:bg-dusty-rose/5 hover:text-dusty-rose"}`}
                    >
                      <span className="flex items-center">
                        <span className="mr-2">🇺🇸</span> English
                      </span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-mocha hover:text-dusty-rose transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-cream/95 backdrop-blur-sm border-t border-warm-blush/20 rounded-b-2xl shadow-gentle overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className={`block w-full text-left px-3 py-2 rounded-lg font-karla transition-colors duration-200 ${
                    isActive("/")
                      ? "text-dusty-rose bg-dusty-rose/10"
                      : "text-mocha hover:text-dusty-rose hover:bg-dusty-rose/5"
                  }`}
                >
                  {currentLanguage === "es" ? "Inicio" : "Home"}
                </Link>
                <Link
                  to="/about"
                  className={`block w-full text-left px-3 py-2 rounded-lg font-karla transition-colors duration-200 ${
                    isActive("/about")
                      ? "text-dusty-rose bg-dusty-rose/10"
                      : "text-mocha hover:text-dusty-rose hover:bg-dusty-rose/5"
                  }`}
                >
                  {currentLanguage === "es" ? "Acerca de" : "About"}
                </Link>
                <Link
                  to="/menu"
                  className={`block w-full text-left px-3 py-2 rounded-lg font-karla transition-colors duration-200 ${
                    isActive("/menu")
                      ? "text-dusty-rose bg-dusty-rose/10"
                      : "text-mocha hover:text-dusty-rose hover:bg-dusty-rose/5"
                  }`}
                >
                  {currentLanguage === "es" ? "Menú" : "Menu"}
                </Link>
                <Link
                  to="/gallery"
                  className={`block w-full text-left px-3 py-2 rounded-lg font-karla transition-colors duration-200 ${
                    isActive("/gallery")
                      ? "text-dusty-rose bg-dusty-rose/10"
                      : "text-mocha hover:text-dusty-rose hover:bg-dusty-rose/5"
                  }`}
                >
                  {currentLanguage === "es" ? "Galería" : "Gallery"}
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-left px-3 py-2 bg-dusty-rose text-cream rounded-lg hover:bg-mocha transition-colors duration-200 font-karla mt-2"
                >
                  {currentLanguage === "es"
                    ? "Pedidos Personalizados"
                    : "Custom Orders"}
                </Link>

                {/* Language Selector for Mobile */}
                <div className="mt-4 pt-3 border-t border-warm-blush/20">
                  <p className="px-3 text-xs text-mocha/60 uppercase tracking-wider font-karla mb-2">
                    {currentLanguage === "es" ? "Idioma" : "Language"}
                  </p>
                  <div className="flex space-x-2 px-3">
                    <button
                      onClick={() => setCurrentLanguage("es")}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm ${currentLanguage === "es" ? "bg-dusty-rose/10 text-dusty-rose" : "bg-white/50 text-mocha hover:bg-dusty-rose/5"}`}
                    >
                      <span className="mr-2">🇪🇸</span> Español
                    </button>
                    <button
                      onClick={() => setCurrentLanguage("en")}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm ${currentLanguage === "en" ? "bg-dusty-rose/10 text-dusty-rose" : "bg-white/50 text-mocha hover:bg-dusty-rose/5"}`}
                    >
                      <span className="mr-2">🇺🇸</span> English
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
