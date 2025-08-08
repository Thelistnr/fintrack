import Image from "next/image";
import searchIcon from "../Assets/Icons/search.svg";
import viewIcon from "../Assets/Icons/app-grid.svg";
import menuIcon from "../Assets/Icons/menu.svg";
import logo from "../Assets/Icons/logomark.svg";
import profile from "../Assets/Images/profile.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-3 flex justify-between items-center z-20 sticky top-0 left-0 right-0 bg-[#FCFDFD] w-full m-0">
      <div className="flex items-center gap-2 sm:gap-7">
        <button className="hover:bg-gray-100 rounded">
          <Image src={menuIcon} alt="" width={24} height={24}/>
        </button>
        <Link href={'/'} className="font-semibold text-primary timmana text-2xl tracking-[-2%] flex items-center gap-1">
          <Image src={logo} alt="" width={24} height={24}/>
          <span className="timmana text-2xl hidden sm:block">FinTrack</span>
        </Link>
      </div>
      <div className="flex items-center gap-7">
        <button className="">
          <Image src={searchIcon} alt="" width={24} height={24}/>
        </button>
        <button className="hover:bg-gray-100 rounded-full">
          <Image src={viewIcon} alt="" width={24} height={24}/>
        </button>
        <div className="w-10 h-10 object-cover rounded-full bg-gray-300 flex items-center justify-center">
          <Image src={profile} alt="" width={40} height={40}/>
        </div>
      </div>
    </header>
  );
} 