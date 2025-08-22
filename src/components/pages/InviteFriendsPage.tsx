'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const InviteFriendsPage = () => {
  const [referralCode, setReferralCode] = useState('LEDGER2024XYZ');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://ledgerswap.com/signup?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rewards = [
    { icon: '💰', title: 'You Earn', description: 'Get 25% of trading fees', amount: '$50 per referral' },
    { icon: '🎁', title: 'Friend Gets', description: 'Bonus trading credits', amount: '$25 bonus' },
    { icon: '🚀', title: 'Both Win', description: 'Unlock premium features', amount: 'VIP Access' }
  ];

  const socialPlatforms = [
    { name: 'Twitter', icon: '🐦', color: 'bg-blue-500' },
    { name: 'Facebook', icon: '📘', color: 'bg-blue-600' },
    { name: 'LinkedIn', icon: '💼', color: 'bg-blue-700' },
    { name: 'WhatsApp', icon: '💬', color: 'bg-green-500' },
    { name: 'Telegram', icon: '✈️', color: 'bg-blue-500' },
    { name: 'Email', icon: '📧', color: 'bg-gray-600' }
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
              Invite Friends & Earn
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Share LedgerSwap with friends and earn rewards for every successful referral
            </p>
          </motion.div>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Earn Rewards for Every Referral
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get rewarded when your friends join and start trading on LedgerSwap
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {rewards.map((reward, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{reward.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {reward.title}
                </h3>
                <p className="text-gray-600 mb-4">{reward.description}</p>
                <div className="text-2xl font-bold text-blue-600">
                  {reward.amount}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Referral Link Section */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Your Referral Link</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Referral Code</label>
              <div className="flex">
                <input
                  type="text"
                  value={referralCode}
                  readOnly
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg bg-gray-50 text-gray-900"
                />
                <button
                  onClick={copyToClipboard}
                  className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Referral Link</label>
              <div className="flex">
                <input
                  type="text"
                  value={`https://ledgerswap.com/signup?ref=${referralCode}`}
                  readOnly
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg bg-gray-50 text-gray-900 text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className="px-6 py-3 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition-colors"
                >
                  Copy Link
                </button>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">Share on social media</p>
              <div className="flex flex-wrap justify-center gap-3">
                {/* {shareOptions.map((option) => (
                  <button
                    key={option.name}
                    className={`${option.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2`}
                  >
                    <span>{option.icon}</span>
                    <span className="text-sm">{option.name}</span>
                  </button>
                ))} */}
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default InviteFriendsPage;
