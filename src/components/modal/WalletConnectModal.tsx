import React from 'react';
import Modal from './Modal';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (wallet: string) => void;
}

const WalletConnectModal: React.FC<WalletConnectModalProps> = ({
  isOpen,
  onClose,
  onConnect,
}) => {
  // Animation variants for staggered children animations
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  } as const;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Select Your Wallet">
      <motion.div 
        className="text-[13px] text-black space-y-4 px-1 sm:px-2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2 
          className="text-[16px] sm:text-[18px] text-center text-black font-semibold"
          variants={itemVariants}
        >
          Select Your Wallet
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 text-xs sm:text-sm"
          variants={itemVariants}
        >
          By connecting your wallet, you agree to our{' '}
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{' '}
          and our{' '}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </motion.p>

        <motion.div 
          className="space-y-3"
          variants={containerVariants}
        >
          {/* MetaMask */}
          <motion.button
            onClick={() => onConnect('metamask')}
            className="w-full flex items-center justify-between p-3 sm:p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 4px 8px rgba(0,0,0,0.05)' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3">
                <Image src="/assests/modal/MetaMask.png" alt="MetaMask" width={48} height={48}/>
              </div>
              <span className="font-medium text-[13px] ">MetaMask</span>
            </div>
            <span className="bg-gray-100 text-gray-600 py-1 px-2 sm:px-3 rounded-md text-[13px]">Connect</span>
          </motion.button>

          {/* WalletConnect */}
          <motion.button
            onClick={() => onConnect('walletconnect')}
            className="w-full flex items-center justify-between p-3 sm:p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 4px 8px rgba(0,0,0,0.05)' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3">
                <Image src="/assests/modal/walletconnect.png" alt="walletconnect" width={48} height={48}/>
              </div>
              <span className="font-medium text-[13px] ">WalletConnect</span>
            </div>
            <span className="bg-gray-100 text-gray-600 py-1 px-2 sm:px-3 rounded-md text-[13px]">Connect</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </Modal>
  );
};

export default WalletConnectModal;
