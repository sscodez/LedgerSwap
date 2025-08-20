'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

// Animation styles for dropdowns
const dropdownAnimation = {
  '@keyframes slideDownAndFade': {
    from: { opacity: 0, transform: 'translateY(-2px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
};

// Add the animation to the global styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes slideDownAndFade {
      from { opacity: 0; transform: translateY(-2px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-slideDownAndFade {
      animation: slideDownAndFade 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
  `;
  document.head.appendChild(style);
}

const ExchangeSection = () => {
  const [sendAmount, setSendAmount] = useState('12954.89');
  const [receiveAmount, setReceiveAmount] = useState('12954.89');
  
  const [sendCurrency, setSendCurrency] = useState({ 
    name: 'ETH', 
    fullName: 'Ethereum', 
    icon: '/assests/cryptocurrency/eth.png', 
    color: '#74D4FF' 
  });
  
  const [receiveCurrency, setReceiveCurrency] = useState({ 
    name: 'BTC', 
    fullName: 'Bitcoin', 
    icon: '/assests/cryptocurrency/btc.png', 
    color: '#FF8904' 
  });

  const cryptocurrencies = [
    { name: 'ETH', fullName: 'Ethereum', icon: '/assests/cryptocurrency/eth.png', color: '#74D4FF' },
    { name: 'BTC', fullName: 'Bitcoin', icon: '/assests/cryptocurrency/btc.png', color: '#FF8904' },
    { name: 'USDT', fullName: 'Tether', icon: '/assests/cryptocurrency/usdt.png', color: '#26A17B' },
    { name: 'SOL', fullName: 'Solana', icon: '/assests/cryptocurrency/sol.png', color: '#9945FF' }
  ];

  const handleNumericInput = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

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
                <div className="p-2 flex items-center flex-1">
                  <div className="text-sm font-semibold text-gray-500 mr-4 min-w-[70px]">You send</div>
                  <input
                    type="text"
                    value={sendAmount}
                    onChange={(e) => handleNumericInput(e.target.value, setSendAmount)}
                    className="text-black font-semibold text-base md:text-lg bg-transparent outline-none text-right w-full"
                    placeholder="0.00"
                  />
                </div>
                <div className="bg-[#E5E7EB] p-2 flex items-center justify-between h-full">
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button className="flex items-center outline-none">
                        <div className="flex items-center">
                          <Image src={sendCurrency.icon} alt={sendCurrency.fullName} width={20} height={20} className="mr-1" />
                          <span className="font-medium mr-1 text-sm">{sendCurrency.name}</span>
                          <span className="text-black text-[10px] px-1.5 py-0.5 rounded-full" style={{ backgroundColor: sendCurrency.color }}>{sendCurrency.name}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="bg-white rounded-lg shadow-xl min-w-[200px] z-[999999] animate-slideDownAndFade p-1">
                        {cryptocurrencies.map((crypto) => (
                          <DropdownMenu.Item 
                            key={crypto.name}
                            onClick={() => setSendCurrency(crypto)}
                            className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer"
                          >
                            <Image src={crypto.icon} alt={crypto.fullName} width={20} height={20} className="mr-2" />
                            <span className="font-medium   text-black mr-2">{crypto.name}</span>
                            <span className="text-black text-[10px] px-1.5 py-0.5 rounded-full ml-auto" style={{ backgroundColor: crypto.color }}>{crypto.fullName}</span>
                          </DropdownMenu.Item>
                        ))}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
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
                <div className="p-2 flex items-center flex-1">
                  <div className="text-sm font-semibold text-gray-500 mr-4 min-w-[80px]">You receive</div>
                  <input
                    type="text"
                    value={receiveAmount}
                    onChange={(e) => handleNumericInput(e.target.value, setReceiveAmount)}
                    className="text-black font-semibold text-base md:text-lg bg-transparent outline-none text-right w-full"
                    placeholder="0.00"
                  />
                </div>
                <div className="bg-[#E5E7EB] p-2 flex items-center justify-between h-full">
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button className="flex items-center outline-none">
                        <div className="flex items-center">
                          <Image src={receiveCurrency.icon} alt={receiveCurrency.fullName} width={20} height={20} className="mr-1" />
                          <span className="font-medium mr-1 text-sm">{receiveCurrency.name}</span>
                          <span className="text-white text-[10px] px-1.5 py-0.5 rounded-full" style={{ backgroundColor: receiveCurrency.color }}>{receiveCurrency.name}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="bg-white rounded-lg shadow-xl min-w-[200px] z-[999999] animate-slideDownAndFade p-1">
                        {cryptocurrencies.map((crypto) => (
                          <DropdownMenu.Item 
                            key={crypto.name}
                            onClick={() => setReceiveCurrency(crypto)}
                            className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer"
                          >
                            <Image src={crypto.icon} alt={crypto.fullName} width={20} height={20} className="mr-2" />
                            <span className="font-medium text-black mr-2">{crypto.name}</span>
                            <span className="text-black text-[10px] px-1.5 py-0.5 rounded-full ml-auto" style={{ backgroundColor: crypto.color }}>{crypto.fullName}</span>
                          </DropdownMenu.Item>
                        ))}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
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
