'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Banner from '../banner';

const LoyaltyProgramPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tiers = [
    {
      name: 'Bronze',
      color: 'from-amber-600 to-amber-800',
      requirements: '$1,000+ trading volume',
      benefits: ['5% trading fee discount', 'Basic customer support', 'Monthly market reports']
    },
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      requirements: '$10,000+ trading volume',
      benefits: ['10% trading fee discount', 'Priority customer support', 'Weekly market insights', 'Access to webinars']
    },
    {
      name: 'Gold',
      color: 'from-yellow-400 to-yellow-600',
      requirements: '$50,000+ trading volume',
      benefits: ['15% trading fee discount', 'Dedicated account manager', 'Daily market analysis', 'Early access to new features']
    },
    {
      name: 'Platinum',
      color: 'from-blue-400 to-purple-600',
      requirements: '$250,000+ trading volume',
      benefits: ['25% trading fee discount', '24/7 VIP support', 'Personal trading advisor', 'Exclusive events access', 'Custom API limits', 'Advanced analytics tools']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      

      <Banner title=" Loyalty Program" description="Unlock exclusive benefits and rewards as you trade more on InterledgerSwap" />

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {['overview', 'benefits'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'platinum' ? 'Platinum Elite' : tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Loyalty Tiers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Progress through our loyalty tiers and unlock increasingly valuable benefits based on your trading volume.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className={`h-2 text-blue-600`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{tier.requirements}</p>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'platinum' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Platinum Elite Status</h2>
                  <p className="text-blue-100 text-lg">
                    The ultimate trading experience for our most valued users
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Exclusive Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      <span>25% discount on all trading fees</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      <span>Dedicated VIP support line</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      <span>Personal trading advisor</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      <span>Access to exclusive events</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      <span>Advanced analytics dashboard</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Monthly Trading Volume</span>
                      <span className="font-semibold">$250,000+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Account Age</span>
                      <span className="font-semibold">6+ months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>KYC Status</span>
                      <span className="font-semibold">Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Platinum Perks</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fee Savings</h4>
                    <p className="text-gray-600 text-sm">Save thousands with our lowest trading fees</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Priority Support</h4>
                    <p className="text-gray-600 text-sm">Get instant help from our expert team</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Advanced Tools</h4>
                    <p className="text-gray-600 text-sm">Access professional trading analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">All Benefits Overview</h2>
                <p className="text-gray-600">
                  Compare benefits across all loyalty tiers and see what you can unlock
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benefit</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Bronze</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Silver</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Gold</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Platinum</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Trading Fee Discount</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">5%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">10%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">15%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">25%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Customer Support</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Basic</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Priority</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Dedicated</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">24/7 VIP</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Market Analysis</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Monthly</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Weekly</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Daily</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Real-time</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Personal Advisor</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">✓</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Exclusive Events</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">✓</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LoyaltyProgramPage;
