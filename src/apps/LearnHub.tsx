import { motion } from "framer-motion";
import { BookOpen, Award, Clock, Users, Play, Star, CheckCircle, TrendingUp } from "lucide-react";
import { useState } from "react";

interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  students: number;
  rating: number;
  duration: string;
  lessons: number;
  progress?: number;
  image: string;
  price: number;
}

const courses: Course[] = [
  { id: 1, title: "Complete Web Development Bootcamp", instructor: "Dr. Angela Yu", category: "Development", students: 45230, rating: 4.8, duration: "42h", lessons: 156, progress: 65, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600", price: 89.99 },
  { id: 2, title: "UI/UX Design Masterclass", instructor: "Daniel Walter Scott", category: "Design", students: 32450, rating: 4.9, duration: "28h", lessons: 98, progress: 40, image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600", price: 79.99 },
  { id: 3, title: "Machine Learning A-Z", instructor: "Kirill Eremenko", category: "Data Science", students: 58920, rating: 4.7, duration: "44h", lessons: 189, image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600", price: 99.99 },
  { id: 4, title: "Digital Marketing Strategy", instructor: "Rob Percival", category: "Marketing", students: 28340, rating: 4.6, duration: "18h", lessons: 67, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600", price: 69.99 },
  { id: 5, title: "Python for Data Analysis", instructor: "Jose Portilla", category: "Programming", students: 41200, rating: 4.8, duration: "36h", lessons: 142, progress: 25, image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600", price: 84.99 },
  { id: 6, title: "Mobile App Development", instructor: "Angela Yu", category: "Development", students: 35670, rating: 4.7, duration: "40h", lessons: 134, image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600", price: 94.99 },
];

export default function LearnHub() {
  const [activeTab, setActiveTab] = useState<"all" | "my">("all");

  const myCourses = courses.filter(c => c.progress !== undefined);
  const displayCourses = activeTab === "my" ? myCourses : courses;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                LearnHub
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-gray-700 hover:text-gray-900">Explore</button>
              <button className="text-gray-700 hover:text-gray-900">My Learning</button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl font-bold mb-4">Learn Without Limits</h2>
            <p className="text-xl text-blue-100 mb-8">
              Start building your skills with thousands of courses from expert instructors
            </p>
            <div className="flex gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                <Users className="h-8 w-8" />
                <div>
                  <p className="text-2xl font-bold">500K+</p>
                  <p className="text-sm text-blue-100">Students</p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                <BookOpen className="h-8 w-8" />
                <div>
                  <p className="text-2xl font-bold">10K+</p>
                  <p className="text-sm text-blue-100">Courses</p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                <Award className="h-8 w-8" />
                <div>
                  <p className="text-2xl font-bold">50K+</p>
                  <p className="text-sm text-blue-100">Certificates</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === "all"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            All Courses
          </button>
          <button
            onClick={() => setActiveTab("my")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === "my"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            My Courses ({myCourses.length})
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="p-4 bg-white rounded-full">
                    <Play className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                {course.progress !== undefined && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {course.progress}% Complete
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                    {course.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    Bestseller
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{(course.students / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {course.progress !== undefined && (
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>{course.progress}% complete</span>
                      <span>{course.lessons - Math.floor(course.lessons * course.progress / 100)} lessons left</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                    {course.progress !== undefined ? "Continue" : "Enroll"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: Award, title: "Get Certified", desc: "Earn industry-recognized certificates" },
            { icon: Users, title: "Learn from Experts", desc: "Top instructors from around the world" },
            { icon: CheckCircle, title: "Lifetime Access", desc: "Learn at your own pace, anytime" },
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
