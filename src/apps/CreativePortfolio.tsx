import { motion } from "framer-motion";
import { Code, Palette, Briefcase, Mail, Linkedin, Twitter, ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  { id: 1, title: "Brand Identity Design", category: "Branding", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600", description: "Complete brand identity for a tech startup" },
  { id: 2, title: "E-commerce Platform", category: "Web Design", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600", description: "Modern online shopping experience" },
  { id: 3, title: "Mobile App UI", category: "UI/UX", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600", description: "Fitness tracking app interface" },
  { id: 4, title: "Logo Collection", category: "Branding", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600", description: "Various logo designs for clients" },
  { id: 5, title: "Dashboard Design", category: "UI/UX", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600", description: "Analytics dashboard interface" },
  { id: 6, title: "Social Media Campaign", category: "Marketing", image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600", description: "Creative social media designs" },
];

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "Web Development", level: 90 },
  { name: "Branding", level: 88 },
  { name: "Illustration", level: 85 },
  { name: "Motion Design", level: 80 },
];

export default function CreativePortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Branding", "Web Design", "UI/UX", "Marketing"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Creative Designer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Crafting beautiful digital experiences through design & code
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition flex items-center gap-2">
                View Work <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition border border-white/20">
                Get in Touch
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 flex gap-6 justify-center"
          >
            <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition border border-white/20">
              <Linkedin className="h-6 w-6 text-white" />
            </a>
            <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition border border-white/20">
              <Twitter className="h-6 w-6 text-white" />
            </a>
            <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition border border-white/20">
              <Mail className="h-6 w-6 text-white" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What I Do</h2>
            <p className="text-gray-400 text-lg">Specialized services to bring your ideas to life</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: "UI/UX Design", desc: "Creating intuitive and beautiful user interfaces" },
              { icon: Code, title: "Web Development", desc: "Building responsive and modern websites" },
              { icon: Briefcase, title: "Branding", desc: "Developing memorable brand identities" },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition group"
              >
                <div className="mb-6 p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl w-fit group-hover:scale-110 transition">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
            <p className="text-gray-400 text-lg mb-8">Selected projects I'm proud of</p>

            <div className="flex gap-4 justify-center flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    activeFilter === cat
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-0 p-6 text-white">
                    <span className="text-sm text-purple-400 mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <button className="flex items-center gap-2 text-white font-semibold">
                      View Project <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          </motion.div>

          <div className="space-y-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-purple-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10"
          >
            <Mail className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Have a project in mind? Let's create something amazing!
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition">
              Start a Conversation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
