import Image from 'next/image';
import { SummaryCardProps } from '../types';
import menu from "../Assets/Icons/Union.svg"; 

export default function SummaryCard({ title, value, change, changeType }: SummaryCardProps) {
  return (
    <div className="bg-[#34616F09] rounded-[20px] p-7 relative flex flex-col gap-[18px] min-w-[223px]">
      <div className="flex items-center justify-between">
        <div className="text-[17px] text-[#1B2528] font-bold">{title}</div>
        <Image src={menu} alt="" width={24} height={24} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-[34px] font-bold text-[#1B2528]">{value}</div>
        <span className={`text-[13px] font-medium text-primary`}>
          {change}
        </span>
      </div>
    </div>
  );
} 