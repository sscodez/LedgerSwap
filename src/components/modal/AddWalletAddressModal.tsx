import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';
import { Ethereum } from '../table/table';
import Image from 'next/image';

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
    //  {()=> <Ethereum />}
    <Image src='/assests/cryptocurrency/eth.png' alt='eth' width={20} height= {20} />
      )
    },
    {
      id: 'sol',
      name: 'Solana',
      symbol: 'SOL',
      tag: 'SOL',
      icon: (
        <Image src='/assests/cryptocurrency/sol.png' alt='eth' width={20} height= {20} />
      )
    },
    {
      id: 'usdt',
      name: 'Tether',
      symbol: 'USDT',
      tag: 'TRX',
      icon: (
        <Image src='/assests/cryptocurrency/usdt.png' alt='eth' width={20} height= {20} />
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
        className=" rounded-lg w-full max-w-[90%] sm:max-w-lg p-4 sm:p-6 "
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
            <div className="relative" style={{ zIndex: 100 }}>
              <motion.button
                type="button"
                id="coinSelect"
                className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg bg-white flex items-center justify-between text-sm sm:text-base"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                whileHover={{ backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  {selectedCoinOption.icon}
                  <div className="flex flex-wrap sm:flex-nowrap items-center">
                    <span className="font-bold mr-1 sm:mr-2">{selectedCoinOption.symbol}</span>
                    <span className="bg-blue-100 text-blue-600 px-1 sm:px-2 rounded-md text-xs font-medium">
                      {selectedCoinOption.tag}
                    </span>
                    <span className="text-gray-500 ml-1 sm:ml-2 text-xs sm:text-sm">{selectedCoinOption.name}</span>
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
                    className="absolute z-[9999] left-0 right-0 top-full mt-1 rounded-md   overflow-visible"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    style={{ maxHeight: '250px', overflowY: 'auto' }}
                  >
                    <ul className="max-h-60 rounded-md py-1 text-sm sm:text-base overflow-auto focus:outline-none">
                      {coinOptions.map((coin) => (
                        <motion.li
                          key={coin.id}
                          className="text-gray-900 my-2 hover:bg-gray-100 cursor-pointer select-none relative py-1 sm:py-2 pl-2 sm:pl-3 pr-6 sm:pr-9"
                          onClick={() => {
                            setSelectedCoin(coin.id);
                            setDropdownOpen(false);
                          }}
                          whileHover={{ backgroundColor: "#f3f4f6" }}
                          whileTap={{ backgroundColor: "#e5e7eb" }}
                        >
                          <div className="flex mr-2 items-center">
                            {coin.icon}
                            <div className="flex flex-wrap sm:flex-nowrap items-center">
                              <span className="font-bold mr-1 sm:mr-2">{coin.symbol}</span>
                              <span className="bg-blue-100 text-blue-600 px-1 sm:px-2 rounded-md text-xs font-medium">
                                {coin.tag}
                              </span>
                              <span className="text-gray-500 ml-1 sm:ml-2 text-xs sm:text-sm">{coin.name}</span>
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
              className="w-full p-3 sm:p-3 0 rounded-lg text-black border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
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
              className="w-full p-3 sm:p-3 text-black rounded-lg border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
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
