"use client";

import { PlusSquare, User, Bell, Sun, Moon } from "lucide-react";
import { useState } from "react";
import AddTaskModal from "../modules/AddTaskModal";

export default function Header() {
  const [modal, setModal] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true); // Simulação

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-3 flex justify-between items-center transition-all">
        
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-black tracking-tight lg:hidden">
            <span className="text-amber-500">EA</span>Task
          </h1>
          {/* Espaço reservado para breadcrumbs ou saudação em Desktop */}
          <div className="hidden lg:block">
            <p className="text-sm text-gray-500 font-medium">Welcome back, <span className="text-gray-900">Edmilson</span> 👋</p>
          </div>
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-3">
          
          {/* Add Task Button - Styled more modern */}
          <button
            onClick={() => setModal(true)}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all active:scale-95 shadow-sm shadow-amber-200 hover:cursor-pointer"
          >
            <PlusSquare size={18} />
            <span className="hidden sm:inline">Add Task</span>
          </button>

          <div className="h-6 w-[1px] bg-gray-200 mx-1 hidden sm:block" />

          {/* Theme Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition hover:cursor-pointer"
            title="Toggle Theme"
          >
            {darkMode ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} />}
          </button>

          {/* Notifications */}
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition relative hover:cursor-pointer">
            <Bell size={20} />
            {hasNotifications && (
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            )}
          </button>

          {/* Profile Dropdown */}
          <div className="relative ml-1">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="group flex items-center gap-2 p-1 pr-3 hover:bg-gray-100 rounded-full transition hover:cursor-pointer"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-amber-100 text-amber-700 rounded-full font-bold text-xs border border-amber-200">
                EA
              </div>
              <div className="hidden md:block text-left">
                <p className="text-xs font-bold text-gray-800 leading-none">Edmilson</p>
                <p className="text-[10px] text-gray-500">Admin</p>
              </div>
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-modal-pop">
                <div className="px-4 py-2 border-b border-gray-50 mb-1">
                  <p className="text-xs text-gray-400">Signed in as</p>
                  <p className="text-sm font-semibold text-gray-800 truncate">edmilson@eatask.com</p>
                </div>
                
                <button 
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition flex items-center gap-2 hover:cursor-pointer"
                  onClick={() => setUserMenuOpen(false)}
                >
                  <User size={16} /> View Profile
                </button>
                
                <hr className="my-1 border-gray-50" />
                
                <button 
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition font-medium hover:cursor-pointer"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      
      {/* Modal */}
      {modal && <AddTaskModal closeModal={() => setModal(false)} />}
    </>
  );
}