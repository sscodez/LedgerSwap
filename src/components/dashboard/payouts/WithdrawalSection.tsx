import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import CopyButton from '@/components/shared/CopyButton';
import { BsInfoCircle } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";

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

// Define available cryptocurrencies
const availableCryptos = [
  { symbol: 'USDT', name: 'Tether', image: '/assests/cryptocurrency/usdt.png', network: 'SOL', tag: 'BTC' },
  { symbol: 'BTC', name: 'Bitcoin', image: '/assests/cryptocurrency/btc.png', network: 'BTC', tag: 'BTC' },
  { symbol: 'ETH', name: 'Ethereum', image: '/assests/cryptocurrency/eth.png', network: 'ETH', tag: 'ETH' },
  { symbol: 'SOL', name: 'Solana', image: '/assests/cryptocurrency/sol.png', network: 'SOL', tag: 'SOL' },
  { symbol: 'USDC', name: 'USD Coin', image: '/assests/cryptocurrency/usdc.png', network: 'SOL', tag: 'USDC' },
  { symbol: 'LTC', name: 'Litecoin', image: '/assests/cryptocurrency/ltc.png', network: 'LTC', tag: 'LTC' },
  { symbol: 'XMR', name: 'Monero', image: '/assests/cryptocurrency/xmr.png', network: 'XMR', tag: 'XMR' }
];

const WithdrawalSection: React.FC<WithdrawalSectionProps> = ({ 
  balance, 
  address,
  minWithdrawal
}) => {
  const [selectedCrypto, setSelectedCrypto] = useState(availableCryptos[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Copy address to clipboard
  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    // Could add toast notification here
  };
  
  // Handle cryptocurrency selection
  const handleCryptoSelect = (crypto: typeof availableCryptos[0]) => {
    setSelectedCrypto(crypto);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 mb-6 sm:mb-8">
      <div className="flex items-center mb-2">
        {/* Crypto Icon */}
        <p className='font-bold text-black text-sm sm:text-base'>0 {selectedCrypto.symbol} <span className='bg-[#FF8904] font-medium text-[10px] sm:text-[11px] py-0.5 sm:py-1 px-1.5 sm:px-2 text-white rounded-full ml-1'>{selectedCrypto.tag}</span> withdrawal</p>
        {/* Balance Amount */}
      </div>

      {/* Network information */}
      <div className="mb-4 sm:mb-6">
        <p className="text-gray-600 text-[12px] sm:text-[13px]">
          This {selectedCrypto.symbol} address in {selectedCrypto.network} network will be used to receive requested withdrawals.
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
            {/* Cryptocurrency Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-2 transition-colors"
              >
                <Image 
                  src={selectedCrypto.image} 
                  alt={selectedCrypto.name} 
                  width={40} 
                  height={40} 
                  className="w-6 h-6 sm:w-7 sm:h-7 mr-2" 
                />
                <span className="font-medium text-sm sm:text-base">{selectedCrypto.symbol}</span>
                <IoChevronDownOutline className="ml-2" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 w-48">
                  {availableCryptos.map((crypto) => (
                    <button
                      key={crypto.symbol}
                      className="flex items-center w-full px-3 py-2 text-left hover:bg-gray-100 transition-colors"
                      onClick={() => handleCryptoSelect(crypto)}
                    >
                      <Image 
                        src={crypto.image} 
                        alt={crypto.name} 
                        width={24} 
                        height={24} 
                        className="w-5 h-5 mr-2" 
                      />
                      <span className="text-sm">{crypto.name}</span>
                      <span className="text-xs text-gray-500 ml-1">({crypto.symbol})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="ml-3 sm:ml-4">
              <div className="flex text-black items-center">
                <span className="text-2xl sm:text-3xl font-semibold">{balance.amount}</span>
                <span className="ml-1 sm:ml-2 font-semibold text-lg sm:text-xl">{selectedCrypto.symbol}</span>
              </div>
            </div>
          </div>
          <div className='flex rounded-full items-center border-gray-200 border-2 px-2 py-1 text-xs sm:text-sm max-w-full'>
            <BsInfoCircle className='mr-1'/>
            <span>Minimum withdrawal is {minWithdrawal} {selectedCrypto.symbol}</span>
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
