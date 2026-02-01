import { motion } from "framer-motion";
import { Activity, Target, Calendar, Trophy, Flame, Dumbbell, Play } from "lucide-react";
import { useState } from "react";

const workouts = [
  { id: 1, name: "Full Body Strength", duration: 45, calories: 450, difficulty: "Intermediate", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400" },
  { id: 2, name: "HIIT Cardio Blast", duration: 30, calories: 400, difficulty: "Advanced", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400" },
  { id: 3, name: "Yoga Flow", duration: 60, calories: 200, difficulty: "Beginner", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400" },
  { id: 4, name: "Core & Abs", duration: 20, calories: 150, difficulty: "Beginner", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400" },
];

const stats = [
  { label: "Current Streak", value: "12 days", icon: Flame, color: "text-orange-600", bg: "bg-orange-100" },
  { label: "Calories Burned", value: "2,450", icon: Activity, color: "text-red-600", bg: "bg-red-100" },
  { label: "Workouts Done", value: "28", icon: Dumbbell, color: "text-blue-600", bg: "bg-blue-100" },
  { label: "Goal Progress", value: "75%", icon: Target, color: "text-green-600", bg: "bg-green-100" },
];

export default function FitZone() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredWorkouts = selectedDifficulty === "All" 
    ? workouts 
    : workouts.filter(w => w.difficulty === selectedDifficulty);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                FitZone
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                Workouts
              </button>
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                Progress
              </button>
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                Nutrition
              </button>
              <div className="h-10 w-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Transform Your Body
            </h2>
            <p className="text-xl text-gray-600">Track workouts, build strength, achieve goals</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <div className={`${stat.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Progress Chart */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Weekly Progress</h3>
              <Calendar className="h-6 w-6 text-gray-400" />
            </div>
            <div className="h-64 flex items-end justify-around gap-2">
              {[65, 85, 45, 92, 78, 88, 95].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="w-full bg-gradient-to-t from-indigo-600 to-purple-600 rounded-t-lg hover:from-indigo-700 hover:to-purple-700 transition cursor-pointer"
                  />
                  <span className="text-xs text-gray-600 mt-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workouts */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900">Featured Workouts</h3>
          <div className="flex gap-2">
            {["All", "Beginner", "Intermediate", "Advanced"].map(level => (
              <button
                key={level}
                onClick={() => setSelectedDifficulty(level)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedDifficulty === level
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredWorkouts.map((workout, index) => (
            <motion.div
              key={workout.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    workout.difficulty === "Beginner" ? "bg-green-500" :
                    workout.difficulty === "Intermediate" ? "bg-yellow-500" :
                    "bg-red-500"
                  } text-white`}>
                    {workout.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{workout.name}</h4>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-900">{workout.duration} min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Calories</span>
                    <span className="font-semibold text-gray-900">{workout.calories} kcal</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
                  <Play className="h-5 w-5" />
                  Start Workout
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-900">Recent Achievements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "7-Day Streak", desc: "Workout 7 days in a row", icon: "🔥" },
              { title: "10K Calories", desc: "Burned 10,000 calories", icon: "⚡" },
              { title: "Early Bird", desc: "5 morning workouts", icon: "🌅" },
            ].map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-200"
              >
                <div className="text-4xl">{achievement.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Dumbbell className="h-8 w-8" />
            <h3 className="text-3xl font-bold">FitZone</h3>
          </div>
          <p className="text-indigo-200 mb-6">Your fitness journey starts here</p>
          <p className="text-indigo-300">&copy; 2026 FitZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
