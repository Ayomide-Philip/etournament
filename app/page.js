"use client";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="fixed inset-y-0 left-0 w-64 bg-cordes-dark shadow-xl z-50 dark:bg-gray-900">
        <div className="flex items-center justify-center h-16 bg-cordes-blue dark:bg-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center dark:bg-gray-700">
              <i className="fas fa-cube text-cordes-blue text-lg dark:text-cordes-accent"></i>
            </div>
            <span className="text-white text-xl font-bold dark:text-gray-200">
              Cordes
            </span>
          </div>
        </div>

        <nav className="mt-8 px-4">
          <div className="space-y-2">
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <i className="fas fa-home mr-3 text-cordes-accent group-hover:text-white dark:text-cordes-accent"></i>
              Dashboard
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <i className="fas fa-users mr-3 text-gray-400 group-hover:text-white dark:text-gray-300"></i>
              Users
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <i className="fas fa-chart-bar mr-3 text-gray-400 group-hover:text-white dark:text-gray-300"></i>
              Analytics
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <i className="fas fa-shopping-cart mr-3 text-gray-400 group-hover:text-white dark:text-gray-300"></i>
              Orders
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <i className="fas fa-box mr-3 text-gray-400 group-hover:text-white dark:text-gray-300"></i>
              Products
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <i className="fas fa-cog mr-3 text-gray-400 group-hover:text-white dark:text-gray-300"></i>
              Settings
            </a>
          </div>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gray-800 rounded-lg p-4 dark:bg-gray-700">
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
          </div>
        </div>
      </div>

      <div className="ml-64">
        <header className="bg-white shadow-sm border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Dashboard Overview
                </h1>
                <p className="text-gray-600 text-sm mt-1 dark:text-gray-400">
                  Welcome back, here&apos;s what&apos;s happening today
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300"></i>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cordes-accent focus:border-transparent outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
                  />
                </div>
                <div className="relative">
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-800">
                    <i className="fas fa-bell text-xl"></i>
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      3
                    </span>
                  </button>
                </div>
                {/* Dark mode toggle button */}
                <button
                  onClick={handleToggleDarkMode}
                  className="p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <i className="fas fa-moon"></i>
                  ) : (
                    <i className="fas fa-sun"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6 dark:bg-gray-950 dark:text-gray-100">
          Welcome Back
        </main>
      </div>
    </div>
  );
}
