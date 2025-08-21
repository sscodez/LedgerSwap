'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TermsPage = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using LedgerSwap, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our cryptocurrency trading platform and services."
    },
    {
      title: "2. Description of Service",
      content: "LedgerSwap provides a digital platform for cryptocurrency trading, exchange, and related financial services. Our platform allows users to buy, sell, and exchange various cryptocurrencies in a secure environment."
    },
    {
      title: "3. User Accounts",
      content: "To use our services, you must create an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
    },
    {
      title: "4. Trading and Transactions",
      content: "All trades executed on our platform are final. Users acknowledge that cryptocurrency trading involves substantial risk and may result in significant losses. LedgerSwap does not guarantee profits or protection against losses."
    },
    {
      title: "5. Fees and Charges",
      content: "LedgerSwap charges fees for certain services as disclosed on our platform. Fees may change with notice. Network fees charged by blockchain networks are separate and not controlled by LedgerSwap."
    },
    {
      title: "6. Security and Compliance",
      content: "Users must comply with all applicable laws and regulations. LedgerSwap implements security measures but users are responsible for securing their accounts and following security best practices."
    },
    {
      title: "7. Prohibited Activities",
      content: "Users may not engage in illegal activities, market manipulation, money laundering, or any activities that violate applicable laws or these terms. LedgerSwap reserves the right to suspend accounts for violations."
    },
    {
      title: "8. Limitation of Liability",
      content: "LedgerSwap's liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages arising from your use of our services."
    },
    {
      title: "9. Privacy and Data Protection",
      content: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information in compliance with applicable data protection laws."
    },
    {
      title: "10. Modifications to Terms",
      content: "LedgerSwap reserves the right to modify these terms at any time. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of modified terms."
    }
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using LedgerSwap
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: January 15, 2024
            </p>
          </motion.div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-sm p-8 md:p-12"
            >
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Welcome to LedgerSwap
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms of Service ("Terms") govern your use of the LedgerSwap platform 
                    and services. By creating an account or using our services, you agree to be 
                    bound by these Terms. Please read them carefully.
                  </p>
                </div>

                <div className="space-y-8">
                  {sections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> legal@ledgerswap.com</p>
                      <p><strong>Address:</strong> 123 Market Street, Suite 100, San Francisco, CA 94105</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
