import React, { createContext, useContext, useState, ReactNode } from 'react';
import SignatureRequestModal from '@/components/modal/SignatureRequestModal';
import AddWalletAddressModal from '@/components/modal/AddWalletAddressModal';

interface ModalContextType {
  // Signature Request Modal
  openSignatureModal: (params: SignatureModalParams) => void;
  closeSignatureModal: () => void;
  
  // Add Wallet Address Modal
  openAddWalletAddressModal: () => void;
  closeAddWalletAddressModal: () => void;
}

interface SignatureModalParams {
  address: string;
  amount?: string;
  currency?: string;
  message?: string;
  onSignIn?: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  // Signature Request Modal state
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
  const [signatureParams, setSignatureParams] = useState<SignatureModalParams>({
    address: '',
    amount: '',
    currency: 'ETH',
    message: '',
    onSignIn: () => {},
  });

  // Add Wallet Address Modal state
  const [isAddWalletAddressModalOpen, setIsAddWalletAddressModalOpen] = useState(false);

  // Signature Request Modal functions
  const openSignatureModal = (params: SignatureModalParams) => {
    setSignatureParams(params);
    setIsSignatureModalOpen(true);
  };

  const closeSignatureModal = () => {
    setIsSignatureModalOpen(false);
  };

  // Add Wallet Address Modal functions
  const openAddWalletAddressModal = () => {
    setIsAddWalletAddressModalOpen(true);
  };

  const closeAddWalletAddressModal = () => {
    setIsAddWalletAddressModalOpen(false);
  };

  const handleAddWalletAddress = (data: { coin: string; address: string; label: string }) => {
    // Here you would typically save the wallet address
    console.log('Adding wallet address:', data);
    closeAddWalletAddressModal();
  };

  return (
    <ModalContext.Provider
      value={{
        openSignatureModal,
        closeSignatureModal,
        openAddWalletAddressModal,
        closeAddWalletAddressModal,
      }}
    >
      {children}
      
      {/* Render modals */}
      <SignatureRequestModal
        isOpen={isSignatureModalOpen}
        onClose={closeSignatureModal}
        onSignIn={() => {
          signatureParams.onSignIn?.();
          closeSignatureModal();
        }}
        address={signatureParams.address}
        amount={signatureParams.amount}
        currency={signatureParams.currency}
        message={signatureParams.message}
      />

      <AddWalletAddressModal
        isOpen={isAddWalletAddressModalOpen}
        onClose={closeAddWalletAddressModal}
        onAdd={handleAddWalletAddress}
      />
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
