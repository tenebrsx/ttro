import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    style: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guests: '',
      style: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cream via-white to-cream bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-sage/40"></div>
            <span className="mx-4 text-sm font-karla text-sage/70 uppercase tracking-wider">Custom Orders</span>
            <div className="w-16 h-px bg-sage/40"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-cormorant text-mocha mb-6 text-shadow-soft">
            Let's Make Something Sweet Together
          </h2>
          
          <div className="w-24 h-px bg-sage/40 mx-auto mb-6"></div>
          
          <p className="text-lg text-mocha/70 max-w-2xl mx-auto font-karla font-light leading-relaxed">
            Share your vision and I'll help bring it to life. 
            <span className="block mt-2 italic text-mocha/60">
              Every custom order begins with a conversation about your special moment.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-cormorant text-mocha mb-6 text-shadow-soft">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center shadow-gentle">
                    <Mail className="h-6 w-6 text-sage" />
                  </div>
                  <div>
                    <p className="text-mocha font-medium font-karla">Email</p>
                    <p className="text-mocha/70 font-karla">hello@cucinanostrard.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center shadow-gentle">
                    <MessageCircle className="h-6 w-6 text-sage" />
                  </div>
                  <div>
                    <p className="text-mocha font-medium font-karla">WhatsApp</p>
                    <p className="text-mocha/70 font-karla">(809) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center shadow-gentle">
                    <MapPin className="h-6 w-6 text-sage" />
                  </div>
                  <div>
                    <p className="text-mocha font-medium font-karla">Based in</p>
                    <p className="text-mocha/70 font-karla">Santo Domingo, DR</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-sage/10 shadow-gentle">
              <h4 className="text-lg font-cormorant text-mocha mb-4 text-shadow-soft">
                What to Expect
              </h4>
              <ul className="space-y-2 text-mocha/70 font-karla">
                <li>• Personal consultation within 24 hours</li>
                <li>• Custom dessert menu tailored to your event</li>
                <li>• Transparent pricing with no hidden fees</li>
                <li>• Minimum order: $30</li>
                <li>• Custom cakes begin at $60</li>
                <li>• Dessert tables start at $250</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-sage/10 shadow-gentle">
            <h3 className="text-2xl font-cormorant text-mocha mb-6 text-center text-shadow-soft">Send Me Your Vision</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-mocha font-medium mb-2 font-karla">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-sage/20 rounded-xl focus:ring-2 focus:ring-sage/50 focus:border-sage/30 transition-all duration-300 bg-white/80 backdrop-blur-sm font-karla shadow-gentle"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-mocha font-medium mb-2 font-karla">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-sage/20 rounded-xl focus:ring-2 focus:ring-sage/50 focus:border-sage/30 transition-all duration-300 bg-white/80 backdrop-blur-sm font-karla shadow-gentle"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-mocha font-medium mb-2 font-karla">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage/20 rounded-xl focus:ring-2 focus:ring-sage/50 focus:border-sage/30 transition-all duration-300 bg-white/80 backdrop-blur-sm font-karla shadow-gentle"
                  />
                </div>
                
                <div>
                  <label htmlFor="eventType" className="block text-mocha font-medium mb-2 font-karla">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage/20 rounded-xl focus:ring-2 focus:ring-sage/50 focus:border-sage/30 transition-all duration-300 bg-white/80 backdrop-blur-sm font-karla shadow-gentle"
                  >
                    <option value="">Select event type</option>
                    <option value="birthday">Birthday</option>
                    <option value="wedding">Wedding</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="just-because">Just Because</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-mocha font-medium mb-2 font-karla">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage/20 rounded-xl focus:ring-2 focus:ring-sage/50 focus:border-sage/30 transition-all duration-300 bg-white/80 backdrop-blur-sm font-karla shadow-gentle"
                  />
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-mocha font-medium mb-2 font-karla">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage/20 rounded-xl focus:ring-2 focus:ring-sage/50 focus:border-sage/30 transition-all duration-300 bg-white/80 backdrop-blur-sm font-karla shadow-gentle"
                  >
                    <option value="">Select number of guests</option>
                    <option value="2-5">2-5 guests</option>
                    <option value="6-10">6-10 guests</option>
                    <option value="11-20">11-20 guests</option>
                    <option value="21-50">21-50 guests</option>
                    <option value="50+">50+ guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="style" className="block text-mocha font-medium mb-2 font-karla">
                  Style or Theme (Optional)
                </label>
                <input
                  type="text"
                  id="style"
                  name="style"
                  value={formData.style}
                  onChange={handleChange}
                  placeholder="Rustic, elegant, vintage, colorful..."
                  className="w-full px-4 py-3 border border-sage/20 rounded-xl focus:ring-2 focus:ring-sage/50 focus:border-sage/30 transition-all duration-300 bg-white/80 backdrop-blur-sm font-karla shadow-gentle"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-mocha font-medium mb-2 font-karla">
                  Tell Me About Your Vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Share your inspiration, favorite flavors, dietary needs, or any special requests..."
                  className="w-full px-4 py-3 border border-sage/20 rounded-xl focus:ring-2 focus:ring-sage/50 focus:border-sage/30 transition-all duration-300 bg-white/80 backdrop-blur-sm font-karla shadow-gentle resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sage text-cream px-8 py-4 rounded-xl text-lg hover:bg-mocha transition-all duration-500 transform hover:scale-105 shadow-gentle hover:shadow-soft flex items-center justify-center space-x-2 font-karla font-medium"
              >
                <Send className="h-5 w-5" />
                <span>Submit My Vision</span>
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;