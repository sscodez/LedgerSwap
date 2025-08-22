'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, make transactions, or contact us. This includes personal information like your name, email address, phone number, and identity verification documents required for compliance purposes."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use your information to provide and improve our services, process transactions, verify your identity for security and compliance purposes, communicate with you about your account, and comply with legal and regulatory requirements."
    },
    {
      title: "3. Information Sharing and Disclosure",
      content: "We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our platform, with regulatory authorities as required by law, or with your consent."
    },
    {
      title: "4. Data Security",
      content: "We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure."
    },
    {
      title: "5. Data Retention",
      content: "We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods vary based on the type of information and applicable legal requirements."
    },
    {
      title: "6. Your Rights and Choices",
      content: "You have the right to access, update, or delete your personal information. You may also opt out of certain communications and have the right to data portability where applicable under local laws such as GDPR or CCPA."
    },
    {
      title: "7. Cookies and Tracking Technologies",
      content: "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences."
    },
    {
      title: "8. International Data Transfers",
      content: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws."
    },
    {
      title: "9. Children's Privacy",
      content: "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware of such collection, we will take steps to delete the information."
    },
    {
      title: "10. Changes to This Privacy Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the effective date. Your continued use constitutes acceptance of the updated policy."
    }
  ];

  const dataTypes = [
    {
      category: "Account Information",
      items: ["Name and contact details", "Username and password", "Profile information", "Account preferences"]
    },
    {
      category: "Transaction Data",
      items: ["Trading history", "Transaction amounts", "Wallet addresses", "Payment information"]
    },
    {
      category: "Verification Data",
      items: ["Identity documents", "Address verification", "Source of funds", "Enhanced due diligence"]
    },
    {
      category: "Technical Information",
      items: ["IP address and location", "Device information", "Browser type and version", "Usage analytics"]
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we protect your data.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: January 15, 2024
            </p>
          </motion.div>
        </div>
      </div>

   

      {/* Privacy Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg  p-8 md:p-12"
            >
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Our Commitment to Your Privacy
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    At LedgerSwap, we are committed to protecting your privacy and ensuring the 
                    security of your personal information. This Privacy Policy explains how we 
                    collect, use, and safeguard your data when you use our cryptocurrency trading platform.
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>


      {/* Contact Section */}
    
    </div>
  );
};

export default PrivacyPage;
