'use client'
import React from 'react';
import { motion } from 'framer-motion';

const RiskWarningPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#001233] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              General Risk Warning
            </h1>
            <p className="text-xl text-blue-100">
              Important information about cryptocurrency trading risks
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* High Risk Warning */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">High Risk Investment</h3>
                <p className="mt-2 text-sm text-red-700">
                  Cryptocurrency trading involves substantial risk of loss and is not suitable for all investors.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Risk Factors</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Market Volatility</h3>
                <p className="text-gray-700">
                  Cryptocurrency prices can fluctuate dramatically within short periods, potentially resulting in significant losses.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Regulatory Risk</h3>
                <p className="text-gray-700">
                  Changes in government regulations may impact cryptocurrency trading and could affect the value of your investments.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technology Risk</h3>
                <p className="text-gray-700">
                  Technical issues, security breaches, or network failures could impact your ability to trade or access funds.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Liquidity Risk</h3>
                <p className="text-gray-700">
                  Some cryptocurrencies may have limited liquidity, making it difficult to buy or sell at desired prices.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Considerations</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Never invest more than you can afford to lose</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Past performance does not guarantee future results</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Cryptocurrency markets operate 24/7 with no circuit breakers</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>You may lose your entire investment</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Seek independent financial advice if uncertain</span>
              </li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-yellow-800 mb-2">Disclaimer</h4>
              <p className="text-yellow-700 text-sm">
                This risk warning does not constitute investment advice. LedgerSwap does not provide investment advice 
                and individual traders are responsible for their own investment decisions. Trading cryptocurrencies 
                involves substantial risk and may not be suitable for all investors.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Need Help Understanding the Risks?</h3>
            <p className="text-blue-100 mb-6">
              Our support team is available to answer your questions about trading risks.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RiskWarningPage;
