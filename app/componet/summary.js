import { TbTournament } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { Trophy, User, Volleyball } from "lucide-react";
export default function HomeSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Tournaments</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">25</p>
          </div>
          <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center">
            <TbTournament />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Users</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">15,847</p>
          </div>
          <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center">
            <User />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Matches</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">2,847</p>
          </div>
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
            <Volleyball />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Ongoing</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
          </div>
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
            <Trophy />
          </div>
        </div>
      </div>
    </div>
  );
}
