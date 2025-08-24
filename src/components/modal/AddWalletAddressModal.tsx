import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

interface CoinOption {
  id: string;
  name: string;
  symbol: string;
  tag: string;
  icon: React.ReactNode;
}

interface AddWalletAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: { coin: string; address: string; label: string }) => void;
}

const AddWalletAddressModal: React.FC<AddWalletAddressModalProps> = ({
  isOpen,
  onClose,
  onAdd
}) => {
  const [selectedCoin, setSelectedCoin] = useState('eth');
  const [walletAddress, setWalletAddress] = useState('');
  const [label, setLabel] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring" as const, 
        stiffness: 300, 
        damping: 24 
      } 
    }
  } as const;

  if (!isOpen) return null;

  const coinOptions: CoinOption[] = [
    {
      id: 'eth',
      name: 'Ethereum',
      symbol: 'ETH',
      tag: 'ETH',
      icon: (
        <svg viewBox="0 0 32 32" className="w-5 h-5 mr-2">
          <g fill="none" fillRule="evenodd">
            <circle cx="16" cy="16" r="16" fill="#627EEA"/>
            <g fill="#FFF" fillRule="nonzero">
              <path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z"/>
              <path d="M16.498 4L9 16.22l7.498-3.35z"/>
              <path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z"/>
              <path d="M16.498 27.995v-6.028L9 17.616z"/>
              <path fillOpacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/>
              <path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/>
            </g>
          </g>
        </svg>
      )
    },
    {
      id: 'sol',
      name: 'Solana',
      symbol: 'SOL',
      tag: 'SOL',
      icon: (
        <svg viewBox="0 0 32 32" className="w-5 h-5 mr-2">
          <g fill="none">
            <circle cx="16" cy="16" r="16" fill="#000"/>
            <path d="M20.7419 11.0479L18.3019 13.4879L23.8019 18.9879L20.7419 22.0479H11.2619L8.20193 18.9879L13.7019 13.4879L11.2619 11.0479H20.7419ZM8.20193 11.0479L6.20193 13.0479L8.20193 15.0479L10.2019 13.0479L8.20193 11.0479ZM23.8019 11.0479L21.8019 13.0479L23.8019 15.0479L25.8019 13.0479L23.8019 11.0479Z" fill="url(#solana_linear)"/>
          </g>
          <defs>
            <linearGradient id="solana_linear" x1="6.20193" y1="11.0479" x2="25.8019" y2="22.0479" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9945FF"/>
              <stop offset="1" stopColor="#14F195"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'usdt',
      name: 'Tether',
      symbol: 'USDT',
      tag: 'TRX',
      icon: (
        <svg viewBox="0 0 32 32" className="w-5 h-5 mr-2">
          <g fill="none" fillRule="evenodd">
            <circle cx="16" cy="16" r="16" fill="#26A17B"/>
            <path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"/>
          </g>
        </svg>
      )
    }
  ];

  const selectedCoinOption = coinOptions.find(coin => coin.id === selectedCoin) || coinOptions[0];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      coin: selectedCoin,
      address: walletAddress,
      label
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <motion.div 
        className="bg-white rounded-lg w-full max-w-[95%] sm:max-w-md md:max-w-lg p-4 sm:p-6 mx-auto"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
      >
        <motion.div 
          className="flex justify-between items-center mb-4 sm:mb-6"
          variants={itemVariants}
        >
          <h2 className="text-lg text-black sm:text-xl font-medium">Add a new wallet address</h2>
          <motion.button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </motion.div>
        
        <motion.form 
          onSubmit={handleSubmit}
          variants={containerVariants}
        >
          <motion.div 
            className="mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <label htmlFor="coinSelect" className="block  text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Select a coin
            </label>
            <div className="relative">
              <motion.button
                type="button"
                id="coinSelect"
                className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg bg-white flex items-center justify-between text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                whileHover={{ backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center min-w-0 flex-1">
                  {selectedCoinOption.icon}
                  <div className="flex items-center min-w-0">
                    <span className="font-bold mr-2">{selectedCoinOption.symbol}</span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-xs font-medium mr-2">
                      {selectedCoinOption.tag}
                    </span>
                    <span className="text-gray-500 text-sm truncate">{selectedCoinOption.name}</span>
                  </div>
                </div>
                <motion.svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </motion.button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div 
                    className="absolute z-50 left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  >
                    <ul className="max-h-60 rounded-md py-1 text-sm overflow-auto focus:outline-none">
                      {coinOptions.map((coin) => (
                        <motion.li
                          key={coin.id}
                          className="text-gray-900 hover:bg-gray-100 cursor-pointer select-none relative py-2 px-3"
                          onClick={() => {
                            setSelectedCoin(coin.id);
                            setDropdownOpen(false);
                          }}
                          whileHover={{ backgroundColor: "#f3f4f6" }}
                          whileTap={{ backgroundColor: "#e5e7eb" }}
                        >
                          <div className="flex items-center">
                            {coin.icon}
                            <div className="flex items-center min-w-0">
                              <span className="font-bold mr-2">{coin.symbol}</span>
                              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-xs font-medium mr-2">
                                {coin.tag}
                              </span>
                              <span className="text-gray-500 text-sm truncate">{coin.name}</span>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
          <motion.div 
            className="mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <label htmlFor="walletAddress" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Enter a wallet address
            </label>
            <motion.input
              type="text"
              id="walletAddress"
              placeholder="Wallet address"
              className="w-full p-3 rounded-lg text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              required
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.2)" }}
            />
          </motion.div>
          
          <motion.div 
            className="mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <label htmlFor="label" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Enter label
            </label>
            <motion.input
              type="text"
              id="label"
              placeholder="Label"
              className="w-full p-3 text-black rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              required
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.2)" }}
            />
          </motion.div>
          
          <motion.div 
            className="flex gap-2 sm:gap-4"
            variants={itemVariants}
          >
            <motion.button
              type="submit"
              className="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.03, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.97 }}
            >
              Add
            </motion.button>
            <motion.button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 sm:py-3 px-3 sm:px-4 text-blue-600 font-medium hover:bg-blue-50 border border-gray-300 rounded-lg transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.03, backgroundColor: "#eff6ff" }}
              whileTap={{ scale: 0.97 }}
            >
              Cancel
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </Modal>
  );
};

export default AddWalletAddressModal;
