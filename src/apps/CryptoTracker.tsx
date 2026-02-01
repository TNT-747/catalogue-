import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Search, Star, BarChart3, Wallet, Bell, Settings } from "lucide-react";
import { useState } from "react";

interface Crypto {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: string;
  volume: string;
  chart: number[];
}

const cryptocurrencies: Crypto[] = [
  { id: 1, name: "Bitcoin", symbol: "BTC", price: 52840.50, change24h: 2.5, marketCap: "$1.03T", volume: "$45.2B", chart: [45, 52, 48, 58, 62, 55, 60, 58] },
  { id: 2, name: "Ethereum", symbol: "ETH", price: 3245.80, change24h: -1.2, marketCap: "$389.5B", volume: "$23.8B", chart: [35, 38, 42, 40, 45, 43, 41, 39] },
  { id: 3, name: "Binance Coin", symbol: "BNB", price: 425.30, change24h: 3.8, marketCap: "$65.2B", volume: "$2.1B", chart: [40, 42, 45, 48, 50, 52, 48, 51] },
  { id: 4, name: "Cardano", symbol: "ADA", price: 1.25, change24h: 5.4, marketCap: "$42.1B", volume: "$1.8B", chart: [30, 35, 40, 38, 42, 45, 50, 52] },
  { id: 5, name: "Solana", symbol: "SOL", price: 128.45, change24h: -2.8, marketCap: "$38.7B", volume: "$3.4B", chart: [50, 48, 45, 42, 40, 38, 35, 32] },
  { id: 6, name: "Ripple", symbol: "XRP", price: 0.68, change24h: 1.9, marketCap: "$35.2B", volume: "$2.2B", chart: [35, 40, 42, 45, 43, 46, 44, 45] },
];

export default function CryptoTracker() {
  const [watchlist, setWatchlist] = useState<number[]>([1, 2]);

  const toggleWatchlist = (id: number) => {
    setWatchlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const portfolioValue = 45678.90;
  const portfolioChange = 2345.67;
  const portfolioChangePercent = 5.42;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <nav className="bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">CryptoTracker</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white/10 rounded-lg transition">
                <Bell className="h-5 w-5 text-gray-300" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition">
                <Settings className="h-5 w-5 text-gray-300" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition">
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white col-span-2"
          >
            <p className="text-purple-100 mb-2">Total Portfolio Value</p>
            <h2 className="text-4xl font-bold mb-4">${portfolioValue.toLocaleString()}</h2>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <span className="text-lg font-semibold">+${portfolioChange.toLocaleString()}</span>
              <span className="text-purple-100">({portfolioChangePercent}%)</span>
              <span className="text-sm text-purple-100">24h</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-5 w-5 text-yellow-400" />
              <p className="text-gray-300 font-semibold">Watchlist</p>
            </div>
            <p className="text-3xl font-bold text-white">{watchlist.length}</p>
            <p className="text-sm text-gray-400 mt-2">Tracked assets</p>
          </motion.div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search cryptocurrencies..."
              className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Crypto List */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">Rank</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">Price</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">24h Change</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">Market Cap</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">Volume</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">Chart</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">Watch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {cryptocurrencies.map((crypto, index) => (
                  <motion.tr
                    key={crypto.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-4 text-gray-400 font-semibold">{index + 1}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                          {crypto.symbol[0]}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{crypto.name}</p>
                          <p className="text-sm text-gray-400">{crypto.symbol}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-white">
                      ${crypto.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className={`flex items-center gap-1 ${crypto.change24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {crypto.change24h > 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                        <span className="font-semibold">{Math.abs(crypto.change24h)}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{crypto.marketCap}</td>
                    <td className="px-6 py-4 text-gray-300">{crypto.volume}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1 items-end h-8">
                        {crypto.chart.map((val, i) => (
                          <div
                            key={i}
                            className={`w-2 rounded-t ${crypto.change24h > 0 ? 'bg-green-400' : 'bg-red-400'}`}
                            style={{ height: `${val}%` }}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleWatchlist(crypto.id)}
                        className={`p-2 rounded-lg transition ${
                          watchlist.includes(crypto.id)
                            ? 'bg-yellow-400/20 text-yellow-400'
                            : 'hover:bg-white/10 text-gray-400'
                        }`}
                      >
                        <Star className={`h-5 w-5 ${watchlist.includes(crypto.id) ? 'fill-yellow-400' : ''}`} />
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
