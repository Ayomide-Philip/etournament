import {
  Gauge,
  Home,
  Settings,
  Table,
  Trophy,
  User,
  Volleyball,
} from "lucide-react";
import { TbTournament } from "react-icons/tb";
export const navLink = [
  { name: "Home", path: "/", icon: Home },
  { name: "Dashboard", path: "/dashboard", icon: Gauge },
  { name: "Users", path: "/user", icon: User },
  { name: "Leaderboard", path: "/leaderboard", icon: Trophy },
  { name: "Tournaments", path: "/tournaments", icon: TbTournament },
  { name: "Table", path: "/table", icon: Table },
  { name: "Matches", path: "/match", icon: Volleyball },
  { name: "Settings", path: "/settings", icon: Settings },
];
