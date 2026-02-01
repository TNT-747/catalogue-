import { motion } from "framer-motion";
import { Play, Plus, Star, Search, Bell, User, Tv, Film, TrendingUp } from "lucide-react";
import { useState } from "react";

interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  year: number;
  duration: string;
  image: string;
  featured?: boolean;
}

const movies: Movie[] = [
  { id: 1, title: "Cyber Nexus", genre: "Sci-Fi", rating: 8.9, year: 2025, duration: "2h 15m", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600", featured: true },
  { id: 2, title: "Ocean's Mystery", genre: "Thriller", rating: 8.2, year: 2024, duration: "1h 58m", image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=600", featured: true },
  { id: 3, title: "Urban Dreams", genre: "Drama", rating: 7.8, year: 2025, duration: "2h 5m", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600" },
  { id: 4, title: "Desert Storm", genre: "Action", rating: 8.5, year: 2024, duration: "2h 20m", image: "https://images.unsplash.com/photo-1574267432644-f610f20a7f05?w=600" },
  { id: 5, title: "Love in Paris", genre: "Romance", rating: 7.6, year: 2025, duration: "1h 45m", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600" },
  { id: 6, title: "The Last Quest", genre: "Fantasy", rating: 9.1, year: 2024, duration: "2h 35m", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600" },
];

export default function StreamFlix() {
  const [myList, setMyList] = useState<number[]>([]);

  const toggleMyList = (id: number) => {
    setMyList(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const featuredMovie = movies.find(m => m.featured);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-gradient-to-b from-black to-transparent z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-3xl font-bold text-red-600">STREAMFLIX</h1>
              <div className="hidden md:flex gap-6">
                <button className="text-white hover:text-gray-300 transition">Home</button>
                <button className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <Tv className="h-4 w-4" />
                  TV Shows
                </button>
                <button className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <Film className="h-4 w-4" />
                  Movies
                </button>
                <button className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Trending
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white/10 rounded-lg transition">
                <Search className="h-5 w-5 text-white" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition">
                <Bell className="h-5 w-5 text-white" />
              </button>
              <div className="h-8 w-8 bg-red-600 rounded flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {featuredMovie && (
        <div className="relative h-[80vh]">
          <div className="absolute inset-0">
            <img
              src={featuredMovie.image}
              alt={featuredMovie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-6xl font-bold text-white mb-4">{featuredMovie.title}</h1>
              <div className="flex items-center gap-4 mb-4 text-gray-300">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{featuredMovie.rating}</span>
                </div>
                <span>{featuredMovie.year}</span>
                <span>{featuredMovie.duration}</span>
                <span className="px-3 py-1 border border-gray-500 text-xs">HD</span>
              </div>
              <p className="text-gray-300 text-lg mb-8">
                An epic journey through the digital realm where reality and virtual worlds collide. 
                Experience the future of entertainment in stunning 4K quality.
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded font-semibold hover:bg-gray-200 transition">
                  <Play className="h-5 w-5 fill-black" />
                  Play
                </button>
                <button
                  onClick={() => toggleMyList(featuredMovie.id)}
                  className="flex items-center gap-2 px-8 py-3 bg-gray-500/50 text-white rounded font-semibold hover:bg-gray-500/70 transition"
                >
                  <Plus className="h-5 w-5" />
                  {myList.includes(featuredMovie.id) ? "In My List" : "My List"}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Content Sections */}
      <div className="relative -mt-32 z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Trending Now */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Trending Now</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {movies.slice(0, 6).map((movie, index) => (
                <motion.div
                  key={movie.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative cursor-pointer"
                >
                  <div className="aspect-[2/3] overflow-hidden rounded-lg">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="p-3 bg-white rounded-full hover:scale-110 transition">
                      <Play className="h-6 w-6 text-black fill-black" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition">
                    <h3 className="text-white font-semibold text-sm mb-1">{movie.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      <span>{movie.rating}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Popular Movies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Popular Movies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {movies.map((movie, index) => (
                <motion.div
                  key={movie.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-red-600 transition group"
                >
                  <div className="relative aspect-video">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2">{movie.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{movie.genre}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span>{movie.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
