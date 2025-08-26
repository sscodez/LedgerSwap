'use client';

import React, { useState, useEffect } from 'react';
import WalletConnectModal from './modal/WalletConnectModal';
import MetaMaskPermissionModal from './modal/MetaMaskPermissionModal';
import MetaMaskUnlockModal from './modal/MetaMaskUnlockModal';
import SignatureRequestModal from './modal/SignatureRequestModal';
import ConnectedModal from './modal/ConnectedModal';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WalletConnectionFlow: React.FC = () => {
  const [showWalletConnect, setShowWalletConnect] = useState(false);
  const [showMetaMaskPermission, setShowMetaMaskPermission] = useState(false);
  const [showMetaMaskUnlock, setShowMetaMaskUnlock] = useState(false);
  const [showSignatureRequest, setShowSignatureRequest] = useState(false);
  const [showConnected, setShowConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const handleConnectWallet = () => {
    setShowWalletConnect(true);
  };

  const handleWalletSelect = (wallet: string) => {
    setShowWalletConnect(false);
    if (wallet === 'metamask') {
      setShowMetaMaskPermission(true);
    }
  };

  const handlePermissionConnect = () => {
    setShowMetaMaskPermission(false);
    setShowMetaMaskUnlock(true);
  };

  const handlePermissionDeny = () => {
    setShowMetaMaskPermission(false);
  };

  const handleUnlock = (password: string) => {
    setShowMetaMaskUnlock(false);
    // Handle successful unlock here
    console.log('Wallet unlocked successfully with password:', password);
    // Mock wallet address - in a real app, this would come from the wallet provider
    const mockAddress = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';
    setWalletAddress(mockAddress);
    // Show signature request modal after successful unlock
    setShowSignatureRequest(true);
  };

  const handleCloseModal = () => {
    setShowWalletConnect(false);
    setShowMetaMaskPermission(false);
    setShowMetaMaskUnlock(false);
    setShowSignatureRequest(false);
    setShowConnected(false);
  };

  const handleSignIn = () => {
    setShowSignatureRequest(false);
    // Handle successful signature here
    console.log('Signature successful, user is now connected with address:', walletAddress);
    // Show connected modal after successful signature
    setShowConnected(true);
  };
  
  // Auto-close the connected modal after 3 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showConnected) {
      timer = setTimeout(() => {
        setShowConnected(false);
      }, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showConnected]);

  return (
    <section className="py-8 sm:py-12 md:py-20 bg-[#001233] relative overflow-hidden">
    
    <motion.div
        className="absolute bottom-[0%] left-[0%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]  hidden sm:block"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ rotate: 10, scale: 1.05 }}
      >
        <Image
          src="/assests/landing-page/2.png"
          alt="Holographic element"
          width={300}
          height={300}
          priority
        />
      </motion.div>



      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-2xl md:text-4xl text-center sm:text-left font-semibold text-white mb-4 sm:mb-6">
            Easy wallet <span className="text-blue-600">connection flow</span>
          </h2>
        </div>

        {/* Modal Flow Visualization */}
       
        {/* Connect Button */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <button
            onClick={handleConnectWallet}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base"
          >
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Actual Modals that appear on button click */}
      <WalletConnectModal
        isOpen={showWalletConnect}
        onClose={handleCloseModal}
        onConnect={handleWalletSelect}
      />

      <MetaMaskPermissionModal
        isOpen={showMetaMaskPermission}
        onClose={handleCloseModal}
        onDeny={handlePermissionDeny}
        onConnect={handlePermissionConnect}
        websiteName="ledgerswap.io"
      />

      <MetaMaskUnlockModal
        isOpen={showMetaMaskUnlock}
        onClose={handleCloseModal}
        onUnlock={handleUnlock}
      />

      <SignatureRequestModal
        isOpen={showSignatureRequest}
        onClose={handleCloseModal}
        onSignIn={handleSignIn}
        address={walletAddress}
        message="Please sign this message to connect to LedgerSwap"
      />
      
      <ConnectedModal
        isOpen={showConnected}
        onClose={handleCloseModal}
        message="Successfully connected to LedgerSwap"
      />
    </section>
  );
};

export default WalletConnectionFlow;
