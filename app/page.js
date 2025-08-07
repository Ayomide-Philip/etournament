export default function Home() {
  return (
    <main className="p-6 dark:bg-gray-900 dark:text-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">$48,291</p>
              <div className="flex items-center mt-2">
                <span className="text-green-600 text-sm font-medium flex items-center">
                  <i className="fas fa-arrow-up mr-1"></i>
                  12%
                </span>
                <span className="text-gray-500 text-sm ml-2">
                  vs last month
                </span>
              </div>
            </div>
            <div className="w-12 h-12 bg-cordes-blue bg-opacity-10 rounded-lg flex items-center justify-center">
              <i className="fas fa-dollar-sign text-cordes-blue text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">15,847</p>
              <div className="flex items-center mt-2">
                <span className="text-green-600 text-sm font-medium flex items-center">
                  <i className="fas fa-arrow-up mr-1"></i>
                  8%
                </span>
                <span className="text-gray-500 text-sm ml-2">
                  vs last month
                </span>
              </div>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <i className="fas fa-users text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">2,847</p>
              <div className="flex items-center mt-2">
                <span className="text-green-600 text-sm font-medium flex items-center">
                  <i className="fas fa-arrow-up mr-1"></i>
                  15%
                </span>
                <span className="text-gray-500 text-sm ml-2">
                  vs last month
                </span>
              </div>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <i className="fas fa-shopping-cart text-orange-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Products</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">1,247</p>
              <div className="flex items-center mt-2">
                <span className="text-green-600 text-sm font-medium flex items-center">
                  <i className="fas fa-arrow-up mr-1"></i>
                  5%
                </span>
                <span className="text-gray-500 text-sm ml-2">
                  vs last month
                </span>
              </div>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <i className="fas fa-box text-purple-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
