'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ExchangeSection from '@/components/exchange-section';

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Exchange */}
      <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Decentralized
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Exchange
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Trade cryptocurrencies with zero fees, maximum security, and instant settlements. 
              Experience the future of decentralized trading.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Instant Swaps</h3>
                <p className="text-gray-300 text-sm">Execute trades in seconds with our optimized smart contracts</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-lg font-semibold text-white mb-2">100% Secure</h3>
                <p className="text-gray-300 text-sm">Non-custodial trading with audited smart contracts</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-white mb-2">Best Rates</h3>
                <p className="text-gray-300 text-sm">Aggregated liquidity for optimal trading prices</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Exchange Section */}
        <div className="relative">
          <ExchangeSection />
        </div>
      </div>

      {/* Spacing for overlapping exchange card */}
      <div className="h-20"></div>

      {/* Featured Tokens */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Tokens</h2>
            <p className="text-gray-600">Top performing cryptocurrencies on our platform</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPairs.map((token, index) => (
              <motion.div
                key={token.symbol}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={token.icon} alt={token.name} className="w-10 h-10" />
                    <div>
                      <h3 className="font-bold text-gray-900">{token.symbol}</h3>
                      <p className="text-sm text-gray-500">{token.name}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900 mb-1">{token.price}</div>
                  <div className={`text-sm font-medium ${token.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {token.change}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    List View
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Grid View
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
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Pair</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Price</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">24h Change</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">24h Volume</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Liquidity</th>
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
                        <td className="px-6 py-4 text-right">
                          <div className="text-gray-900">{pair.volume24h}</div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="text-gray-900">{pair.liquidity}</div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Trade
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
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

      {/* Market Stats */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Statistics</h2>
            <p className="text-gray-600">Real-time data from our decentralized exchange</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">$127.5M</div>
              <div className="text-gray-700 font-medium">Total Volume (24h)</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">$456.8M</div>
              <div className="text-gray-700 font-medium">Total Liquidity</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">24</div>
              <div className="text-gray-700 font-medium">Trading Pairs</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6"
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">45,678</div>
              <div className="text-gray-700 font-medium">Active Traders</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;
