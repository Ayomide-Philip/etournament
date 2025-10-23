"use client";
/* eslint-disable @next/next/no-img-element */
import { Bell, LogOut, Menu } from "lucide-react";
import { useState } from "react";
import MobileNavbar from "./mobiledesign";
export default function TopNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="text-white bg-gray-800 h-20 flex items-center px-3 justify-between">
      <div className="flex items-center gap-2">
        <img
          src="/efootball.jpg"
          className="h-12 w-12 rounded-full object-cover object-center"
          alt=""
        />
        <span className=" text-lg md:text-xl">ETournaments</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex md:hidden" onClick={toggleSidebar}>
          <Menu />
        </div>
        <div>
          <Bell />
        </div>
        <div className="bg-white h-10 w-10 flex justify-center items-center rounded-full">
          <span className="text-black font-bold">Ay</span>
        </div>
        <div className="hidden md:flex">
          <LogOut />
        </div>
      </div>

      <MobileNavbar
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  );
}
