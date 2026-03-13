// components/dashboard/DashboardChart.tsx
"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: "Open", tasks: 12 },
  { name: "In Progress", tasks: 8 },
  { name: "Completed", tasks: 25 },
];

export default function DashboardChart() {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Task Overview</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="tasks" fill="#F59E0B" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
