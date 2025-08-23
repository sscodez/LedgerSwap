import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface SignatureRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: () => void;
  address: string;
  amount?: string;
  currency?: string;
  message?: string;
}

const SignatureRequestModal: React.FC<SignatureRequestModalProps> = ({
  isOpen,
  onClose,
  onSignIn,
  address,
  amount = '5.215423',
  currency = 'ETH',
  message = 'Please sign this message to connect to InterledgerSwap'
}) => {
  // Using AnimatePresence for exit animations

  // Format address for display (show beginning and end only)
  const formatAddress = (addr: string) => {
    if (!addr) return '';
    if (addr.length <= 12) return addr;
    return `${addr.substring(0, 8)}...${addr.substring(addr.length - 4)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center z-50 bg-navy-900 bg-opacity-80 p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white rounded-3xl w-full max-w-[90%] sm:max-w-md p-4 sm:p-6 shadow-xl"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex text-[13px] text-black flex-col items-center">
              {/* Logo */}
              <motion.div 
                className="mb-4"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-center">
                  <Image src="/assests/modal/logo.png" alt="MetaMask" width={48} height={48}/>
                </div>
              </motion.div>
              
              {/* Title */}
              <motion.h2 
                className="text-[16px] font-bold mb-1 text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Signature Requested
              </motion.h2>
              <motion.p 
                className="text-gray-500 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                InterledgerSwap
              </motion.p>
              
              {/* Wallet info */}
              <motion.div 
                className="flex flex-col sm:flex-row sm:items-center justify-between w-full border-t border-b border-gray-200 py-4 mb-4 gap-2 sm:gap-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <Image src="/assests/modal/avater.png" alt="MetaMask" width={48} height={48}/>
                  </div>
                  <span className="font-mono text-xs sm:text-sm">{formatAddress(address)}</span>
                </div>
                <div className="flex items-center mt-2 sm:mt-0">
                  <span className="font-bold">{amount}</span>
                  <span className="ml-2 text-gray-400">{currency}</span>
                </div>
              </motion.div>
              
              {/* Message */}
              <motion.div 
                className="w-full mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-sm text-gray-600 mb-2">Message:</p>
                <p className="text-gray-800 text-[13px]">{message}</p>
              </motion.div>
              
              {/* Buttons */}
              <motion.div 
                className="flex w-full gap-2 sm:gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  onClick={onClose}
                  className="flex-1 py-2 sm:py-3 px-3 sm:px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-[13px] font-semibold "
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={onSignIn}
                  className="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-[13px] font-semibold "
                  whileHover={{ scale: 1.03, boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Sign In
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignatureRequestModal;
