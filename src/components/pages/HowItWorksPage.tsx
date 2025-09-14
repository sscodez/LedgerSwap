'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { FaGlobe, FaMobile, FaLink, FaExchangeAlt } from "react-icons/fa";
import { GiKeyLock } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsLightningChargeFill } from 'react-icons/bs';
import Banner from '../banner';


const HowItWorksPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Connect Your Wallet",
      description: "Simply connect your crypto wallet - no account creation or KYC required. Trade as a guest instantly.",
      icon: <FaLink size={48} fill="#00E5FF" />,
      details: [
        "No KYC verification needed",
        "Connect any Web3 wallet",
        "Trade as guest or create optional account",
        "Complete anonymity maintained"
      ]
    },
    {
      title: "Select Your Swap",
      description: "Choose the cryptocurrencies you want to swap. We support unique tokens from multiple blockchains globally.",
      icon: <FaExchangeAlt size={48} fill="#00E5FF" />,
      details: [
        "Wide range of unique tokens",
        "Multi-blockchain support",
        "Real-time exchange rates",
        "Global token availability"
      ]
    },
    {
      title: "Execute Swap Instantly",
      description: "Your swap is executed automatically through our fully decentralized protocol. Fast, secure, and anonymous.",
      icon: <BsLightningChargeFill size={48} fill="#00E5FF" />,
      details: [
        "Fully automated DeFi swap",
        "No funds held by platform",
        "Lightning-fast execution",
        "Complete decentralization"
      ]
    }
  ];

  const features = [
    {
      icon: <BsLightningChargeFill fill='#00E5FF' />,
      title: "Lightning Fast",
      description: "Execute swaps instantly with our automated DeFi protocol - no waiting, no delays"
    },
    {
      icon: <GiKeyLock fill='#00E5FF'/>,
      title: "100% Anonymous",
      description: "No KYC, no personal data collection. Trade completely anonymously without centralized oversight"
    },
    {
      icon: <FaMobile fill='#00E5FF' />,
      title: "Fully Decentralized",
      description: "We don't hold your funds. Everything runs on-chain through smart contracts"
    },
    {
      icon: <FaGlobe fill='#00E5FF'/>,
      title: "Global Access",
      description: "Available worldwide without relying on centralized banks or traditional financial systems"
    },
    {
      icon: <ImHeadphones fill='#00E5FF' />,
      title: "Unique Tokens",
      description: "Access rare and unique tokens from multiple blockchains that aren't available elsewhere"
    }
  ];

  const tradingTypes = [
    {
      title: "Spot Trading",
      description: "Buy and sell cryptocurrencies at current market prices",
      features: ["Instant execution", "Real-time pricing", "Multiple order types"]
    },
    {
      title: "Crypto Exchange",
      description: "Swap one cryptocurrency for another seamlessly",
      features: ["Direct swaps", "Best rates", "No intermediary currency"]
    },
    {
      title: "Fiat Gateway",
      description: "Convert between cryptocurrencies and traditional currencies",
      features: ["Bank transfers", "Credit card purchases", "Multiple currencies"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Hero Section */}
    
      <Banner title="How It Works" description="Experience truly decentralized crypto swapping in 3 simple steps. No KYC, no centralized control." />

      {/* Steps Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Step Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeStep === index
                      ? 'bg-[#0A1931] text-white border-b-2 border-[#00E5FF]'
                      : 'bg-[#0A1931] text-white/80 hover:text-white'
                  }`}
                >
                  {/* <span className="mr-2 text-lg">{step.icon}</span> */}
                  <span className=" md:text-lg text-sm sm:inline">Step {index + 1}</span>
                </button>
              ))}
            </div>

            {/* Active Step Content */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1F1F1F] rounded-lg shadow-sm p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">{steps[activeStep].icon}</div>
                  <h2 className="text-3xl font-semibold text-white mb-4">
                    {steps[activeStep].title}
                  </h2>
                  <p className="text-lg text-[#B0B0B0] mb-6">
                    {steps[activeStep].description}
                  </p>
                  <ul className="space-y-3">
                    {steps[activeStep].details.map((detail, index) => (
                      <li key={index} className="flex items-center text-[#B0B0B0]">
                        <svg className="w-5 h-5 text-[#00E5FF] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#121212] rounded-lg p-8 text-center">
                  <div className="mb-4 flex justify-center">{steps[activeStep].icon}</div>
                  <p className="text-[#B0B0B0]">
                    Step {activeStep + 1} of {steps.length}
                  </p>
                </div>
              </div>
            </motion.div>

        
          </div>
        </div>
      </div>

  

      {/* Features Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Why Choose LedgerSwap?
            </h2>
            <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto">
              Trade anonymous, fast, and secured with unique tokens globally without centralized banks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#1F1F1F] p-6 rounded-lg shadow-sm border border-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#B0B0B0]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

     

    </div>
  );
};

export default HowItWorksPage;
