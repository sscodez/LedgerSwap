'use client'
import React from 'react';
import { motion } from 'framer-motion';

const CustomerBenefits = () => {
  const benefits = [
    {
      icon: '🔒',
      title: 'Bank-Level Security',
      description: 'Your funds are protected with military-grade encryption and multi-signature wallets',
      features: ['Cold storage', '2FA authentication', 'Insurance coverage']
    },
    {
      icon: '⚡',
      title: 'Lightning Fast Trades',
      description: 'Execute trades in milliseconds with our high-performance matching engine',
      features: ['Sub-second execution', '99.9% uptime', 'Real-time updates']
    },
    {
      icon: '💰',
      title: 'Lowest Fees',
      description: 'Keep more of your profits with our competitive fee structure',
      features: ['0.1% trading fees', 'No hidden charges', 'Volume discounts']
    },
    {
      icon: '🌍',
      title: 'Global Access',
      description: 'Trade from anywhere in the world with 24/7 market access',
      features: ['200+ countries', 'Multiple languages', 'Local support']
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Full-featured mobile app for trading on the go',
      features: ['iOS & Android', 'Push notifications', 'Biometric login']
    },
    {
      icon: '🎯',
      title: 'Advanced Tools',
      description: 'Professional trading tools for both beginners and experts',
      features: ['Technical analysis', 'API access', 'Portfolio tracking']
    }
  ];

  return (
    <section id="customer-benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose InterledgerSwap?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the next generation of cryptocurrency trading with unmatched security, 
            speed, and user experience designed for traders of all levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {benefit.description}
              </p>
              <ul className="space-y-2">
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of traders who trust InterledgerSwap for their cryptocurrency trading needs.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Trading Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerBenefits;
