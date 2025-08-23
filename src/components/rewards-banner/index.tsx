'use client'
import React from 'react';
import { motion } from 'framer-motion';

const RewardsBanner = () => {
  return (
    <section className="bg-[#001233] w-full flex items-center justify-center p-4 md:p-12">
      <div className="w-full sm:w-[95%] md:w-[90%] px-0">
        <motion.div 
          className="relative bg-gradient-to-r from-[#162456] to-[#162456] rounded-xl sm:rounded-2xl md:rounded-3xl shadow-md flex items-center justify-between min-h-[180px] sm:min-h-[200px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left decoration - Gift boxes - Hidden on small mobile, visible on larger screens */}
          <motion.div 
            className="hidden sm:block absolute -left-[20px] sm:-left-[40px] md:-left-[80px] lg:-left-[100px] bottom-0 w-[200px] sm:w-[300px] md:w-[400px] h-[150px] sm:h-[180px] md:h-[200px] pointer-events-none z-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/assests/landing-page/img-2.png"
              alt="Gift boxes"
              width="200"
              height="200"
              className="w-full h-full mt-10 object-contain opacity-90"
              loading="eager"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="mx-auto py-4 sm:py-6 flex flex-col items-center justify-center text-center w-full z-10 px-3 sm:px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-xs sm:text-sm md:text-base text-white/90 mb-2 sm:mb-3 font-medium"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Grab your welcome reward!
            </motion.div>
            <motion.h3 
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-white mb-1 sm:mb-2 leading-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Sign up to earn 0.4% USDT
            </motion.h3>
            <motion.h3 
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-white mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              cashback on your first swap
            </motion.h3>
            <motion.button 
              className="group transition-all duration-300 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center font-semibold text-sm sm:text-base"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Claim Rewards
              <motion.span 
                className="inline-flex ml-2 text-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Right decoration - Money bag - Hidden on small mobile, visible on larger screens */}
          <motion.div 
            className="hidden sm:block absolute -right-[20px] sm:-right-[40px] md:-right-[80px] lg:-right-[100px] bottom-0 w-[200px] sm:w-[300px] md:w-[400px] h-[150px] sm:h-[180px] md:h-[200px] pointer-events-none z-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/assests/landing-page/img-1.png"
              alt="Money bag"
              width="260"
              height="260"
              className="w-full h-full mt-10 object-contain opacity-90"
              loading="eager"
              animate={{ y: [0, -8, 0], rotate: [0, 2, 0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RewardsBanner;
