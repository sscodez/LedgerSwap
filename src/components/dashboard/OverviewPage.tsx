import React from 'react';
import RewardsBanner from './WelcomeBanner';
import AccountOverview from './AccountOverview';
import UsdtSwitchBanner from './UsdtSwitchBanner';

const OverviewPage: React.FC = () => {
  return (
    <div className="">
      {/* Full-width welcome banner */}
     
        <RewardsBanner />
 
      
     
        {/* Main content */}
        <br/>
        <br/>
        <br/>

          {/* Account statistics */}
          <AccountOverview />
      
        
        {/* Side content */}
        <div className="w-full xl:w-64 order-1 xl:order-2">
          {/* Additional side components can be added here */}
        </div>
      </div>
    
  );
};

export default OverviewPage;
