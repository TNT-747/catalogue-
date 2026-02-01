import { motion } from "framer-motion";
import { Home, MapPin, Bed, Bath, Square, Heart, Phone, Mail, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured?: boolean;
}

const properties: Property[] = [
  { id: 1, title: "Modern Villa with Pool", location: "Beverly Hills, CA", price: 2850000, type: "Villa", bedrooms: 5, bathrooms: 4, area: 4200, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600", featured: true },
  { id: 2, title: "Downtown Luxury Apartment", location: "Manhattan, NY", price: 1250000, type: "Apartment", bedrooms: 3, bathrooms: 2, area: 1800, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600", featured: true },
  { id: 3, title: "Beachfront Penthouse", location: "Miami Beach, FL", price: 3200000, type: "Penthouse", bedrooms: 4, bathrooms: 3, area: 3500, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600" },
  { id: 4, title: "Suburban Family Home", location: "Austin, TX", price: 680000, type: "House", bedrooms: 4, bathrooms: 3, area: 2800, image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600" },
  { id: 5, title: "Mountain View Cabin", location: "Aspen, CO", price: 1850000, type: "Cabin", bedrooms: 3, bathrooms: 2, area: 2200, image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600" },
  { id: 6, title: "City Loft Studio", location: "Seattle, WA", price: 520000, type: "Loft", bedrooms: 2, bathrooms: 1, area: 1200, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600" },
];

export default function RealEstate() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                RealEstate Pro
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-gray-700 hover:text-gray-900">Buy</button>
              <button className="text-gray-700 hover:text-gray-900">Rent</button>
              <button className="text-gray-700 hover:text-gray-900">Sell</button>
              <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition">
                List Property
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Search */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-5xl font-bold mb-4">Find Your Dream Home</h2>
            <p className="text-xl text-emerald-100">
              Discover the perfect property from our exclusive collection
            </p>
          </motion.div>

          <div className="bg-white rounded-xl p-6 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by location, type..."
                  className="w-full pl-10 pr-4 py-3 border rounded-lg text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <select className="px-4 py-3 border rounded-lg text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition font-semibold flex items-center justify-center gap-2">
                <SlidersHorizontal className="h-5 w-5" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Properties */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Properties</h2>
          <p className="text-gray-600">Hand-picked premium listings just for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                {property.featured && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition ${
                    favorites.includes(property.id)
                      ? "bg-red-600 text-white"
                      : "bg-white/80 text-gray-700 hover:bg-white"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(property.id) ? "fill-white" : ""}`} />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">
                    {property.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <div className="flex items-center gap-1 text-gray-600 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>{property.area} sqft</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-2xl font-bold text-emerald-600">
                      ${(property.price / 1000).toFixed(0)}K
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Agent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Looking for Something Specific?</h3>
              <p className="text-emerald-100 mb-6">
                Our expert agents are here to help you find the perfect property
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 rounded-lg hover:shadow-lg transition font-semibold">
                  <Phone className="h-5 w-5" />
                  Call Us
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition font-semibold">
                  <Mail className="h-5 w-5" />
                  Email
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-3xl font-bold mb-1">500+</p>
                <p className="text-emerald-100">Properties</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-3xl font-bold mb-1">1000+</p>
                <p className="text-emerald-100">Happy Clients</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-3xl font-bold mb-1">50+</p>
                <p className="text-emerald-100">Expert Agents</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-3xl font-bold mb-1">25+</p>
                <p className="text-emerald-100">Cities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
