'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeatureGrid = () => {
  return (
    <section className="bg-[#001233] py-8   sm:py-12 md:py-16">
      <div className="container   mx-auto px-4">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 sm:gap-6">
          {/* Privacy Card */}
          <motion.div
            className="bg-[#0A1E56] rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0, 18, 51, 0.2)" }}
          >
            <div className="mb-4 sm:mb-6 md:mb-8 pr-20 sm:pr-24 md:pr-28">
              <motion.h5
                className="text-blue-400 text-xs sm:text-sm mb-2 sm:mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Privacy
              </motion.h5>
              <motion.h3
                className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Sign-up is not required
              </motion.h3>
              <motion.p
                className="text-gray-300 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                LedgerSwap provides cryptocurrency exchange
              </motion.p>
              <motion.p
                className="text-gray-300 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                without registration.
              </motion.p>
            </div>
            <motion.div
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <Image
                  src="/assests/landing-page/privacy.png"
                  width={120}
                  height={120}
                  alt="Privacy"
                  className="object-contain w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Safety Card */}
          <motion.div
            className="bg-[#0A1E56] rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0, 18, 51, 0.2)" }}
          >
            <div className="mb-4 sm:mb-6 md:mb-8 pr-20 sm:pr-24 md:pr-28">
              <motion.h5
                className="text-blue-400 text-xs sm:text-sm mb-2 sm:mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Safety
              </motion.h5>
              <motion.h3
                className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Your crypto, your control
              </motion.h3>
              <motion.p
                className="text-gray-300 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Crypto is sent directly to your wallet; we don&apos;t
              </motion.p>
              <motion.p
                className="text-gray-300 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                store it on our servers.
              </motion.p>
            </div>
            <motion.div
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              >
                <Image
                  src="/assests/landing-page/safety.png"
                  width={120}
                  height={120}
                  alt="Safety"
                  className="object-contain w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Endless Choices Card */}
          <motion.div
            className="bg-[#0A1E56] rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0, 18, 51, 0.2)" }}
          >
            <div className="mb-4 sm:mb-6 md:mb-8 pr-20 sm:pr-24 md:pr-28">
              <motion.h5
                className="text-blue-400 text-xs sm:text-sm mb-2 sm:mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Endless choices
              </motion.h5>
              <motion.h3
                className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                1500 cryptocurrencies
              </motion.h3>
              <motion.p
                className="text-gray-300 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Over a hundred crypto and fiat options available
              </motion.p>
              <motion.p
                className="text-gray-300 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                for instant exchange.
              </motion.p>
            </div>
            <motion.div
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex gap-2"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <Image
                  src="/assests/landing-page/coins.png"
                  width={120}
                  height={120}
                  alt="Bitcoin"
                  className="object-contain w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 24/7 Support Card */}
          <motion.div
            className="bg-[#0A1E56] rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0, 18, 51, 0.2)" }}
          >
            <div className="mb-4 sm:mb-6 md:mb-8 pr-20 sm:pr-24 md:pr-28">
              <motion.h5
                className="text-blue-400 text-xs sm:text-sm mb-2 sm:mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                24/7 support
              </motion.h5>
              <motion.h3
                className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                We&apos;ve got your back
              </motion.h3>
              <motion.p
                className="text-gray-300 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Easy-to-reach support, always ready with answers.
              </motion.p>
            </div>
            <motion.div
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ y: [0, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                <Image
                  src="/assests/landing-page/support.png"
                  width={120}
                  height={120}
                  alt="24/7 Support"
                  className="object-contain w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
