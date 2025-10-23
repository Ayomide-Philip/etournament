"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { IoIosFootball, IoMdNotifications } from "react-icons/io";
import { MdExitToApp } from "react-icons/md";
import { useState } from "react";
import { TbTournament } from "react-icons/tb";
import { Gauge, Settings, Table, Trophy, User, Volleyball } from "lucide-react";

export default function AdminPannel({ children, darkMode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-cordes-dark shadow-xl z-50 dark:bg-gray-900 overflow-y-auto h-screen ${
          isSidebarOpen ? "block" : "hidden"
        } md:block md:w-64 transition-all duration-300`}
      >
        <div className="flex flex-col justify-between h-full border-r-1 border-white dark:border-gray-500">
          <div className="flex items-center justify-between h-24 p-8 sm:h-20 bg-cordes-blue dark:bg-gray-800 px-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <IoIosFootball />
              </div>
              <span className="text-white text-xl font-bold dark:text-gray-200">
                ETournaments
              </span>
              <div className="flex items-center space-x-4 md:hidden">
                <button
                  onClick={toggleSidebar}
                  className="text-gray-800 dark:text-white text-2xl focus:outline-none"
                  aria-label="Toggle Sidebar"
                >
                  {isSidebarOpen ? "✕" : "☰"}
                </button>
              </div>
            </div>
          </div>

          <nav className="mt-4 px-4 flex-1">
            <div className="space-y-2 pb-10 sm:pb-20">
              <a
                href="/"
                className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <Gauge className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
                Dashboard
              </a>
              <a
                href="/user"
                className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <User className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
                Users
              </a>
              <a
                href="/leaderboard"
                className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <Trophy className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
                Leaderboard
              </a>
              <a
                href="/tournaments"
                className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <TbTournament className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
                Tournaments
              </a>
              <a
                href="/table"
                className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <Table className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
                Table
              </a>
              <a
                href="/matches"
                className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <Volleyball className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
                Matches
              </a>
              <a
                href="/settings"
                className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <Settings className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
                Settings
              </a>
            </div>
          </nav>

          <div className="hidden md:block absolute bottom-4 left-4 right-4">
            <div className="bg-gray-800 rounded-lg p-4 dark:bg-gray-700">
              <div className="flex items-center justify-between space-x-3">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/17003/17003310.png"
                    alt="Admin"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-white text-sm font-medium dark:text-gray-200">
                      John Admin
                    </p>
                    <p className="text-gray-400 text-xs dark:text-gray-400">
                      Administrator
                    </p>
                  </div>
                </div>
                <button className="bg-transparent text-white p-2 rounded-full hover:bg-gray-600">
                  <MdExitToApp size={24} />
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden px-4 pb-4">
            <div className="bg-gray-800 rounded-lg p-4 dark:bg-gray-700">
              <div className="flex items-center justify-between space-x-3">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/17003/17003310.png"
                    alt="Admin"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-white text-sm font-medium dark:text-gray-200">
                      John Admin
                    </p>
                    <p className="text-gray-400 text-xs dark:text-gray-400">
                      Administrator
                    </p>
                  </div>
                </div>
                <button className="bg-transparent text-white p-2 rounded-full hover:bg-gray-600">
                  <MdExitToApp size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isSidebarOpen ? "ml-0" : "sm:ml-64"
        } transition-all duration-300`}
      >
        <header className="bg-white shadow-sm border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="px-4 md:px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center justify-between w-full md:w-auto">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Dashboard Overview
                </h1>

                <div className="flex items-center space-x-4 md:hidden">
                  <button className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    <IoMdNotifications size={22} />
                    <span className="absolute -top-1 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      3
                    </span>
                  </button>
                  <button
                    onClick={toggleSidebar}
                    className={`text-gray-800  text-2xl focus:outline-none ${
                      isSidebarOpen ? "text-gray-900 " : "dark:text-white"
                    } rounded-lg p-2 `}
                    aria-label="Toggle Sidebar"
                  >
                    {isSidebarOpen ? "✕" : "☰"}
                  </button>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cordes-accent focus:border-transparent outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
                  />
                </div>
                <div className="relative">
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-800">
                    <IoMdNotifications />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      3
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}
