'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { FaGlobe, FaMobile } from "react-icons/fa6";
import { GiKeyLock } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsLightningChargeFill } from 'react-icons/bs';
import Banner from '../banner';


const HowItWorksPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Create Your Account",
      description: "Sign up in minutes with just your email address. Verify your identity to unlock full trading features.",
      icon: "👤",
      details: [
        "Quick email verification",
        "Secure password setup",
        "Optional 2FA for extra security",
        "Complete KYC for higher limits"
      ]
    },
    {
      title: "Fund Your Account",
      description: "Add funds using bank transfer, credit card, or deposit cryptocurrencies from your existing wallet.",
      icon: "💳",
      details: [
        "Multiple payment methods",
        "Instant credit card deposits",
        "Bank transfers (1-3 days)",
        "Crypto deposits from any wallet"
      ]
    },
    {
      title: "Start Trading",
      description: "Use our intuitive exchange interface to buy, sell, or swap cryptocurrencies at competitive rates.",
      icon: "💱",
      details: [
        "Real-time market prices",
        "Advanced trading tools",
        "Instant order execution",
        "Low fees starting at 0.05%"
      ]
    },
    {
      title: "Secure Your Assets",
      description: "Withdraw to your personal wallet or keep funds secure in our platform with industry-leading security.",
      icon: "🔒",
      details: [
        "Cold storage protection",
        "Multi-signature security",
        "Insurance coverage",
        "24/7 monitoring"
      ]
    }
  ];

  const features = [
    {
      icon: <BsLightningChargeFill fill='#001233' />,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our high-performance matching engine"
    },
    {
      icon: <GiKeyLock fill='#001233'/>,
      title: "Bank-Level Security",
      description: "Your funds are protected with institutional-grade security measures"
    },
    {
      icon: <FaMobile fill='#001233' />,
      title: "Mobile Ready",
      description: "Trade on the go with our responsive web platform and mobile app"
    },
    {
      icon: <FaGlobe fill='#001233'/>,
      title: "Global Access",
      description: "Available worldwide with support for multiple currencies and languages"
    },
    {
      icon: <RiMoneyDollarCircleFill fill='#001233' />,
      title: "Low Fees",
      description: "Competitive trading fees starting at just 0.05% per transaction"
    },
    {
      icon: <ImHeadphones fill='#001233' />,
      title: "24/7 Support",
      description: "Get help anytime with our round-the-clock customer support team"
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
    
      <Banner title="How It Works" description="Start trading cryptocurrencies in 4 simple steps. It's easier than you think." />

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
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
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
              className="bg-white rounded-lg shadow-sm p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-6xl mb-6">{steps[activeStep].icon}</div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                    {steps[activeStep].title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {steps[activeStep].description}
                  </p>
                  <ul className="space-y-3">
                    {steps[activeStep].details.map((detail, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <div className="text-8xl mb-4">{steps[activeStep].icon}</div>
                  <p className="text-gray-600">
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
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Why Choose InterledgerSwap?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've built our platform with your needs in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
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
