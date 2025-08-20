'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Portal from '../ui/Portal';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('exchange');
  const [sendCurrency, setSendCurrency] = useState({ name: 'ETH', fullName: 'Ethereum', icon: '/assests/cryptocurrency/eth.png', color: '#74D4FF' });
  const [receiveCurrency, setReceiveCurrency] = useState({ name: 'BTC', fullName: 'Bitcoin', icon: '/assests/cryptocurrency/btc.png', color: '#FF8904' });
  const [sendAmount, setSendAmount] = useState('12,954.89');
  const [receiveAmount, setReceiveAmount] = useState('12,954.89');
  
  const cryptocurrencies = [
    { name: 'BTC', fullName: 'Bitcoin', icon: '/assests/cryptocurrency/btc.png', color: '#FF8904' },
    { name: 'ETH', fullName: 'Ethereum', icon: '/assests/cryptocurrency/eth.png', color: '#74D4FF' },
    { name: 'SOL', fullName: 'Solana', icon: '/assests/cryptocurrency/sol.png', color: '#9945FF' },
    { name: 'USDT', fullName: 'Tether', icon: '/assests/cryptocurrency/usdt.png', color: '#26A17B' },
    { name: 'USDC', fullName: 'USD Coin', icon: '/assests/cryptocurrency/usdc.png', color: '#2775CA' },
  ];
  
  // Handle input changes
  const handleSendAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSendAmount(e.target.value);
    // In a real app, you might want to calculate the receive amount based on exchange rates
    // setReceiveAmount(e.target.value);
  };

  const handleReceiveAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiveAmount(e.target.value);
    // In a real app, you might want to calculate the send amount based on exchange rates
    // setSendAmount(e.target.value);
  };

  return (
    <div className="relative bg-[#001233] py-10 md:py-16 lg:py-20 overflow-hidden">
      {/* Holographic Elements - Hidden on mobile, visible on tablets and up */}
      <motion.div 
        className="absolute top-[10%] left-[5%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] opacity-80 hidden sm:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ rotate: 10, scale: 1.05 }}
      >
        <Image
          src="/assests/landing-page/5.png"
          alt="Holographic element"
          width={300}
          height={300}
          priority
        />
      </motion.div>

      <motion.div 
        className="absolute top-[10%] right-[5%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] hidden sm:block"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        whileHover={{ rotate: -10, scale: 1.05 }}
      >
        <Image
          src="/assests/landing-page/3.png"
          alt="Holographic cube"
          width={180}
          height={180}
          priority
        />
      </motion.div>

      <motion.div 
        className="absolute bottom-[15%] right-[15%] w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] hidden sm:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        whileHover={{ rotate: 15, scale: 1.1 }}
      >
        <Image
          src="/assests/landing-page/1.png"
          alt="Holographic diamond"
          width={150}
          height={150}
          priority
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[400] text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cryptocurrency Marketplace
          </motion.h1>
          <motion.p 
            className="text-[14px] font-[700] text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sign-up free. Limit free. Stress free.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-xl mx-auto bg-white py-2 px-2 sm:px-4 text-[13px] rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Tabs */}
          <div className="flex border-b text-[16px] font-[500] border-gray-200">
            <button
              className={`flex-1 py-3 md:py-4 text-center font-medium text-sm transition-colors ${
                activeTab === 'exchange'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              onClick={() => setActiveTab('exchange')}
            >
              Crypto Exchange
            </button>
            <button
              className={`flex-1 py-3 md:py-4 text-center font-medium text-sm transition-colors ${
                activeTab === 'buysell'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              onClick={() => setActiveTab('buysell')}
            >
              Buy/Sell Crypto
            </button>
          </div>

          {/* Exchange Widget */}
          <div className="p-3 sm:p-4 md:p-6" style={{ position: 'relative', zIndex: 1 }}>
            {/* You Send */}
            <div className="mb-6">
              <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#F9FAFB] w-full rounded-lg">
                <div className='flex flex-col sm:flex-row items-center w-full sm:w-[98%] border border-gray-100 rounded-lg justify-between'>
                  <div className="flex w-full sm:w-[65%] p-2 sm:p-3 mx-0 sm:mx-1 items-center rounded-lg justify-between">
                  <div className="text-[13px]  font-[600] text-gray-500 mb-1">You send</div>
                    <div className="flex items-center justify-end w-[40%]">

                      <div className="text-black font-semibold flex items-center">
                        {/* <span className="mr-1">≈ $</span> */}
                        <input 
                          type="text" 
                          value={sendAmount} 
                          onChange={handleSendAmountChange}
                          className="bg-transparent border-none outline-none text-right font-semibold text-black w-[120px]" 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex text-black w-full sm:w-[35%] bg-[#E5E7EB] rounded-lg sm:rounded-none sm:rounded-r-lg p-2 sm:p-3 items-center mt-2 sm:mt-0 relative" style={{ position: 'relative', zIndex: 9999 }}>
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger asChild>
                        <button className="flex items-center w-full justify-between outline-none px-1">
                          <div className="flex items-center mr-2">
                            <Image src={sendCurrency.icon} alt={sendCurrency.fullName} width={20} height={20} className="mr-1.5 flex-shrink-0" />
                            <span className="font-medium text-sm mr-1.5 flex-shrink-0">{sendCurrency.name}</span>
                            <span className="flex-shrink-0 text-[9px] px-1 py-0.5 rounded-full text-white" style={{backgroundColor: sendCurrency.color}}>{sendCurrency.name}</span>
                          </div>
                          <div className="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>
                      </DropdownMenu.Trigger>

                      <DropdownMenu.Portal>
                        <DropdownMenu.Content 
                          className="bg-white rounded-lg shadow-xl min-w-[200px] z-[999999] animate-fadeIn" 
                          sideOffset={5}
                          align="start"
                        >
                          <div className="py-1">
                            {cryptocurrencies.map((crypto) => (
                              <DropdownMenu.Item 
                                key={crypto.name}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                                onSelect={() => setSendCurrency(crypto)}
                              >
                                <Image src={crypto.icon} alt={crypto.fullName} width={20} height={20} className="mr-2" />
                                <span>{crypto.name}</span>
                                <span className="ml-2 text-xs text-gray-500">{crypto.fullName}</span>
                              </DropdownMenu.Item>
                            ))}
                          </div>
                        </DropdownMenu.Content>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                  </div>
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center relative z-10" style={{ marginTop: '-20px', marginBottom: '-10px' }}>
              <motion.button 
                className="bg-blue-600 hover:bg-blue-700 transition-colors w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 sm:h-6 sm:w-6 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ rotate: [0, 180, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </motion.svg>
              </motion.button>
            </div>

            {/* You Receive */}
            <div className="mb-6">
              <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#F9FAFB] w-full rounded-lg">
                <div className='flex flex-col sm:flex-row items-center w-full sm:w-[98%] border border-gray-100 rounded-lg justify-between'>
                  <div className="flex w-full sm:w-[65%] p-2 sm:p-3 mx-0 sm:mx-1 items-center rounded-lg justify-between">
                    <div className="text-[13px]  font-[600] text-gray-500 mb-1">You receive</div>
                    <div className="flex items-center justify-end w-[40%]">
                      <div className="text-black font-semibold flex items-center">
                        {/* <span className="mr-1">≈ $</span> */}
                        <input 
                          type="text" 
                          value={receiveAmount} 
                          onChange={handleReceiveAmountChange}
                          className="bg-transparent border-none outline-none text-right font-semibold text-black w-[120px]" 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex text-black w-full sm:w-[35%] bg-[#E5E7EB] rounded-lg sm:rounded-none sm:rounded-r-lg p-2 sm:p-3 items-center mt-2 sm:mt-0 relative" style={{ position: 'relative', zIndex: 9999 }}>
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger asChild>
                        <button className="flex items-center w-full justify-between outline-none px-1">
                          <div className="flex items-center mr-2">
                            <Image src={receiveCurrency.icon} alt={receiveCurrency.fullName} width={20} height={20} className="mr-1.5 flex-shrink-0" />
                            <span className="font-medium text-sm mr-1.5 flex-shrink-0">{receiveCurrency.name}</span>
                            <span className="flex-shrink-0 text-[9px] px-1 py-0.5 rounded-full text-white" style={{backgroundColor: receiveCurrency.color}}>{receiveCurrency.name}</span>
                          </div>
                          <div className="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>
                      </DropdownMenu.Trigger>

                      <DropdownMenu.Portal>
                        <DropdownMenu.Content 
                          className="bg-white rounded-lg shadow-xl min-w-[200px] z-[999999] animate-fadeIn" 
                          sideOffset={5}
                          align="start"
                        >
                          <div className="py-1">
                            {cryptocurrencies.map((crypto) => (
                              <DropdownMenu.Item 
                                key={crypto.name}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                                onSelect={() => setReceiveCurrency(crypto)}
                              >
                                <Image src={crypto.icon} alt={crypto.fullName} width={20} height={20} className="mr-2" />
                                <span>{crypto.name}</span>
                                <span className="ml-2 text-xs text-gray-500">{crypto.fullName}</span>
                              </DropdownMenu.Item>
                            ))}
                          </div>
                        </DropdownMenu.Content>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                  </div>
                </div>
              </div>
            </div>

            {/* Sign-up Callout */}
            <div className="mb-6 text-left">
              <p className="text-[13px] font-[600] text-black">
                <span className="cursor-pointer text-blue-800">Sign up</span> to get cashback up to 10.05 USDT
              </p>
            </div>

            {/* Exchange Button */}
            <motion.button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              Exchange
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
