import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Banner = ({title, description, secondtitle}: {title: string, description: string, secondtitle?: string}) => {
  return (
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
        <h1 className="text-6xl  md:text-5xl lg:text-6xl font-semibold text-white mb-4">
       {title}
      {secondtitle && <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {secondtitle}
              </span>}
        </h1>
        <p className="text-[12px] md:text-[16px] text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>
    </div>
  </div>
  )
}

export default Banner
