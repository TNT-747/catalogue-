import { motion } from "framer-motion";
import { Package, TrendingUp, AlertTriangle, ShoppingCart, Plus, Search, Download, Filter } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  stock: number;
  price: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
  lastUpdated: string;
}

const products: Product[] = [
  { id: 1, name: "Wireless Mouse", sku: "WM-001", category: "Electronics", stock: 145, price: 29.99, status: "in-stock", lastUpdated: "2026-01-30" },
  { id: 2, name: "USB-C Cable", sku: "CB-002", category: "Accessories", stock: 12, price: 12.99, status: "low-stock", lastUpdated: "2026-01-29" },
  { id: 3, name: "Laptop Stand", sku: "LS-003", category: "Furniture", stock: 0, price: 49.99, status: "out-of-stock", lastUpdated: "2026-01-28" },
  { id: 4, name: "Keyboard", sku: "KB-004", category: "Electronics", stock: 87, price: 79.99, status: "in-stock", lastUpdated: "2026-01-30" },
  { id: 5, name: "Monitor 24\"", sku: "MN-005", category: "Electronics", stock: 23, price: 249.99, status: "in-stock", lastUpdated: "2026-01-29" },
  { id: 6, name: "Desk Lamp", sku: "DL-006", category: "Furniture", stock: 8, price: 34.99, status: "low-stock", lastUpdated: "2026-01-30" },
];

export default function InventoryManager() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { label: "Total Products", value: products.length, icon: Package, color: "blue" },
    { label: "Low Stock", value: products.filter(p => p.status === "low-stock").length, icon: AlertTriangle, color: "yellow" },
    { label: "Out of Stock", value: products.filter(p => p.status === "out-of-stock").length, icon: ShoppingCart, color: "red" },
    { label: "Total Value", value: `$${products.reduce((sum, p) => sum + (p.stock * p.price), 0).toLocaleString()}`, icon: TrendingUp, color: "green" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-stock": return "bg-green-100 text-green-700";
      case "low-stock": return "bg-yellow-100 text-yellow-700";
      case "out-of-stock": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Package className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Inventory Manager</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                Reports
              </button>
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                Settings
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                <Plus className="h-4 w-4" />
                Add Product
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-${stat.color}-50 rounded-lg`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Accessories">Accessories</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-3 border rounded-lg hover:bg-gray-50 transition">
                <Filter className="h-5 w-5" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-3 border rounded-lg hover:bg-gray-50 transition">
                <Download className="h-5 w-5" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Product</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">SKU</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Stock</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Last Updated</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <motion.tr
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">{product.name}</p>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{product.sku}</td>
                    <td className="px-6 py-4 text-gray-600">{product.category}</td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">{product.stock}</span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">${product.price}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(product.status)}`}>
                        {product.status.replace("-", " ").toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(product.lastUpdated).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-indigo-600 hover:text-indigo-800 font-semibold">
                        Edit
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
