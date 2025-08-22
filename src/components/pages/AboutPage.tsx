'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaEarthAsia } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6";



const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/assests/team/ceo.jpg",
      description: "10+ years in fintech and blockchain technology"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/assests/team/cto.jpg", 
      description: "Former blockchain engineer at major crypto exchanges"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Security",
      image: "/assests/team/security.jpg",
      description: "Cybersecurity expert with enterprise-level experience"
    },
    {
      name: "Emily Watson",
      role: "Head of Operations",
      image: "/assests/team/operations.jpg",
      description: "Operations specialist focused on user experience"
    }
  ];

  const values = [
    {
      icon: <FaLock fill='#001233' />,
      title: "Security First",
      description: "Your assets and data are protected with industry-leading security measures"
    },
    {
      icon: <FaEarthAsia fill='#001233' />,
      title: "Global Access",
      description: "Available worldwide with support for multiple currencies and languages"
    },
    {
      icon: <BsLightningChargeFill fill='#001233' />,
      title: "Lightning Fast",
      description: "Quick transactions and instant confirmations for seamless trading"
    },
    {
      icon: <FaHandshakeSimple fill='#001233'/>,
      title: "Trusted Platform",
      description: "Transparent operations with full regulatory compliance"
    }
  ];

  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "$2B+", label: "Trading Volume" },
    { number: "50+", label: "Cryptocurrencies" },
    { number: "99.9%", label: "Uptime" }
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
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
              About LedgerSwap
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're building the future of cryptocurrency trading with a focus on security, 
              simplicity, and user experience. Join millions who trust LedgerSwap for their digital asset needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize access to cryptocurrency trading by providing a secure, user-friendly platform 
                that empowers everyone to participate in the digital economy. We believe in transparency, 
                innovation, and putting our users first.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced team combines expertise in finance, technology, and security 
              to deliver the best cryptocurrency trading experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Our Story
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Founded in 2023, LedgerSwap was born from a simple idea: cryptocurrency trading 
                  should be accessible, secure, and straightforward for everyone. Our founders, 
                  experienced professionals from the fintech and blockchain industries, recognized 
                  the need for a platform that prioritizes user experience without compromising on security.
                </p>
                <p className="mb-6">
                  Starting with a small team of passionate developers and security experts, we've grown 
                  into a trusted platform serving hundreds of thousands of users worldwide. Our commitment 
                  to innovation and user-centric design has made us one of the fastest-growing cryptocurrency 
                  exchanges in the market.
                </p>
                <p>
                  Today, LedgerSwap continues to evolve, adding new features, supporting more cryptocurrencies, 
                  and expanding our global reach. We remain dedicated to our core mission: making cryptocurrency 
                  trading safe, simple, and accessible for everyone, everywhere.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our community of traders and start your cryptocurrency journey today.
            </p>
            <motion.button
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutPage;
