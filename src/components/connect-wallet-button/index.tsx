'use client'
import React, { useState } from 'react';
import { useModal } from '@/components/modal/ModalContext';
import WalletConnectModal from '@/components/modal/WalletConnectModal';
import MetaMaskUnlockModal from '@/components/modal/MetaMaskUnlockModal';
import MetaMaskPermissionModal from '@/components/modal/MetaMaskPermissionModal';

const ConnectWalletButton: React.FC = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showMetaMaskModal, setShowMetaMaskModal] = useState(false);
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);

  const handleConnect = (wallet: string) => {
    console.log(`Selected wallet: ${wallet}`);
    
    if (wallet === 'metamask') {
      // Show the MetaMask unlock modal
      setShowWalletModal(false);
      setShowMetaMaskModal(true);
    } else {
      // Handle other wallet connections directly
      setConnectedWallet(wallet);
      setShowWalletModal(false);
    }
  };
  
  const handleMetaMaskUnlock = (password: string) => {
    console.log('Unlocking MetaMask with password');
    // In a real app, you would handle the MetaMask authentication here
    setShowMetaMaskModal(false);
    
    // After successful MetaMask unlock, show the permission modal
    setShowPermissionModal(true);
  };
  
  const handlePermissionDeny = () => {
    setShowPermissionModal(false);
  };
  
  const handlePermissionConnect = () => {
    console.log('Permission granted, connecting wallet');
    // Complete the connection process
    setConnectedWallet('metamask');
    setShowPermissionModal(false);
  };

  const handleOpenWalletModal = () => {
    setShowWalletModal(true);
  };

  const handleCloseWalletModal = () => {
    setShowWalletModal(false);
  };
  
  const handleCloseMetaMaskModal = () => {
    setShowMetaMaskModal(false);
  };

  return (
    <>
      <button
        onClick={handleOpenWalletModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
      >
        {connectedWallet ? `Connected: ${connectedWallet}` : 'Connect Wallet'}
      </button>
      <WalletConnectModal
        isOpen={showWalletModal}
        onClose={handleCloseWalletModal}
        onConnect={handleConnect}
      />
      <MetaMaskUnlockModal
        isOpen={showMetaMaskModal}
        onClose={handleCloseMetaMaskModal}
        onUnlock={handleMetaMaskUnlock}
      />
      <MetaMaskPermissionModal
        isOpen={showPermissionModal}
        onClose={() => setShowPermissionModal(false)}
        onDeny={handlePermissionDeny}
        onConnect={handlePermissionConnect}
        websiteName="ledgerswap.io"
      />
    </>
  );
};

export default ConnectWalletButton;
