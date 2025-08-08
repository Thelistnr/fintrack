import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-full min-h-screen py-7 fixed inset-0 z-10 bg-[#FCFDFD] sm:static mt-18 sm:mt-0">
      
      <nav className="">
        <Link href="/" className="flex items-center px-[18px] py-2 text-primary bg-[#38677616] hover:scale-[105%] rounded-[16px]">
          Dashboard
        </Link>
        <Link href="/" className="flex items-center px-[18px] py-2 text-[#1B2528] hover:bg-[#38677605] hover:scale-[105%] rounded-[16px]">
          Transactions
        </Link>
        <Link href="/" className="flex items-center px-[18px] py-2 text-[#1B2528] hover:bg-[#38677605] hover:scale-[105%] rounded-[16px]">
          Reports
        </Link>
        <Link href="/" className="flex items-center px-[18px] py-2 text-[#1B2528] hover:bg-[#38677605] hover:scale-[105%] rounded-[16px]">
          Settings
        </Link>
      </nav>
    </aside>
  );
} 