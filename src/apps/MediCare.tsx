import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Phone, Search, Star, User, Heart, Shield } from "lucide-react";
import { useState } from "react";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  experience: number;
  image: string;
  available: string;
}

const doctors: Doctor[] = [
  { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiologist", rating: 4.9, reviews: 234, experience: 15, image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400", available: "Today, 2:00 PM" },
  { id: 2, name: "Dr. Michael Chen", specialty: "Neurologist", rating: 4.8, reviews: 189, experience: 12, image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400", available: "Tomorrow, 10:00 AM" },
  { id: 3, name: "Dr. Emily Davis", specialty: "Pediatrician", rating: 4.9, reviews: 312, experience: 18, image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400", available: "Today, 4:30 PM" },
  { id: 4, name: "Dr. James Wilson", specialty: "Orthopedic", rating: 4.7, reviews: 156, experience: 14, image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400", available: "Tomorrow, 9:00 AM" },
  { id: 5, name: "Dr. Lisa Anderson", specialty: "Dermatologist", rating: 4.8, reviews: 201, experience: 10, image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400", available: "Today, 1:00 PM" },
  { id: 6, name: "Dr. Robert Taylor", specialty: "General Physician", rating: 4.6, reviews: 142, experience: 20, image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400", available: "Tomorrow, 11:30 AM" },
];

export default function MediCare() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                MediCare
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-gray-700 hover:text-gray-900">Find Doctors</button>
              <button className="text-gray-700 hover:text-gray-900">Appointments</button>
              <button className="text-gray-700 hover:text-gray-900">Health Records</button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition">
                Emergency
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl font-bold mb-4">Your Health, Our Priority</h2>
            <p className="text-xl text-blue-100 mb-8">
              Book appointments with top doctors and specialists in your area
            </p>

            {/* Quick Search */}
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search doctors, specialties..."
                    className="w-full pl-10 pr-4 py-3 border rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full pl-10 pr-4 py-3 border rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition font-semibold">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Verified Doctors", value: "500+", icon: Shield, color: "blue" },
            { label: "Happy Patients", value: "50K+", icon: Heart, color: "red" },
            { label: "Appointments", value: "100K+", icon: Calendar, color: "green" },
            { label: "Specialties", value: "25+", icon: Star, color: "yellow" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm text-center"
            >
              <div className={`inline-flex p-3 bg-${stat.color}-100 rounded-full mb-3`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Doctors List */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Specialists</h2>
          <p className="text-gray-600">Find and book appointments with experienced doctors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                        <p className="text-sm text-blue-600 font-semibold">{doctor.specialty}</p>
                      </div>
                      <button
                        onClick={() => toggleFavorite(doctor.id)}
                        className={`p-2 rounded-lg transition ${
                          favorites.includes(doctor.id)
                            ? "bg-red-50 text-red-600"
                            : "hover:bg-gray-100 text-gray-400"
                        }`}
                      >
                        <Heart className={`h-5 w-5 ${favorites.includes(doctor.id) ? "fill-red-600" : ""}`} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{doctor.experience} years experience</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold text-gray-900">{doctor.rating}</span>
                    <span className="text-gray-600">({doctor.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span className="text-green-700 font-semibold">Available: {doctor.available}</span>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition font-semibold flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Book Now
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <User className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Calendar, title: "Easy Appointment", desc: "Book online in minutes" },
              { icon: Phone, title: "24/7 Support", desc: "Always here to help" },
              { icon: Shield, title: "Secure Records", desc: "Your data is safe" },
              { icon: Star, title: "Top Doctors", desc: "Verified professionals" },
            ].map((service, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex p-4 bg-blue-100 rounded-full mb-3">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
