import { CheckSquare, Clock, ListTodo, PlusSquare, User} from "lucide-react";
import Link from "next/link";
import DashboardCard from "../modules/dashboard/DashboardCard";
import DashboardTable from "../modules/dashboard/Table";

export default function SideBarRight() {
  return (
    <>
        <div className="h-[100vh] w-[100%] lg:w-[95%] bg-gray-50 space-y-4 overflow-y-auto custom-scrollbar">      
              <div className="bg-white py-2 flex gap-2 justify-between items-center px-6 border-b-2 border-gray-100">
                  <div>
                      <h1 className="text-2xl font-bold lg:hidden"><span className="text-amber-400">EA</span>Task</h1>
                  </div>
                  <div className="flex flex-row">
                      <button type="button" aria-label="User profile" className="flex flex-row justify-center items-center gap-2  text-black px-6 py-3 rounded-sm"><PlusSquare size={18} />Add Task</button>
                      <button type="button" aria-label="User profile" className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-amber-300 rounded-full transition"><User size={18} /></button>         
                  </div>
              </div>
              <div className="flex flex-row justify-between px-6 items-stretch gap-2">
                  <DashboardCard  qty="12" desc="Open Tasks" />
                  <DashboardCard  qty="8" desc="In Progress" />
                  <DashboardCard  qty="25" desc="Complet" />
              </div>

              <div className="justify-center px-6">
                  <DashboardTable />
              </div>
        </div>
    </>
  );
}
