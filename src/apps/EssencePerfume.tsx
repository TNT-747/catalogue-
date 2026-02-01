import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Sparkles } from "lucide-react";
import { useState } from "react";

interface Perfume {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  notes: string[];
  rating: number;
  intensity: number;
}

const perfumes: Perfume[] = [
  { id: 1, name: "Midnight Rose", brand: "Essence", price: 120, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400", notes: ["Rose", "Vanilla", "Musk"], rating: 4.8, intensity: 3 },
  { id: 2, name: "Ocean Breeze", brand: "Aqua", price: 95, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400", notes: ["Citrus", "Sea Salt", "Amber"], rating: 4.5, intensity: 2 },
  { id: 3, name: "Golden Oud", brand: "Luxe", price: 180, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400", notes: ["Oud", "Sandalwood", "Saffron"], rating: 4.9, intensity: 5 },
  { id: 4, name: "Cherry Blossom", brand: "Flora", price: 85, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400", notes: ["Cherry", "Peony", "White Tea"], rating: 4.6, intensity: 2 },
  { id: 5, name: "Noir Elegance", brand: "Essence", price: 150, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400", notes: ["Bergamot", "Leather", "Tobacco"], rating: 4.7, intensity: 4 },
  { id: 6, name: "Velvet Jasmine", brand: "Bloom", price: 110, image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=400", notes: ["Jasmine", "Ylang-Ylang", "Patchouli"], rating: 4.4, intensity: 3 },
];

const fragranceTypes = ["All", "Floral", "Woody", "Fresh", "Oriental"];

export default function EssencePerfumeShop() {
  const [selectedType, setSelectedType] = useState("All");
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleCart = (id: number) => {
    setCart(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Essence
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition">Shop</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition">Collections</a>
              <button
                onClick={() => setShowQuiz(true)}
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Find Your Scent
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-purple-50 rounded-full transition relative">
                <Heart className="h-6 w-6 text-gray-700" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button className="p-2 hover:bg-purple-50 rounded-full transition relative">
                <ShoppingBag className="h-6 w-6 text-gray-700" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Discover Your Signature Scent
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our curated collection of luxury fragrances crafted for elegance
            </p>
            <button
              onClick={() => setShowQuiz(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition"
            >
              Take Fragrance Quiz
            </button>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex justify-center gap-4 flex-wrap">
          {fragranceTypes.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                selectedType === type
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white hover:bg-purple-50 text-gray-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((perfume, index) => (
            <motion.div
              key={perfume.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <button
                  onClick={() => toggleWishlist(perfume.id)}
                  className="absolute top-4 right-4 p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      wishlist.includes(perfume.id) ? "fill-red-500 text-red-500" : "text-gray-700"
                    }`}
                  />
                </button>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <span className="font-semibold text-sm">{perfume.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-purple-600 font-semibold mb-1">{perfume.brand}</p>
                <h3 className="text-2xl font-bold mb-2">{perfume.name}</h3>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Fragrance Notes:</p>
                  <div className="flex flex-wrap gap-2">
                    {perfume.notes.map(note => (
                      <span key={note} className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Intensity:</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(level => (
                      <div
                        key={level}
                        className={`h-2 flex-1 rounded-full ${
                          level <= perfume.intensity
                            ? "bg-gradient-to-r from-purple-600 to-pink-600"
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold text-purple-600">${perfume.price}</span>
                </div>

                <button
                  onClick={() => toggleCart(perfume.id)}
                  className={`w-full py-3 rounded-xl font-semibold transition ${
                    cart.includes(perfume.id)
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                  }`}
                >
                  {cart.includes(perfume.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fragrance Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Find Your Perfect Scent
              </h3>
              <button
                onClick={() => setShowQuiz(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-4">What's your preferred scent family?</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Floral", "Woody", "Fresh", "Oriental"].map(option => (
                    <button
                      key={option}
                      className="p-4 border-2 border-purple-200 rounded-xl hover:border-purple-600 hover:bg-purple-50 transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">When will you wear it?</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Daily Wear", "Evening Events", "Special Occasions", "All Day"].map(option => (
                    <button
                      key={option}
                      className="p-4 border-2 border-purple-200 rounded-xl hover:border-purple-600 hover:bg-purple-50 transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Preferred intensity?</h4>
                <div className="grid grid-cols-3 gap-3">
                  {["Light", "Moderate", "Strong"].map(option => (
                    <button
                      key={option}
                      className="p-4 border-2 border-purple-200 rounded-xl hover:border-purple-600 hover:bg-purple-50 transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition">
                Get My Recommendations
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8" />
            <h3 className="text-3xl font-bold">Essence</h3>
          </div>
          <p className="text-purple-200 mb-6">Luxury fragrances for the modern you</p>
          <p className="text-purple-300">&copy; 2026 Essence Perfume Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
