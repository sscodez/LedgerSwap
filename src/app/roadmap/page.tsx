'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaRocket, FaChartLine, FaShieldAlt, FaLink, FaFire, FaCoins, FaLayerGroup, FaExchangeAlt, FaCreditCard, FaMobileAlt, FaCubes } from 'react-icons/fa';

const RoadmapPage = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-highlight the current phase based on date
    const currentDate = new Date();
    const phases = roadmapData.map(phase => new Date(phase.date));
    
    let currentPhaseIndex = 0;
    for (let i = 0; i < phases.length; i++) {
      if (currentDate >= phases[i]) {
        currentPhaseIndex = i;
      } else {
        break;
      }
    }
    
    setActivePhase(currentPhaseIndex);
  }, []);

  const roadmapData = [
    {
      id: 1,
      title: "Phase 1 – Core Launch",
      date: "Sep 2025",
      icon: <FaRocket className="text-[#74D4FF] text-2xl" />,
      color: "bg-[#74D4FF]",
      features: [
        "Crypto-to-crypto swaps go live (BTC, XRP, XLM, XDC, IOTA)",
        "Seamless wallet connections (MetaMask + Ledger)",
        "Early Adopter Badge for first users"
      ]
    },
    {
      id: 1.5,
      title: "Phase 1.5 – Referral & Growth Boost",
      date: "Oct 2025",
      icon: <FaChartLine className="text-green-400 text-2xl" />,
      color: "bg-green-400",
      features: [
        "Referral rewards with instant mini crypto drops",
        "Returning users enjoy small fee discounts",
        "Community Telegram/Discord expansion"
      ]
    },
    {
      id: 2,
      title: "Phase 2 – Privacy Power-Up (XMR + ZEC)",
      date: "Oct–Dec 2025",
      icon: <FaShieldAlt className="text-purple-400 text-2xl" />,
      color: "bg-purple-400",
      features: [
        "Native Monero (XMR) integration → privacy-first swaps",
        "Zcash (ZEC) added for shielded transactions",
        "Fee discounts for staking/loyalty tiers introduced",
        "Coinbound marketing begins"
      ]
    },
    {
      id: 2.5,
      title: "Phase 2.5 – Multi-Chain Expansion",
      date: "Dec 2025 – Jan 2026",
      icon: <FaLink className="text-indigo-400 text-2xl" />,
      color: "bg-indigo-400",
      features: [
        "Adds VeChain (VET), Algorand (ALGO), and more top tokens",
        "Priority swaps & reduced slippage for VIP members",
        "Scales liquidity, volume, and trader benefits"
      ]
    },
    {
      id: 2.7,
      title: "Phase 2.7 – Flare (FLR) Integration",
      date: "Feb 2026",
      icon: <FaFire className="text-[#FF8904] text-2xl" />,
      color: "bg-[#FF8904]",
      features: [
        "Native Flare (FLR) chain support",
        "Expands LedgerSwap into new EVM ecosystems"
      ]
    },
    {
      id: 3,
      title: "Phase 3 – XLS Token & Rewards Program",
      date: "Mar–Apr 2026",
      icon: <FaCoins className="text-yellow-400 text-2xl" />,
      color: "bg-yellow-400",
      features: [
        "Launch of LedgerSwap Token (XLS)",
        "XLS staking = fee discounts + rewards",
        "Loyalty perks: staking pools, governance voting, beta feature access"
      ]
    },
    {
      id: 3.5,
      title: "Phase 3.5 – Staking Platform",
      date: "Apr–May 2026",
      icon: <FaLayerGroup className="text-teal-400 text-2xl" />,
      color: "bg-teal-400",
      features: [
        "Multi-token staking: BTC, XRP, XLM, XDC, VET, IOTA, FLR, XMR, ZEC",
        "Earn yield directly from your wallet",
        "VIP Whale Tier unlocks zero fees + exclusive pools"
      ]
    },
    {
      id: 4,
      title: "Phase 4 – Scale & Cross-Chain Bridge",
      date: "Jun–Jul 2026",
      icon: <FaExchangeAlt className="text-blue-400 text-2xl" />,
      color: "bg-blue-400",
      features: [
        "Referral Rewards 2.0 (tiered)",
        "Partner token listings",
        "Cross-chain bridge live for wider interoperability"
      ]
    },
    {
      id: 5,
      title: "Phase 5 – CardBridge Gateway",
      date: "Aug–Sep 2026",
      icon: <FaCreditCard className="text-red-400 text-2xl" />,
      color: "bg-red-400",
      features: [
        "Gift cards → Crypto swaps (Amazon, Apple, Google, prepaid Visa)",
        "Bankless fiat rails for mainstream adoption"
      ]
    },
    {
      id: 6,
      title: "Phase 6 – Mobile & Social Flywheel",
      date: "Oct–Dec 2026",
      icon: <FaMobileAlt className="text-pink-400 text-2xl" />,
      color: "bg-pink-400",
      features: [
        "iOS + Android apps",
        "Social features: badges, XP, share-to-earn",
        "Expands LedgerSwap to mobile-first users"
      ]
    },
    {
      id: 7,
      title: "Phase X – LedgerChain",
      date: "2027+",
      icon: <FaCubes className="text-gray-300 text-2xl" />,
      color: "bg-gray-600",
      features: [
        "Custom LedgerChain blockchain",
        "XLS-native economy backbone",
        "Full independence from outside chains"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#001233] text-white relative overflow-hidden">
      {/* Holographic Elements - Similar to hero section */}
      <motion.div
        className="absolute top-[5%] left-[5%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] opacity-80 hidden sm:block"
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
      
      <main className="container mx-auto px-1 sm:px-4 py-10 md:py-16 lg:py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-[40px] md:text-6xl font-medium md:font-medium text-white mb-4">
            LedgerSwap Roadmap
          </h1>
          <p className="text-[14px] font-[700] text-gray-300 max-w-3xl mx-auto">
            Our journey to revolutionize crypto swapping and build the future of decentralized finance
          </p>
        </motion.div>

       

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-black lg:grid-cols-3 gap-8">
          {roadmapData.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                y: isVisible ? 0 : 30,
                scale: activePhase === index ? 1.05 : 1
              }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                scale: { duration: 0.3 }
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`relative overflow-hidden bg-white text-black rounded-2xl shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 ${
                activePhase === index ? 'ring-1 ring-blue-400' : ''
              }`}
              onClick={() => setActivePhase(index)}
            >
      
              
              {/* Card content container */}
              <div className="relative z-10 p-6">
              {/* Phase indicator bar */}
              {/* <div className={`h-1 w-16 ${phase.color} mb-6 rounded-full`}></div>
               */}
              {/* Phase header with icon */}
              <div className="flex items-start mb-5">
                <div className={`p-3 rounded-full bg-blue-50 ${phase.color === 'bg-[#74D4FF]' ? 'text-blue-500' : 
                  phase.color === 'bg-[#FF8904]' ? 'text-orange-500' : 
                  phase.color === 'bg-green-400' ? 'text-green-500' : 
                  phase.color === 'bg-purple-400' ? 'text-purple-500' : 
                  phase.color === 'bg-indigo-400' ? 'text-indigo-500' : 
                  phase.color === 'bg-yellow-400' ? 'text-yellow-500' : 
                  phase.color === 'bg-teal-400' ? 'text-teal-500' : 
                  phase.color === 'bg-blue-400' ? 'text-blue-500' : 
                  phase.color === 'bg-red-400' ? 'text-red-500' : 
                  phase.color === 'bg-pink-400' ? 'text-pink-500' : 
                  'text-gray-500'} mr-4 shadow-sm`}>
                  {phase.icon}
                </div>
                <div>
                  <h3 className="font-medium text-xl text-black">{phase.title}</h3>
                  <p className="text-gray-500 text-sm font-medium mt-1">{phase.date}</p>
                </div>
              </div>
              
              {/* Feature list with improved styling */}
              <div className="mt-6 space-y-3 relative">
                {phase.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: activePhase === index ? 1 : 0.7,
                      y: activePhase === index ? 0 : 5
                    }}
                    transition={{ delay: featureIndex * 0.1, duration: 0.4 }}
                  
                    className="flex items-start  p-3 text-black  transition-all duration-300"
                  >
                    <div className="mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={'#3B82F6'}>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-black">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
            
              </div>
              
              {/* Bottom accent bar */}
          
            </motion.div>
          ))}
        </div>
        
        {/* Current Progress Indicator */}
   
      </main>
    </div>
  );
};

export default RoadmapPage;
