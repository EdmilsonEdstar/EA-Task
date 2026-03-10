
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
                <li>
                    <Link href="" className="flex flex-col lg:flex-row items-center gap-2 hover:text-amber-400 transition-all">
                        <Home size={18} /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="" className="flex flex-col lg:flex-row items-center gap-2 hover:text-amber-400 transition-all">
                        <ListTodo size={18} /> Tasks
                    </Link>
                </li>
                <li>
                    <Link href="" className="flex flex-col lg:flex-row items-center gap-2 hover:text-amber-400 transition-all">
                        <Timer size={18} /> Reports
                    </Link>
                </li>
                <li>
                    <Link href="" className="flex flex-col lg:flex-row items-center gap-2 hover:text-amber-400 transition-all">
                        <Settings size={18} /> Settings
                    </Link>
                </li>
            </ul>
        </div>
    </>
  );
}
