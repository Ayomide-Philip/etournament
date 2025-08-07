export default function Page() {
  return (
    <main className="p-6  dark:bg-gray-900 dark:text-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-4 md:mb-0 space-y-2 md:space-x-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            No. Of Users
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <h1 className="text-4xl font-semibold text-blue-600 dark:text-blue-400">
            50
          </h1>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            users
          </span>
        </div>
      </div>
    </main>
  );
}
