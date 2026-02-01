import { ShoppingBag, Heart, Search, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: "Silk Evening Gown", price: 1299, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400", category: "Dresses", inStock: true },
  { id: 2, name: "Cashmere Blazer", price: 899, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400", category: "Jackets", inStock: true },
  { id: 3, name: "Designer Handbag", price: 2499, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400", category: "Accessories", inStock: true },
  { id: 4, name: "Luxury Watch", price: 3499, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400", category: "Accessories", inStock: true },
  { id: 5, name: "Leather Boots", price: 599, image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400", category: "Shoes", inStock: false },
  { id: 6, name: "Pearl Necklace", price: 799, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400", category: "Jewelry", inStock: true },
];

const categories = ["All", "Dresses", "Jackets", "Accessories", "Shoes", "Jewelry"];

export default function LuxeFashion() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const toggleCart = (id: number) => {
    setCart(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold tracking-tight">LUXE</h1>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-sm hover:text-gray-600 transition">New Arrivals</a>
                <a href="#" className="text-sm hover:text-gray-600 transition">Collections</a>
                <a href="#" className="text-sm hover:text-gray-600 transition">Sale</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
                <ShoppingBag className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition">
                <User className="h-5 w-5" />
              </button>
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] mt-16 bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Spring Collection 2026</h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">Elegance Redefined</p>
            <button className="bg-white text-black px-8 py-3 text-lg font-semibold hover:bg-gray-100 transition">
              Shop Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 bg-white z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative overflow-hidden bg-gray-100 rounded-lg aspect-[3/4] mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        wishlist.includes(product.id) ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                  </button>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white px-4 py-2 text-sm font-semibold">Out of Stock</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-xl font-bold">${product.price.toLocaleString()}</p>
                  <button
                    onClick={() => toggleCart(product.id)}
                    disabled={!product.inStock}
                    className={`w-full py-3 rounded-lg font-semibold transition ${
                      cart.includes(product.id)
                        ? "bg-gray-900 text-white"
                        : product.inStock
                        ? "bg-gray-100 hover:bg-gray-200"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {cart.includes(product.id) ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">LUXE</h3>
              <p className="text-gray-400">Premium fashion for the modern elite</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-white cursor-pointer">New Arrivals</p>
                <p className="hover:text-white cursor-pointer">Collections</p>
                <p className="hover:text-white cursor-pointer">Sale</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-white cursor-pointer">Contact Us</p>
                <p className="hover:text-white cursor-pointer">Shipping</p>
                <p className="hover:text-white cursor-pointer">Returns</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Get exclusive offers</p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white"
              />
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 LUXE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
