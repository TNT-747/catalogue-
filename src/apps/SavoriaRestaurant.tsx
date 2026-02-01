import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Users, Star } from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    category: "Appetizers",
    items: [
      { name: "Truffle Risotto", price: 24, description: "Creamy arborio rice with black truffle", image: "https://images.unsplash.com/photo-1476124369491-b79d0ce5a8f7?w=400" },
      { name: "Seared Scallops", price: 28, description: "Pan-seared scallops with citrus reduction", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400" },
    ]
  },
  {
    category: "Main Course",
    items: [
      { name: "Wagyu Steak", price: 65, description: "Premium A5 wagyu with seasonal vegetables", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
      { name: "Lobster Thermidor", price: 58, description: "Classic French lobster with creamy sauce", image: "https://images.unsplash.com/photo-1625944228798-3f1509681e44?w=400" },
      { name: "Duck Confit", price: 42, description: "Slow-cooked duck leg with orange glaze", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Crème Brûlée", price: 14, description: "Classic vanilla custard with caramelized sugar", image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400" },
      { name: "Chocolate Soufflé", price: 16, description: "Rich chocolate soufflé with vanilla ice cream", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400" },
    ]
  }
];

export default function SavoriaRestaurant() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [showReservation, setShowReservation] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-serif font-bold text-amber-900"
            >
              Savoria
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              <a href="#menu" className="text-gray-700 hover:text-amber-900 transition">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-amber-900 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-900 transition">Contact</a>
              <button
                onClick={() => setShowReservation(true)}
                className="bg-amber-900 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition"
              >
                Reserve Table
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 to-amber-900/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200')" }}
        />
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-8xl font-serif font-bold mb-6">Fine Dining Experience</h2>
            <p className="text-2xl md:text-3xl mb-12 text-amber-100">Where Every Meal Tells a Story</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowReservation(true)}
                className="bg-amber-600 text-white px-10 py-4 text-lg font-semibold rounded-full hover:bg-amber-700 transition shadow-lg"
              >
                Book a Table
              </button>
              <a
                href="#menu"
                className="bg-white text-amber-900 px-10 py-4 text-lg font-semibold rounded-full hover:bg-amber-50 transition shadow-lg"
              >
                View Menu
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Star, title: "Michelin Star", desc: "Award-winning cuisine" },
              { icon: Users, title: "Expert Chefs", desc: "30+ years combined experience" },
              { icon: Clock, title: "Fresh Daily", desc: "Locally sourced ingredients" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <feature.icon className="h-16 w-16 mx-auto mb-4 text-amber-900" />
                <h3 className="text-2xl font-serif font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif font-bold mb-4 text-amber-900">Our Menu</h2>
            <p className="text-xl text-gray-600">Crafted with passion, served with love</p>
          </motion.div>

          <div className="space-y-20">
            {menuItems.map((section) => (
              <div key={section.category}>
                <h3 className="text-3xl font-serif font-bold mb-8 text-center text-amber-900">
                  {section.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-2xl font-serif font-bold">{item.name}</h4>
                          <span className="text-2xl font-bold text-amber-900">${item.price}</span>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      {showReservation && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-md w-full p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-serif font-bold">Reserve Table</h3>
              <button
                onClick={() => setShowReservation(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Time</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                >
                  <option value="">Select time</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Number of Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-900 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition"
              >
                Confirm Reservation
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-amber-900">Visit Us</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-amber-900 mt-1" />
                  <p className="text-gray-700">123 Gourmet Street<br />Fine Dining District, FD 12345</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-amber-900" />
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-amber-900" />
                  <p className="text-gray-700">Tue-Sun: 5:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl h-96">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">Savoria</h3>
          <p className="text-amber-200 mb-6">Experience the art of fine dining</p>
          <p className="text-amber-300">&copy; 2026 Savoria Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
