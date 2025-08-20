import React from 'react';

interface DateRange {
  startDate: string;
  endDate: string;
}

interface PayoutFiltersProps {
  onFilterChange: (filter: { type: string; value: string | DateRange }) => void;
  onClearFilters: () => void;
}

const PayoutFilters: React.FC<PayoutFiltersProps> = ({
  onFilterChange,
  onClearFilters
}) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-2 mb-4 sm:mb-6">
      <div className="flex flex-nowrap overflow-x-auto pb-2 sm:pb-0 gap-2 w-full sm:w-auto">
        {/* Time period filters */}
        <button 
          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-gray-700 hover:bg-gray-100 text-xs sm:text-sm whitespace-nowrap"
          onClick={() => onFilterChange({ type: 'period', value: 'all' })}
        >
          All
        </button>
        <button 
          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-gray-700 hover:bg-gray-100 text-xs sm:text-sm whitespace-nowrap"
          onClick={() => onFilterChange({ type: 'period', value: 'month' })}
        >
          Month
        </button>
        <button 
          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-gray-700 hover:bg-gray-100 text-xs sm:text-sm whitespace-nowrap"
          onClick={() => onFilterChange({ type: 'period', value: 'week' })}
        >
          Week
        </button>
        <button 
          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-gray-700 hover:bg-gray-100 text-xs sm:text-sm whitespace-nowrap"
          onClick={() => onFilterChange({ type: 'period', value: 'yesterday' })}
        >
          Yesterday
        </button>
      </div>

      <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-between sm:justify-start">
        {/* Date range picker */}
        <div className="relative w-full sm:w-auto">
          <div className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-md text-gray-700 bg-white text-xs sm:text-sm">
            <span className="whitespace-nowrap">Date:</span>
            <div className="ml-2 flex items-center">
              <input 
                type="text" 
                className="w-[70px] sm:w-28 outline-none text-gray-600 text-xs sm:text-sm"
                placeholder="01.01.24"
                onChange={(e) => {
                  // Date range logic would go here
                }}
              />
              <span className="mx-1">-</span>
              <input 
                type="text" 
                className="w-[70px] sm:w-28 outline-none text-gray-600 text-xs sm:text-sm"
                placeholder="30.10.25"
                onChange={(e) => {
                  // Date range logic would go here
                }}
              />
              <button className="ml-1 sm:ml-2 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Status dropdown */}
        <div className="relative">
          <button 
            className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-md text-gray-700 bg-white text-xs sm:text-sm min-w-[80px] sm:min-w-28"
          >
            <span>Status</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {/* Status dropdown menu would go here */}
        </div>

        {/* Clear button */}
        <button
          onClick={onClearFilters}
          className="px-4 sm:px-5 py-1.5 sm:py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 text-xs sm:text-sm ml-auto sm:ml-0"
        >
          Clear
        </button>
      </div>

      {/* Export button */}
      {/* <button
        className="flex items-center px-4 py-2 rounded-md text-blue-600 hover:bg-blue-50 text-sm font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
        </svg>
        Export
      </button> */}
    </div>
  );
};

export default PayoutFilters;
