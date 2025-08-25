import Image from 'next/image';
import React from 'react';
import CopyButton from '@/components/shared/CopyButton';
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
    <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 mb-6 sm:mb-8">
      <div className="flex items-center mb-2">
        {/* USDT Icon */}
        <p className='font-bold text-black text-sm sm:text-base'>0 USDT <span className='bg-[#FF8904] font-medium text-[10px] sm:text-[11px] py-0.5 sm:py-1 px-1.5 sm:px-2 text-white rounded-full ml-1'>BTC</span> withdrawal</p>
        {/* Balance Amount */}
      </div>

      {/* Network information */}
      <div className="mb-4 sm:mb-6">
        <p className="text-gray-600 text-[12px] sm:text-[13px]">
          This {balance.currency} address in {balance.network} network will be used to receive requested withdrawals.
        </p>
      </div>

      {/* Withdrawal address */}
      <div className="bg-[#E2E8F0] rounded-lg py-2 sm:py-3 px-3 sm:px-4 flex items-center justify-between mb-4 sm:mb-6">
        <div className="font-mono text-gray-700 truncate mr-2 sm:mr-4 text-xs sm:text-sm">
          {address}
        </div>
    
        <CopyButton textToCopy={address} />
      </div>
      
      {/* Support link */}
      <div className="flex flex-wrap justify-end mb-4 sm:mb-6">
        <span className="text-[12px] sm:text-[13px] text-gray-600 mr-1 sm:mr-2">Need to change payout address?</span>
        <a href="#" className="text-[12px] sm:text-[13px] text-blue-600 font-medium">Contact support.</a>
      </div>

      <div className='border-b border-gray-200 rounded-lg mb-4 sm:mb-6 w-full'></div>

      {/* Withdrawal action */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-0">
        <div className="flex flex-col items-center sm:items-start text-gray-500 w-full sm:w-auto">
          <div className='flex items-center mb-2 sm:mb-3'>
            <div className="mr-2 sm:mr-3">
              <Image src="/assests/cryptocurrency/usdt.png" alt="Withdrawal" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="flex text-black items-center">
                <span className="text-2xl sm:text-3xl font-semibold">{balance.amount}</span>
                <span className="ml-1 sm:ml-2 font-semibold text-lg sm:text-xl">{balance.currency}</span>
              </div>
            </div>
          </div>
          <div className='flex rounded-full border-gray-200 border-2 px-2 py-1 text-xs sm:text-sm max-w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Minimum withdrawal is {minWithdrawal} {balance.currency}</span>
          </div>
        </div>
        <button 
          className={`px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg font-semibold w-full sm:w-auto mt-2 sm:mt-0 ${
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
