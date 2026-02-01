import { motion } from "framer-motion";
import { UtensilsCrossed, MapPin, Clock, Star, ShoppingBag, Search, Plus, Minus } from "lucide-react";
import { useState } from "react";

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  minOrder: number;
  image: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const restaurants: Restaurant[] = [
  { id: 1, name: "The Golden Spoon", cuisine: "Italian", rating: 4.8, deliveryTime: "25-35 min", minOrder: 15, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" },
  { id: 2, name: "Sushi Master", cuisine: "Japanese", rating: 4.9, deliveryTime: "30-40 min", minOrder: 20, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600" },
  { id: 3, name: "Spice Route", cuisine: "Indian", rating: 4.7, deliveryTime: "20-30 min", minOrder: 12, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600" },
  { id: 4, name: "Burger House", cuisine: "American", rating: 4.6, deliveryTime: "15-25 min", minOrder: 10, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600" },
  { id: 5, name: "Dragon Wok", cuisine: "Chinese", rating: 4.8, deliveryTime: "25-35 min", minOrder: 15, image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600" },
  { id: 6, name: "Taco Fiesta", cuisine: "Mexican", rating: 4.7, deliveryTime: "20-30 min", minOrder: 12, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600" },
];

const menuItems = [
  { id: 1, name: "Margherita Pizza", price: 12.99, category: "Italian" },
  { id: 2, name: "California Roll", price: 15.99, category: "Japanese" },
  { id: 3, name: "Butter Chicken", price: 14.99, category: "Indian" },
  { id: 4, name: "Classic Burger", price: 9.99, category: "American" },
];

export default function FoodDelivery() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: { id: number; name: string; price: number }) => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ).filter(item => item.quantity > 0));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                <UtensilsCrossed className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                QuickBite
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5" />
                <span>Deliver to: Home</span>
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                <ShoppingBag className="h-6 w-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl font-bold mb-4">Delicious Food, Delivered Fast</h2>
            <p className="text-xl text-orange-100 mb-8">
              Order from your favorite restaurants and get it delivered to your door
            </p>

            <div className="bg-white rounded-xl p-4 shadow-xl">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for restaurants or dishes..."
                    className="w-full pl-10 pr-4 py-3 border rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:shadow-lg transition font-semibold">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Restaurants */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Restaurants</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {restaurants.map((restaurant, index) => (
                  <motion.div
                    key={restaurant.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden cursor-pointer group"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{restaurant.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{restaurant.cuisine}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="font-semibold">{restaurant.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{restaurant.deliveryTime}</span>
                        </div>
                        <span className="text-gray-600">Min ${restaurant.minOrder}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Dishes</h2>
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                      <p className="text-lg font-bold text-orange-600">${item.price}</p>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:shadow-lg transition font-semibold"
                    >
                      Add
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShoppingBag className="h-6 w-6" />
                Your Cart ({cartCount})
              </h3>

              {cart.length === 0 ? (
                <p className="text-gray-600 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between pb-4 border-b">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-semibold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span>$3.99</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t">
                      <span>Total</span>
                      <span>${(cartTotal + 3.99).toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:shadow-lg transition font-semibold">
                    Checkout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
