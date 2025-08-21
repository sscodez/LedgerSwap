'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InviteFriendsPage = () => {
  const [referralCode, setReferralCode] = useState('LEDGER2024XYZ');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://ledgerswap.com/signup?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOptions = [
    { name: 'Twitter', icon: '🐦', color: 'bg-blue-400' },
    { name: 'Facebook', icon: '📘', color: 'bg-blue-600' },
    { name: 'LinkedIn', icon: '💼', color: 'bg-blue-700' },
    { name: 'WhatsApp', icon: '💬', color: 'bg-green-500' },
    { name: 'Telegram', icon: '✈️', color: 'bg-blue-500' },
    { name: 'Email', icon: '📧', color: 'bg-gray-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#001233] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Invite Friends & Earn
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Share LedgerSwap with friends and earn rewards for every successful referral
            </p>
          </motion.div>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Earn Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            When your friends join LedgerSwap using your referral link, both of you get rewarded!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">You Earn</h3>
              <div className="text-4xl font-bold mb-2">$50</div>
              <p className="text-green-100">
                For each friend who completes their first trade of $1,000+
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Your Friend Earns</h3>
              <div className="text-4xl font-bold mb-2">$25</div>
              <p className="text-blue-100">
                Welcome bonus credited after their first successful trade
              </p>
            </div>
          </motion.div>
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
                {shareOptions.map((option) => (
                  <button
                    key={option.name}
                    className={`${option.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2`}
                  >
                    <span>{option.icon}</span>
                    <span className="text-sm">{option.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Share Your Link</h4>
              <p className="text-gray-600">Send your unique referral link to friends via social media, email, or messaging apps.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Friend Signs Up</h4>
              <p className="text-gray-600">Your friend creates an account using your referral link and completes verification.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Both Earn Rewards</h4>
              <p className="text-gray-600">After their first trade of $1,000+, both you and your friend receive bonus rewards.</p>
            </div>
          </div>
        </motion.div>

        {/* Referral Stats */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Your Referral Stats</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <p className="text-gray-600">Total Referrals</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                <p className="text-gray-600">Successful Referrals</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$400</div>
                <p className="text-gray-600">Total Earned</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">$50</div>
                <p className="text-gray-600">Pending Rewards</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InviteFriendsPage;
