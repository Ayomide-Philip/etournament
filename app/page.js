import Banner from "@/componet/home/banner";
import TournamentCard from "@/componet/home/tournamentcard";

export default function Page() {
  return (
    <>
      <Banner />
      <div className="flex p-3">
        <div className="w-full mb-20">
          <h1 className="text-white text-3xl capitalize text-center mb-4">
            Ongoing Tournaments
          </h1>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 ">
            <TournamentCard />
            <TournamentCard />
            <TournamentCard />
            <TournamentCard />
            <TournamentCard />
          </div>
        </div>
      </div>
    </>
  );
}
