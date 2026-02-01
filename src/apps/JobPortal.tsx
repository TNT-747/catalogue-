import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, Search, Bookmark, Building2, TrendingUp, Filter } from "lucide-react";
import { useState } from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  logo: string;
  featured?: boolean;
}

const jobs: Job[] = [
  { id: 1, title: "Senior Frontend Developer", company: "TechCorp", location: "San Francisco, CA", type: "Full-time", salary: "$120k - $160k", posted: "2 days ago", logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=200", featured: true },
  { id: 2, title: "UX/UI Designer", company: "CreativeStudio", location: "New York, NY", type: "Full-time", salary: "$90k - $130k", posted: "1 week ago", logo: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=200", featured: true },
  { id: 3, title: "Data Scientist", company: "DataLabs", location: "Remote", type: "Full-time", salary: "$110k - $150k", posted: "3 days ago", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200" },
  { id: 4, title: "Product Manager", company: "InnovateCo", location: "Austin, TX", type: "Full-time", salary: "$100k - $140k", posted: "1 day ago", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200" },
  { id: 5, title: "Backend Engineer", company: "CloudTech", location: "Seattle, WA", type: "Full-time", salary: "$130k - $170k", posted: "5 days ago", logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200" },
  { id: 6, title: "Marketing Specialist", company: "BrandWorks", location: "Los Angeles, CA", type: "Part-time", salary: "$60k - $80k", posted: "1 week ago", logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200" },
];

export default function JobPortal() {
  const [saved, setSaved] = useState<number[]>([]);

  const toggleSaved = (id: number) => {
    setSaved(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                JobPortal
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-gray-700 hover:text-gray-900">Find Jobs</button>
              <button className="text-gray-700 hover:text-gray-900">Companies</button>
              <button className="text-gray-700 hover:text-gray-900">My Applications</button>
              <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Search */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-5xl font-bold mb-4">Find Your Dream Job</h2>
            <p className="text-xl text-indigo-100">
              Discover opportunities from top companies worldwide
            </p>
          </motion.div>

          <div className="bg-white rounded-xl p-6 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition font-semibold">
                Search Jobs
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { label: "Active Jobs", value: "50,000+", icon: Briefcase },
              { label: "Companies", value: "10,000+", icon: Building2 },
              { label: "Successful Hires", value: "100K+", icon: TrendingUp },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="inline-flex p-3 bg-white/20 rounded-full mb-2">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-indigo-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Recommended Jobs</h2>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition">
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition p-6 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="h-16 w-16 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      {job.featured && (
                        <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded mb-2">
                          Featured
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-gray-600 font-semibold">{job.company}</p>
                    </div>
                    <button
                      onClick={() => toggleSaved(job.id)}
                      className={`p-2 rounded-lg transition ${
                        saved.includes(job.id)
                          ? "bg-indigo-100 text-indigo-600"
                          : "hover:bg-gray-100 text-gray-400"
                      }`}
                    >
                      <Bookmark className={`h-5 w-5 ${saved.includes(job.id) ? "fill-indigo-600" : ""}`} />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <span className="text-gray-400">• {job.posted}</span>
                  </div>

                  <div className="flex gap-3">
                    <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition font-semibold">
                      Apply Now
                    </button>
                    <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-semibold text-gray-700">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-semibold">
            Load More Jobs
          </button>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Hire Top Talent?</h3>
          <p className="text-indigo-100 mb-6 text-lg">
            Post your job and reach thousands of qualified candidates
          </p>
          <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition font-semibold">
            Post a Job for Free
          </button>
        </motion.div>
      </div>
    </div>
  );
}
