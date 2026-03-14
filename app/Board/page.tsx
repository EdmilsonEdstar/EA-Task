"use client";

import { useState, DragEvent } from "react";
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

  const updateTaskStatus = (id: number, newStatus: Task["status"]) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  const columns = [
    { key: "open", title: "Open Tasks" },
    { key: "progress", title: "In Progress" },
    { key: "completed", title: "Completed" },
  ];

  return (
    <Dashboard>
      <div className="px-6 py-4 animate-modal-pop delay-75">
        <h1 className="text-2xl font-bold mb-6">Board</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-modal-pop delay-0">
          {columns.map((col) => (
            <div
              key={col.key}
              className="bg-gray-100 rounded-lg p-4 min-h-[400px]"
            >
              <h2 className="font-bold mb-4">{col.title}</h2>

              <div className="space-y-3">
                {tasks
                  .filter((task) => task.status === col.key)
                  .map((task) => (
                    <div
                      key={task.id}
                      className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer transition flex flex-col gap-2"
                    >
                      <span>{task.title}</span>

                      <div className="flex gap-2">
                        {task.status === "open" && (
                          <button
                            className="px-2 py-1 bg-blue-500 text-white rounded"
                            onClick={() => updateTaskStatus(task.id, "progress")}
                          >
                            → In Progress
                          </button>
                        )}

                        {task.status === "progress" && (
                          <>
                            <button
                              className="px-2 py-1 bg-gray-300 text-black rounded"
                              onClick={() => updateTaskStatus(task.id, "open")}
                            >
                              ← Open
                            </button>
                            <button
                              className="px-2 py-1 bg-green-500 text-white rounded"
                              onClick={() =>
                                updateTaskStatus(task.id, "completed")
                              }
                            >
                              → Completed
                            </button>
                          </>
                        )}

                        {task.status === "completed" && (
                          <button
                            className="px-2 py-1 bg-yellow-400 text-white rounded"
                            onClick={() =>
                              updateTaskStatus(task.id, "progress")
                            }
                          >
                            ← In Progress
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
