"use client";
/* eslint-disable @next/next/no-img-element */
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function HomeOverview() {
  const data = [
    { name: "Player A", goals: 12 },
    { name: "Player B", goals: 9 },
    { name: "Player C", goals: 15 },
    { name: "Player D", goals: 7 },
    { name: "Player E", goals: 10 },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Tournament Overview
            </h3>
            <p className="text-gray-600 text-sm">Monthly tournament overview</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              1M
            </button>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="goals" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Top Players</h3>
          <button className="text-black  text-sm font-medium">View All</button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://i.ytimg.com/vi/08JoSCHV9VY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAC7M1K4hMJbmFQQFppnSNzsZAcRA"
              alt="Product"
              className="w-12 h-12 rounded-lg"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900">iPhone 15 Pro</p>
              <p className="text-sm text-gray-600">Electronics</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="https://i.ytimg.com/vi/08JoSCHV9VY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAC7M1K4hMJbmFQQFppnSNzsZAcRA"
              alt="Product"
              className="w-12 h-12 rounded-lg"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900">MacBook Pro</p>
              <p className="text-sm text-gray-600">Computers</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="https://i.ytimg.com/vi/08JoSCHV9VY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAC7M1K4hMJbmFQQFppnSNzsZAcRA"
              alt="Product"
              className="w-12 h-12 rounded-lg"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900">AirPods Pro</p>
              <p className="text-sm text-gray-600">Audio</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="https://i.ytimg.com/vi/08JoSCHV9VY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAC7M1K4hMJbmFQQFppnSNzsZAcRA"
              alt="Product"
              className="w-12 h-12 rounded-lg"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900">Apple Watch</p>
              <p className="text-sm text-gray-600">Wearables</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="https://i.ytimg.com/vi/08JoSCHV9VY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAC7M1K4hMJbmFQQFppnSNzsZAcRA"
              alt="Product"
              className="w-12 h-12 rounded-lg"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900">Apple Watch</p>
              <p className="text-sm text-gray-600">Wearables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
