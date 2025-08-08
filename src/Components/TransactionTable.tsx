import Image from 'next/image';
import { Transaction, TransactionTableProps } from '../types';
import carret from "../Assets/Icons/caret-down-grey.svg";

const transactions: Transaction[] = [
  { id: '1', date: '2023-10-01', remark: 'Salary', amount: 3000, currency: 'USD', type: 'Credit' },
  { id: '2', date: '2023-10-02', remark: 'Groceries', amount: -150, currency: 'USD', type: 'Debit' },
  { id: '3', date: '2023-10-03', remark: 'Gym Membership', amount: -50, currency: 'USD', type: 'Debit' },
  { id: '4', date: '2023-10-04', remark: 'Dinner', amount: -40, currency: 'USD', type: 'Debit' },
  { id: '5', date: '2023-10-05', remark: 'Movie Tickets', amount: -30, currency: 'USD', type: 'Debit' },
  { id: '6', date: '2023-10-06', remark: 'Rent', amount: -1200, currency: 'USD', type: 'Debit' },
  { id: '7', date: '2023-10-07', remark: 'Utilities', amount: -100, currency: 'USD', type: 'Debit' },
  { id: '8', date: '2023-10-08', remark: 'Car Payment', amount: -400, currency: 'USD', type: 'Debit' },
  { id: '9', date: '2023-10-09', remark: 'Insurance', amount: -200, currency: 'USD', type: 'Debit' },
];

export default function TransactionTable({ transactions: propTransactions }: TransactionTableProps = {}) {
  const displayTransactions = propTransactions || transactions;
  
  return (
    <div className="rounded-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#49656E20] border-spacing-[18px]">
              <th className="py-2 text-left text-[13px] mr-[18px] font-medium text-[#15272D9e]">
                <button className="flex items-center">
                  Date
                  <Image src={carret} alt="" width={24} height={24} className='cursor-pointer'/>
                </button>
              </th>
              <th className="py-2 text-left text-[13px] mr-[18px] font-medium text-[#15272D9e] w-max">
                <button className="flex items-center">
                  Remark
                  <Image src={carret} alt="" width={24} height={24} className='cursor-pointer'/>
                </button>
              </th>
              <th className="py-2 text-right text-[13px] mr-[18px] font-medium text-[#15272D9e] w-max">
                <button className="flex items-center">
                  Amount
                  <Image src={carret} alt="" width={24} height={24} className='cursor-pointer'/>
                </button>
              </th>
              <th className="py-2 text-left text-[13px] mr-[18px] font-medium text-[#15272D9e] w-max">
                <button className="flex items-center">
                  Currency
                  <Image src={carret} alt="" width={24} height={24} className='cursor-pointer'/>
                </button>
              </th>
              <th className="py-2 text-left text-[13px] mr-[18px] font-medium text-[#15272D9e] w-max">
                <button className="flex items-center">
                  Type
                  <Image src={carret} alt="" width={24} height={24} className='cursor-pointer'/>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {displayTransactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50 border-spacing-[18px]">
                <td className="border-b border-[#49656E20] py-[18px] text-sm text-[#1B2528] mr-[18px] w-[50%]">
                  {transaction.date}
                </td>
                <td className="border-b border-[#49656E20] py-[18px] text-sm text-[#1B2528] mr-[18px]">
                  {transaction.remark}
                </td>
                <td className="border-b border-[#49656E20] py-[18px] text-sm text-[#1B2528] mr-[18px]">
                  {transaction.amount >= 0 ? `$${transaction.amount.toLocaleString()}` : `-$${Math.abs(transaction.amount).toLocaleString()}`}
                </td>
                <td className="border-b border-[#49656E20] py-[18px] text-sm text-[#1B2528] mr-[18px]">
                  {transaction.currency}
                </td>
                <td className="border-b border-[#49656E20] py-[18px] mr-[18px] w-max">
                  <div className="flex items-center gap-2 bg-[#34616F09] text-[#1B2528] rounded-full py-1 px-2">
                    <div className={`w-[6px] h-[6px] rounded-full ${transaction.type === 'Credit' ? 'bg-[#087A2E]' : 'bg-[#C6381B]'}`}></div>
                    <span className={`text-[15px] font-medium`}>
                      {transaction.type}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 