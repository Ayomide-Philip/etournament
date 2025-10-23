import { Gauge, Settings, Table, Trophy, User, Volleyball } from "lucide-react";
import Link from "next/link";
import { TbTournament } from "react-icons/tb";

export default function DesktopNavBar() {
  return (
    <div className="text-white fixed bottom-5  transform -translate-x-1/2 left-1/2 z-10">
      <div className="bg-gray-800 rounded-xl flex">
        <Link
          href="#"
          className="flex text-[12px] flex-col items-center py-3 hover:bg-gray-700 px-2 rounded-l-2xl"
        >
          <Gauge className="w-5 h-5" />
          Dashboard
        </Link>
        <Link
          href="#"
          className="flex text-[12px] py-3 flex-col hover:bg-gray-700 px-2 items-center"
        >
          <User className="w-5 h-5" />
          Users
        </Link>
        <Link
          href="#"
          className="flex text-[12px] py-3 flex-col hover:bg-gray-700 px-2 items-center"
        >
          <Trophy className="w-5 h-5" />
          Leaderboard
        </Link>
        <Link
          href="#"
          className="flex text-[12px] py-3 flex-col hover:bg-gray-700 px-2 items-center"
        >
          <TbTournament className="w-5 h-5" />
          Tournaments
        </Link>
        <Link
          href="#"
          className="flex text-[12px] py-3 flex-col hover:bg-gray-700 px-2 items-center"
        >
          <Table className="w-5 h-5" />
          Table
        </Link>
        <Link
          href="#"
          className="flex text-[12px] py-3 flex-col hover:bg-gray-700 px-2 items-center"
        >
          <Volleyball className="w-5 h-5" />
          Matches
        </Link>
        <Link
          href="#"
          className="flex text-[12px] py-3 flex-col items-center hover:bg-gray-700 px-2 rounded-r-2xl"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>
      </div>
    </div>
  );
}
