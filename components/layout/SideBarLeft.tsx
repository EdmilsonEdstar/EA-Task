
import { Home, ListTodo, Settings, Timer } from "lucide-react";
import Link from "next/link";

export default function SideBarLeft() {
  return (
    <>
        <div className="sm:static absolute bottom-0 w-[100%] lg:w-[15%] lg:h-[100vh] px-6 pt-4  bg-white border-r-2 border-gray-100">  
            <div className="mb-10 sm:static hidden lg:block">
                <h1 className="text-2xl font-bold"><span className="text-amber-400">EA</span>Task</h1> 
            </div>    
            <ul className="flex flex-row lg:flex-col justify-between lg:gap-0 space-y-4">
                <li className="flex flex-col lg:flex-row items-center gap-2"><Home size={18} /> Dashboard</li>
                <li className="flex flex-col lg:flex-row items-center gap-2"><ListTodo size={18} /> Tasks</li>
                <li className="flex flex-col lg:flex-row items-center gap-2"><Timer size={18} /> Reports</li>
                <li className="flex flex-col lg:flex-row items-center gap-2"><Settings size={18} /> Settings</li>
            </ul>
        </div>
    </>
  );
}
