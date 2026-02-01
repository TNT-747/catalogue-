import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity, Calendar, Download } from "lucide-react";
import { useState } from "react";

interface StatCard {
  title: string;
  value: string;
  change: number;
  icon: any;
}

const stats: StatCard[] = [
  { title: "Total Revenue", value: "$54,239", change: 12.5, icon: DollarSign },
  { title: "Active Users", value: "8,492", change: 8.2, icon: Users },
  { title: "Total Orders", value: "1,284", change: -3.1, icon: ShoppingCart },
  { title: "Conversion Rate", value: "3.24%", change: 5.7, icon: Activity },
];

const recentOrders = [
  { id: "#3421", customer: "John Doe", amount: "$234.50", status: "Completed", date: "2026-01-30" },
  { id: "#3420", customer: "Jane Smith", amount: "$567.00", status: "Processing", date: "2026-01-30" },
  { id: "#3419", customer: "Bob Johnson", amount: "$129.99", status: "Completed", date: "2026-01-29" },
  { id: "#3418", customer: "Alice Brown", amount: "$445.20", status: "Pending", date: "2026-01-29" },
  { id: "#3417", customer: "Charlie Wilson", amount: "$892.00", status: "Completed", date: "2026-01-28" },
];

const topProducts = [
  { name: "Wireless Headphones", sales: 1234, revenue: "$123,400", trend: 15 },
  { name: "Smart Watch Pro", sales: 987, revenue: "$98,700", trend: 8 },
  { name: "Laptop Stand", sales: 756, revenue: "$37,800", trend: -2 },
  { name: "USB-C Hub", sales: 654, revenue: "$32,700", trend: 12 },
];

export default function AdminDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav className="space-y-2">
          {["Dashboard", "Analytics", "Orders", "Products", "Customers", "Settings"].map((item) => (
            <button
              key={item}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                item === "Dashboard"
                  ? "bg-blue-600"
                  : "hover:bg-gray-800"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
            <p className="text-gray-600 mt-1">Welcome back, Admin</p>
          </div>
          <div className="flex gap-3">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold ${
                  stat.change >= 0 ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  {Math.abs(stat.change)}%
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Revenue Overview</h3>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <div className="h-64 flex items-end justify-around gap-2">
              {[65, 85, 45, 92, 78, 88, 95].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg hover:from-blue-700 hover:to-blue-500 transition cursor-pointer"
                  title={`$${(height * 100).toLocaleString()}`}
                />
              ))}
            </div>
            <div className="flex justify-around mt-4 text-sm text-gray-600">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
                <span key={day}>{day}</span>
              ))}
            </div>
          </div>

          {/* Sales by Category */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Sales by Category</h3>
            <div className="space-y-4">
              {[
                { name: "Electronics", percentage: 45, color: "bg-blue-600" },
                { name: "Clothing", percentage: 30, color: "bg-purple-600" },
                { name: "Home & Garden", percentage: 15, color: "bg-green-600" },
                { name: "Others", percentage: 10, color: "bg-gray-600" },
              ].map((category, i) => (
                <div key={category.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    <span className="text-sm font-semibold text-gray-900">{category.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${category.percentage}%` }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className={`h-2 rounded-full ${category.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">Recent Orders</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{order.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          order.status === "Completed" ? "bg-green-100 text-green-800" :
                          order.status === "Processing" ? "bg-blue-100 text-blue-800" :
                          "bg-yellow-100 text-yellow-800"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">Top Products</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topProducts.map((product, i) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-600">{product.sales} sales</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{product.revenue}</p>
                      <p className={`text-sm font-semibold ${
                        product.trend >= 0 ? "text-green-600" : "text-red-600"
                      }`}>
                        {product.trend >= 0 ? "+" : ""}{product.trend}%
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
