/* eslint-disable @next/next/no-img-element */
"use client";
import { Minus } from "lucide-react";
import ImageViewer from "../componet/imageViewer";
import { useEffect, useState } from "react";

export default function Page() {
  const [viewingSquad, setViewingSquad] = useState(false);
  const [viewImage, setImage] = useState("");
  const [userInformation, setUserInformation] = useState([]);
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo == null) {
      setUserInformation([]);
    } else {
      setUserInformation(JSON.parse(userInfo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInformation));
  }, [userInformation]);
  return (
    <main className="p-6  dark:bg-gray-900 dark:text-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-4 md:mb-0 space-y-2 md:space-x-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            No. Of Users
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            {userInformation.length}
          </h1>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            users
          </span>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-5 md:p-5">
        {userInformation.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {userInformation.map(
              ({ id, username, teamRating, teamName, bio, image }, idx) => {
                return (
                  <div
                    key={idx}
                    className="rounded overflow-hidden shadow-lg bg-white dark:bg-white"
                  >
                    <div className="relative">
                      <a
                        className="cursor-pointer"
                        onClick={() => {
                          setViewingSquad(true);
                          setImage(image);
                        }}
                      >
                        <img
                          className="w-full"
                          src={image}
                          alt={`${username} - ${teamName}`}
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                      </a>

                      <div className="absolute bottom-0 left-0 bg-blue-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-blue-600 transition duration-500 ease-in-out">
                        Squad
                      </div>
                      <a href="#">
                        <div className="text-sm absolute top-0 right-0 bg-blue-600 px-4 text-white rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-blue-600 transition duration-500 ease-in-out">
                          <Minus />
                        </div>
                      </a>
                    </div>
                    <div className="px-3 py-2">
                      <h1 className="font-semibold text-lg text-black dark:text-black">
                        {`${username}: ${teamName}`}
                      </h1>
                      <p className="text-gray-800 text-sm">{bio}</p>
                    </div>
                    <div className="px-2 py-1 flex flex-row items-center">
                      <span className="py-1 text-sm   text-black mr-1 flex flex-row items-center">
                        <span className="ml-1">Team Rating: {teamRating}</span>
                      </span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        ) : null}
      </div>
      {viewingSquad ? (
        <ImageViewer setViewingSquad={setViewingSquad} viewImage={viewImage} />
      ) : null}
      <a href="/user/adduser">
        <button
          className="fixed bottom-8 right-6 h-15 w-15 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-500 transition-all cursor-pointer"
          aria-label="Add New User"
        >
          +
        </button>
      </a>
    </main>
  );
}
