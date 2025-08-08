/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamRating, setTeamRating] = useState();
  const [imageUrl, setImageUrl] = useState("");
  function getImageUrl(e) {
    if (e && e[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(e[0]);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-5">
      <div className="w-full max-w-lg p-10 bg-white border border-gray-300 rounded-3xl shadow-3xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Add a User Team
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Username:
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your efootball username"
              className="p-3 w-full border border-blue-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Team Name:
            </label>
            <input
              type="text"
              name="teamName"
              placeholder="Enter your team name"
              className="p-3 w-full border border-blue-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
              onChange={(e) => {
                setTeamName(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Team Rating:
            </label>
            <input
              type="number"
              name="teamRating"
              min="1"
              max="4000"
              placeholder="Enter your eFootball rating"
              className="p-3 w-full border border-blue-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
              onChange={(e) => {
                setTeamRating(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Squad Image
            </label>
            <input
              type="file"
              name="squad_image"
              accept="image/*"
              className="w-full p-3 text-sm text-gray-600 border border-blue-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
              onChange={(e) => {
                getImageUrl(e.target.files);
              }}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Bio:
            </label>
            <textarea
              placeholder="Enter the user bio"
              rows={5}
              className="p-3 w-full border border-blue-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out resize-none"
              onChange={(e) => {
                setTeamRating(e.target.value);
              }}
            />
          </div>

          <div className="mt-6">
            <p className="text-gray-700 text-lg font-medium mb-2">
              Image Preview
            </p>
            <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-200 rounded-2xl flex items-center justify-center text-gray-500 border-2 border-blue-400">
              {imageUrl == "" ? (
                <p>Image Preview will appear here</p>
              ) : (
                <img
                  src={imageUrl}
                  className="w-full h-full rounded-2xl p-1"
                  alt="User Squad"
                />
              )}
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xl font-semibold rounded-2xl shadow-lg transform hover:scale-105 hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
