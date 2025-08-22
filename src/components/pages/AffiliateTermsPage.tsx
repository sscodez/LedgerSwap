'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AffiliateTermsPage = () => {
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
                  Affiliate Program Terms
                  </h1>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Join our affiliate program and earn rewards for referring new users to LedgerSwap
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
          <div className="bg-white rounded-lg  p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Program Overview</h2>
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-700 mb-4">
                The LedgerSwap Affiliate Program allows you to earn commissions by referring new users to our platform. 
                By participating in this program, you agree to the following terms and conditions.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Commission Structure</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-black ">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span><strong>Tier 1:</strong> 25% commission on trading fees for first 30 days</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span><strong>Tier 2:</strong> 15% commission on trading fees for next 60 days</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span><strong>Lifetime:</strong> 10% commission on all future trading fees</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Eligibility Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Must be a verified LedgerSwap user in good standing</li>
                <li>Minimum account age of 30 days</li>
                <li>Completed at least 5 successful trades</li>
                <li>No history of policy violations or suspicious activity</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Prohibited Activities</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Self-referrals or creating fake accounts</li>
                <li>Spam marketing or unsolicited communications</li>
                <li>Misleading or false advertising about LedgerSwap</li>
                <li>Trademark or copyright infringement</li>
                <li>Promoting illegal activities or services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Payment Terms</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Payment Schedule:</strong> Monthly payments on the 1st of each month</li>
                  <li><strong>Minimum Payout:</strong> $50 USD equivalent</li>
                  <li><strong>Payment Methods:</strong> Cryptocurrency or bank transfer</li>
                  <li><strong>Tax Responsibility:</strong> Affiliates responsible for their own taxes</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Termination</h3>
              <p className="text-gray-700 mb-4">
                LedgerSwap reserves the right to terminate affiliate accounts for violations of these terms, 
                suspicious activity, or at our sole discretion. Upon termination, unpaid commissions may be forfeited.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Modifications</h3>
              <p className="text-gray-700 mb-4">
                These terms may be updated at any time. Continued participation in the affiliate program 
                constitutes acceptance of any modifications.
              </p>
            </div>
          </div>

        
        </motion.div>
      </div>
    </div>
  );
};

export default AffiliateTermsPage;
