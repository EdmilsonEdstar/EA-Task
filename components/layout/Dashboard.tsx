"use client";

import Header from "@/components/layout/Header";
import SideBarLeft from "@/components/layout/SideBar";
import React, { useState } from "react";

type DashboardProps = {
  children:React.ReactNode
}

export default function Dashboard({children} : DashboardProps) {

  return (
    <>
        <div className="flex flex-row">
            <SideBarLeft/> 

            <div className="h-[100vh] w-[100%] lg:w-[95%] bg-gray-50 space-y-4 overflow-y-auto custom-scrollbar">

                {/* Header */}
                <Header/>

                {/* Pages */}
                {children}
                  
            </div>
        </div>
    </>
  );
}
