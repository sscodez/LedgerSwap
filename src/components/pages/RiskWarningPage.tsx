'use client'
import React from 'react';
import { motion } from 'framer-motion';

const RiskWarningPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#001233] text-white overflow-hidden">
   
        
        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
        
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
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* High Risk Warning */}
        

          <div className="bg-white rounded-lg  p-8 mb-8">
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

       
        </motion.div>
      </div>
    </div>
  );
};

export default RiskWarningPage;
