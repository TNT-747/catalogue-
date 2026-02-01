import { motion } from "framer-motion";
import { Send, Smile, Paperclip, Phone, Video, MoreVertical, Search, Plus } from "lucide-react";
import { useState } from "react";

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  avatar: string;
}

interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
  time: string;
}

const chats: Chat[] = [
  { id: 1, name: "Team Alpha", lastMessage: "Let's discuss the project timeline", time: "2:30 PM", unread: 3, online: true, avatar: "TA" },
  { id: 2, name: "Sarah Johnson", lastMessage: "Thanks for the update!", time: "1:15 PM", unread: 0, online: true, avatar: "SJ" },
  { id: 3, name: "Design Team", lastMessage: "New mockups are ready", time: "12:45 PM", unread: 7, online: false, avatar: "DT" },
  { id: 4, name: "Mike Chen", lastMessage: "See you tomorrow!", time: "11:30 AM", unread: 0, online: false, avatar: "MC" },
  { id: 5, name: "Marketing", lastMessage: "Campaign results look great", time: "Yesterday", unread: 1, online: true, avatar: "MK" },
];

const messages: Message[] = [
  { id: 1, text: "Hey! How's the project coming along?", sender: "other", time: "2:15 PM" },
  { id: 2, text: "It's going well! Almost done with the frontend", sender: "me", time: "2:16 PM" },
  { id: 3, text: "That's great to hear! Need any help?", sender: "other", time: "2:20 PM" },
  { id: 4, text: "Actually yes, could you review the design mockups?", sender: "me", time: "2:22 PM" },
  { id: 5, text: "Sure, I'll take a look this afternoon", sender: "other", time: "2:25 PM" },
  { id: 6, text: "Perfect! Let me know what you think", sender: "me", time: "2:26 PM" },
];

export default function ChatApp() {
  const [activeChat, setActiveChat] = useState(chats[0]);
  const [messageText, setMessageText] = useState("");

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ChatApp
            </h1>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Plus className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <motion.div
              key={chat.id}
              whileHover={{ backgroundColor: "#f3f4f6" }}
              onClick={() => setActiveChat(chat)}
              className={`p-4 cursor-pointer border-b flex items-center gap-3 ${
                activeChat.id === chat.id ? "bg-blue-50 border-l-4 border-l-blue-600" : ""
              }`}
            >
              <div className="relative">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {chat.avatar}
                </div>
                {chat.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="ml-2 px-2 py-0.5 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Chat Header */}
        <div className="bg-white border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {activeChat.avatar}
              </div>
              {activeChat.online && (
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full" />
              )}
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">{activeChat.name}</h2>
              <p className="text-sm text-gray-600">{activeChat.online ? "Active now" : "Offline"}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Phone className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Video className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <MoreVertical className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-md ${message.sender === "me" ? "order-2" : "order-1"}`}>
                <div
                  className={`px-4 py-2 rounded-2xl ${
                    message.sender === "me"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
                <p className={`text-xs text-gray-500 mt-1 ${message.sender === "me" ? "text-right" : "text-left"}`}>
                  {message.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t p-4">
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Smile className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Paperclip className="h-5 w-5 text-gray-600" />
            </button>
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              onKeyPress={(e) => {
                if (e.key === "Enter" && messageText.trim()) {
                  setMessageText("");
                }
              }}
            />
            <button className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar (Optional) */}
      <div className="w-64 bg-white border-l hidden xl:block">
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-4">Chat Details</h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Members</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  JD
                </div>
                <span className="text-sm">John Doe</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  SJ
                </div>
                <span className="text-sm">Sarah Johnson</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">Shared Files</p>
              <div className="space-y-2">
                <div className="p-2 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                  <p className="text-sm font-medium text-gray-900">project-docs.pdf</p>
                  <p className="text-xs text-gray-500">2.4 MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
