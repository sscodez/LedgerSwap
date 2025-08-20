import Image from 'next/image';
import React from 'react';

const SecurityCheck: React.FC = () => {
  return (
    <div className="bg-gray-50 p-3 sm:p-5 mx-2 sm:mx-5 rounded-lg mb-4 sm:mb-8">
      <h3 className="text-center text-gray-700 font-medium text-sm sm:text-base mb-1 sm:mb-2">Anti-phishing check</h3>
      <p className="text-center text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Make sure you're on:</p>
      
      <div className="flex justify-center">
        <div className="flex items-center bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-[13px] border border-gray-100">
              <Image
                         src="/assests/icons/lock 2.png" 
                         alt="Security" 
                         width={20} 
                         height={20} 
                         className="w-4 h-4 sm:w-5 sm:h-5 mr-2" 
                       />
          <span className="text-green-600 font-medium">https://ledgerswap.io</span>
        </div>
      </div>
    </div>
  );
};

export default SecurityCheck;
