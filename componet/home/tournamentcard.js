/* eslint-disable @next/next/no-img-element */
export default function TournamentCard() {
  return (
    <div className="bg-gray-800 rounded-xl">
      <div className="relative">
        <img
          src="/efootball.jpg"
          alt="Background Image"
          className="h-[200px] object-cover w-full rounded-t-xl "
        />
        <div className="absolute -bottom-10 left-3">
          <img
            src="/efootball.jpg"
            alt=""
            className="h-20 w-20 rounded-full object-cover border-2 border-white"
          />
        </div>
      </div>
      <div className="flex p-3 text-white mt-10">
        <p className="font-[300]">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
      </div>
    </div>
  );
}
