'use client'
import React from 'react';

const RewardsBanner = () => {
  return (

      <div className="w-full px-0">
        <div className="relative bg-gradient-to-r from-[#162456] to-[#162456] rounded-xl sm:rounded-2xl md:rounded-3xl shadow-md flex items-center justify-between min-h-[180px] sm:min-h-[200px]">
          {/* Left decoration - Gift boxes - Hidden on small mobile, visible on larger screens */}
          <div className="hidden sm:block absolute -left-[20px] sm:-left-[40px] md:-left-[80px] lg:-left-[100px] bottom-0 w-[200px] sm:w-[300px] md:w-[400px] h-[150px] sm:h-[180px] md:h-[200px] pointer-events-none ">
            <img
              src="/assests/landing-page/img-2.png"
              alt="Gift boxes"
              width="200"
              height="200"
              className="w-full h-full mt-10 object-contain opacity-90"
              loading="eager"
            />
          </div>

          {/* Content */}
          <div className="mx-auto py-4 sm:py-6 flex flex-col items-center justify-center text-center w-full z-10 px-3 sm:px-4">
            <div className="text-xs sm:text-sm md:text-base text-white/90 mb-2 sm:mb-3 font-medium">Grab your welcome reward!</div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 leading-tight">
              Sign up to earn 0.4% USDT
            </h3>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              cashback on your first swap
            </h3>
            <button className="group transition-all duration-300 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center font-semibold text-sm sm:text-base">
              Claim Rewards
              <span className="inline-flex ml-2 transition-transform group-hover:translate-x-1 text-lg">
                →
              </span>
            </button>
          </div>

          {/* Right decoration - Money bag - Hidden on small mobile, visible on larger screens */}
          <div className="hidden sm:block absolute -right-[20px] sm:-right-[40px] md:-right-[80px] lg:-right-[100px] bottom-0 w-[200px] sm:w-[300px] md:w-[400px] h-[150px] sm:h-[180px] md:h-[200px] pointer-events-none ">
            <img
              src="/assests/landing-page/img-1.png"
              alt="Money bag"
              width="260"
              height="260"
              className="w-full h-full mt-10 object-contain opacity-90"
              loading="eager"
            />
          </div>
        </div>
      </div>

  );
};

export default RewardsBanner;
