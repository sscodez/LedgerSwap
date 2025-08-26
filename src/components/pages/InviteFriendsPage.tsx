'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoMdCopy } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { IoRocketSharp } from "react-icons/io5";
import Banner from '../banner';


const InviteFriendsPage = () => {
  const [referralCode, setReferralCode] = useState('LEDGER2024XYZ');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rewards = [
    { icon: <FaRegMoneyBillAlt  fill='#001233'/>, title: 'You Earn', description: 'Get 25% of trading fees', amount: '$50 per referral' },
    { icon: <FaGift fill='#001233'/>, title: 'Friend Gets', description: 'Bonus trading credits', amount: '$25 bonus' },
    { icon: <IoRocketSharp fill='#001233'/>, title: 'Both Win', description: 'Unlock premium features', amount: 'VIP Access' }
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
   
      <Banner title="Invite Friends & Earn" description="Share LedgerSwap with friends and earn rewards for every successful referral" />

      {/* Rewards Section */}
      <div className="py-16 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-medium text-gray-900 mb-4">
              Earn Rewards for Every Referral
            </h2>
            <p className=" text-gray-600 max-w-2xl mx-auto">
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
                className="bg-white rounded-2xl  border border-gray-100 p-8 text-center  transition-shadow"
              >
                <div className="text-4xl text-center flex items-center justify-center mb-4">{reward.icon}</div>
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
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className=" rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-medium text-gray-900 mb-3">Your Referral Link</h3>
              <p className="text-gray-600">Share your unique link and start earning rewards</p>
            </div>
            
            {/* Referral Code Card */}
            <div className="bg-white rounded-2xl p-6 mb-6  border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Referral Code</label>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: copied ? 1 : 0 }}
                  className="text-green-600 text-sm font-medium"
                >
                  ✓ Copied!
                </motion.div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-50 rounded-xl px-4 py-4 border border-gray-200">
                  <div className="font-mono text-lg font-bold text-gray-900 text-center tracking-wider">
                    {referralCode}
                  </div>
                </div>
                <motion.button
                  onClick={() => copyToClipboard(referralCode)}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoMdCopy className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Full Link Card */}
            <div className="bg-white rounded-2xl p-6  border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Full Referral Link</label>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: copied ? 1 : 0 }}
                  className="text-green-600 text-sm font-medium"
                >
                  ✓ Copied!
                </motion.div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-50 rounded-xl px-4 py-4 border border-gray-200 overflow-hidden">
                  <div className="font-mono text-sm text-gray-700 truncate">
                    https://ledgerswap.com/signup?ref={referralCode}
                  </div>
                </div>
                <motion.button
                  onClick={() => copyToClipboard(`https://ledgerswap.com/signup?ref=${referralCode}`)}
                  className="bg-blue-600 text-white p-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoMdCopy className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

        
          </div>
        </motion.div>

        {/* Share Buttons Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="bg-white rounded-2xl p-8 text-center  border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Share Your Link</h4>
            <p className="text-gray-600 mb-6">Spread the word on social media and earn more rewards</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                    <Image src="/assests/social-icons/x.png" alt="Facebook" width={24} height={24} />
              
        
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-800 hover:bg-blue-900 text-white px-3 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                <Image src="/assests/social-icons/facebook-circle-fill.png" alt="Facebook" width={24} height={24} />

              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                     <Image src="/assests/social-icons/linkedin-fill.png" alt="Facebook" width={24} height={24} />
          
              
              </motion.button>
            </div>
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default InviteFriendsPage;
