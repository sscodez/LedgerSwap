'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaEarthAsia } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6";
import Banner from '../banner';



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
    

      <Banner title="About" description="We're building the future of cryptocurrency trading with a focus on security" />

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
    </div>
  );
};

export default AboutPage;
