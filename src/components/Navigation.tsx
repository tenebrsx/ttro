import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../contexts/CartContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Safe cart context usage with fallback
  let itemCount = 0;

  try {
    const cartContext = useCart();
    itemCount = cartContext.itemCount;
  } catch (error) {
    console.warn("Cart context not available:", error);
  }

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
              Inicio
            </Link>
            <Link
              to="/about"
              className={`font-karla transition-colors duration-200 ${
                isActive("/about")
                  ? "text-dusty-rose"
                  : "text-mocha hover:text-dusty-rose"
              }`}
            >
              Acerca de
            </Link>
            <Link
              to="/menu"
              className={`font-karla transition-colors duration-200 ${
                isActive("/menu")
                  ? "text-dusty-rose"
                  : "text-mocha hover:text-dusty-rose"
              }`}
            >
              Menú
            </Link>
            <Link
              to="/gallery"
              className={`font-karla transition-colors duration-200 ${
                isActive("/gallery")
                  ? "text-dusty-rose"
                  : "text-mocha hover:text-dusty-rose"
              }`}
            >
              Galería
            </Link>
            <Link
              to="/contact"
              className="bg-dusty-rose text-cream px-4 py-2 rounded-full hover:bg-mocha transition-all duration-300 transform hover:scale-105 font-karla"
            >
              Pedidos Personalizados
            </Link>

            {/* Desktop Cart Button */}
            <button
              onClick={() => navigate("/cart")}
              className="relative p-2 text-mocha hover:text-dusty-rose transition-colors duration-200 rounded-full hover:bg-dusty-rose/10"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-dusty-rose text-white text-xs font-karla font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </button>
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
                  Inicio
                </Link>
                <Link
                  to="/about"
                  className={`block w-full text-left px-3 py-2 rounded-lg font-karla transition-colors duration-200 ${
                    isActive("/about")
                      ? "text-dusty-rose bg-dusty-rose/10"
                      : "text-mocha hover:text-dusty-rose hover:bg-dusty-rose/5"
                  }`}
                >
                  Acerca de
                </Link>
                <Link
                  to="/menu"
                  className={`block w-full text-left px-3 py-2 rounded-lg font-karla transition-colors duration-200 ${
                    isActive("/menu")
                      ? "text-dusty-rose bg-dusty-rose/10"
                      : "text-mocha hover:text-dusty-rose hover:bg-dusty-rose/5"
                  }`}
                >
                  Menú
                </Link>
                <Link
                  to="/gallery"
                  className={`block w-full text-left px-3 py-2 rounded-lg font-karla transition-colors duration-200 ${
                    isActive("/gallery")
                      ? "text-dusty-rose bg-dusty-rose/10"
                      : "text-mocha hover:text-dusty-rose hover:bg-dusty-rose/5"
                  }`}
                >
                  Galería
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-left px-3 py-2 bg-dusty-rose text-cream rounded-lg hover:bg-mocha transition-colors duration-200 font-karla mt-2"
                >
                  Pedidos Personalizados
                </Link>

                {/* Mobile Cart Button */}
                <button
                  onClick={() => navigate("/cart")}
                  className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-mocha hover:text-dusty-rose hover:bg-dusty-rose/5 transition-colors duration-200 font-karla mt-2 rounded-lg"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Mi Carrito</span>
                  {itemCount > 0 && (
                    <span className="bg-dusty-rose text-white text-xs px-2 py-1 rounded-full">
                      {itemCount}
                    </span>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
