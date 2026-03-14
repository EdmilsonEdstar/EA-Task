"use client";

import { useState, FormEvent } from "react";
import Dashboard from "@/components/layout/Dashboard";

type Task = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
};

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("Low");

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !description || !dueDate) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      dueDate,
      priority,
    };

    setTasks((prev) => [...prev, newTask]);
    // Reset form
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Low");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Dashboard>
      {/* Main container with bottom padding (pb-24) to avoid overlap with mobile sidebar.
          The space-y-6 ensures consistent vertical gap between form and table.
      */}
      <div className="flex flex-col space-y-6 pb-24 lg:pb-10">
        
        {/* ADD TASK FORM */}
        <div className="bg-white shadow-sm border border-gray-100 p-6 rounded-xl mx-6 mt-4 animate-modal-pop">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Create New Task</h2>

          <form onSubmit={addTask} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                placeholder="e.g. Refactor Modal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none transition"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                placeholder="What needs to be done?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none transition"
                required
              />
            </div>

            {/* Due Date & Priority */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                <input aria-label="e"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                <select  aria-label="e"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as Task["priority"])}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none bg-white transition"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 text-sm font-bold bg-amber-500 text-white hover:bg-amber-600 rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-all"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>

        {/* TASK TABLE SECTION */}
        <div className="bg-white shadow-sm border border-gray-100 rounded-xl mx-6 overflow-hidden animate-modal-pop delay-150">
          <div className="p-4 border-b border-gray-50">
            <h1 className="text-lg font-bold text-gray-800">Task List</h1>
          </div>

          {/* Wrapper for horizontal scroll on mobile */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50/50 text-gray-600 border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-semibold">Title</th>
                  <th className="text-left px-6 py-4 font-semibold">Description</th>
                  <th className="text-left px-6 py-4 font-semibold">Priority</th>
                  <th className="text-left px-6 py-4 font-semibold">Due Date</th>
                  <th className="text-right px-6 py-4 font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {tasks.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-10 text-gray-400">
                      No tasks added yet. Start by creating one above!
                    </td>
                  </tr>
                ) : (
                  tasks.map((task) => (
                    <tr key={task.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{task.title}</td>
                      <td className="px-6 py-4 text-gray-600 max-w-xs truncate">{task.description}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                          task.priority === 'High' ? 'bg-red-100 text-red-600' : 
                          task.priority === 'Medium' ? 'bg-amber-100 text-amber-600' : 
                          'bg-green-100 text-green-600'
                        }`}>
                          {task.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{task.dueDate}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="text-red-500 hover:text-red-700 font-semibold transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}