import { CheckSquare, Clock, ListTodo, PlusSquare, User} from "lucide-react";
import Link from "next/link";
import DashboardCard from "../modules/dashboard/DashboardCard";
import DashboardTable from "../modules/dashboard/Table";

export default function SideBarRight() {
  return (
    <>
        <div className="lg:h-[100vh] lg:w-[95%] bg-gray-50 space-y-4">      
              <div className="bg-white py-2 flex gap-2 justify-end pr-6 border-b-2 border-gray-100">
                  <button type="button" aria-label="User profile" className="flex flex-row justify-center items-center gap-2  text-black px-6 py-3 rounded-sm"><PlusSquare size={18} />Add Task</button>
                  <button type="button" aria-label="User profile" className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-amber-300 rounded-full transition"><User size={18} /></button>
              </div>
              <div className="flex flex-row justify-between px-6">
                  <DashboardCard icon={<ListTodo size={18} />} qty="12" desc="Open Tasks" />
                  <DashboardCard icon={<Clock size={18} />} qty="8" desc="In Progress" />
                  <DashboardCard icon={<CheckSquare size={18} />} qty="25" desc="Completed" />
              </div>

              <div className="justify-center px-6">
                  <DashboardTable />
              </div>
        </div>
    </>
  );
}
