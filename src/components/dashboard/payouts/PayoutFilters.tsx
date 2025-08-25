import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export interface DateRange {
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
  const [activeFilters, setActiveFilters] = useState<{
    dateRange?: DateRange;
  }>({});
  const [activePeriod, setActivePeriod] = useState('All');
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-2 mb-4 sm:mb-6">
       <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-3">
            <div className="flex justify-between text-[#62748E] items-center overflow-x-auto text-sm bg-[#F1F5F9] p-1 rounded-lg w-full">
              <button 
                className={`px-3 py-2 rounded-lg whitespace-nowrap ${activePeriod === 'All' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
                onClick={() => {
                  setActivePeriod('All');
                  onFilterChange({ type: 'period', value: 'all' });
                }}
              >
                All
              </button>
              <button 
                className={`px-3 py-2 rounded-lg whitespace-nowrap ${activePeriod === 'Month' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
                onClick={() => {
                  setActivePeriod('Month');
                  onFilterChange({ type: 'period', value: 'month' });
                }}
              >
                Month
              </button>
              <button 
                className={`px-3 py-2 rounded-lg whitespace-nowrap ${activePeriod === 'Week' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
                onClick={() => {
                  setActivePeriod('Week');
                  onFilterChange({ type: 'period', value: 'week' });
                }}
              >
                Week
              </button>
              <button 
                className={`px-3 py-2 rounded-lg whitespace-nowrap ${activePeriod === 'Yesterday' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
                onClick={() => {
                  setActivePeriod('Yesterday');
                  onFilterChange({ type: 'period', value: 'yesterday' });
                }}
              >
                Yesterday
              </button>
            </div>
          </div>

      <div className="flex flex-wrap justify-center items-center   w-full sm:w-auto  sm:justify-start">
        {/* Date range picker */}
        <div className="relative w-full   sm:w-auto">
          <div className="flex items-center bg-[#F1F5F9] rounded-lg   justify-center sm:px-4  sm:py-2 py-3 mx-5 text-gray-700  text-xs sm:text-sm">
            <span className="whitespace-nowrap">Date:</span>
            <div className="ml-2 flex   items-center">
         
             
              <input 
                type="date" 
                className="w-[70px] sm:w-28  bg-[#F1F5F9] outline-none text-gray-600 text-xs sm:text-sm"
                placeholder="30.10.25"
                onChange={(e) => {
                  const endDate = e.target.value;
                  onFilterChange({
                    type: 'dateRange',
                    value: { 
                      startDate: activeFilters?.dateRange?.startDate || '', 
                      endDate 
                    }
                  });
                }}
              />
              {/* <button className="ml-1 sm:ml-2 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button> */}
            </div>
          </div>
        </div>

        {/* Status dropdown */}
        <div className="relative  ">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button 
                className="flex items-center bg-[#F1F5F9] px-3 sm:px-4 justify-between sm:py-2  py-3 rounded-md text-gray-700  text-xs sm:text-sm min-w-[80px] sm:min-w-28"
              >
                <span>Status</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <StyledContent 
                className="bg-white rounded-lg shadow-xl min-w-[150px] z-[999999]" 
                sideOffset={5}
                align="center"
                forceMount
              >
                <div className="py-1">
                  <DropdownMenu.Item 
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                    onClick={() => onFilterChange({ type: 'status', value: 'Pending' })}
                  >
                    <span>Pending</span>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item 
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                    onClick={() => onFilterChange({ type: 'status', value: 'Finished' })}
                  >
                    <span>Finished</span>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item 
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                    onClick={() => onFilterChange({ type: 'status', value: '' })}
                  >
                    <span>All</span>
                  </DropdownMenu.Item>
                </div>
              </StyledContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        {/* Clear button */}
        <div className='mx-10'>
        <button
          onClick={onClearFilters}
          className="px-4 sm:px-5 py-3 sm:py-2 mx-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 text-xs sm:text-sm ml-auto sm:ml-0"
        >
          Clear
        </button>
        </div>
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

// Animation keyframes
const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUpAndFade = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-4px);
  }
`;

// Styled components for animations
const StyledContent = styled(DropdownMenu.Content)`
  animation-duration: 200ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  
  &[data-state="open"] {
    animation-name: ${slideDownAndFade};
  }
  
  &[data-state="closed"] {
    animation-name: ${slideUpAndFade};
  }
`;

export default PayoutFilters;
