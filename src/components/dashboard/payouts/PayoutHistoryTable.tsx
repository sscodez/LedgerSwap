import Image from 'next/image';
import React from 'react';

interface PayoutHistoryItem {
  id: string;
  amount: string;
  date: string;
  time: string;
  status: 'Pending' | 'Finished';
  address: string;
  fee: string;
}

interface PayoutHistoryTableProps {
  payouts: any;
}

const PayoutHistoryTable: React.FC<PayoutHistoryTableProps> = ({ payouts }) => {
  // Function to copy address to clipboard
  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    // Could add a toast notification here
  };

  return (
    <>
      {/* Table view for tablet and desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b border-black/20">
              <th className="py-3 md:py-4 px-4 md:px-6 text-left text-[12px] md:text-[13px] font-medium text-gray-500">Amount</th>
              <th className="py-3 md:py-4 px-4 md:px-6 text-left text-[12px] md:text-[13px] font-medium text-gray-500">
                <div className="flex items-center">
                  Date
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </th>
              <th className="py-3 md:py-4 px-4 md:px-6 text-left text-[12px] md:text-[13px] font-medium text-gray-500">Status</th>
              <th className="py-3 md:py-4 px-4 md:px-6 text-left text-[12px] md:text-[13px] font-medium text-gray-500">Payout address</th>
              <th className="py-3 md:py-4 px-4 md:px-6 text-left text-[12px] md:text-[13px] font-medium text-gray-500">Platform Fees</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout:any) => (
              <tr key={payout.id} className="border-b border-black/20 hover:bg-gray-50">
                <td className="py-3 md:py-4 px-4 md:px-6 text-[12px] md:text-[13px] whitespace-nowrap text-gray-700">
                  {payout.amount}
                </td>
                <td className="py-3 md:py-4 px-4 md:px-6 text-[12px] md:text-[13px] whitespace-nowrap text-gray-600">
                  <div>
                    {payout.date}
                  </div>
                  <div className="text-[10px] md:text-[11px] text-gray-500">
                    {payout.time}
                  </div>
                </td>
                <td className="py-3 md:py-4 px-4 md:px-6 whitespace-nowrap">
                  <span className={`px-2 py-0.5 md:py-1 rounded-md text-[10px] md:text-xs font-medium ${
                    payout.status === 'Pending' 
                      ? ' text-blue-800' 
                      : ' text-green-800'
                  }`}>
                    {payout.status}
                  </span>
                </td>
                <td className="py-3 md:py-4 px-4 md:px-6 whitespace-nowrap text-[12px] md:text-[13px]">
                  <div className="flex items-center">
                    <span className="text-gray-700 font-mono truncate max-w-[150px] md:max-w-[200px]">
                      {payout.address}
                    </span>
                    <button 
                      onClick={() => copyAddress(payout.address)}
                      className="ml-1 md:ml-2 text-blue-600 hover:text-blue-800"
                      aria-label="Copy address"
                    >
                    <Image src={"/assests/icons/file_copy.svg"} alt="Copy" width={14} height={14} className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </button>
                  </div>
                </td>
                <td className="py-3 md:py-4 px-4 md:px-6 whitespace-nowrap">
                  <div className="text-black text-[12px] md:text-[13px]">
                    Fee
                  </div>
                  <div className="text-[12px] md:text-[13px] text-gray-700">
                    {payout.fee}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-3 sm:space-y-4">
        {payouts.map((payout:any) => (
          <div key={payout.id} className="bg-white rounded-lg shadow-sm p-3 sm:p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <div className="text-[14px] sm:text-[15px] font-medium">{payout.amount}</div>
              <span className={`px-2 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium ${
                payout.status === 'Pending' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {payout.status}
              </span>
            </div>
            
            <div className="space-y-2 sm:space-y-3 text-[12px] sm:text-[13px]">
              <div>
                <div className="text-gray-500 mb-0.5 sm:mb-1">Date</div>
                <div className="font-medium">{payout.date}, {payout.time}</div>
              </div>
              
              <div>
                <div className="text-gray-500 mb-0.5 sm:mb-1">Payout address</div>
                <div className="flex items-center">
                  <span className="font-mono text-gray-700 truncate block max-w-[75%] sm:max-w-[80%] text-[11px] sm:text-[12px]">
                    {payout.address}
                  </span>
                  <button 
                    onClick={() => copyAddress(payout.address)}
                    className="ml-1 sm:ml-2 text-blue-600 hover:text-blue-800"
                    aria-label="Copy address"
                  >
                    <Image src="/assests/icons/file_copy.svg" alt="Copy" width={14} height={14} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
              
              <div>
                <div className="text-gray-500 mb-0.5 sm:mb-1">Platform Fee</div>
                <div className="font-medium">{payout.fee}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PayoutHistoryTable;
