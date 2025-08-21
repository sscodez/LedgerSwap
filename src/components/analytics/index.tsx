'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('portfolio');

  const portfolioMetrics = [
    { label: 'Total Portfolio Value', value: '$124,567.89', change: '+12.5%', positive: true },
    { label: '24h Change', value: '$2,847.32', change: '+2.34%', positive: true },
    { label: 'Total Trades', value: '1,247', change: '+15', positive: true },
    { label: 'Win Rate', value: '78.4%', change: '+1.2%', positive: true }
  ];

  const tradingData = [
    { pair: 'BTC/USD', volume: '$45,230', change: '+5.67%', positive: true },
    { pair: 'ETH/USD', volume: '$32,180', change: '+3.24%', positive: true },
    { pair: 'ADA/USD', volume: '$18,950', change: '-1.45%', positive: false },
    { pair: 'DOT/USD', volume: '$12,340', change: '+8.91%', positive: true }
  ];

  const features = [
    {
      icon: '📊',
      title: 'Real-Time Portfolio Tracking',
      description: 'Monitor your investments with live updates and detailed performance metrics'
    },
    {
      icon: '📈',
      title: 'Advanced Charting Tools',
      description: 'Professional-grade charts with 50+ technical indicators and drawing tools'
    },
    {
      icon: '🎯',
      title: 'Risk Management',
      description: 'Set stop-losses, take-profits, and manage your risk with intelligent alerts'
    },
    {
      icon: '📱',
      title: 'Mobile Analytics',
      description: 'Access your analytics dashboard anywhere with our mobile-optimized interface'
    }
  ];

  return (
    <section id="analytics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Analytics Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make informed trading decisions with comprehensive analytics, real-time data, 
            and professional-grade tools designed for serious traders.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            {['portfolio', 'trading', 'features'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {portfolioMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-sm font-medium text-gray-600 mb-2">{metric.label}</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className={`text-sm font-medium ${
                    metric.positive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Portfolio Performance</h3>
                  <p className="text-blue-100 mb-6">
                    Track your portfolio's performance with detailed analytics and insights. 
                    Monitor gains, losses, and optimize your trading strategy.
                  </p>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    View Full Dashboard
                  </button>
                </div>
                <div className="bg-white bg-opacity-10 rounded-xl p-6">
                  <div className="h-32 flex items-end justify-between space-x-2">
                    {[65, 78, 82, 95, 88, 92, 100].map((height, index) => (
                      <div
                        key={index}
                        className="bg-white bg-opacity-60 rounded-t"
                        style={{ height: `${height}%`, width: '12%' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Trading Tab */}
        {activeTab === 'trading' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Trading Pairs</h3>
              <div className="space-y-4">
                {tradingData.map((pair, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between bg-white rounded-lg p-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">
                          {pair.pair.split('/')[0]}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{pair.pair}</div>
                        <div className="text-sm text-gray-600">Volume: {pair.volume}</div>
                      </div>
                    </div>
                    <div className={`font-semibold ${
                      pair.positive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {pair.change}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Analytics;
