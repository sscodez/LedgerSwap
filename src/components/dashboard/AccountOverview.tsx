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
    <div className=" rounded-lg  p-4">
      <div className="mb-2 text-sm text-gray-500 font-semibold">{title}</div>
      <div className="flex items-center">
        <div className="mr-2 bg-gray-200 rounded-sm p-2">
          {icon}
        </div>
        <div>
          <p className="text-lg text-black font-medium">{value}</p>
        </div>
      </div>
    </div>
  );
};

const AccountOverview: React.FC = () => {
  return (
    <div className="w-full  mb-8">
      <h2 className="text-xl font-medium mb-4 text-gray-800">Overview</h2>
      
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4  bg-white p-6 rounded-lg">
        {/* Account Balance */}
        <StatCard 
          title="Account balance" 
          value="0 USDT"
          icon={(
         <Image src="/assests/icons/paid.png" alt="USDT" width={20} height={20} />
          )} 
        />
        
        {/* 90-day Transaction Volume */}
        <StatCard 
          title="90-day transaction volume" 
          value="0 USDT"
          icon={(
            <Image src="/assests/icons/logo 4.png" alt="USDT" width={20} height={20} />
          )} 
        />
        
        {/* Current Transaction Fee */}
        <StatCard 
          title="Current transaction fee" 
          value="0.05%"
          icon={(
            <Image src="/assests/icons/account_balance_wallet.svg" alt="USDT" width={20} height={20} />
          )} 
        />
      </div>
    </div>
  );
};

export default AccountOverview;
