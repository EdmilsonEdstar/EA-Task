"use client";

import { CheckSquare, Clock, ListTodo, PlusSquare, User } from "lucide-react";
import Link from "next/link";
import DashboardCard from "../modules/dashboard/Card";
import DashboardTable from "../modules/dashboard/Table";
import AddTaskModal from "../modules/AddTaskModal";

import { useState } from "react";
import DashboardChart from "../modules/dashboard/DashboardChart";

export default function SideBarRight() {

  const [modal, setModal] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const AddTask = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="h-[100vh] w-[100%] lg:w-[95%] bg-gray-50 space-y-4 overflow-y-auto custom-scrollbar">

        {/* Header */}
        <div className="bg-white py-2 flex gap-2 justify-between items-center px-6 border-b-2 border-gray-100">
          
          <div>
            <h1 className="text-2xl font-bold lg:hidden">
              <span className="text-amber-400">EA</span>Task
            </h1>
          </div>

          <div className="flex flex-row gap-2">
            
            <button
              onClick={AddTask}
              type="button"
              className="flex flex-row justify-center items-center gap-2 text-black px-6 py-3 rounded-sm hover:bg-gray-100 hover:cursor-pointer transition"
            >
              <PlusSquare size={18} />
              Add Task
            </button>

            <div className="relative">
  
            {/* Botão de Perfil */}
            <button aria-label="buttom profile"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                type="button"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition hover:cursor-pointer"
            >
                <User size={18} />
            </button>

            {/* Submenu Dropdown */}
            {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-modal-pop">
                <button 
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition hover:cursor-pointer"
                    onClick={() => { /* Lógica de Perfil */ setUserMenuOpen(false); }}
                >
                    View Profile
                </button>
                
                <hr className="my-1 border-gray-100" />
                
                <button 
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition hover:cursor-pointer"
                    onClick={() => { /* Lógica de Logout */ setUserMenuOpen(false); }}
                >
                    Logout
                </button>
                </div>
            )}
            </div>

          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-row justify-between px-6 items-stretch gap-2">
        <DashboardCard qty="12" desc="Open Tasks" classN="font-bold text-amber-700 text-4xl animate-modal-pop delay-0" />
        <DashboardCard qty="8" desc="In Progress" classN="font-bold text-amber-700 text-4xl animate-modal-pop delay-75" />
        <DashboardCard qty="25" desc="Completed" classN="font-bold text-amber-700 text-4xl animate-modal-pop delay-150" />
        </div>


        <div className="px-6">
            <DashboardChart />
        </div>

        {/* Table */}
        <div className="justify-center px-6 mb-10">
          <DashboardTable />
        </div>
        

        {/* Modal */}
        {modal && <AddTaskModal closeModal={closeModal} />}

      </div>
    </>
  );
}
