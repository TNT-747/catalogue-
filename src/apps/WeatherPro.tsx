import { motion } from "framer-motion";
import { Cloud, CloudRain, Wind, Droplets, Sun, Eye, Gauge, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

interface Forecast {
  day: string;
  high: number;
  low: number;
  condition: string;
  icon: typeof Sun;
}

const weekForecast: Forecast[] = [
  { day: "Mon", high: 75, low: 62, condition: "Sunny", icon: Sun },
  { day: "Tue", high: 72, low: 60, condition: "Partly Cloudy", icon: Cloud },
  { day: "Wed", high: 68, low: 58, condition: "Rainy", icon: CloudRain },
  { day: "Thu", high: 65, low: 55, condition: "Cloudy", icon: Cloud },
  { day: "Fri", high: 70, low: 59, condition: "Sunny", icon: Sun },
  { day: "Sat", high: 73, low: 61, condition: "Sunny", icon: Sun },
  { day: "Sun", high: 71, low: 60, condition: "Partly Cloudy", icon: Cloud },
];

const hourlyData = [
  { time: "12 AM", temp: 62, icon: Cloud },
  { time: "3 AM", temp: 60, icon: Cloud },
  { time: "6 AM", temp: 59, icon: CloudRain },
  { time: "9 AM", temp: 64, icon: Cloud },
  { time: "12 PM", temp: 72, icon: Sun },
  { time: "3 PM", temp: 75, icon: Sun },
  { time: "6 PM", temp: 70, icon: Cloud },
  { time: "9 PM", temp: 65, icon: Cloud },
];

export default function WeatherPro() {
  const [unit, setUnit] = useState<"C" | "F">("F");

  const currentTemp = 72;
  const feelsLike = 68;
  const humidity = 65;
  const windSpeed = 12;
  const visibility = 10;
  const pressure = 1013;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600">
      {/* Header */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">WeatherPro</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </button>
              <button
                onClick={() => setUnit(unit === "F" ? "C" : "F")}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition font-semibold"
              >
                °{unit}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Current Weather */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-8 text-white"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-white/80 mb-2">
                <Calendar className="h-4 w-4" />
                <span>Monday, Jan 31, 2026</span>
              </div>
              <h2 className="text-6xl font-bold mb-2">{currentTemp}°{unit}</h2>
              <p className="text-2xl text-white/90">Partly Cloudy</p>
              <p className="text-white/70">Feels like {feelsLike}°{unit}</p>
            </div>
            <div className="text-center">
              <Sun className="h-32 w-32 text-yellow-300 drop-shadow-lg" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 text-white/70 mb-2">
                <Wind className="h-5 w-5" />
                <span className="text-sm">Wind Speed</span>
              </div>
              <p className="text-2xl font-bold">{windSpeed} mph</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 text-white/70 mb-2">
                <Droplets className="h-5 w-5" />
                <span className="text-sm">Humidity</span>
              </div>
              <p className="text-2xl font-bold">{humidity}%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 text-white/70 mb-2">
                <Eye className="h-5 w-5" />
                <span className="text-sm">Visibility</span>
              </div>
              <p className="text-2xl font-bold">{visibility} mi</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 text-white/70 mb-2">
                <Gauge className="h-5 w-5" />
                <span className="text-sm">Pressure</span>
              </div>
              <p className="text-2xl font-bold">{pressure} mb</p>
            </div>
          </div>
        </motion.div>

        {/* Hourly Forecast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Hourly Forecast</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {hourlyData.map((hour, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-white/70 text-sm mb-2">{hour.time}</p>
                <hour.icon className="h-8 w-8 text-white mx-auto mb-2" />
                <p className="text-xl font-bold text-white">{hour.temp}°</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 7-Day Forecast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">7-Day Forecast</h3>
          <div className="space-y-4">
            {weekForecast.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between hover:bg-white/20 transition"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-white font-semibold w-12">{day.day}</span>
                  <day.icon className="h-8 w-8 text-white" />
                  <span className="text-white/80">{day.condition}</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-white/70">Low</span>
                    <span className="text-white font-semibold">{day.low}°</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/70">High</span>
                    <span className="text-white font-bold text-xl">{day.high}°</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
