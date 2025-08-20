import React from 'react';

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
    <div className="mt-6">
      <h3 className="text-gray-700 font-medium mb-3">Enter a wallet address</h3>
      <div className="flex items-center">
        <div className="flex-grow relative">
          <input
            type="text"
            className="w-full py-3 px-4 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          {value && (
            <div className="absolute right-0 top-0 h-full flex items-center pr-3">
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className="ml-2">
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </div>
      {/* Bookmark selector would go here */}
      {/* <div className="mt-1 flex items-center text-sm text-orange-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <span>Save this address to reuse it in the future</span>
        <button className="ml-1 underline">+ Add</button>
      </div> */}
    </div>
  );
};

export default WalletAddressInput;
