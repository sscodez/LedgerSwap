import React from 'react';
import Modal from './Modal';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MetaMaskPermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDeny: () => void;
  onConnect: () => void;
  websiteName?: string;
}

const MetaMaskPermissionModal: React.FC<MetaMaskPermissionModalProps> = ({
  isOpen,
  onClose,
  onDeny,
  onConnect,
  websiteName = 'ledgerswap.io'
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
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  } as const;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <motion.div 
        className="flex text-[13px] flex-col items-center py-4 sm:py-6 px-4 sm:px-6 space-y-4 sm:space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Logos section */}
        <motion.div 
          className="flex items-center justify-center space-x-3"
          variants={itemVariants}
        >
          {/* MetaMask Logo */}
          <div className="w-10 h-10 sm:w-12 sm:h-12">
            <Image src="/assests/modal/MetaMask.png" alt="MetaMask" width={48} height={48}/>
          </div>
          
          {/* Arrow Icon */}
          <div className="text-gray-600">
            <Image src="/assests/modal/shuffle.png" alt="Connection" width={28} height={28}/>
          </div>
          
          {/* Website Logo */}
          <div className="w-10 h-10 sm:w-12 sm:h-12">
            <Image src="/assests/modal/walletconnect.png" alt="InterledgerSwap" width={48} height={48}/>
          </div>
        </motion.div>
        
        {/* Title and Website */}
        <motion.div 
          className="text-center space-y-1"
          variants={itemVariants}
        >
          <h2 className="text-[15px] sm:text-[16px] text-black font-bold">Connect to Website</h2>
          <p className="text-gray-600 text-[12px] sm:text-[13px] my-2 sm:my-3">{websiteName}</p>
        </motion.div>
        
        {/* Permission Items */}
        <motion.div 
          className="w-full text-[12px] sm:text-[13px] mb-3 sm:mb-5 space-y-3 sm:space-y-4"
          variants={containerVariants}
        >
          {/* Permission 1 */}
          <motion.div 
            className="flex items-start border-b pb-3 sm:pb-4"
            variants={itemVariants}
          >
            <div className="p-1.5 sm:p-2 bg-blue-50 rounded-full mr-2 sm:mr-3">
              <Image src="/assests/modal/account_balance.png" alt="Balance" width={18} height={18}/>
            </div>
            <div className="flex-1">
              <p className="text-gray-800 text-xs sm:text-sm">Allow access to your wallet balance and transactions</p>
            </div>
          </motion.div>
          
          {/* Permission 2 */}
          <motion.div 
            className="flex items-start border-b pb-3 sm:pb-4"
            variants={itemVariants}
          >
            <div className="p-1.5 sm:p-2 bg-green-50 rounded-full mr-2 sm:mr-3">
              <Image src="/assests/modal/check_circle_unread.png" alt="Notifications" width={18} height={18}/>
            </div>
            <div className="flex-1">
              <p className="text-gray-800 text-xs sm:text-sm">Enable transaction request notifications</p>
            </div>
          </motion.div>
          
          {/* Permission 3 */}
          <motion.div 
            className="flex items-start"
            variants={itemVariants}
          >
            <div className="p-1.5 sm:p-2 bg-red-50 rounded-full mr-2 sm:mr-3">
              <Image src="/assests/modal/gpp_bad.png" alt="Security" width={18} height={18}/>
            </div>
            <div className="flex-1">
              <p className="text-gray-800 text-xs sm:text-sm">Your funds stay in your wallet until you confirm a transaction.</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Action Buttons */}
        <motion.div 
          className="w-full text-[13px] my-1 sm:my-2 flex space-x-2 sm:space-x-4"
          variants={itemVariants}
        >
          <motion.button
            onClick={onDeny}
            className="flex-1 py-2 sm:py-3 border border-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-50 transition-colors text-xs sm:text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Deny
          </motion.button>
          <motion.button
            onClick={onConnect}
            className="flex-1 py-2 sm:py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors text-xs sm:text-sm"
            whileHover={{ scale: 1.03, boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            Connect
          </motion.button>
        </motion.div>
      </motion.div>
    </Modal>
  );
};

export default MetaMaskPermissionModal;
