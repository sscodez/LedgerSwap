'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AmbassadorPage = () => {
  const [activeTab, setActiveTab] = useState('program');

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Compensation',
      description: 'Earn up to $5,000/month plus performance bonuses'
    },
    {
      icon: '🌟',
      title: 'Exclusive Access',
      description: 'Early access to new features and beta programs'
    },
    {
      icon: '🎯',
      title: 'Marketing Support',
      description: 'Professional marketing materials and campaign support'
    },
    {
      icon: '📈',
      title: 'Growth Opportunities',
      description: 'Build your personal brand in the crypto space'
    },
    {
      icon: '🤝',
      title: 'Community Network',
      description: 'Connect with other ambassadors and industry leaders'
    },
    {
      icon: '🏆',
      title: 'Recognition Program',
      description: 'Monthly awards and public recognition for top performers'
    }
  ];

  const requirements = [
    'Active social media presence (10K+ followers)',
    'Strong understanding of cryptocurrency and trading',
    'Excellent communication skills',
    'Proven track record in community building',
    'Alignment with LedgerSwap values and mission',
    'Ability to commit 10+ hours per week'
  ];

  const responsibilities = [
    'Create engaging content about LedgerSwap',
    'Host community events and AMAs',
    'Provide feedback on new features',
    'Moderate community discussions',
    'Represent LedgerSwap at industry events',
    'Mentor new community members'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#001233] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ambassador Program
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Join our elite team of crypto advocates and help shape the future of decentralized trading
            </p>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {['program', 'benefits', 'apply'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        {activeTab === 'program' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What is the Ambassador Program?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our Ambassador Program is designed for passionate crypto enthusiasts who want to represent LedgerSwap 
                  and help grow our community while earning competitive compensation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Requirements</h3>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Responsibilities</h3>
                  <ul className="space-y-3">
                    {responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4">Ready to Make an Impact?</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Join a select group of crypto advocates who are shaping the future of decentralized trading. 
                    Help us build the most trusted and innovative trading platform in the industry.
                  </p>
                  <motion.button
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab('apply')}
                  >
                    Apply Now
                  </motion.button>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ambassador Benefits</h2>
                <p className="text-gray-600">
                  We believe in rewarding our ambassadors with competitive compensation and exclusive perks
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Compensation Structure</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">$1,500</div>
                    <div className="font-semibold text-gray-900 mb-2">Base Monthly</div>
                    <p className="text-gray-600 text-sm">Guaranteed monthly compensation for active ambassadors</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">$3,500</div>
                    <div className="font-semibold text-gray-900 mb-2">Performance Bonus</div>
                    <p className="text-gray-600 text-sm">Additional earnings based on KPIs and community growth</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">$2,000</div>
                    <div className="font-semibold text-gray-900 mb-2">Event Bonus</div>
                    <p className="text-gray-600 text-sm">Extra compensation for representing us at events</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'apply' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply to Become an Ambassador</h2>
                <p className="text-gray-600">
                  Fill out the application form below and we'll review your submission within 5 business days
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="City, Country"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Social Media Profiles</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please provide links to your Twitter, LinkedIn, YouTube, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Crypto Experience</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your experience in cryptocurrency and trading..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to be a LedgerSwap Ambassador?</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your motivation and what you can bring to our community..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content Portfolio</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Share links to your best content (articles, videos, posts) related to crypto or trading"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-700">
                      I agree to the Ambassador Program terms and conditions
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Application
                  </motion.button>
                </form>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">
                  Questions about the program? <a href="/contact" className="text-blue-600 hover:text-blue-700">Contact our team</a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AmbassadorPage;
