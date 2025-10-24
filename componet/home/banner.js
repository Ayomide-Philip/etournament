export default function Banner() {
  return (
    <div className="w-full h-[400px] md:h-[500px] bg-blue-800 flex justify-center items-center text-white flex-col gap-4">
      <div className="flex flex-col gap-4 justify-center items-center  p-3 text-center selection:bg-pink-500">
        <span className="bg-pink-800 px-3 py-2 font-extrabold">
          ETournament
        </span>
        <h1 className="text-3xl capitalize font-semibold">
          Host tournaments | Join Latest Tournament | Challenge Friends.
        </h1>
        <p className="font-light">Play with people around the world...</p>
      </div>
      <div className="flex">
        <button className="bg-pink-600 px-5 py-2 cursor-pointer">
          Join Now
        </button>
      </div>
    </div>
  );
}
