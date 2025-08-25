'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FaLock, FaLockOpen } from "react-icons/fa6";
import { HiArrowsRightLeft } from 'react-icons/hi2';
import { TbExchange } from "react-icons/tb";


const Hero = () => {
  const [activeTab, setActiveTab] = useState('exchange');
  const [sendCurrency, setSendCurrency] = useState({ name: 'ETH', fullName: 'Ethereum', icon: '/assests/cryptocurrency/eth.png', color: '#74D4FF' });
  const [receiveCurrency, setReceiveCurrency] = useState({ name: 'BTC', fullName: 'Bitcoin', icon: '/assests/cryptocurrency/btc.png', color: '#FF8904' });
  const [sendAmount, setSendAmount] = useState('0.1');
  const [receiveAmount, setReceiveAmount] = useState('0.0039987');
  const [floatingRate, setFloatingRate] = useState(true);
  const [sendUsdValue, setSendUsdValue] = useState('≈$459.11');

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
  };

  const handleReceiveAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiveAmount(e.target.value);
  };

  const handleSwap = () => {
    const tempCurrency = sendCurrency;
    const tempAmount = sendAmount;
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(tempCurrency);
    setSendAmount(receiveAmount);
    setReceiveAmount(tempAmount);
  };

  const toggleFloatingRate = () => {
    setFloatingRate(!floatingRate);
  };

  return (
    <div className="relative bg-[#001233] py-10 md:py-16 lg:py-20 overflow-hidden">
      {/* Holographic Elements - Hidden on mobile, visible on tablets and up */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] opacity-80 hidden sm:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
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
            className="text-[40px] md:text-6xl font-semibold md:font-medium text-white mb-4"
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
          className="max-w-2xl mx-auto bg-white shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ borderRadius: '24px' }}
        >
          {/* Tabs with curved border */}
          <div className="flex overflow-hidden">
            <div className="flex-1 relative">
              <div
                className={`w-full h-full absolute ${activeTab === 'exchange' ? 'bg-white' : 'bg-gray-100'}`}
                style={{
                  clipPath: activeTab === 'buysell' ? 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' : 'none'
                }}
              ></div>
              <button
                className="w-full py-4 text-center font-medium text-base transition-colors relative z-10"
                onClick={() => setActiveTab('exchange')}
              >
                <span className={activeTab === 'exchange' ? 'text-gray-800' : 'text-gray-500'}>Crypto Exchange</span>
              </button>
            </div>
            <div className="flex-1 relative">
              <div
                className={`w-full h-full absolute ${activeTab === 'buysell' ? 'bg-white' : 'bg-gray-100'}`}
                style={{
                  clipPath: activeTab === 'exchange' ? 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' : 'none'
                }}
              ></div>
              <button
                className="w-full py-4 text-center font-medium text-base transition-colors flex items-center justify-center gap-2 relative z-10"
                onClick={() => setActiveTab('buysell')}
              >
                <span className={activeTab === 'buysell' ? 'text-gray-800' : 'text-gray-500'}>Buy/Sell Crypto</span>
                <div className="flex items-center gap-1 ml-2">
                  <span className="flex w-5 h-5 bg-orange-500 rounded-full items-center justify-center">
                    <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  </span>
                  <span className="w-10 h-4 bg-blue-500 rounded-full"></span>
                  <span className="flex w-5 h-5 bg-gray-200 rounded-full items-center justify-center">
                    <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Exchange Widget */}
          <div className="p-6 bg-white">
            {/* You Send */}
            <div className="flex">
              <div className="rounded-lg w-[100%] flex items-center overflow-hidden h-20 bg-[#F3F4F6]">
                <div className="p-2 flex items-center px-5 w-[60%] flex-1">
                  <div className="text-sm font-semibold text-gray-500 mr-4 min-w-[70px]">You send</div>
                  <input
                    type="text"
                    value={sendAmount}
                    onChange={handleSendAmountChange}
                    className="text-black font-semibold text-base md:text-lg bg-transparent outline-none text-right w-full"
                    placeholder="0.00"
                  />
                </div>
                <div className="bg-[#F3F4F6] w-[40%] border-l-2 border-white px-5 flex items-center justify-between h-full">
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button className="flex items-center px-3 py-2 hover:bg-gray-50 transition-colors rounded-lg w-full">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <div className="rounded-full mr-2">
                              <Image src={sendCurrency.icon} alt={sendCurrency.fullName} width={28} height={28} />
                            </div>
                            <span className="font-semibold text-gray-900 text-xl">{sendCurrency.name}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-xs px-3 py-1 rounded-full text-white font-medium mr-2" style={{ backgroundColor: sendCurrency.color }}>
                              {sendCurrency.name}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="bg-white rounded-lg shadow-xl min-w-[200px] z-[999999]" sideOffset={5}>
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

            {/* Floating Rate */}
            <div className="flex items-center mx-5 justify-between my-4 relative">
              <div 
                className="flex items-center gap-2 py-1 px-1 border-2 border-gray-200 rounded-full cursor-pointer"
                onClick={toggleFloatingRate}
              >
                <div className="p-1.5">
                  {floatingRate ? (
                    <FaLockOpen className="text-gray-500 w-4 h-4" />
                  ) : (
                    <FaLock className="text-gray-500 w-4 h-4" />
                  )}
                </div>
                <span className="text-sm text-gray-600 pr-2">
                  {floatingRate ? "Floating rate" : "Fixed rate"}
                </span>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                <motion.button
                  onClick={handleSwap}
                  className="bg-gray-200 hover:bg-blue-100 transition-all w-8 h-10 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.05, backgroundColor: "#e6f7ff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TbExchange className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>
            </div>

            {/* You Get */}
            <div className="flex">
              <div className="rounded-lg w-[100%] flex items-center overflow-hidden h-20 bg-[#F3F4F6]">
                <div className="p-2 flex items-center justify-between px-5 w-[60%] flex-1">
                  <div className="text-sm font-semibold text-gray-500 mr-4 min-w-[70px]">You receive</div>
                  <input
                    type="text"
                    value={receiveAmount}
                    onChange={handleReceiveAmountChange}
                    className="text-black font-semibold text-base md:text-lg bg-transparent outline-none text-right w-full"
                    placeholder="0.00"
                  />
                </div>
                <div className="bg-[#F3F4F6] w-[40%] border-l-2 border-white px-5 flex items-center justify-between h-full">
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button className="flex items-center px-3 py-2 hover:bg-gray-50 transition-colors rounded-lg w-full">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <div className="rounded-full mr-2">
                              <Image src={receiveCurrency.icon} alt={receiveCurrency.fullName} width={28} height={28} />
                            </div>
                            <span className="font-semibold text-gray-900 text-xl">{receiveCurrency.name}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-xs px-3 py-1 rounded-full text-white font-medium mr-2" style={{ backgroundColor: receiveCurrency.color }}>
                              {receiveCurrency.name}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="bg-white rounded-lg shadow-xl min-w-[200px] z-[999999]" sideOffset={5}>
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

            {/* Sign-up Callout */}
            <div className="mb-6 mt-6 text-black px-1">
              <p className="text-sm">
                <a href="#" className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium underline">Sign up</a> to get cashback up to 1.8 USDT
              </p>
            </div>

            {/* Exchange Button */}
            <motion.button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
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
