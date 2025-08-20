import React, { useState } from 'react';
import Image from 'next/image';
import { BookAddressIcon } from '@/components/icons';

interface WalletAddressInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

type InputMode = 'write' | 'scan' | 'address-book';

const WalletAddressInput: React.FC<WalletAddressInputProps> = ({
  value,
  onChange,
  placeholder = "The recipient's Ethereum address"
}) => {
  const [inputMode, setInputMode] = useState<InputMode>('write');
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    if (value) {
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <div className="mt-4 sm:mt-6">
      <div className='flex items-center my-5 w-full justify-between'>
        <h3 className="text-gray-700 font-medium text-sm sm:text-base">Enter a wallet address</h3>

        <div className='flex justify-center items-center space-x-2'>
          {/* Write option */}
       
          
          {/* Scan option */}
          <button 
            onClick={() => setInputMode('scan')}
            className={`flex items-center justify-center p-2 rounded-md transition-colors ${inputMode === 'scan' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <Image
              src="/assests/icons/add.svg"
              alt="QR Code Scanner"
              width={20}
              height={20}
              className="h-5 w-5"
            />
         
          </button>
          
          {/* Address book option */}
         
          
          {/* MetaMask option */}
          <button className="flex items-center justify-center p-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
            <Image
              src="/assests/modal/MetaMask.png"
              alt="MetaMask"
              width={28}
              height={28}
              className="h-7 w-7"
            />
          </button>
        </div>
      </div>
      {/* Input area with different modes */}
      <div className="mt-3">
        {inputMode === 'write' && (
          <div className="flex items-center border border-gray-200 rounded-lg bg-gray-100 overflow-hidden">
            <div className="flex-grow relative">
              <input
                type="text"
                className="w-full py-2.5 text-black sm:py-3 px-3 sm:px-4 text-xs sm:text-sm bg-transparent border-0 focus:outline-none focus:ring-0 placeholder-black"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />

              {value && (
                <div className="absolute right-0 top-0 h-full flex items-center pr-3">
                  <button 
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => onChange('')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            
            {/* Original icons */}
            <div className="bg-gray-200 rounded-sm my-2 mx-1 px-2 py-2 flex items-center">
              <button className="text-gray-500 hover:text-gray-700 p-1">
                <BookAddressIcon size={12} />
              </button>
            </div>
            <div className="bg-gray-200 rounded-sm mx-1 my-2 px-2 py-2 flex items-center">
              <button className="text-gray-500 hover:text-gray-700 p-1">
                <Image
                  src="/assests/icons/qr_code_scanner.png"
                  alt="QR Code Scanner"
                  width={12}
                  height={12}
                  className="h-3 w-3"
                />
              </button>
            </div>
            
            {/* Copy button */}
            {/* <div className="px-2 py-2 flex items-center">
              <button 
                className={`text-gray-500 hover:text-blue-600 p-1 transition-colors ${copied ? 'text-green-500' : ''}`}
                onClick={handleCopy}
                disabled={!value}
              >
                {copied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                )}
              </button>
            </div> */}
          </div>
        )}
        
        {inputMode === 'scan' && (
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-4 flex flex-col items-center justify-center min-h-[150px]">
            <div className="mb-3">
              <Image
                src="/assests/icons/qr_code_scanner.png"
                alt="QR Code Scanner"
                width={60}
                height={60}
                className="h-16 w-16"
              />
            </div>
            <p className="text-sm text-gray-600 text-center">Scan a QR code to get the wallet address</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
              Open Camera
            </button>
          </div>
        )}
        
        {inputMode === 'address-book' && (
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-4 flex flex-col items-center justify-center min-h-[150px]">
            <div className="mb-3">
              <BookAddressIcon size={60} />
            </div>
            <p className="text-sm text-gray-600 text-center">Select from your saved addresses</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
              View Address Book
            </button>
          </div>
        )}
      </div>
      {/* Bookmark selector would go here */}
      {/* <div className="mt-1 flex items-center text-xs sm:text-sm text-orange-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <span>Save this address to reuse it in the future</span>
        <button className="ml-1 underline">+ Add</button>
      </div> */}
    </div>
  );
};

export default WalletAddressInput;
