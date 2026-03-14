"use client";

import { useState } from "react";
import Dashboard from "@/components/layout/Dashboard";

type Task = {
  id: number;
  title: string;
  status: "open" | "progress" | "completed";
};

const initialTasks: Task[] = [
  { id: 1, title: "Design login UI", status: "open" },
  { id: 2, title: "Create API route", status: "progress" },
  { id: 3, title: "Fix dashboard bug", status: "open" },
  { id: 4, title: "Deploy project", status: "completed" },
];

export default function Board() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  /**
   * Updates the status of a specific task.
   * This allows moving tasks between columns.
   */
  const updateTaskStatus = (id: number, newStatus: Task["status"]) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  const columns: { key: Task["status"]; title: string; color: string }[] = [
    { key: "open", title: "Open Tasks", color: "bg-gray-200" },
    { key: "progress", title: "In Progress", color: "bg-amber-100" },
    { key: "completed", title: "Completed", color: "bg-green-100" },
  ];

  return (
    <Dashboard>
      {/* Main container with pb-24 to prevent the content from being hidden 
          by the mobile bottom navigation bar.
      */}
      <div className="px-6 py-4 pb-24 lg:pb-10 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Kanban Board</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {columns.map((col) => (
            <div
              key={col.key}
              className="bg-gray-50/50 border border-gray-100 rounded-xl p-4 min-h-[500px] flex flex-col"
            >
              <div className="flex items-center justify-between mb-4 px-2">
                <h2 className="font-bold text-gray-700 flex items-center gap-2">
                  {col.title}
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                    {tasks.filter((t) => t.status === col.key).length}
                  </span>
                </h2>
              </div>

              <div className="space-y-3 flex-1">
                {tasks
                  .filter((task) => task.status === col.key)
                  .map((task) => (
                    <div
                      key={task.id}
                      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all animate-modal-pop"
                    >
                      <span className="text-sm font-medium text-gray-700 block mb-3">
                        {task.title}
                      </span>

                      {/* Dynamic action buttons based on status */}
                      <div className="flex gap-2 justify-end pt-2 border-t border-gray-50">
                        {task.status === "open" && (
                          <button
                            className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                            onClick={() => updateTaskStatus(task.id, "progress")}
                          >
                            Start Work →
                          </button>
                        )}

                        {task.status === "progress" && (
                          <>
                            <button
                              className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                              onClick={() => updateTaskStatus(task.id, "open")}
                            >
                              ← Back
                            </button>
                            <button
                              className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-green-50 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
                              onClick={() => updateTaskStatus(task.id, "completed")}
                            >
                              Finish →
                            </button>
                          </>
                        )}

                        {task.status === "completed" && (
                          <button
                            className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition-colors"
                            onClick={() => updateTaskStatus(task.id, "progress")}
                          >
                            ← Reopen
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Dashboard>
  );
}