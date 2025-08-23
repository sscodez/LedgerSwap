'use client'
import React from 'react';
import Image from 'next/image';

const FeatureGrid = () => {
  return (
    <section className="bg-[#001233] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Privacy Card */}
          <div className="bg-[#0A1E56] rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="mb-4 sm:mb-6 md:mb-8 pr-20 sm:pr-24 md:pr-28">
              <h5 className="text-blue-400 text-xs sm:text-sm mb-2 sm:mb-4">Privacy</h5>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Sign-up is not required</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                InterledgerSwap provides cryptocurrency exchange 
              </p>
              <p className="text-gray-300 text-xs sm:text-sm">without registration.</p>
            </div>
            <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2">
              <Image 
                src="/assests/landing-page/privacy.png" 
                width={120} 
                height={120} 
                alt="Privacy"
                className="object-contain w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
              />
            </div>
          </div>

          {/* Safety Card */}
          <div className="bg-[#0A1E56] rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="mb-4 sm:mb-6 md:mb-8 pr-20 sm:pr-24 md:pr-28">
              <h5 className="text-blue-400 text-xs sm:text-sm mb-2 sm:mb-4">Safety</h5>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Your crypto, your control</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Crypto is sent directly to your wallet; we don&apos;t 
              </p>
              <p className="text-gray-300 text-xs sm:text-sm">store it on our servers.</p>
            </div>
            <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2">
              <Image 
                src="/assests/landing-page/safety.png" 
                width={120} 
                height={120} 
                alt="Safety" 
                className="object-contain w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
              />
            </div>
          </div>

          {/* Endless Choices Card */}
          <div className="bg-[#0A1E56] rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="mb-4 sm:mb-6 md:mb-8 pr-20 sm:pr-24 md:pr-28">
              <h5 className="text-blue-400 text-xs sm:text-sm mb-2 sm:mb-4">Endless choices</h5>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">1500 cryptocurrencies</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Over a hundred crypto and fiat options available 
              </p>
              <p className="text-gray-300 text-xs sm:text-sm">for instant exchange.</p>
            </div>
            <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2">
              <div className="flex gap-2">
                <Image 
                  src="/assests/landing-page/coins.png" 
                  width={120} 
                  height={120} 
                  alt="Bitcoin" 
                  className="object-contain w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
                />
              </div>
            </div>
          </div>

          {/* 24/7 Support Card */}
          <div className="bg-[#0A1E56] rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="mb-4 sm:mb-6 md:mb-8 pr-20 sm:pr-24 md:pr-28">
              <h5 className="text-blue-400 text-xs sm:text-sm mb-2 sm:mb-4">24/7 support</h5>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">We&apos;ve got your back</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Easy-to-reach support, always ready with answers.
              </p>
            </div>
            <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2">
              <Image 
                src="/assests/landing-page/support.png" 
                width={120} 
                height={120} 
                alt="24/7 Support" 
                className="object-contain w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
