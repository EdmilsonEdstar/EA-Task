"use client"; // Required to use the usePathname hook for client-side interactivity

import { Home, Kanban, ListTodo, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarLeft() {
  const pathname = usePathname();

  /**
   * Helper function to determine if a link is currently active.
   * It compares the current browser path with the link's destination.
   */
  const isActive = (path: string) => pathname === path;

  // Base styles for navigation links to ensure consistency
  const linkStyle = "flex flex-col lg:flex-row items-center gap-2 transition-all duration-200 font-medium";
  
  // Highlight styles for the selected route
  const activeStyle = "text-amber-500 lg:bg-amber-50 lg:px-4 lg:py-2 lg:rounded-lg lg:-ml-4"; 
  
  // Default styles for inactive routes
  const inactiveStyle = "text-gray-500 hover:text-amber-600";

  return (
    <>
      {/* SideBar Container:
        - Mobile: Fixed at the bottom for easy thumb access.
        - Desktop: Static sidebar on the left.
      */}
      <div className="fixed bottom-0 w-full lg:static lg:h-screen lg:w-[15%] px-6 pt-4 bg-white border-t-2 lg:border-t-0 lg:border-r-2 border-gray-100 z-50">
        
        {/* Brand Identity / Logo - Hidden on mobile to save space */}
        <div className="mb-10 hidden lg:block">
          <h1 className="text-2xl font-bold">
            <span className="text-amber-400">EA</span>Task
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex flex-row lg:flex-col justify-between lg:justify-start lg:gap-4 lg:space-y-2 py-2 lg:py-0 text-sm">
            
            <li>
              <Link href="/Home" className={`${linkStyle} ${isActive("/Home") ? activeStyle : inactiveStyle}`}>
                <Home size={18} /> 
                <span className="text-[10px] lg:text-sm">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link href="/Tasks" className={`${linkStyle} ${isActive("/Tasks") ? activeStyle : inactiveStyle}`}>
                <ListTodo size={18} /> 
                <span className="text-[10px] lg:text-sm">Tasks</span>
              </Link>
            </li>

            <li>
              <Link href="/Board" className={`${linkStyle} ${isActive("/Board") ? activeStyle : inactiveStyle}`}>
                <Kanban size={18} /> 
                <span className="text-[10px] lg:text-sm">Board</span>
              </Link>
            </li>

            <li>
              <Link href="/Settings" className={`${linkStyle} ${isActive("/Settings") ? activeStyle : inactiveStyle}`}>
                <Settings size={18} /> 
                <span className="text-[10px] lg:text-sm">Settings</span>
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </>
  );
}