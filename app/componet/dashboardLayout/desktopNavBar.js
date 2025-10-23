import Link from "next/link";
import { navLink } from "./navLink";

export default function DesktopNavBar() {
  return (
    <div className="hidden md:flex text-white fixed bottom-5  transform -translate-x-1/2 left-1/2 z-10">
      <div className="bg-gray-800 rounded-xl flex">
        {navLink.map(({ name, path, icon: Icon }, idx) => {
          return (
            <Link
              key={idx}
              href={path}
              className={`flex text-[12px] py-3 flex-col items-center hover:bg-gray-700 px-2 ${
                idx === 0 && "rounded-l-2xl"
              } ${navLink.length - 1 === idx && "rounded-r-2xl"}`}
            >
              <Icon className="w-5 h-5" />
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
