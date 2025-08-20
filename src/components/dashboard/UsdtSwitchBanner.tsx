import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const UsdtSwitchBanner: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white rounded-lg p-4 mb-6">
      <h3 className="font-bold text-center mb-2">
        We&apos;ve Switched to USDT!
      </h3>
      
      <p className="text-sm text-center mb-4">
        Unlock special deals with LedgerSwap — powered by the world&apos;s leading stablecoin.
      </p>
      
      <Link 
        href="/blog/switched-to-usdt" 
        className="block text-center text-sm mb-4"
      >
        Read the article →
      </Link>
      
      {/* Coin icons */}
      <div className="flex justify-center space-x-3">
    <Image src="/assests/landing-page/coins.png" alt="ETH" width={232} height={232} />
    
      </div>
    </div>
  );
};

export default UsdtSwitchBanner;
