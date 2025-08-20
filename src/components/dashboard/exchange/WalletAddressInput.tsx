import React from 'react';
import Image from 'next/image';
import { BookAddressIcon } from '@/components/icons';

interface WalletAddressInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const WalletAddressInput: React.FC<WalletAddressInputProps> = ({
  value,
  onChange,
  placeholder = "The recipient's Ethereum address"
}) => {
  return (
    <div className="mt-4 sm:mt-6">
      <div className='flex items-center my-5 w-full justify-between'>
        <h3 className="text-gray-700 font-medium text-sm sm:text-base mb-2 sm:mb-3">Enter a wallet address</h3>

        <div className='flex justify-center items-center'>


        <div className='flex border  mx-2 rounded-sm bg-gray-200 items-center'>
            <Image
              src="/assests/icons/add.svg"
              alt="QR Code Scanner"
              width={25}
              height={25}
            />
      

        

          </div>

          <Image
            src="/assests/modal/MetaMask.png"
            alt="QR Code Scanner"
            width={35}
            height={35}
          />
        </div>
      </div>
      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-100 overflow-hidden">
        <div className="flex-grow relative">
          <input
            type="text"
            className="w-full py-2.5 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm bg-transparent border-0 focus:outline-none focus:ring-0 placeholder-black"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />

          {value && (
            <div className="absolute right-0 top-0 h-full flex items-center pr-3">
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className=" bg-gray-200 rounded-sm my-2 mx-1 px-2 py-2 flex items-center">
          <button className="text-gray-500 hover:text-gray-700 p-1">
            <BookAddressIcon size={10} />
          </button>
        </div>
        <div className="bg-gray-200 rounded-sm mx-1 my-2 px-2 py-2 flex items-center">
          <button className="text-gray-500  hover:text-gray-700 p-1">
            <Image
              src="/assests/icons/qr_code_scanner.png"
              alt="QR Code Scanner"
              width={5}
              height={5}
              className="h-2.5 w-2.5"
            />
          </button>
        </div>
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
