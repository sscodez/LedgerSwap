'use client'
import React from 'react';

const RewardsBanner = () => {
  return (
    <div className="w-full px-2 sm:px-0">
      <div className="relative bg-gradient-to-r from-[#162456] to-[#162456] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-md overflow-hidden min-h-[160px] sm:min-h-[180px] md:min-h-[200px]">
        {/* Mobile-friendly background overlay for small screens */}
        <div className="absolute inset-0 bg-[#162456]/30 sm:bg-transparent z-0"></div>
        
        {/* Left decoration - Gift boxes - Now visible on all screens but positioned differently */}
        <div className="absolute -left-[60px] sm:-left-[30px] md:-left-[60px] lg:-left-[80px] bottom-0 w-[150px] sm:w-[220px] md:w-[300px] lg:w-[350px] h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] pointer-events-none opacity-60 sm:opacity-90 z-0">
          <img
            src="/assests/landing-page/img-2.png"
            alt="Gift boxes"
            width="200"
            height="200"
            className="w-full h-full mt-10 object-contain"
            loading="eager"
          />
        </div>

        {/* Content - Centered with improved spacing for all screen sizes */}
        <div className="relative mx-auto py-4 sm:py-5 md:py-6 flex flex-col items-center justify-center text-center w-full z-10 px-3 sm:px-4 md:px-6">
          <div className="text-xs sm:text-sm md:text-base text-white/90 mb-1 sm:mb-2 md:mb-3 font-medium">Grab your welcome reward!</div>
          <h3 className="text-base sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 md:mb-2 leading-tight">
            Sign up to earn 0.4% USDT
          </h3>
          <h3 className="text-base sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
            cashback on your first swap
          </h3>
          <button className="group transition-all duration-300  text-white px-3 sm:px-5 md:px-6 py-1.5 sm:py-2.5 md:py-3 rounded-lg flex items-center font-semibold text-xs sm:text-base">
            Explore
            <span className="inline-flex ml-1.5 sm:ml-2 transition-transform group-hover:translate-x-1 text-base sm:text-lg">
              →
            </span>
          </button>
        </div>

        {/* Right decoration - Money bag - Now visible on all screens but positioned differently */}
        <div className="absolute -right-[60px] sm:-right-[30px] md:-right-[60px] lg:-right-[80px] bottom-0 w-[150px] sm:w-[220px] md:w-[300px] lg:w-[350px] h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] pointer-events-none opacity-60 sm:opacity-90 z-0">
          <img
            src="/assests/landing-page/img-1.png"
            alt="Money bag"
            width="260"
            height="260"
            className="w-full h-full mt-10 object-contain"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default RewardsBanner;
