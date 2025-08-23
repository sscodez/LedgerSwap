import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConnectedModalProps {
  isOpen: boolean;
  onClose?: () => void; // Made optional since we're not using it currently
  message?: string;
}

const ConnectedModal: React.FC<ConnectedModalProps> = ({
  isOpen,
  onClose,
  message = 'Successfully connected to InterledgerSwap'
}) => {
  // Using AnimatePresence for exit animations

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
              {/* Success Icon */}
              <motion.div 
                className="mb-4 sm:mb-6 mt-2 sm:mt-4"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-8 sm:h-8">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </motion.div>
              
              {/* Title */}
              <motion.h2 
                className="text-[16px] sm:text-[18px] font-bold mb-2 sm:mb-3 text-gray-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Connected
              </motion.h2>
              
              {/* Message */}
              <motion.p 
                className="text-gray-600 mb-4 sm:mb-6 text-center text-sm sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {message}
              </motion.p>
              
              {/* Optional: Close button if needed */}
              {/* {onClose && (
                <motion.button
                  onClick={onClose}
                  className="py-2 sm:py-3 px-6 sm:px-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              )} */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConnectedModal;
