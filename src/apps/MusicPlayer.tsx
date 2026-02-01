import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, Heart, Plus, Music } from "lucide-react";
import { useState } from "react";

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  image: string;
}

const playlist: Song[] = [
  { id: 1, title: "Midnight Dreams", artist: "The Echoes", album: "Night Sessions", duration: "3:45", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400" },
  { id: 2, title: "Electric Pulse", artist: "Neon Lights", album: "Synthwave Era", duration: "4:12", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400" },
  { id: 3, title: "Ocean Waves", artist: "Calm Collective", album: "Serenity", duration: "5:20", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400" },
  { id: 4, title: "Urban Rhythm", artist: "City Beats", album: "Street Sounds", duration: "3:58", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400" },
  { id: 5, title: "Starlight", artist: "Cosmic Journey", album: "Beyond", duration: "4:30", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400" },
];

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(playlist[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState<number[]>([]);
  const [progress] = useState(45);

  const toggleLike = (id: number) => {
    setLiked(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Player */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8"
            >
              {/* Album Art */}
              <div className="relative mb-8">
                <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={currentSong.image}
                    alt={currentSong.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Visualizer bars */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: isPlaying ? [20, Math.random() * 60 + 20, 20] : 20,
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.05,
                      }}
                      className="w-2 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
                    />
                  ))}
                </div>
              </div>

              {/* Song Info */}
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">{currentSong.title}</h2>
                <p className="text-xl text-purple-300">{currentSong.artist}</p>
                <p className="text-sm text-purple-400">{currentSong.album}</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-purple-300 mb-2">
                  <span>1:32</span>
                  <span>{currentSong.duration}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden cursor-pointer">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <button className="p-3 hover:bg-white/10 rounded-full transition">
                  <Shuffle className="h-5 w-5 text-purple-300" />
                </button>
                <button className="p-3 hover:bg-white/10 rounded-full transition">
                  <SkipBack className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:scale-110 transition shadow-2xl"
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8 text-white fill-white" />
                  ) : (
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  )}
                </button>
                <button className="p-3 hover:bg-white/10 rounded-full transition">
                  <SkipForward className="h-6 w-6 text-white" />
                </button>
                <button className="p-3 hover:bg-white/10 rounded-full transition">
                  <Repeat className="h-5 w-5 text-purple-300" />
                </button>
              </div>

              {/* Extra Controls */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => toggleLike(currentSong.id)}
                  className={`p-3 rounded-full transition ${
                    liked.includes(currentSong.id)
                      ? "bg-pink-600 text-white"
                      : "hover:bg-white/10 text-purple-300"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${liked.includes(currentSong.id) ? "fill-white" : ""}`} />
                </button>
                <div className="flex items-center gap-3">
                  <Volume2 className="h-5 w-5 text-purple-300" />
                  <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: "70%" }} />
                  </div>
                </div>
                <button className="p-3 hover:bg-white/10 rounded-full transition">
                  <Plus className="h-5 w-5 text-purple-300" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Playlist */}
          <div className="lg:col-span-1">
            <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <Music className="h-6 w-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Now Playing</h3>
              </div>

              <div className="space-y-3">
                {playlist.map((song, index) => (
                  <motion.div
                    key={song.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setCurrentSong(song)}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${
                      currentSong.id === song.id
                        ? "bg-gradient-to-r from-purple-600 to-pink-600"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <img
                      src={song.image}
                      alt={song.title}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white truncate">{song.title}</p>
                      <p className="text-sm text-purple-300 truncate">{song.artist}</p>
                    </div>
                    <span className="text-sm text-purple-300">{song.duration}</span>
                  </motion.div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-semibold transition">
                View Full Playlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
