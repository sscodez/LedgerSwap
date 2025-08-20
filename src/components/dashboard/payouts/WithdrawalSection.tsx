import Image from 'next/image';
import React from 'react';

interface WithdrawalSectionProps {
  balance: {
    amount: number;
    currency: string;
    network?: string;
    tag?: string;
  };
  address: string;
  minWithdrawal: number;
}

const WithdrawalSection: React.FC<WithdrawalSectionProps> = ({ 
  balance, 
  address,
  minWithdrawal
}) => {
  // Copy address to clipboard
  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    // Could add toast notification here
  };

  return (
    <div className="bg-white rounded-lg p-6  border border-gray-200 mb-8">
      <div className="flex items-center mb-2">
        {/* USDT Icon */}
      
        <p className='font-bold text-black'>0 USDT <span className='bg-[#FF8904] font-medium text-[11px] py-1 px-2 text-white rounded-full'>BTC</span>  withdrwal</p>
        {/* Balance Amount */}
   
      </div>

      {/* Network information */}
      <div className="mb-6">
        <p className="text-gray-600 text-[13px]">
          This {balance.currency} address in {balance.network} network will be used to receive requested withdrawals.
        </p>
      </div>

      {/* Withdrawal address */}
      <div className="bg-[#E2E8F0]  rounded-lg py-3 px-4 flex items-center justify-between mb-6">
        <div className="font-mono text-gray-700 truncate mr-4">
          {address}
        </div>
        <button 
          onClick={copyAddress} 
          className="text-blue-600 hover:text-blue-800"
        >
         <Image src="/assests/icons/file_copy.svg" alt='Copy' width={15} height={15}  />
        </button>
      </div>
      
      {/* Support link */}
      <div className="flex justify-end mb-6">
        <span className="text-[13px] text-gray-600 mr-2">Need to change payout address?</span>
        <a href="#" className="text-[13px] text-blue-600 font-medium">Contact support.</a>
      </div>

      <div className='border-b border-gray-200 rounded-lg  mb-6 w-full'></div>

      {/* Withdrawal action */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col items-start   text-gray-500">
          <div className='flex items-center mb-3'>
        <div className="mr-3">
         <Image src="/assests/cryptocurrency/usdt.png" alt="Withdrawal" width={50} height={50} />
        </div>
        <div>
          <div className="flex text-black items-center">
            <span className="text-3xl font-semibold">{balance.amount}</span>
            <span className="ml-2 font-semibold text-xl">{balance.currency}</span>
       
          </div>
        </div>
        </div>
        <div className=' flex rounded-full border-gray-200 border-2 px-2 py-1'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="  text-sm">Minimum withdrawal is {minWithdrawal} {balance.currency}</span>
        </div>
        </div>
        <button 
          className={`px-8 py-3 text-sm rounded-lg font-semibold ${
            balance.amount >= minWithdrawal 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          } transition-colors`}
          disabled={balance.amount < minWithdrawal}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default WithdrawalSection;
