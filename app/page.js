import HomeOverview from "./componet/overview";
import HomeSummary from "./componet/summary";
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

export default function Home() {
  return (
    <main className="p-6 dark:bg-gray-900 dark:text-gray-100">
      <HomeSummary />
      <HomeOverview />
    </main>
  );
}
