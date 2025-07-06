import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "¿Con cuánto tiempo debo hacer mi pedido?",
      answer: "Recomiendo hacer pedidos con al menos 2-3 semanas de anticipación para eventos especiales. Para pedidos más simples, una semana es suficiente. Durante temporadas altas (diciembre, febrero, mayo), sugiero reservar con más tiempo."
    },
    {
      question: "¿Ofrecen opciones sin gluten o veganas?",
      answer: "¡Absolutamente! Trabajo con harinas alternativas y ingredientes veganos para crear versiones deliciosas de mis postres. Solo necesito saberlo al momento del pedido para asegurar la mejor calidad."
    },
    {
      question: "¿Cuál es el área de entrega?",
      answer: "Entrego en todo Santo Domingo y áreas cercanas. Para eventos fuera de la ciudad, puedo coordinar la entrega con un costo adicional dependiendo de la distancia."
    },
    {
      question: "¿Pueden personalizar el diseño de las tortas?",
      answer: "¡Por supuesto! Cada torta es única. Trabajo contigo para crear el diseño perfecto que refleje tu visión y el estilo de tu evento. Puedo recrear inspiraciones o crear algo completamente nuevo."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Acepto efectivo, transferencias bancarias, y pagos móviles. Para pedidos grandes, pido un depósito del 50% para confirmar la fecha, y el resto se paga en la entrega."
    },
    {
      question: "¿Qué pasa si necesito cancelar mi pedido?",
      answer: "Entiendo que los planes pueden cambiar. Si cancelas con más de 48 horas de anticipación, puedo reembolsar el depósito. Para cancelaciones de último minuto, trabajamos caso por caso."
    },
    {
      question: "¿Puedo probar sabores antes de decidir?",
      answer: "Para bodas y eventos grandes, ofrezco degustaciones por una pequeña tarifa que se descuenta del pedido final. Para eventos más pequeños, podemos conversar sobre las opciones disponibles."
    },
    {
      question: "¿Qué incluye el servicio de postres para eventos?",
      answer: "Incluyo la preparación, decoración, empaque especial, y entrega. Para eventos grandes, puedo coordinar el montaje en el lugar. También proporciono utensilios de servir si es necesario."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-sage/40"></div>
            <span className="mx-4 text-sm font-karla text-sage/70 uppercase tracking-wider">
              Preguntas Frecuentes
            </span>
            <div className="w-16 h-px bg-sage/40"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-6 text-shadow-soft">
            Todo lo que Necesitas Saber
          </h2>
          
          <div className="w-24 h-px bg-sage/40 mx-auto mb-6"></div>
          
          <p className="text-lg text-mocha/70 font-karla font-light leading-relaxed">
            Respuestas a las preguntas más comunes sobre pedidos personalizados
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border border-sage/10 overflow-hidden shadow-gentle hover:shadow-soft transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-sage/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-cormorant text-mocha font-medium pr-4">
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-sage flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-sage flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="w-full h-px bg-sage/10 mb-4"></div>
                  <p className="text-mocha/80 font-karla font-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-mocha/70 font-karla font-light italic">
            ¿Tienes otra pregunta? No dudes en contactarme directamente
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
