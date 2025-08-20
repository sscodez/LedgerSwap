import React from 'react';

const SecurityCheck: React.FC = () => {
  return (
    <div className="bg-gray-50 p-3 sm:p-5 mx-2 sm:mx-5 rounded-lg mb-4 sm:mb-8">
      <h3 className="text-center text-gray-700 font-medium text-sm sm:text-base mb-1 sm:mb-2">Anti-phishing check</h3>
      <p className="text-center text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Make sure you're on:</p>
      
      <div className="flex justify-center">
        <div className="flex items-center bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-[13px] border border-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1 sm:mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-green-600 font-medium">https://ledgerswap.io</span>
        </div>
      </div>
    </div>
  );
};

export default SecurityCheck;
