/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamRating, setTeamRating] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");

  const [userInformation, setUserInformation] = useState([]);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo == null) {
      setUserInformation([]);
    } else if (userInfo == undefined) {
      setUserInformation([]);
    } else {
      setUserInformation(JSON.parse(userInfo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInformation));
  }, [userInformation]);

  function getImageUrl(e) {
    if (e && e[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(e[0]);
    }
  }
  function getNewId() {
    var id = 0;
    if (userInformation.length > 0) {
      id = userInformation[userInformation.length - 1].id + 1;
    } else {
      id = 1;
    }
    return id;
  }

  function AddNewuser(e) {
    e.preventDefault();
    const newUserInfo = {
      id: getNewId(),
      username: username,
      teamName: teamName,
      teamRating: teamRating,
      bio: bio,
      image: imageUrl,
    };
    console.log(newUserInfo);
    setUserInformation((prev) => {
      return [...prev, newUserInfo];
    });
    window.location.href = "/user";
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-5">
      <div className="w-full max-w-lg p-10 border border-gray-300 rounded-3xl shadow-xl bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8 tracking-wide">
          Add a User Team
        </h2>

        <form className="space-y-7" onSubmit={AddNewuser}>
          <div>
            <label className="block text-gray-800 text-lg font-semibold mb-2">
              Username:
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your efootball username"
              className="p-3 w-full border border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 text-lg font-semibold mb-2">
              Team Name:
            </label>
            <input
              type="text"
              name="teamName"
              placeholder="Enter your team name"
              className="p-3 w-full border border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 text-lg font-semibold mb-2">
              Team Rating:
            </label>
            <input
              type="number"
              name="teamRating"
              min="1"
              max="4000"
              placeholder="Enter your eFootball rating"
              className="p-3 w-full border border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={(e) => setTeamRating(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 text-lg font-semibold mb-2">
              Squad Image
            </label>
            <input
              type="file"
              name="squad_image"
              accept="image/*"
              className="w-full p-3 text-sm text-gray-700 border border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={(e) => getImageUrl(e.target.files)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 text-lg font-semibold mb-2">
              Bio:
            </label>
            <textarea
              placeholder="Enter the user bio"
              rows={5}
              className="p-3 w-full border border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
              onChange={(e) => setBio(e.target.value)}
              required
            />
          </div>

          <div className="mt-6">
            <p className="text-gray-800 text-lg font-semibold mb-2">
              Image Preview
            </p>
            <div className="w-full h-48 bg-white rounded-xl flex items-center justify-center text-gray-500 border-2 border-blue-400">
              {imageUrl === "" ? (
                <p>Image Preview will appear here</p>
              ) : (
                <img
                  src={imageUrl}
                  className="w-full h-full object-contain rounded-xl p-1"
                  alt="User Squad"
                />
              )}
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white text-xl font-bold rounded-xl shadow-md hover:bg-blue-700 transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
