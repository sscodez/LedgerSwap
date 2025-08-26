'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTableCells } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";
import Banner from '../banner';
import ExchangeWidget from '../exchange/ExchangeWidget';

const ExchangePage = () => {
  const [selectedPair, setSelectedPair] = useState('ETH/BTC');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const tradingPairs = [
    {
      pair: 'ETH/BTC',
      baseToken: { symbol: 'ETH', name: 'Ethereum', icon: '/assests/cryptocurrency/eth.png' },
      quoteToken: { symbol: 'BTC', name: 'Bitcoin', icon: '/assests/cryptocurrency/btc.png' },
      price: '0.05847',
      change24h: '+2.34%',
      volume24h: '$1.2M',
      liquidity: '$45.8M',
      isPositive: true
    },
    {
      pair: 'BTC/USDT',
      baseToken: { symbol: 'BTC', name: 'Bitcoin', icon: '/assests/cryptocurrency/btc.png' },
      quoteToken: { symbol: 'USDT', name: 'Tether', icon: '/assests/cryptocurrency/usdt.png' },
      price: '43,256.78',
      change24h: '-1.23%',
      volume24h: '$8.4M',
      liquidity: '$156.2M',
      isPositive: false
    },
    {
      pair: 'ETH/USDT',
      baseToken: { symbol: 'ETH', name: 'Ethereum', icon: '/assests/cryptocurrency/eth.png' },
      quoteToken: { symbol: 'USDT', name: 'Tether', icon: '/assests/cryptocurrency/usdt.png' },
      price: '2,547.89',
      change24h: '+5.67%',
      volume24h: '$3.7M',
      liquidity: '$89.4M',
      isPositive: true
    },
    {
      pair: 'SOL/USDT',
      baseToken: { symbol: 'SOL', name: 'Solana', icon: '/assests/cryptocurrency/sol.png' },
      quoteToken: { symbol: 'USDT', name: 'Tether', icon: '/assests/cryptocurrency/usdt.png' },
      price: '98.45',
      change24h: '+8.92%',
      volume24h: '$2.1M',
      liquidity: '$34.6M',
      isPositive: true
    },
    {
      pair: 'SOL/ETH',
      baseToken: { symbol: 'SOL', name: 'Solana', icon: '/assests/cryptocurrency/sol.png' },
      quoteToken: { symbol: 'ETH', name: 'Ethereum', icon: '/assests/cryptocurrency/eth.png' },
      price: '0.03864',
      change24h: '+3.21%',
      volume24h: '$890K',
      liquidity: '$12.8M',
      isPositive: true
    },
    {
      pair: 'BTC/ETH',
      baseToken: { symbol: 'BTC', name: 'Bitcoin', icon: '/assests/cryptocurrency/btc.png' },
      quoteToken: { symbol: 'ETH', name: 'Ethereum', icon: '/assests/cryptocurrency/eth.png' },
      price: '17.12',
      change24h: '-3.45%',
      volume24h: '$1.8M',
      liquidity: '$67.3M',
      isPositive: false
    }
  ];

  const topPairs = tradingPairs.slice(0, 4);
  const featuredPairs = [
    { symbol: 'ETH', name: 'Ethereum', icon: '/assests/cryptocurrency/eth.png', price: '$2,547.89', change: '+5.67%', isPositive: true },
    { symbol: 'BTC', name: 'Bitcoin', icon: '/assests/cryptocurrency/btc.png', price: '$43,256.78', change: '-1.23%', isPositive: false },
    { symbol: 'SOL', name: 'Solana', icon: '/assests/cryptocurrency/sol.png', price: '$98.45', change: '+8.92%', isPositive: true },
    { symbol: 'USDT', name: 'Tether', icon: '/assests/cryptocurrency/usdt.png', price: '$1.00', change: '+0.01%', isPositive: true }
  ];

  const [activeTab, setActiveTab] = useState('exchange');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Exchange */}
      <div className="relative bg-[#001233] py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}


        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-[40px]  md:text-6xl font-medium   md:font-[400]  text-white mb-4"
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
         

            {/* Exchange Widget */}
            <ExchangeWidget 
              initialSendCurrency={{ 
                name: 'ETH', 
                fullName: 'Ethereum', 
                icon: '/assests/cryptocurrency/eth.png', 
                color: '#74D4FF' 
              }}
              initialReceiveCurrency={{ 
                name: 'BTC', 
                fullName: 'Bitcoin', 
                icon: '/assests/cryptocurrency/btc.png', 
                color: '#FF8904' 
              }}
              initialSendAmount="12954.89"
              initialReceiveAmount="0.5"
              onExchange={() => console.log('Exchange initiated')}
            />
          </motion.div>
        </div>

        {/* Exchange Section */}

      </div>

      {/* Spacing for overlapping exchange card */}
      <div className="h-20"></div>



      {/* Trading Pairs Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Trading Pairs</h2>
                <p className="text-gray-600">Discover all available trading pairs with real-time data</p>
              </div>

              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <div className="flex bg-white rounded-lg p-1 shadow-sm">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${viewMode === 'list'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    <FaTableCells />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${viewMode === 'grid'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    <IoGridSharp />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {viewMode === 'list' ? (
            /* List View */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Pair</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Price</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">24h Change</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 hidden lg:table-cell">24h Volume</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 hidden lg:table-cell">Liquidity</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {tradingPairs.map((pair, index) => (
                      <motion.tr
                        key={pair.pair}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => setSelectedPair(pair.pair)}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center -space-x-2">
                              <img src={pair.baseToken.icon} alt={pair.baseToken.name} className="w-8 h-8 rounded-full border-2 border-white" />
                              <img src={pair.quoteToken.icon} alt={pair.quoteToken.name} className="w-8 h-8 rounded-full border-2 border-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{pair.pair}</div>
                              <div className="text-sm text-gray-500">{pair.baseToken.name}/{pair.quoteToken.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="font-semibold text-gray-900">{pair.price}</div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className={`font-semibold ${pair.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                            {pair.change24h}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right hidden lg:table-cell">
                          <div className="text-gray-900">{pair.volume24h}</div>
                        </td>
                        <td className="px-6 py-4 text-right hidden lg:table-cell">
                          <div className="text-gray-900">{pair.liquidity}</div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors">
                            Trade
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden divide-y divide-gray-200">
                {tradingPairs.map((pair, index) => (
                  <motion.div
                    key={pair.pair}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedPair(pair.pair)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center -space-x-2">
                          <img src={pair.baseToken.icon} alt={pair.baseToken.name} className="w-8 h-8 rounded-full border-2 border-white" />
                          <img src={pair.quoteToken.icon} alt={pair.quoteToken.name} className="w-8 h-8 rounded-full border-2 border-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{pair.pair}</div>
                          <div className="text-sm text-gray-500">{pair.baseToken.name}/{pair.quoteToken.name}</div>
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
                        Trade
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-semibold text-gray-900">{pair.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">24h Change:</span>
                        <span className={`font-semibold ${pair.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          {pair.change24h}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Volume:</span>
                        <span className="text-gray-900">{pair.volume24h}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Liquidity:</span>
                        <span className="text-gray-900">{pair.liquidity}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* Grid View */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {tradingPairs.map((pair, index) => (
                <motion.div
                  key={pair.pair}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => setSelectedPair(pair.pair)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center -space-x-2">
                        <img src={pair.baseToken.icon} alt={pair.baseToken.name} className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src={pair.quoteToken.icon} alt={pair.quoteToken.name} className="w-10 h-10 rounded-full border-2 border-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{pair.pair}</h3>
                        <p className="text-sm text-gray-500">{pair.baseToken.name}/{pair.quoteToken.name}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Price</span>
                      <span className="font-semibold text-gray-900">{pair.price}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">24h Change</span>
                      <span className={`font-semibold ${pair.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {pair.change24h}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Volume</span>
                      <span className="text-gray-900">{pair.volume24h}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Liquidity</span>
                      <span className="text-gray-900">{pair.liquidity}</span>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                    Trade {pair.pair}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>


    </div>
  );
};

export default ExchangePage;
