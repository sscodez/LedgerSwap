import React from 'react';
import RewardsBanner from './WelcomeBanner';
import AccountOverview from './AccountOverview';
import UsdtSwitchBanner from './UsdtSwitchBanner';

const OverviewPage: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      {/* Full-width welcome banner */}
      <div className="mb-6 sm:mb-8">
        <RewardsBanner />
      </div>
      
      {/* Main content */}
      <div className="space-y-6 sm:space-y-8">
        {/* Account statistics */}
        <AccountOverview />
        
        {/* Side content */}
        <div className="w-full xl:w-64 order-1 xl:order-2">
          {/* Additional side components can be added here */}
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
