import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, Instagram, Plus, X } from 'lucide-react';

interface ContactAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  action: () => void;
}

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactActions: ContactAction[] = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'bg-green-500 hover:bg-green-600',
      action: () => {
        const phoneNumber = "18095550123";
        const message = "¡Hola! Me interesa conocer más sobre sus postres artesanales. ¿Podrían ayudarme con información sobre pedidos personalizados?";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }
    },
    {
      id: 'phone',
      label: 'Llamar',
      icon: <Phone className="w-5 h-5" />,
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => {
        window.location.href = 'tel:+18095550123';
      }
    },
    {
      id: 'email',
      label: 'Email',
      icon: <Mail className="w-5 h-5" />,
      color: 'bg-dusty-rose hover:bg-mocha',
      action: () => {
        window.location.href = 'mailto:hello@cucinanostrard.com?subject=Consulta sobre postres artesanales&body=Hola, me gustaría obtener más información sobre sus servicios de postres personalizados.';
      }
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      action: () => {
        window.open('https://www.instagram.com/cucinanostrard/?hl=en', '_blank', 'noopener,noreferrer');
      }
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 flex flex-col space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {contactActions.map((action, index) => (
              <motion.div
                key={action.id}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.8 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                {/* Label */}
                <motion.div
                  className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-gentle border border-dusty-rose/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-sm font-medium text-mocha whitespace-nowrap">
                    {action.label}
                  </span>
                </motion.div>

                {/* Action button */}
                <motion.button
                  onClick={action.action}
                  className={`w-12 h-12 ${action.color} text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 relative overflow-hidden`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {action.icon}

                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        onClick={toggleMenu}
        className="w-14 h-14 bg-gradient-to-r from-dusty-rose to-warm-blush text-white rounded-full shadow-xl flex items-center justify-center relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        aria-label="Contactar"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </motion.div>

        {/* Background pulse */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-warm-blush to-dusty-rose rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Notification dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActionButton;
