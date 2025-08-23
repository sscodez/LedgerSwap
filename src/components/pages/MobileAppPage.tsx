'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Banner from '../banner';

const MobileAppPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Instant Trading",
      description: "Execute trades in milliseconds with our optimized mobile trading engine",
      icon: "⚡",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Secure Wallet",
      description: "Multi-layer security with biometric authentication and hardware wallet support",
      icon: "🔒",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Real-time Analytics",
      description: "Advanced charts and market data at your fingertips",
      icon: "📊",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Push Notifications",
      description: "Never miss important market movements or trading opportunities",
      icon: "🔔",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const screenshots = [
    {
      title: "Trading Dashboard",
      image: "/assets/mobile/trading-dashboard.png",
      description: "Intuitive trading interface with real-time market data"
    },
    {
      title: "Portfolio Overview",
      image: "/assets/mobile/portfolio.png", 
      description: "Track your investments and performance metrics"
    },
    {
      title: "Market Analysis",
      image: "/assets/mobile/charts.png",
      description: "Advanced charting tools and technical indicators"
    },
    {
      title: "Security Settings",
      image: "/assets/mobile/security.png",
      description: "Comprehensive security controls and settings"
    }
  ];

  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "4.8★", label: "App Store Rating" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">


    <Banner title="Mobile App" description="See what our users are saying about their InterledgerSwap experience" />
      {/* Hero Section */}
      <div className="relative bg-white py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
     

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="md:text-4xl text-center lg:text-left text-2xl text-black md:text-6xl font-medium mb-6">
               Interledger Swap App
          
              </h1>
              <p className="text-[16px] hidden lg:block text-gray-700 mb-8 leading-relaxed">
                Experience the future of mobile crypto trading with our award-winning app. 
                Secure, fast, and designed for both beginners and professionals.
              </p>
              
              {/* Download Buttons */}
              <div className=" flex-col hidden lg:flex sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                >
                                  <Image src="/assests/social-icons/apple.png" alt="App Store" width={34} height={34} />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-lg">App Store</div>
                  </div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  <Image src="/assests/social-icons/googleplay.png" alt="App Store" width={40} height={40} />
                  <div className="text-left">
                    <div className="text-xs text-green-200">Get it on</div>
                    <div className="text-lg">Google Play</div>
                  </div>
                </motion.button>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>

            {/* Right Content - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                    
                    {/* Screen Content */}
                    <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col">
                      {/* Status Bar */}
                      <div className="h-12 flex items-center justify-between px-6 pt-2">
                        <span className="text-sm font-semibold">9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                          <div className="w-6 h-3 border border-gray-400 rounded-sm">
                            <div className="w-4 h-full bg-green-500 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="flex-1 px-4 pb-4">
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">InterledgerSwap</h3>
                          <p className="text-gray-600">Your Portfolio</p>
                        </div>
                        
                        {/* Balance Card */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white mb-6">
                          <div className="text-sm opacity-80 mb-2">Total Balance</div>
                          <div className="text-3xl font-bold mb-4">$24,567.89</div>
                          <div className="flex justify-between text-sm">
                            <span className="text-green-300">+12.5% ↗</span>
                            <span>Last 24h</span>
                          </div>
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                            <div className="text-2xl mb-2">💰</div>
                            <div className="text-sm font-semibold">Buy</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                            <div className="text-2xl mb-2">📈</div>
                            <div className="text-sm font-semibold">Trade</div>
                          </div>
                        </div>
                        
                        {/* Assets List */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between bg-white rounded-xl p-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">₿</div>
                              <div>
                                <div className="font-semibold text-sm">Bitcoin</div>
                                <div className="text-xs text-gray-500">0.5 BTC</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-sm">$21,450</div>
                              <div className="text-xs text-green-500">+5.2%</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between bg-white rounded-xl p-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">Ξ</div>
                              <div>
                                <div className="font-semibold text-sm">Ethereum</div>
                                <div className="text-xs text-gray-500">2.1 ETH</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-sm">$3,117</div>
                              <div className="text-xs text-red-500">-2.1%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
       
            
              </div>
            </motion.div>
          </div>
        </div>
      </div>

     


   

    </div>
  );
};

export default MobileAppPage;
