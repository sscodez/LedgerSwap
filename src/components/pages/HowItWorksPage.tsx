'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
      icon: "⚡",
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our high-performance matching engine"
    },
    {
      icon: "🔐",
      title: "Bank-Level Security",
      description: "Your funds are protected with institutional-grade security measures"
    },
    {
      icon: "📱",
      title: "Mobile Ready",
      description: "Trade on the go with our responsive web platform and mobile app"
    },
    {
      icon: "🌍",
      title: "Global Access",
      description: "Available worldwide with support for multiple currencies and languages"
    },
    {
      icon: "💰",
      title: "Low Fees",
      description: "Competitive trading fees starting at just 0.05% per transaction"
    },
    {
      icon: "🎧",
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
      <div className="relative bg-[#001233] py-16 md:py-24 overflow-hidden">
        <motion.div 
          className="absolute top-[10%] left-[5%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] opacity-40 hidden sm:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
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
          className="absolute top-[10%] right-[5%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] opacity-40 hidden sm:block"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 0.4, y: 0 }}
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
              How It Works
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start trading cryptocurrencies in 4 simple steps. It's easier than you think.
            </p>
          </motion.div>
        </div>
      </div>

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
                  <span className="mr-2 text-lg">{step.icon}</span>
                  <span className="hidden sm:inline">Step {index + 1}</span>
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

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm text-gray-600">
                  {Math.round(((activeStep + 1) / steps.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Types */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Trading Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from multiple trading options designed to meet your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tradingTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-700 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              Why Choose LedgerSwap?
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

      {/* Security Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Your Security is Our Priority
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We use industry-leading security measures to protect your funds and personal information
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Security</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      256-bit SSL encryption
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Cold storage for 95% of funds
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Multi-signature wallets
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Regular security audits
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Protection</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Two-factor authentication
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Email & SMS alerts
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      IP whitelisting
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 monitoring
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust LedgerSwap for their cryptocurrency trading needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Account
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
