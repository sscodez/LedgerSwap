import React from 'react';

interface AddressFiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filter: { type: string; value: string }) => void;
  onClearFilters: () => void;
}

const AddressFilters: React.FC<AddressFiltersProps> = ({ 
  onSearch,
  onFilterChange,
  onClearFilters
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {/* Coin dropdown */}
      <div className="relative">
        <button 
          className="flex items-center px-4 py-2.5 rounded-md bg-gray-100 text-gray-700 text-sm min-w-28 justify-between"
        >
          <span>Coin</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
        {/* Dropdown menu would go here */}
      </div>

      {/* Network dropdown */}
      <div className="relative">
        <button 
          className="flex items-center px-4 py-2.5 rounded-md bg-gray-100 text-gray-700 text-sm min-w-28 justify-between"
        >
          <span>Network</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
        {/* Dropdown menu would go here */}
      </div>

      {/* Search input */}
      <div className="relative flex-grow">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full pl-10 pr-3 py-2.5 border placeholder:text-gray-400 border-gray-100 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          placeholder="Search Address or Lable"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Clear button */}
      <button
        onClick={onClearFilters}
        className="px-5 py-2.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 text-sm"
      >
        Clear
      </button>
    </div>
  );
};

export default AddressFilters;
