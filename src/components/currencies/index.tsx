'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Currencies = () => {
  const [activeCategory, setActiveCategory] = useState('popular');

  const currencies = {
    popular: [
      { symbol: 'BTC', name: 'Bitcoin', price: '$45,230.12', change: '+5.67%', positive: true, icon: '₿' },
      { symbol: 'ETH', name: 'Ethereum', price: '$3,180.45', change: '+3.24%', positive: true, icon: 'Ξ' },
      { symbol: 'BNB', name: 'Binance Coin', price: '$312.89', change: '+2.15%', positive: true, icon: '🔸' },
      { symbol: 'ADA', name: 'Cardano', price: '$0.4567', change: '-1.45%', positive: false, icon: '◈' },
      { symbol: 'SOL', name: 'Solana', price: '$98.76', change: '+8.91%', positive: true, icon: '◉' },
      { symbol: 'DOT', name: 'Polkadot', price: '$6.23', change: '+4.32%', positive: true, icon: '●' }
    ],
    defi: [
      { symbol: 'UNI', name: 'Uniswap', price: '$6.78', change: '+12.34%', positive: true, icon: '🦄' },
      { symbol: 'AAVE', name: 'Aave', price: '$89.45', change: '+7.89%', positive: true, icon: '👻' },
      { symbol: 'COMP', name: 'Compound', price: '$54.32', change: '+5.67%', positive: true, icon: '🏛️' },
      { symbol: 'MKR', name: 'Maker', price: '$1,234.56', change: '+3.21%', positive: true, icon: '🔷' },
      { symbol: 'SUSHI', name: 'SushiSwap', price: '$1.23', change: '-2.45%', positive: false, icon: '🍣' },
      { symbol: 'CRV', name: 'Curve DAO', price: '$0.87', change: '+9.12%', positive: true, icon: '📈' }
    ],
    layer2: [
      { symbol: 'MATIC', name: 'Polygon', price: '$0.89', change: '+15.67%', positive: true, icon: '🔺' },
      { symbol: 'OP', name: 'Optimism', price: '$2.34', change: '+8.45%', positive: true, icon: '🔴' },
      { symbol: 'ARB', name: 'Arbitrum', price: '$1.56', change: '+6.78%', positive: true, icon: '🔵' },
      { symbol: 'LRC', name: 'Loopring', price: '$0.34', change: '+4.32%', positive: true, icon: '⭕' },
      { symbol: 'IMX', name: 'Immutable X', price: '$0.78', change: '+11.23%', positive: true, icon: '⚡' },
      { symbol: 'METIS', name: 'Metis', price: '$23.45', change: '+7.89%', positive: true, icon: '🌟' }
    ]
  };

  const stats = [
    { label: 'Supported Currencies', value: '200+', icon: '💰' },
    { label: 'Trading Pairs', value: '500+', icon: '🔄' },
    { label: 'Daily Volume', value: '$2.5B', icon: '📊' },
    { label: 'Market Coverage', value: '99%', icon: '🌍' }
  ];

  return (
    <section id="currencies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trade 200+ Cryptocurrencies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access the most comprehensive selection of cryptocurrencies including Bitcoin, 
            Ethereum, DeFi tokens, Layer 2 solutions, and emerging altcoins.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 inline-flex shadow-lg">
            {Object.keys(currencies).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-md font-medium text-sm capitalize transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category === 'defi' ? 'DeFi' : category === 'layer2' ? 'Layer 2' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Currency Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {currencies[activeCategory as keyof typeof currencies].map((currency, index) => (
            <motion.div
              key={currency.symbol}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                    {currency.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{currency.symbol}</div>
                    <div className="text-sm text-gray-600">{currency.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{currency.price}</div>
                  <div className={`text-sm font-medium ${
                    currency.positive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {currency.change}
                  </div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Trade {currency.symbol}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Trade With Us?</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Deep liquidity across all major pairs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Real-time price feeds and market data
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Advanced order types and trading tools
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  24/7 customer support for all traders
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="text-4xl mb-2">🚀</div>
                <div className="text-xl font-semibold mb-2">Start Trading Today</div>
                <p className="text-blue-100 text-sm mb-4">
                  Join thousands of traders already using InterledgerSwap
                </p>
                <motion.button
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Create Account
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Currencies;
