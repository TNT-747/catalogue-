import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, MoreHorizontal, Search, Home, Bell } from "lucide-react";
import { useState } from "react";

interface Post {
  id: number;
  author: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
}

const posts: Post[] = [
  { id: 1, author: "Sarah Johnson", avatar: "SJ", content: "Just launched my new project! 🚀 Excited to share it with everyone. Check it out and let me know what you think!", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600", likes: 234, comments: 45, shares: 12, timestamp: "2h ago" },
  { id: 2, author: "Mike Chen", avatar: "MC", content: "Beautiful sunset at the beach today 🌅 Nature never fails to amaze me!", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600", likes: 567, comments: 89, shares: 23, timestamp: "5h ago" },
  { id: 3, author: "Emma Wilson", avatar: "EW", content: "Productivity tip: Take regular breaks! Your brain will thank you 🧠✨", likes: 189, comments: 34, shares: 45, timestamp: "8h ago" },
  { id: 4, author: "David Lee", avatar: "DL", content: "Coffee + Code = Perfection ☕💻", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600", likes: 423, comments: 67, shares: 18, timestamp: "12h ago" },
];

export default function NexusSocial() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedPosts(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nexus
              </h1>
              <div className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-96 bg-gray-100 rounded-full focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <Home className="h-6 w-6 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
                <Bell className="h-6 w-6 text-gray-700" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <MessageCircle className="h-6 w-6 text-gray-700" />
              </button>
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer">
                YN
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  YN
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Your Name</h3>
                  <p className="text-sm text-gray-600">@yourname</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Following</span>
                  <span className="font-bold text-gray-900">342</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Followers</span>
                  <span className="font-bold text-gray-900">1.2K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posts</span>
                  <span className="font-bold text-gray-900">156</span>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition">
                View Profile
              </button>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                  YN
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="What's on your mind?"
                    className="w-full p-4 bg-gray-50 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                    rows={3}
                  />
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-2">
                      <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition text-sm">
                        📷 Photo
                      </button>
                      <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition text-sm">
                        😊 Feeling
                      </button>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Feed */}
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                {/* Post Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {post.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{post.author}</h4>
                        <p className="text-sm text-gray-600">{post.timestamp}</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition">
                      <MoreHorizontal className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                  <p className="text-gray-800 mb-4">{post.content}</p>
                </div>

                {/* Post Image */}
                {post.image && (
                  <div className="relative">
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full max-h-96 object-cover"
                    />
                  </div>
                )}

                {/* Post Actions */}
                <div className="p-6 pt-4">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="text-sm text-gray-600">
                      {post.likes + (likedPosts.includes(post.id) ? 1 : 0)} likes
                    </span>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>{post.comments} comments</span>
                      <span>{post.shares} shares</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-around pt-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                        likedPosts.includes(post.id)
                          ? "text-red-600 bg-red-50"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${likedPosts.includes(post.id) ? "fill-red-600" : ""}`} />
                      <span className="font-semibold">Like</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
                      <MessageCircle className="h-5 w-5" />
                      <span className="font-semibold">Comment</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
                      <Share2 className="h-5 w-5" />
                      <span className="font-semibold">Share</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
