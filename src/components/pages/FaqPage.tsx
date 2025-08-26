'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Banner from '../banner';

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: 'general', label: 'General', icon: '❓' },
    { id: 'trading', label: 'Trading', icon: '💱' },
    { id: 'security', label: 'Security', icon: '🔒' },
    { id: 'fees', label: 'Fees', icon: '💰' },
    { id: 'support', label: 'Support', icon: '🎧' }
  ];

  const faqs = {
    general: [
      {
        question: "What is LedgerSwap?",
        answer: "LedgerSwap is a secure cryptocurrency marketplace that allows you to swap digital assets with ease. We provide a user-friendly platform for both beginners and experienced traders."
      },
      {
        question: "How do I get started?",
        answer: "Simply create an account by clicking 'Get an Account' in the top navigation. Verify your email, complete your profile, and you'll be ready to start trading cryptocurrencies."
      },
      {
        question: "Which cryptocurrencies do you support?",
        answer: "We support major cryptocurrencies including Bitcoin (BTC) Ripple (XRP) Stellar, (XLM), XinFin (XDC), IOTA (MIOTA) Ethereum (ETH), Solana (SOL), USDT, USDC, and many more. Our list is constantly expanding based on user demand."
      },
      {
        question: "Is LedgerSwap available worldwide?",
        answer: "LedgerSwap is available in most countries worldwide. However, due to regulatory requirements, some regions may have restrictions. Please check our terms of service for specific country availability."
      }
    ],
    trading: [
      {
        question: "How do I make my first trade?",
        answer: "After creating your account, navigate to the exchange section, select the cryptocurrencies you want to trade, enter the amount, and confirm the transaction. Our intuitive interface makes trading simple and secure."
      },
      {
        question: "What are the minimum and maximum trade amounts?",
        answer: "Minimum trade amounts vary by cryptocurrency but typically start from $10 equivalent. Maximum amounts depend on your account verification level and can go up to $50,000 per transaction for fully verified accounts."
      },
      {
        question: "How long do trades take to complete?",
        answer: "Most trades are processed instantly. However, blockchain confirmations may take 5-30 minutes depending on the cryptocurrency and network congestion."
      },
      {
        question: "Can I cancel a trade after submitting it?",
        answer: "Once a trade is submitted and confirmed, it cannot be cancelled as it's processed on the blockchain. Please review all details carefully before confirming any transaction."
      }
    ],
    security: [
      {
        question: "How secure is my account?",
        answer: "We use industry-standard security measures including two-factor authentication (2FA), encryption, cold storage for funds, and regular security audits to protect your account and assets."
      },
      {
        question: "Do you store my cryptocurrencies?",
        answer: "No, cryptocurrencies are sent directly to your personal wallet. We don't store your digital assets on our platform, ensuring maximum security and giving you full control of your funds."
      },
      {
        question: "What should I do if I suspect unauthorized access?",
        answer: "Immediately change your password, enable 2FA if not already active, and contact our support team. We monitor accounts for suspicious activity and will assist you in securing your account."
      },
      {
        question: "How do I enable two-factor authentication?",
        answer: "Go to your account settings, navigate to Security Settings, and toggle on Two-Factor Authentication. You'll need to download an authenticator app like Google Authenticator to complete the setup."
      }
    ],
    fees: [
      {
        question: "What are your trading fees?",
        answer: "Our standard trading fee is 0.05% per transaction. This fee may be reduced based on your trading volume over the past 90 days. High-volume traders can enjoy fees as low as 0.01%."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees! We believe in transparency. The only fees you'll pay are the clearly displayed trading fees and any network fees required by the blockchain for processing transactions."
      },
      {
        question: "How are network fees calculated?",
        answer: "Network fees are determined by the respective blockchain networks and vary based on network congestion. These fees go directly to miners/validators and are not collected by LedgerSwap."
      },
      {
        question: "Do you offer fee discounts?",
        answer: "Yes! We offer volume-based fee discounts. The more you trade over 90 days, the lower your fees become. We also occasionally run promotional campaigns with reduced fees."
      }
    ],
    support: [
      {
        question: "How can I contact customer support?",
        answer: "You can reach our support team through the contact form on our website, email us at support@ledgerswap.com, or use the live chat feature available 24/7 in your account dashboard."
      },
      {
        question: "What are your support hours?",
        answer: "Our support team is available 24/7 to assist you with any questions or issues. We typically respond to inquiries within 2-4 hours, with urgent security matters prioritized."
      },
      {
        question: "How do I report a problem with a transaction?",
        answer: "If you experience any issues with a transaction, please contact support immediately with your transaction ID, timestamps, and a description of the problem. We'll investigate and resolve the issue promptly."
      },
      {
        question: "Do you have educational resources?",
        answer: "Yes! We provide comprehensive guides, tutorials, and educational content to help you understand cryptocurrency trading. Check our blog and help center for the latest resources."
      }
    ]
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
    
      <Banner title="Frequently Asked Questions" description="Find answers to common questions about LedgerSwap" />

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-12 ">
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {/* <span className="mr-2">{category.icon}</span> */}
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <motion.div 
            className="space-y-4"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.svg
                    className="w-5 h-5 text-gray-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

         
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
