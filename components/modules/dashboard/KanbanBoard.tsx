// modules/dashboard/KanbanBoard.tsx
"use client";

import React, { useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  status: "open" | "in-progress" | "completed";
};

const initialTasks: Task[] = [
  { id: 1, title: "Design login page", description: "Criar layout responsivo", status: "open" },
  { id: 2, title: "API integration", description: "Conectar backend com frontend", status: "in-progress" },
  { id: 3, title: "Test payment flow", description: "Garantir checkout funcionando", status: "completed" },
  { id: 4, title: "Fix header bug", description: "Corrigir alinhamento do header", status: "open" },
];

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const statuses = [
    { key: "open", label: "Open Tasks" },
    { key: "in-progress", label: "In Progress" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-6">
      {statuses.map((status) => (
        <div key={status.key} className="flex-1 bg-white rounded-lg shadow p-4">
          <h2 className="font-bold text-lg mb-4">{status.label}</h2>

          <div className="space-y-3">
            {tasks
              .filter((task) => task.status === status.key)
              .map((task) => (
                <div
                  key={task.id}
                  className="bg-gray-50 rounded-md p-3 shadow hover:shadow-lg transition cursor-pointer"
                >
                  <h3 className="font-semibold">{task.title}</h3>
                  <p className="text-gray-600 text-sm">{task.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
