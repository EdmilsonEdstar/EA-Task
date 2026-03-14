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
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Low");
  };

  const cancelTask = () => {
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
      {/* ADD TASK FORM */}
      <div className="bg-white shadow p-6 rounded-md mx-6 mt-4 animate-modal-pop delay-75">
        <h2 className="text-lg font-semibold mb-4">Add Task</h2>

        <form onSubmit={addTask} className="space-y-4">

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              placeholder="e.g. Refactor Modal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
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
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
              required
            />
          </div>

          {/* Due Date & Priority */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
              <input aria-label="c"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <select aria-label="c"
                value={priority}
                onChange={(e) => setPriority(e.target.value as Task["priority"])}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none bg-white"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium bg-amber-500 text-white hover:bg-amber-600 rounded-md shadow-sm transition"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>

      {/* TASK TABLE */}
      <div className="bg-white shadow p-4 rounded-md mx-6 mt-6 animate-modal-pop delay-150">
        <h1 className="text-lg font-semibold mb-3 text-gray-700">Task List</h1>

        <table className="w-full text-sm">
          <thead className="border-b border-gray-50">
            <tr className="bg-gray-50 text-gray-600">
              <th className="text-left py-2">Title</th>
              <th className="text-left py-2">Description</th>
              <th className="text-left py-2">Priority</th>
              <th className="text-left py-2">Due Date</th>
              <th className="text-left py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-b border-gray-100">
                <td className="py-3">{task.title}</td>
                <td className="py-3">{task.description}</td>
                <td className="py-3">{task.priority}</td>
                <td className="py-3">{task.dueDate}</td>
                <td className="py-3 flex gap-2">
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </Dashboard>
  );
}
