import React from 'react';
import UsdtSwitchBanner from './UsdtSwitchBanner';
import Image from 'next/image';
interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-gray-50 md:bg-transparent rounded-lg p-4 md:p-3 border md:border-0 border-gray-200">
      <div className="mb-2 md:mb-1 text-sm md:text-xs text-gray-500 font-semibold">{title}</div>
      <div className="flex items-center justify-between md:justify-start">
        <div className="flex items-center">
          <div className="mr-3 md:mr-2 bg-gray-200 rounded-sm p-2 md:p-1.5">
            {icon}
          </div>
          <div>
            <p className="text-lg md:text-sm font-semibold md:font-medium text-black">{value}</p>
          </div>
        </div>
        <div className="md:hidden">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const AccountOverview: React.FC = () => {
  return (
    <div className="w-full mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-xl font-medium mb-3 sm:mb-4 text-gray-800">Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3 md:bg-white md:p-6 md:rounded-lg">
        {/* Account Balance */}
        <StatCard 
          title="Account balance" 
          value="0 USDT"
          icon={(
            <Image src="/assests/icons/paid.png" alt="USDT" width={18} height={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          )} 
        />
        
        {/* 90-day Transaction Volume */}
        <StatCard 
          title="90-day transaction volume" 
          value="0 USDT"
          icon={(
            <Image src="/assests/icons/logo4.png" alt="USDT" width={18} height={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          )} 
        />
        
        {/* Current Transaction Fee */}
        <StatCard 
          title="Current transaction fee" 
          value="0.05%"
          icon={(
            <Image src="/assests/icons/account_balance_wallet.svg" alt="USDT" width={18} height={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          )} 
        />
      </div>
    </div>
  );
};

export default AccountOverview;
