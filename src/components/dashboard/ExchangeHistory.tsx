'use client'
import React, { useState, useEffect } from 'react';
import RewardsBanner from './WelcomeBanner';
import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { BsLightningChargeFill } from 'react-icons/bs';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// Animation for dropdown menu
const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled component for dropdown content
const StyledContent = styled(DropdownMenu.Content)`
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: forwards;
  animation-name: ${slideDownAndFade};
  will-change: transform, opacity;
`;
interface ExchangeHistoryItem {
  id: string;
  status: 'Pending' | 'Finished';
  date: string;
  time: string;
  fromCurrency: string;
  fromAmount: string;
  toCurrency: string;
  toAmount: string;
  fee: string;
  feePercentage: string;
  cashback: string;
}

const mockData: ExchangeHistoryItem[] = [
  {
    id: '0xa9824sadjk4487823a9',
    status: 'Pending',
    date: '15 Aug 2025',
    time: '10:05',
    fromCurrency: 'USDT',
    fromAmount: '3000.00',
    toCurrency: 'ETH',
    toAmount: '1.15005369',
    fee: 'Fee',
    feePercentage: '0.5%',
    cashback: '100.00'
  },
  {
    id: '0xb7234sadjk4487349s5',
    status: 'Finished',
    date: '14 Fav 2025',
    time: '10:05',
    fromCurrency: 'USDT',
    fromAmount: '3000.00',
    toCurrency: 'BTC',
    toAmount: '1.15005369',
    fee: 'Fee',
    feePercentage: '0.5%',
    cashback: '100.00'
  },
  {
    id: '0xa2232sadjk4487343e2',
    status: 'Finished',
    date: '1 Jan 2025',
    time: '10:05',
    fromCurrency: 'USDT',
    fromAmount: '3000.00',
    toCurrency: 'USDC',
    toAmount: '1.15005369',
    fee: 'Fee',
    feePercentage: '0.5%',
    cashback: '100.00'
  }
];

