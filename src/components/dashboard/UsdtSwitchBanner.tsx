import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const UsdtSwitchBanner: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
      <h3 className="font-bold text-center text-base sm:text-lg mb-1 sm:mb-2">
        We&apos;ve Switched to USDT!
      </h3>
      
      <p className="text-xs sm:text-sm text-center mb-3 sm:mb-4">
        Unlock special deals with LedgerSwap — powered by the world&apos;s leading stablecoin.
      </p>
      
      <Link 
        href="/blog/switched-to-usdt" 
        className="block text-center text-xs sm:text-sm mb-3 sm:mb-4 hover:underline"
      >
        Read the article →
      </Link>
      
      {/* Coin icons */}
      <div className="flex justify-center">
        <Image 
          src="/assests/landing-page/coins.png" 
          alt="Cryptocurrency coins" 
          width={232} 
          height={232} 
          className="w-[180px] sm:w-[200px] md:w-[232px] h-auto"
        />
      </div>
    </div>
  );
};

export default UsdtSwitchBanner;
