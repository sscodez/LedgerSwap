'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ExchangeWidget from '../exchange/ExchangeWidget';
import Image from 'next/image';
const Hero = () => {

  return (
    <div className="relative bg-[#001233] py-10 md:py-16 lg:py-20 overflow-hidden">
      {/* Holographic Elements - Hidden on mobile, visible on tablets and up */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] opacity-80 hidden sm:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
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
        className="absolute top-[10%] right-[5%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] hidden sm:block"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
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

      <motion.div
        className="absolute bottom-[15%] right-[15%] w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] hidden sm:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        whileHover={{ rotate: 15, scale: 1.1 }}
      >
        <Image
          src="/assests/landing-page/1.png"
          alt="Holographic diamond"
          width={150}
          height={150}
          priority
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-[40px] md:text-6xl font-medium md:font-medium text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cryptocurrency Marketplace
          </motion.h1>
          <motion.p
            className="text-[14px] font-[700] text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sign-up free. Limit free. Stress free.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto bg-white shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ borderRadius: '24px' }}
        >
          {/* Exchange Widget Component */}
          <ExchangeWidget 
            initialSendCurrency={{ name: 'ETH', fullName: 'Ethereum', icon: '/assests/cryptocurrency/eth.png', color: '#74D4FF' }}
            initialReceiveCurrency={{ name: 'BTC', fullName: 'Bitcoin', icon: '/assests/cryptocurrency/btc.png', color: '#FF8904' }}
            initialSendAmount="0.1"
            initialReceiveAmount="0.0039987"
            onExchange={() => console.log('Exchange initiated')}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
