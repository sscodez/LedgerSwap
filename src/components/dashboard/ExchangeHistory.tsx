'use client'
import React, { useState } from 'react';
import RewardsBanner from './WelcomeBanner';
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
  const [dateRange, setDateRange] = useState('01.01.2024 - 30.10.2025');
  const [hideUnfinished, setHideUnfinished] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  return (

    <>
     <RewardsBanner />
      <div className="flex flex-col mt-8 md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-medium text-gray-800">Exchange History</h2>
        <button className="text-blue-600 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export
        </button>
      </div>
   
    <div className="bg-white rounded-lg p-6 shadow-sm">
    

      {/* Filters */}
      <div className="text-black text-[13px] rounded-lg p-2 md:p-4 mb-6 overflow-x-auto">
        <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
          <div className="flex bg-[#F1F5F9] p-1 rounded-lg">
            <button 
              className={`px-4 py-2 rounded-l-lg ${activeFilter === 'All' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
              onClick={() => setActiveFilter('All')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 ${activeFilter === 'Month' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
              onClick={() => setActiveFilter('Month')}
            >
              Month
            </button>
            <button 
              className={`px-4 py-2 ${activeFilter === 'Week' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
              onClick={() => setActiveFilter('Week')}
            >
              Week
            </button>
            <button 
              className={`px-4 py-2 rounded-r-lg ${activeFilter === 'Yesterday' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
              onClick={() => setActiveFilter('Yesterday')}
            >
              Yesterday
            </button>
          </div>
          
          <div className="flex items-center">
            <span className="mr-2">Date:</span>
            <div className="  relative">
              <input 
                type="text" 
                className="border border-gray-300 bg-[#F1F5F9] rounded-lg px-3 py-2 pr-8" 
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <div className="relative ml-auto">
            <button className="border bg-[#F1F5F9] border-gray-300 rounded-lg px-4 py-2 flex items-center">
              Status
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center">
            <span className="mr-2">Hide unfinished</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={hideUnfinished}
                onChange={() => setHideUnfinished(!hideUnfinished)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 md:gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              className="bg-white border bg-[#F1F5F9] border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" 
              placeholder="Search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative ">
            <button className="border bg-[#F1F5F9]  border-gray-300 rounded-lg px-4 py-2 flex items-center">
              From
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className="relative ">
            <button className="border border-gray-300 bg-[#F1F5F9]  rounded-lg px-4 py-2 flex items-center">
              To
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <button className="border border-gray-300 rounded-lg px-4 py-2">
            Clear
          </button>
        </div>
      </div>

      {/* Table for tablet and desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Exchange ID</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                <div className="flex items-center">
                  Date
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">From</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">To</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Platform Fees</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Cashback</th>
            </tr>
          </thead>
          <tbody className='text-[13px]'>
            {mockData.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 text-[13px] text-blue-600 hover:underline cursor-pointer">
                  {item.id}
                </td>
                <td className="py-4 text-[13px] px-4">
                  <span className={`px-2 py-1 rounded-md font-medium ${
                    item.status === 'Pending' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-600">
                  <div>
                    {item.date}
                  </div>
                  <div className="text-[13px] text-gray-500">
                    {item.time}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="text-gray-900">
                      {item.fromCurrency}
                    </div>
                    <div className="text-gray-500 ml-2">
                      {item.fromAmount}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="text-gray-900">
                      {item.toCurrency}
                    </div>
                    <div className="text-gray-500 ml-2">
                      {item.toAmount}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-[13px] text-gray-500">
                    {item.fee}
                  </div>
                  <div className="text-[13px] text-gray-900">
                    {item.feePercentage}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-[13px] text-gray-900">
                    USDT
                  </div>
                  <div className="text-[13px] text-gray-500">
                    {item.cashback}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-4">
        {mockData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div className="text-[13px] text-blue-600 hover:underline cursor-pointer truncate max-w-[70%]">
                {item.id}
              </div>
              <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                item.status === 'Pending' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {item.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-[13px]">
              <div>
                <div className="text-gray-500 mb-1">Date</div>
                <div className="font-medium">{item.date}, {item.time}</div>
              </div>
              
              <div>
                <div className="text-gray-500 mb-1">From</div>
                <div className="font-medium">{item.fromCurrency} {item.fromAmount}</div>
              </div>
              
              <div>
                <div className="text-gray-500 mb-1">To</div>
                <div className="font-medium">{item.toCurrency} {item.toAmount}</div>
              </div>
              
              <div>
                <div className="text-gray-500 mb-1">Platform Fee</div>
                <div className="font-medium">{item.feePercentage}</div>
              </div>
              
              <div className="col-span-2">
                <div className="text-gray-500 mb-1">Cashback</div>
                <div className="font-medium">USDT {item.cashback}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ExchangeHistory;
