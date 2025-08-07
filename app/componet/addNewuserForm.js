/* eslint-disable @next/next/no-img-element */
export default function AddNewUser() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-white dark:bg-gray-950 rounded-3xl shadow-2xl border border-blue-200 dark:border-blue-900 overflow-hidden max-h-[90vh]">
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 p-2 rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-white transition"
          aria-label="Close"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M6 6l12 12M6 18L18 6"
            />
          </svg>
        </button>

        {/* Header Section */}
        <div className="text-center pt-10 pb-4 px-6 bg-gradient-to-r from-blue-500 to-blue-700">
          <div className="w-24 h-24 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg mb-3 border-4 border-blue-400">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/user.png"
              alt="User Icon"
              className="w-12 h-12"
            />
          </div>
          <h2 className="text-3xl font-extrabold text-white drop-shadow">
            Add New User
          </h2>
          <p className="text-blue-100 text-base mt-1">
            Fill out the details to continue
          </p>
        </div>

        {/* Redesigned Form Section */}
        <form className="space-y-6 px-8 py-8 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-blue-900 dark:text-blue-200 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="name"
                placeholder="Username"
                className="w-full p-3 border border-blue-300 dark:border-blue-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:bg-blue-950 dark:text-white transition"
              />
            </div>
            <div>
              <label
                htmlFor="team-name"
                className="block text-sm font-medium text-blue-900 dark:text-blue-200 mb-2"
              >
                Team Name
              </label>
              <input
                type="text"
                id="team-name"
                placeholder="Team Name"
                className="w-full p-3 border border-blue-300 dark:border-blue-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:bg-blue-950 dark:text-white transition"
              />
            </div>
            <div>
              <label
                htmlFor="team-rating"
                className="block text-sm font-medium text-blue-900 dark:text-blue-200 mb-2"
              >
                Team Rating
              </label>
              <input
                type="number"
                id="team-rating"
                placeholder="Rating"
                className="w-full p-3 border border-blue-300 dark:border-blue-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:bg-blue-950 dark:text-white transition"
              />
            </div>
            <div>
              <label
                htmlFor="profile-picture"
                className="block text-sm font-medium text-blue-900 dark:text-blue-200 mb-2"
              >
                Profile Picture
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  id="profile-picture"
                  accept="image/*"
                  className="block w-full text-sm text-blue-900 dark:text-blue-200 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-100 dark:file:bg-blue-900 file:text-blue-700 dark:file:text-white hover:file:bg-blue-200 dark:hover:file:bg-blue-800"
                />
              </div>
              <span className="text-xs text-blue-400 dark:text-blue-300 mt-1 block">
                JPG, PNG, Max 2MB
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-blue-900 dark:text-blue-200 mb-2"
            >
              Bio
            </label>
            <textarea
              id="bio"
              placeholder="Short bio"
              rows={3}
              className="w-full p-3 border border-blue-300 dark:border-blue-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none dark:bg-blue-950 dark:text-white transition"
            ></textarea>
          </div>

          <div className="pt-4 pb-7 text-center">
            <button
              type="submit"
              className="px-10 py-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
