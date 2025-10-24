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
        <div className="absolute -bottom-8 md:-bottom-10 left-1 md:left-3">
          <img
            src="/efootball.jpg"
            alt=""
            className=" h-15 w-15 md:h-20 md:w-20 rounded-full object-cover border-2 border-white"
          />
        </div>
      </div>
      <h1 className="text-white text-[20px] md:text-2xl ml-17 md:ml-25">
        Meds Cup Tournament
      </h1>
      <div className="flex p-3 text-white">
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
