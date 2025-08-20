'use client'
import React from 'react';
import Image from 'next/image';

interface CryptoCurrencyProps {
  symbol: string;
  showBadge?: boolean;
  showDropdown?: boolean;
}

const CryptoCurrency = ({ symbol, showBadge = true, showDropdown = true }: CryptoCurrencyProps) => {
  const lowerSymbol = symbol.toLowerCase();
  
  const getBadgeColor = (symbol: string) => {
    switch (symbol) {
      case 'BTC': return 'bg-[#FF8904]';
      case 'ETH': return 'bg-blue-500';
      case 'SOL': return 'bg-purple-500';
      case 'USDT': return 'bg-green-500';
      case 'LTC': return 'bg-gray-500';
      case 'XMR': return 'bg-orange-700';
      case 'USD': return 'bg-blue-200';
      case 'EUR': return 'bg-blue-200';
      default: return 'bg-gray-200';
    }
  };
  
  return (
    <div className="flex items-center w-full">
      <div className="w-6 h-6 rounded-full mr-2 flex items-center justify-center overflow-hidden">
        <Image
          src={`/assests/cryptocurrency/${lowerSymbol}.png`}
          alt={symbol}
          width={24}
          height={24}
        />
      </div>
      <span className="font-medium mr-2">{symbol}</span>
      {showBadge && (
        <span className={`${getBadgeColor(symbol)} text-white text-[11px] px-2 py-1 rounded-full`}>
          {symbol}
        </span>
      )}
      {showDropdown && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </div>
  );
};

export default CryptoCurrency;
