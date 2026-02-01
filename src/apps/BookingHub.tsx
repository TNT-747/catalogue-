import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users, Star, Heart, Plane, Hotel, Car } from "lucide-react";
import { useState } from "react";

interface Listing {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  type: string;
}

const listings: Listing[] = [
  { id: 1, name: "Oceanview Resort & Spa", location: "Maldives", price: 450, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600", rating: 4.9, reviews: 342, type: "hotel" },
  { id: 2, name: "Mountain Chalet Retreat", location: "Swiss Alps", price: 320, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600", rating: 4.8, reviews: 198, type: "hotel" },
  { id: 3, name: "City Center Luxury Suite", location: "New York, USA", price: 280, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600", rating: 4.7, reviews: 521, type: "hotel" },
  { id: 4, name: "Beach Villa Paradise", location: "Bali, Indonesia", price: 380, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600", rating: 4.9, reviews: 287, type: "hotel" },
  { id: 5, name: "Historic Downtown Hotel", location: "Paris, France", price: 420, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600", rating: 4.6, reviews: 456, type: "hotel" },
  { id: 6, name: "Desert Oasis Resort", location: "Dubai, UAE", price: 550, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600", rating: 4.9, reviews: 623, type: "hotel" },
];

export default function BookingHub() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchType, setSearchType] = useState<"hotel" | "flight" | "car">("hotel");

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">BookingHub</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Hotels</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Flights</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Cars</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Packages</a>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                Sign In
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero & Search */}
      <section className="relative pt-24 pb-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200')", backgroundSize: "cover" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Find Your Perfect Getaway</h2>
            <p className="text-xl mb-12 text-blue-100">Book hotels, flights, and cars at the best prices</p>
          </motion.div>

          {/* Search Tabs */}
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-6 justify-center">
              {[
                { type: "hotel" as const, icon: Hotel, label: "Hotels" },
                { type: "flight" as const, icon: Plane, label: "Flights" },
                { type: "car" as const, icon: Car, label: "Cars" }
              ].map(({ type, icon: Icon, label }) => (
                <button
                  key={type}
                  onClick={() => setSearchType(type)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-semibold transition ${
                    searchType === type
                      ? "bg-white text-blue-600"
                      : "bg-blue-700 text-white hover:bg-blue-600"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Where to?"
                      className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Check-out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                <Search className="h-5 w-5" />
                Search
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h3>
          <p className="text-xl text-gray-600">Handpicked hotels for unforgettable stays</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <button
                  onClick={() => toggleFavorite(listing.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(listing.id) ? "fill-red-500 text-red-500" : "text-gray-700"
                    }`}
                  />
                </button>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-sm">{listing.rating}</span>
                  <span className="text-xs text-gray-600">({listing.reviews})</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{listing.name}</h4>
                    <p className="text-gray-600">{listing.location}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div>
                    <span className="text-3xl font-bold text-blue-600">${listing.price}</span>
                    <span className="text-gray-600 text-sm ml-1">/night</span>
                  </div>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Best Price Guarantee", desc: "Find a lower price? We'll match it", icon: "💰" },
              { title: "24/7 Support", desc: "Our team is here to help anytime", icon: "🛟" },
              { title: "Secure Booking", desc: "Your data is safe with us", icon: "🔒" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Plane className="h-8 w-8" />
                <h3 className="text-2xl font-bold">BookingHub</h3>
              </div>
              <p className="text-gray-400">Your gateway to amazing travel experiences</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-white cursor-pointer">About Us</p>
                <p className="hover:text-white cursor-pointer">Careers</p>
                <p className="hover:text-white cursor-pointer">Press</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-white cursor-pointer">Help Center</p>
                <p className="hover:text-white cursor-pointer">Contact Us</p>
                <p className="hover:text-white cursor-pointer">Privacy</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Partners</h4>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-white cursor-pointer">List Property</p>
                <p className="hover:text-white cursor-pointer">Affiliates</p>
                <p className="hover:text-white cursor-pointer">Developers</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 BookingHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
