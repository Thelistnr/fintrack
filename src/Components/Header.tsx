import Image from "next/image";
import searchIcon from "../Assets/Icons/search.svg";
import viewIcon from "../Assets/Icons/app-grid.svg";
import menuIcon from "../Assets/Icons/menu.svg";
import logo from "../Assets/Icons/logomark.svg";
import profile from "../Assets/Images/profile.png";
import Link from "next/link";
import { useState } from "react";

export default function Header({hamburgerMenu, menuState, filter}: {hamburgerMenu: (state: boolean) => void, menuState: boolean, filter: (state: string) => void}) {
  const handleMenu = () => {
    if(menuState === true) {
      hamburgerMenu(false);
    } else {
      hamburgerMenu(true);
    }
  }
  const [search, setSearch] = useState<string>("");
  const [searchRev, setSearchRev] = useState<boolean>(false);
  return (
    <header className="py-3 flex flex-col gap-4 z-20 sticky top-0 left-0 right-0 bg-[#FCFDFD] w-full m-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-7">
          <button className="hover:bg-gray-100 rounded cursor-pointer" onClick={handleMenu}>
            <Image src={menuIcon} alt="" width={24} height={24}/>
          </button>
          <Link href={'/'} className="font-semibold text-primary timmana text-2xl tracking-[-2%] flex items-center gap-1">
            <Image src={logo} alt="" width={24} height={24}/>
            <span className="timmana text-2xl hidden sm:block">FinTrack</span>
          </Link>
        </div>
        <div className="flex items-center gap-7">
          {!searchRev ? <label htmlFor="search" className="cursor-pointer hover:scale-110" onClick={e => setSearchRev(true)}>
            <Image src={searchIcon} alt="" width={24} height={24}/>
          </label> :
          <label htmlFor="search" className="group border-primary border rounded-lg py-1 px-4 cursor-text hidden sm:block">
            <input type="text" id="search" className="outline-none text-[#1B2528]" value={search} onChange={e => {setSearch(e.target.value); filter(e.target.value)}}/>
            <span className="text-xl font-black text-[#C6381B] cursor-pointer" onClick={e => setSearchRev(false)}>X</span>
          </label>}
          <button className="hover:bg-gray-100 rounded-full cursor-pointer hover:scale-110">
            <Image src={viewIcon} alt="" width={24} height={24}/>
          </button>
          <div className="w-10 h-10 object-cover rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:scale-110">
            <Image src={profile} alt="" width={40} height={40}/>
          </div>
        </div>
      </div>
      {searchRev && <label htmlFor="search" className="group border-primary border rounded-lg py-1 px-4 cursor-text flex justify-between sm:hidden">
        <input type="text" id="search" className="outline-none text-[#1B2528]" value={search} onChange={e => {setSearch(e.target.value); filter(e.target.value)}}/>
        <span className="text-xl font-black text-[#C6381B] cursor-pointer" onClick={e => setSearchRev(false)}>X</span>
      </label>}
    </header>
  );
} 