import HomeOverview from "./componet/overview";
import HomeSummary from "./componet/summary";

export default function Home() {
  return (
    <main className="p-6  dark:bg-gray-900 dark:text-gray-100">
      <HomeSummary />
      <HomeOverview />
    </main>
  );
}
