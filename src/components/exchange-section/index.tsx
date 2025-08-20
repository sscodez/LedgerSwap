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
    <section className="py-12 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl bg-gray-50 p-4 rounded-lg mx-auto">
          <div className="flex   flex-col md:flex-row items-stretch justify-between gap-3">
            {/* You Send */}
            <div className="w-full md:w-[35%]">
            
                <div className="border border-gray-100 rounded-lg flex justify-between items-center overflow-hidden">
                  <div className="p-2 flex flex-row">
                    <div className="text-[11px] font-[600] text-gray-500 mb-1">You send</div>
                    <div className="text-black font-semibold text-lg">≈ $12,954.89</div>
                  </div>
                  <div className="bg-[#E5E7EB] p-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <Image src="/assests/cryptocurrency/eth.png" alt="Ethereum" width={24} height={24} className="mr-2" />
                      <span className="font-medium mr-2">ETH</span>
                      <span className="bg-[#74D4FF] text-white text-[11px] px-2 py-1 rounded-full">ETH</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
        
            </div>

            {/* Swap Button */}
            <div className="flex-shrink-0 my-2 md:my-0 flex items-center justify-center md:mx-2">
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            {/* You Receive */}
            <div className="w-full md:w-[35%]">
            
                <div className="border border-gray-100 rounded-lg flex items-center justify-between overflow-hidden">
                  <div className="p-2 flex flex-row">
                    <div className="text-[11px] font-[600] text-gray-500 mb-1">You receive</div>
                    <div className="text-black font-semibold text-lg">≈ $12,954.89</div>
                  </div>
                  <div className="bg-[#E5E7EB] p-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <Image src="/assests/cryptocurrency/btc.png" alt="Bitcoin" width={24} height={24} className="mr-2" />
                      <span className="font-medium mr-2">BTC</span>
                      <span className="bg-[#FF8904] text-white text-[11px] px-2 py-1 rounded-full">BTC</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              
            </div>

            {/* Exchange Button */}
            <div className="w-full md:w-[20%] flex items-center">
              <button 
                onClick={handleExchange}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
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
