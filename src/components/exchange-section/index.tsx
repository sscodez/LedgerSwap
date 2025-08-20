'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const ExchangeSection = () => {
  const [sendAmount, setSendAmount] = useState('12,954.89');
  const [receiveAmount, setReceiveAmount] = useState('12,954.89');
  const [sendCurrency, setSendCurrency] = useState('ETH');
  const [receiveCurrency, setReceiveCurrency] = useState('BTC');

  const handleExchange = () => {
    // Exchange functionality would be implemented here
    console.log('Exchange initiated');
  };

  return (
    <section className="py-6 md:py-10 bg-white text-black">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-6xl border border-gray-100 shadow-sm bg-gray-50 p-3 md:p-4 rounded-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-2">
            {/* You Send */}
            <div className="col-span-1 md:col-span-5">
              <div className="border border-gray-100 rounded-lg flex items-center overflow-hidden h-14">
                <div className="p-2 flex items-center justify-between flex-1">
                  <div className="text-xs font-semibold text-gray-500">You send</div>
                  <div className="text-black font-semibold text-base md:text-lg">≈ $12,954.89</div>
                </div>
                <div className="bg-[#E5E7EB] p-2 flex items-center justify-between h-full">
                  <div className="flex items-center">
                    <Image src="/assests/cryptocurrency/eth.png" alt="Ethereum" width={20} height={20} className="mr-1" />
                    <span className="font-medium mr-1 text-sm">ETH</span>
                    <span className="bg-[#74D4FF] text-white text-[10px] px-1.5 py-0.5 rounded-full">ETH</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="col-span-1 md:col-span-1 flex justify-center items-center">
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            {/* You Receive */}
            <div className="col-span-1 md:col-span-5">
              <div className="border border-gray-100 rounded-lg flex items-center overflow-hidden h-14">
                <div className="p-2 flex items-center justify-between flex-1">
                  <div className="text-xs font-semibold text-gray-500">You receive</div>
                  <div className="text-black font-semibold text-base md:text-lg">≈ $12,954.89</div>
                </div>
                <div className="bg-[#E5E7EB] p-2 flex items-center justify-between h-full">
                  <div className="flex items-center">
                    <Image src="/assests/cryptocurrency/btc.png" alt="Bitcoin" width={20} height={20} className="mr-1" />
                    <span className="font-medium mr-1 text-sm">BTC</span>
                    <span className="bg-[#FF8904] text-white text-[10px] px-1.5 py-0.5 rounded-full">BTC</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Exchange Button */}
            <div className="col-span-1 md:col-span-1 flex items-center">
              <button 
                onClick={handleExchange}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors text-sm"
              >
                Exchange
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeSection;
