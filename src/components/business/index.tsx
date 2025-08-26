'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Business = () => {
  const [activeTab, setActiveTab] = useState('enterprise');

  const enterpriseFeatures = [
    {
      icon: '🏢',
      title: 'Institutional Trading',
      description: 'High-volume trading with dedicated liquidity pools and priority execution',
      features: ['Dedicated account manager', 'Custom fee structures', 'Priority support']
    },
    {
      icon: '🔐',
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with multi-signature wallets and compliance tools',
      features: ['Multi-sig wallets', 'Compliance reporting', 'Audit trails']
    },
    {
      icon: '⚡',
      title: 'API Integration',
      description: 'Powerful APIs for seamless integration with your existing systems',
      features: ['REST & WebSocket APIs', 'Custom rate limits', 'Dedicated infrastructure']
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and analytics for institutional decision making',
      features: ['Custom dashboards', 'Real-time reporting', 'Historical data access']
    }
  ];

  const solutions = [
    {
      title: 'Hedge Funds',
      description: 'Sophisticated trading tools and deep liquidity for professional fund management',
      icon: '📈',
      benefits: ['Advanced order types', 'Portfolio management tools', 'Risk analytics']
    },
    {
      title: 'Corporate Treasury',
      description: 'Secure cryptocurrency treasury management for corporate entities',
      icon: '🏛️',
      benefits: ['Multi-signature security', 'Compliance reporting', 'Treasury automation']
    },
    {
      title: 'Market Makers',
      description: 'High-frequency trading infrastructure with minimal latency',
      icon: '🔄',
      benefits: ['Co-location services', 'Direct market access', 'Rebate programs']
    },
    {
      title: 'Exchanges',
      description: 'White-label solutions and liquidity partnerships for other exchanges',
      icon: '🌐',
      benefits: ['White-label platform', 'Shared liquidity', 'Technical integration']
    }
  ];

  const stats = [
    { label: 'Enterprise Clients', value: '500+', icon: '🏢' },
    { label: 'Daily Volume', value: '$5B+', icon: '💰' },
    { label: 'API Uptime', value: '99.99%', icon: '⚡' },
    { label: 'Countries Served', value: '150+', icon: '🌍' }
  ];

  return (
    <section id="business" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powering institutional trading with enterprise-grade infrastructure, 
            advanced APIs, and dedicated support for businesses of all sizes.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            {['enterprise', 'solutions'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-md font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Enterprise Features Tab */}
        {activeTab === 'enterprise' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {enterpriseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Business?</h3>
                  <p className="text-blue-100 mb-6">
                    Join leading institutions who trust LedgerSwap for their cryptocurrency trading needs. 
                    Get dedicated support and custom solutions tailored to your business.
                  </p>
                  <motion.button
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Sales Team
                  </motion.button>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-10 rounded-xl p-6">
                    <div className="text-4xl mb-4">🤝</div>
                    <div className="text-lg font-semibold mb-2">Enterprise Support</div>
                    <p className="text-blue-100 text-sm">
                      24/7 dedicated support with guaranteed response times
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Solutions Tab */}
        {activeTab === 'solutions' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{solution.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contact Section */}
        <motion.div
          className="mt-16 bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our enterprise team works with you to create tailored solutions that meet your specific 
              business requirements. From custom integrations to white-label platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Demo
              </motion.button>
              <motion.button
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Business;
