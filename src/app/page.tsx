"use client"
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import SummaryCard from '../Components/SummaryCard';
import TransactionTable from '../Components/TransactionTable';
import Image from "next/image";
import prof from "../Assets/Images/profile-zoom.png";
import prof2 from "../Assets/Images/profile2.png";
import prof3 from "../Assets/Images/profile3.png";
import prof4 from "../Assets/Images/profile4.png";
import menInfo from "../Assets/Icons/iconButtonOutlinedStandard.svg";
import down from "../Assets/Images/caret-down.png";
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
    <div className="max-h-screen h-screen">
      <Header hamburgerMenu={setHamburgerMenu} menuState={hamburgerMenu} filter={setFilter}/>
      <div className="flex gap-12 h-[calc(100vh-74px)]">
        {/* Sidebar and Main Content */}
        {hamburgerMenu && <div className="w-[25%] h-full">
          <Sidebar />
        </div>}
        <main className="flex-1 px-2 py-8 sm:px-8 bg-white h-full overflow-y-auto no-scrollbar">
          {/* Wallet Ledger Header */}
          <div className="mb-8">
            <div className="flex flex-col mb-4">
              <div className="flex items-center justify-between mb-7 flex-wrap gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-[34px] font-bold text-[#1B2528] flex items-center gap-1">
                    Wallet Ledger
                    <Image src={down} alt="Down" width={24} height={24} />
                  </span>
                  <div className="flex items-center gap-2 bg-[#34616F09] rounded-2xl py-1 px-2">
                    <div className="w-[6px] h-[6px] bg-[#087A2E] rounded-full"></div>
                    <span className="text-[15px] font-medium text-[#1B2528]">Active</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-[#4B8B9F] text-[#020303] rounded-[16px] font-medium hover:bg-[#428ca3]">
                    Share
                  </button>
                  <button className="">
                    <Image src={menInfo} alt="Settings" width={36} height={36} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white z-[3]"><Image src={prof} alt="" width={32} height={32}/> </div>
                  <div className="w-8 h-8 rounded-full bg-green-300 border-2 border-white z-[2]"><Image src={prof2} alt="" width={32} height={32}/> </div>
                  <div className="w-8 h-8 rounded-full bg-purple-300 border-2 border-white z-[1]"><Image src={prof3} alt="" width={32} height={32}/> </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-300 border-2 border-white"><Image src={prof4} alt="" width={32} height={32}/> </div>
                </div>
                <span className="text-sm text-gray-600">Ava, Liam, Noah +12 others</span>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <Link href="/" className="border-b-2 border-[#4B8B9F] text-[#4B8B9F] py-2 px-1 text-[15px] font-medium">
                  Overview
                </Link>
                <Link href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-2 px-1 text-[15px] font-medium">
                  Transactions
                </Link>
              </nav>
            </div>
          </div>

          {/* Summary Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
              <SummaryCard
                title="Total Balance"
                value="$12,345"
                change="+5%"
                changeType="positive"
              />
              <SummaryCard
                title="Total Credits"
                value="$7,890"
                change="+3%"
                changeType="positive"
              />
              <SummaryCard
                title="Total Debits"
                value="$4,455"
                change="-2%"
                changeType="negative"
              />
              <SummaryCard
                title="Transactions"
                value="150"
                change="+10%"
                changeType="positive"
              />
            </div>
          </div>

          {/* Transaction Table */}
          <div>
            <TransactionTable filter={filter}/>
          </div>
        </main>
      </div>
    </div>
  );
}
