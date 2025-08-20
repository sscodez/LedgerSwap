'use client'
import React, { useState } from 'react';

const AdminFeesPage: React.FC = () => {
  const [feePercentage, setFeePercentage] = useState('0.5');

  const handleSave = () => {
    // Here would be the logic to save the fee percentage
    console.log('Saving fee percentage:', feePercentage);
  };

  return (
    <div className="text-black relative">
      <div className="flex flex-col sm:flex-row justify-between text-black items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
        <h1 className="text-xl sm:text-2xl font-medium">Platform Fee Configuration</h1>
        <div className="flex items-center space-x-2">
          <button 
            className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md hover:bg-gray-50"
            aria-label="Guides"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Guides
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200 mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Platform Swap Fee (%)</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <input 
            type="text" 
            className="w-full sm:flex-1 p-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={feePercentage}
            onChange={(e) => setFeePercentage(e.target.value)}
          />
          <button 
            className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
            onClick={handleSave}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Save
          </button>
        </div>

        <div className="rounded-lg mt-4 sm:mt-5 p-4 sm:p-6 bg-gray-50">
        <h2 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Fee Revenue (Last 30 Days)</h2>
        <div className="mb-1 sm:mb-2">
          <span className="text-2xl sm:text-3xl font-semibold text-blue-600">$142,850</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">From 28,570 transactions</p>
      </div>

      </div>
      
   
      
      {/* Additional Fee Statistics could be added here */}
    </div>
  );
};

export default AdminFeesPage;