const ExchangeHistory: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [hideUnfinished, setHideUnfinished] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredData, setFilteredData] = useState(mockData);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');

  // Apply filters whenever filter values change
  useEffect(() => {
    applyFilters();
  }, [hideUnfinished, searchTerm, activeFilter, selectedStatus, fromCurrency, toCurrency, startDate, endDate]);

  // Filter function
  const applyFilters = () => {
    let result = [...mockData];

    // Filter by status
    if (selectedStatus) {
      result = result.filter(item => item.status === selectedStatus);
    }

    // Filter by period
    if (activeFilter !== 'All') {
      const today = new Date();
      let periodStartDate: Date;

      switch (activeFilter) {
        case 'Month':
          periodStartDate = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
          break;
        case 'Week':
          periodStartDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
          break;
        case 'Yesterday':
          periodStartDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
          break;
        default:
          periodStartDate = new Date(0); // Beginning of time
      }

      result = result.filter(item => {
        const itemDate = parseExchangeDate(item.date, item.time);
        return itemDate >= periodStartDate;
      });
    }

    // Filter by custom date range
    if (startDate || endDate) {
      result = result.filter(item => {
        const itemDate = parseExchangeDate(item.date, item.time);
        const start = startDate ? new Date(startDate) : new Date(0);
        const end = endDate ? new Date(endDate) : new Date(8640000000000000); // Max date

        return itemDate >= start && itemDate <= end;
      });
    }

    // Filter by hide unfinished
    if (hideUnfinished) {
      result = result.filter(item => item.status === 'Finished');
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter(item =>
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.fromCurrency.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.toCurrency.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by from currency
    if (fromCurrency) {
      result = result.filter(item => item.fromCurrency === fromCurrency);
    }

    // Filter by to currency
    if (toCurrency) {
      result = result.filter(item => item.toCurrency === toCurrency);
    }

    setFilteredData(result);
  };

  // Helper function to parse date strings
  const parseExchangeDate = (dateStr: string, timeStr: string): Date => {
    // Example format: "15 Aug 2025" and "10:05"
    const [day, month, year] = dateStr.split(' ');
    const [hour, minute] = timeStr.split(':');

    const monthMap: { [key: string]: number } = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };

    return new Date(
      parseInt(year),
      monthMap[month],
      parseInt(day),
      parseInt(hour),
      parseInt(minute)
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveFilter('All');
    setStartDate('');
    setEndDate('');
    setSelectedStatus('');
    setFromCurrency('');
    setToCurrency('');
    setSearchTerm('');
    setHideUnfinished(false);
  };

  const exportToCSV = () => {
    const headers = [
      'ID',
      'Status',
      'Date',
      'Time',
      'From Currency',
      'From Amount',
      'To Currency',
      'To Amount',
      'Fee',
      'Fee Percentage',
      'Cashback'
    ];

    const csvContent = [
      headers.join(','),
      ...filteredData.map(item => [
        item.id,
        item.status,
        item.date,
        item.time,
        item.fromCurrency,
        item.fromAmount,
        item.toCurrency,
        item.toAmount,
        item.fee,
        item.feePercentage,
        item.cashback
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `exchange-history-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (

    <div className=' w-[80%] exsm:w-[90%] xsm:w-full overflow-auto   '>
      <RewardsBanner />
      <div className="flex flex-row mt-8 md:flex-row justify-between  items-start md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-medium text-gray-800">Exchange History</h2>
        <button
          onClick={exportToCSV}
          className="text-blue-600 hover:text-blue-700 flex items-center transition-colors"
        >
          <Image src="/assests/icons/vertical_align_bottom.svg" className='mx-1' alt="Export" width={20} height={20} />
          Export
        </button>
      </div>

      <div className="bg-white   rounded-lg  ">


        {/* Filters */}
        <div className="text-black text-[13px]  flex rounded-lg p-2 w-full  md:p-4 mb-6">
          {/* Filter sections - reorganized for better mobile layout */}
          <div className="grid grid-cols-2 exsm:grid-cols-3 xsm:grid-cols-4   sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-9 gap-2 mb-4">
            {/* Time period filter - full width on mobile */}
            <div className="col-span-2 exsm:col-span-2 xsm:col-span-4 sm:col-span-3 md:col-span-3 lg:col-span-3">
              <div className="flex justify-between text-[#62748E] items-center  bg-[#F1F5F9] p-1 rounded-lg w-full">
                <button
                  className={`px-3 py-2 rounded-lg whitespace-nowrap ${activeFilter === 'All' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
                  onClick={() => setActiveFilter('All')}
                >
                  All
                </button>
                <button
                  className={`px-3 py-2 rounded-lg whitespace-nowrap ${activeFilter === 'Month' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
                  onClick={() => setActiveFilter('Month')}
                >
                  Month
                </button>
                <button
                  className={`px-3 py-2 rounded-lg whitespace-nowrap ${activeFilter === 'Week' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
                  onClick={() => setActiveFilter('Week')}
                >
                  Week
                </button>
                <button
                  className={`px-3 py-2 rounded-lg whitespace-nowrap ${activeFilter === 'Yesterday' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
                  onClick={() => setActiveFilter('Yesterday')}
                >
                  Yesterday
                </button>
              </div>
            </div>

            {/* Search field - full width on mobile */}





            {/* Date range filters - stack on mobile */}
            <div className="col-span-2 xsm:col-span-2  sm:col-span-3 md:col-span-2    lg:col-span-3">

              <div className="flex flex-row items-center px-2 justify-center  sm:flex-row  sm:items-center ">
                <span className="text-gray-500 mb-1 mr-2 sm:mb-0 sm:mr-2">Date:</span>
                <input
                  type="date"
                  className="  px-3 py-3 bg-[#F1F5F9] rounded-lg w-full"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>


            </div>

            {/* Status dropdown */}
            <div className=" xsm:col-span-2 col-span-1">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className=" bg-[#F1F5F9] rounded-lg text-[#62748E] px-4 py-3 flex items-center justify-between w-full">
                    <span className="truncate">{selectedStatus || 'Status'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <StyledContent
                    className="bg-white rounded-lg shadow-xl min-w-[150px] z-[999999]"
                    sideOffset={5}
                    align="start"
                    forceMount
                  >
                    <div className="py-1">
                      <DropdownMenu.Item
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                        onClick={() => setSelectedStatus('Pending')}
                      >
                        <span>Pending</span>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                        onClick={() => setSelectedStatus('Finished')}
                      >
                        <span>Finished</span>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                        onClick={() => setSelectedStatus('')}
                      >
                        <span>All</span>
                      </DropdownMenu.Item>
                    </div>
                  </StyledContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>

            <div className="col-span-1  xsm:col-span-1  sm:col-span-2 rounded-lg bg-[#F1F5F9] md:col-span-2 lg:col-span-2 flex flex-row sm:flex-col md:flex-row items-center justify-between ">
              <div className="flex  w-full overflow-hidden justify-between px-3 py-3 md:py-0 items-center">
                <span className="mr-2  text-[#62748E]    md:text-xs  lg:tex-sm xl:text-sm  whitespace-nowrap">Hide unfinished</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={hideUnfinished}
                    onChange={() => setHideUnfinished(!hideUnfinished)}
                  />
                  <div className=" w-8   xl:w-11  h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

            </div>



            <div className="col-span-2 xsm:col-span-3   sm:col-span-2 md:col-span-4 lg:col-span-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className=" py-3 bg-[#F1F5F9]  text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                  placeholder="Search by ID or currency"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>




            {/* From currency dropdown */}
            <div className="col-span-1">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className=" bg-[#F1F5F9] rounded-lg text-[#90A1B9] px-4 py-3 flex items-center justify-between w-full">
                    <span className="truncate">{fromCurrency || 'From'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <StyledContent
                    className="bg-white  rounded-lg shadow-xl min-w-[150px] z-[999999]"
                    sideOffset={5}
                    align="start"
                    forceMount
                  >
                    <div className="py-1">
                      <DropdownMenu.Item
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                        onClick={() => setFromCurrency('USDT')}
                      >
                        <span>USDT</span>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                        onClick={() => setFromCurrency('ETH')}
                      >
                        <span>ETH</span>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                        onClick={() => setFromCurrency('BTC')}
                      >
                        <span>BTC</span>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                        onClick={() => setFromCurrency('')}
                      >
                        <span>All</span>
                      </DropdownMenu.Item>
                    </div>
                  </StyledContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>

            {/* To currency dropdown */}
            <div className="col-span-1">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className=" bg-[#F1F5F9] rounded-lg px-4 text-[#90A1B9] py-3 flex items-center justify-between w-full">
                    <span className="truncate  ">{toCurrency || 'To'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <StyledContent
                    className="bg-white rounded-lg shadow-xl min-w-[150px] z-[999999]"
                    sideOffset={5}
                    align="start"
                    forceMount
                  >
                    <div className="py-1">
                      <DropdownMenu.Item
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                        onClick={() => setToCurrency('USDT')}
                      >
                        <span>USDT</span>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                        onClick={() => setToCurrency('ETH')}
                      >
                        <span>ETH</span>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                        onClick={() => setToCurrency('BTC')}
                      >
                        <span>BTC</span>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                        onClick={() => setToCurrency('USDC')}
                      >
                        <span>USDC</span>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                        onClick={() => setToCurrency('')}
                      >
                        <span>All</span>
                      </DropdownMenu.Item>
                    </div>
                  </StyledContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>

            {/* Hide unfinished toggle and Clear button */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-row sm:flex-col md:flex-row items-center justify-between ">

              <button
                className=" bg-[#F1F5F9] rounded-xl px-4 py-3 border border-gray-700 whitespace-nowrap"
                onClick={clearFilters}
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        

        {/* Responsive Table */}
        <div className=' overflow-x-auto'>
     
          <table className="w-full " >
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-[10px] md:text-sm font-medium text-gray-500">Exchange ID</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-[10px] md:text-sm font-medium text-gray-500">Status</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-[10px] md:text-sm font-medium text-gray-500">
                  <div className="flex items-center">
                    Date
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-[10px] md:text-sm font-medium text-gray-500">From</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-[10px] md:text-sm font-medium text-gray-500">To</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-[10px] md:text-sm font-medium text-gray-500">Fees</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-[10px] md:text-sm font-medium text-gray-500">Cashback</th>
              </tr>
            </thead>
            <tbody className='text-[10px] md:text-[13px]'>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-2 md:py-4 px-2 md:px-4 text-[10px] md:text-[13px] text-blue-600 hover:underline cursor-pointer">
                    <span className="truncate block max-w-[80px] md:max-w-none">{item.id}</span>
                  </td>
                  <td className="py-2 md:py-4 text-[10px] md:text-[13px] px-2 md:px-4">
                    <span className={`px-1 md:px-2 py-0.5 md:py-1 rounded-md font-medium text-[8px] md:text-xs ${item.status === 'Pending'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                      }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-2 md:py-4 px-2 md:px-4 text-gray-600">
                    <div className="text-[10px] md:text-[13px]">
                      {item.date}
                    </div>
                    <div className="text-[8px] md:text-[13px] text-gray-500">
                      {item.time}
                    </div>
                  </td>
                  <td className="py-2 md:py-4 px-2 md:px-4">
                    <div className="text-[10px] md:text-[13px] text-gray-900 font-medium">
                      {item.fromCurrency}
                    </div>
                    <div className="text-[8px] md:text-[11px] text-gray-500 truncate max-w-[60px] md:max-w-none">
                      {item.fromAmount}
                    </div>
                  </td>
                  <td className="py-2 md:py-4 px-2 md:px-4">
                    <div className="text-[10px] md:text-[13px] text-gray-900 font-medium">
                      {item.toCurrency}
                    </div>
                    <div className="text-[8px] md:text-[11px] text-gray-500 truncate max-w-[60px] md:max-w-none">
                      {item.toAmount}
                    </div>
                  </td>
                  <td className="py-2 md:py-4 px-2 md:px-4">
                    <div className="text-[8px] md:text-[13px] text-gray-500">
                      {item.fee}
                    </div>
                    <div className="text-[10px] md:text-[13px] text-gray-900 font-medium">
                      {item.feePercentage}
                    </div>
                  </td>
                  <td className="py-2 md:py-4 px-2 md:px-4">
                    <div className="text-[10px] md:text-[13px] text-gray-900 font-medium">
                      USDT
                    </div>
                    <div className="text-[8px] md:text-[11px] text-gray-500">
                      {item.cashback}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
       
          </div>
      </div>
    </div>
  );
};

export default ExchangeHistory;
