import React from 'react';

const SwapControls: React.FC = () => {
  return (
    <div className="flex justify-center mb-4">
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2"
        aria-label="Switch currencies"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      </button>
    </div>
  );
};

export default SwapControls;
