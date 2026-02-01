import { motion } from "framer-motion";
import { GripVertical, Plus, MoreVertical, Check, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  status: "todo" | "in-progress" | "review" | "done";
  priority: "low" | "medium" | "high";
  assignee: string;
  dueDate: string;
}

const initialTasks: Task[] = [
  { id: 1, title: "Design homepage mockup", status: "done", priority: "high", assignee: "Sarah", dueDate: "2026-01-28" },
  { id: 2, title: "Implement authentication", status: "in-progress", priority: "high", assignee: "Mike", dueDate: "2026-02-01" },
  { id: 3, title: "Write API documentation", status: "in-progress", priority: "medium", assignee: "John", dueDate: "2026-02-03" },
  { id: 4, title: "Set up CI/CD pipeline", status: "review", priority: "medium", assignee: "Lisa", dueDate: "2026-02-02" },
  { id: 5, title: "User testing session", status: "todo", priority: "low", assignee: "Emma", dueDate: "2026-02-05" },
  { id: 6, title: "Refactor database schema", status: "todo", priority: "high", assignee: "David", dueDate: "2026-02-04" },
];

const columns = [
  { id: "todo", title: "To Do", color: "bg-gray-100" },
  { id: "in-progress", title: "In Progress", color: "bg-blue-100" },
  { id: "review", title: "Review", color: "bg-yellow-100" },
  { id: "done", title: "Done", color: "bg-green-100" },
];

export default function TaskMasters() {
  const [tasks] = useState(initialTasks);

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-700";
      case "medium": return "bg-yellow-100 text-yellow-700";
      case "low": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                TaskMasters
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                Team
              </button>
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                Calendar
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition">
                Invite
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Tasks", value: tasks.length, icon: AlertCircle, color: "indigo" },
            { label: "In Progress", value: getTasksByStatus("in-progress").length, icon: Clock, color: "blue" },
            { label: "In Review", value: getTasksByStatus("review").length, icon: AlertCircle, color: "yellow" },
            { label: "Completed", value: getTasksByStatus("done").length, icon: Check, color: "green" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">{stat.label}</span>
                <stat.icon className={`h-5 w-5 text-${stat.color}-600`} />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((column, columnIndex) => (
            <div key={column.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-gray-900">{column.title}</h3>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-semibold">
                    {getTasksByStatus(column.id).length}
                  </span>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded transition">
                  <Plus className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-3 min-h-[500px]">
                {getTasksByStatus(column.id).map((task, taskIndex) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: columnIndex * 0.1 + taskIndex * 0.05 }}
                    className="bg-white border-2 border-gray-100 rounded-lg p-4 hover:shadow-md hover:border-gray-200 transition cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <GripVertical className="h-5 w-5 text-gray-300 group-hover:text-gray-400 transition" />
                      <button className="p-1 opacity-0 group-hover:opacity-100 hover:bg-gray-100 rounded transition">
                        <MoreVertical className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-3">{task.title}</h4>

                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
                        {task.priority.toUpperCase()}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                          {task.assignee[0]}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      {new Date(task.dueDate).toLocaleDateString()}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Team Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {["Sarah", "Mike", "John", "Lisa", "Emma", "David"].map((member, i) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {member[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{member}</p>
                  <p className="text-xs text-gray-600">{tasks.filter(t => t.assignee === member).length} tasks</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
