'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PlatinumUserPage = () => {
  const [selectedTier, setSelectedTier] = useState('platinum');

  const platinumFeatures = [
    {
      icon: '⚡',
      title: 'Priority Trading',
      description: 'Execute trades with zero slippage and instant settlement',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: '💎',
      title: 'Exclusive Assets',
      description: 'Access to pre-launch tokens and exclusive investment opportunities',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: '🎯',
      title: 'Advanced Analytics',
      description: 'Professional trading tools and real-time market insights',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: '🔒',
      title: 'Enhanced Security',
      description: 'Multi-signature wallets and insurance coverage up to $1M',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: '👑',
      title: 'VIP Support',
      description: '24/7 dedicated account manager and priority customer service',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: '🎁',
      title: 'Exclusive Rewards',
      description: 'Higher staking rewards, airdrops, and bonus incentives',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const tiers = [
    {
      id: 'gold',
      name: 'Gold',
      price: '$99',
      period: '/month',
      color: 'from-yellow-400 to-yellow-600',
      features: ['Priority Support', 'Advanced Charts', '0.1% Trading Fee', 'Basic Analytics']
    },
    {
      id: 'platinum',
      name: 'Platinum',
      price: '$299',
      period: '/month',
      color: 'from-gray-400 to-gray-600',
      popular: true,
      features: ['All Gold Features', 'Zero Trading Fees', 'Exclusive Assets', 'VIP Support', 'Insurance Coverage']
    },
    {
      id: 'diamond',
      name: 'Diamond',
      price: '$999',
      period: '/month',
      color: 'from-blue-400 to-purple-600',
      features: ['All Platinum Features', 'Personal Account Manager', 'Custom Trading Strategies', 'White-glove Service']
    }
  ];

  const benefits = [
    { number: '0%', label: 'Trading Fees', description: 'Zero fees on all transactions' },
    { number: '24/7', label: 'VIP Support', description: 'Dedicated account manager' },
    { number: '$1M', label: 'Insurance', description: 'Full coverage protection' },
    { number: '100+', label: 'Exclusive Assets', description: 'Pre-launch token access' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Professional Trader',
      image: '/assets/testimonials/sarah.jpg',
      quote: 'Platinum membership transformed my trading experience. The zero fees and priority execution are game-changers.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Crypto Investor',
      image: '/assets/testimonials/michael.jpg',
      quote: 'Access to exclusive assets and professional analytics helped me achieve 300% returns this year.'
    },
    {
      name: 'Emily Watson',
      role: 'DeFi Enthusiast',
      image: '/assets/testimonials/emily.jpg',
      quote: 'The VIP support team is incredible. They helped me navigate complex DeFi strategies with ease.'
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span>👑</span>
              <span>PREMIUM MEMBERSHIP</span>
            </div>
            <h1 className="text-6xl  md:text-5xl lg:text-6xl font-semibold text-white mb-4">
              Platinum
              <span className="block   text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
                Elite Trading
              </span>
            </h1>
            <p className="text-[12px] md:text-[16px] text-gray-300 max-w-2xl mx-auto mb-8">
              Unlock exclusive features, zero fees, and VIP treatment with our premium membership tiers
            </p>
            
         
          </motion.div>
        </div>
      </div>

      {/* Benefits Overview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience trading like never before with exclusive perks and privileges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.label}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Features */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Exclusive Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access premium tools and services designed for professional traders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platinumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl  border border-gray-100 p-8 hover:shadow-xl transition-shadow"
              >
                <div className={`w-20 h-20  flex items-center justify-center text-4xl mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Tier
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect membership level for your trading needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  tier.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
                } hover:shadow-xl transition-all`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl text-white font-bold">{tier.name[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Choose {tier.name}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Platinum Members Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied premium traders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl  p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default PlatinumUserPage;
