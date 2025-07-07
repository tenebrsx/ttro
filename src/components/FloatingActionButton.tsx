import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Instagram } from "lucide-react";

interface ContactAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  action: () => void;
}

const FloatingActionButton: React.FC = () => {
  const contactActions: ContactAction[] = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "bg-green-500 hover:bg-green-600",
      action: () => {
        const phoneNumber = "18096581245";
        const message =
          "¡Hola! Me interesa conocer más sobre sus postres artesanales. ¿Podrían ayudarme con información sobre pedidos personalizados?";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "phone",
      label: "Llamar",
      icon: <Phone className="w-5 h-5" />,
      color: "bg-blue-500 hover:bg-blue-600",
      action: () => {
        window.location.href = "tel:+18096581245";
      },
    },
    {
      id: "email",
      label: "Email",
      icon: <Mail className="w-5 h-5" />,
      color: "bg-dusty-rose hover:bg-mocha",
      action: () => {
        window.location.href =
          "mailto:hello@cucinanostrard.com?subject=Consulta sobre postres artesanales&body=Hola, me gustaría obtener más información sobre sus servicios de postres personalizados.";
      },
    },
    {
      id: "instagram",
      label: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      color:
        "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      action: () => {
        window.open(
          "https://www.instagram.com/cucinanostrard/?hl=en",
          "_blank",
          "noopener,noreferrer",
        );
      },
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        className="flex flex-col space-y-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {contactActions.map((action, index) => (
          <motion.div
            key={action.id}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              type: "spring",
              stiffness: 300,
              damping: 20,
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
    </div>
  );
};

export default FloatingActionButton;
