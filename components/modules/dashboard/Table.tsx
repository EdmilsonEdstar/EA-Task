import Link from "next/link";

export default function DashboardTable() {
  return (
    <>
<div className="bg-white shadow p-4 rounded-sm">
  <h1 className="text-lg font-semibold mb-3 text-gray-700">Task List</h1>

  <table className="w-full text-sm">
    <thead className="border-b border-gray-50">
      <tr className="bg-gray-50 text-gray-600">
        <th className="text-left py-2">Task</th>
        <th className="text-left py-2">Status</th>
        <th className="text-left py-2">Due Date</th>
      </tr>
    </thead>

    <tbody>
      <tr className="border-b border-gray-100">
        <td className="py-3">Design dashboard</td>
        <td className="py-3"><span className="bg-blue-100 text-blue-400 p-2 rounded-md">In Progress</span></td>
        <td className="py-3">20 Mar</td>
      </tr>

      <tr className="border-b border-gray-100">
        <td className="py-3">Fix login bug</td>
        <td className="py-3"><span className="bg-red-100 text-red-400 p-2 rounded-md">Open</span></td>
        <td className="py-3">22 Mar</td>
      </tr>
    </tbody>
  </table>
</div>
    </>
  );
}
