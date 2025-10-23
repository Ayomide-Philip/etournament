/* eslint-disable @next/next/no-img-element */
import { TbTournament } from "react-icons/tb";
import {
  Gauge,
  LogOut,
  MenuSquare,
  Settings,
  Table,
  Trophy,
  User,
  Volleyball,
  X,
} from "lucide-react";
import Link from "next/link";
export default function MobileNavbar({ toggleSidebar, isSidebarOpen }) {
  return (
    <div
      className={`fixed md:hidden inset-y-0 left-0 w-64 bg-cordes-dark shadow-xl z-50 dark:bg-gray-900 overflow-y-auto h-screen ${
        isSidebarOpen ? "block" : "hidden"
      } md:block md:w-64 transition-all duration-300`}
    >
      <div className="flex flex-col justify-between h-full border-r-1 border-white dark:border-gray-500">
        <div className="flex items-center justify-between h-24 p-8 sm:h-15 bg-cordes-blue dark:bg-gray-800 px-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img
                src="/efootball.jpg"
                className="h-8 w-8 rounded-full object-cover object-center"
                alt=""
              />
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
                {isSidebarOpen ? <X /> : <MenuSquare />}
              </button>
            </div>
          </div>
        </div>

        <nav className="mt-4 px-4 flex-1">
          <div className="space-y-2 pb-10 sm:pb-20">
            <Link
              href="/"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <Gauge className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
              Dashboard
            </Link>
            <Link
              href="/user"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <User className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
              Users
            </Link>
            <Link
              href="/leaderboard"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <Trophy className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
              Leaderboard
            </Link>
            <Link
              href="/tournaments"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <TbTournament className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
              Tournaments
            </Link>
            <Link
              href="/table"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <Table className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
              Table
            </Link>
            <Link
              href="/matches"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <Volleyball className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
              Matches
            </Link>
            <Link
              href="/settings"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <Settings className="mr-3 text-gray-400 group-hover:text-white dark:text-gray-300" />
              Settings
            </Link>
          </div>
        </nav>

        <div className="md:hidden px-4 pb-4">
          <div className="bg-gray-800 rounded-lg p-4 dark:bg-gray-700">
            <div className="flex items-center justify-between space-x-3">
              <div className="flex items-center space-x-3">
                <div className="bg-white h-10 w-10 flex justify-center items-center rounded-full">
                  <span className="text-black font-bold">Ay</span>
                </div>
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
                <LogOut />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
