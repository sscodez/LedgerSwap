'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const AdminOverviewPage: React.FC = () => {
  // Filter states
  const [networkFilter, setNetworkFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Mock swap data
  const swapData = [
    {
      id: 1,
      address: '0xa2234s...k4487343s9',
      amount: '0.234134',
      coin: 'ETH',
      network: 'Ethereum',
      status: 'Pending',
      time: '2 min ago'
    },
    {
      id: 2,
      address: '0xa2234s...k4487343s7',
      amount: '500',
      coin: 'SOL',
      network: 'Solana',
      status: 'Finished',
      time: '5 min ago'
    },
    {
      id: 3,
      address: '0xa2234s...k4487343s9',
      amount: '0.234134',
      coin: 'BTC',
      network: 'Tron',
      status: 'Finished',
      time: '12 min ago'
    },
    {
      id: 4,
      address: '0xb5678t...j9012345t2',
      amount: '1.5',
      coin: 'ETH',
      network: 'Ethereum',
      status: 'Pending',
      time: '15 min ago'
    },
    {
      id: 5,
      address: '0xc9876r...h5678901r4',
      amount: '750',
      coin: 'SOL',
      network: 'Solana',
      status: 'Finished',
      time: '30 min ago'
    }
  ];

  // Filtered data based on filters
  const filteredSwaps = swapData.filter(swap => {
    // Apply network filter
    if (networkFilter !== 'all' && swap.network !== networkFilter) return false;
    
    // Apply status filter
    if (statusFilter !== 'all' && swap.status !== statusFilter) return false;
    
    // Apply search query (search in address)
    if (searchQuery && !swap.address.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    return true;
  });

  const metrics = [
    {
      title: "Total Swaps Today",
      value: "1,247",
      change: "+12.3%",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      svgPath: (<Image src='/assests/icons/iconWithbg.png' alt='settings' width={30} height={30} />),
    },
    {
      title: "Volume (24h)",
      value: "$4.2M",
      change: "+8.7%",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      svgPath: (<Image src='/assests/icons/iconWithbg 2.png' alt='settings' width={30} height={30} />),

    },
    {
      title: "Active Users",
      value: "892",
      change: "+5.2%",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      svgPath: (<Image src='/assests/icons/iconWithbg 3.png' alt='settings' width={30} height={30} />),
    },
    {
      title: "Platform Fees",
      value: "$21,450",
      change: "+15.4%",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      svgPath: (<Image src='/assests/icons/iconWithbg 4.png' alt='settings' width={30} height={30} />),
    },
  ];



  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl text-black font-medium">Overview</h1>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 bg-white rounded-lg p-3 sm:p-5 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6 overflow-hidden">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-[#F8FAFC] p-4 sm:p-6 rounded-lg text-[13px] text-black"
          >
            <div className="flex items-center mb-2">

              <span className="text-sm font-semibold text-gray-500">{metric.title}</span>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {metric.svgPath}
              </div>
              <span className="text-xl sm:text-2xl ml-2 font-semibold">{metric.value}</span>
            </div>
            <span className="text-xs font-semibold mt-2 text-green-800 block">{metric.change}</span>
          </div>
        ))}
      </div>


      <h1 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-black font-medium">Recent Swaps</h1>

      {/* Main content grid */}
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-6">
        {/* Recent Activity - spans 2 columns on xl */}
        <div className="col-span-2">
          <div className="bg-white rounded-lg p-3 sm:p-6 mb-4 sm:mb-6">
            
            {/* Filter controls */}
            <div className="flex  text-black flex-wrap gap-3 mb-4">
              {/* Network filter */}
              <div className="relative">
                <select 
                  className="appearance-none bg-[#F8FAFC] border border-gray-200 rounded-lg py-2 px-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={networkFilter}
                  onChange={(e) => setNetworkFilter(e.target.value)}
                >
                  <option value="all">All Networks</option>
                  <option value="Ethereum">Ethereum</option>
                  <option value="Solana">Solana</option>
                  <option value="Tron">Tron</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              
              {/* Status filter */}
              <div className="relative">
                <select 
                  className="appearance-none bg-[#F8FAFC] border border-gray-200 rounded-lg py-2 px-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Finished">Finished</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              
              {/* Search input */}
              <div className="relative flex-grow max-w-md">
                <input
                  type="text"
                  placeholder="Search by address"
                  className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              
              {/* Clear filters button */}
              <button 
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors"
                onClick={() => {
                  setNetworkFilter('all');
                  setStatusFilter('all');
                  setSearchQuery('');
                }}
              >
                Clear Filters
              </button>
            </div>

            <div className="overflow-x-auto -mx-3 sm:mx-0">
              <table className="min-w-full table-auto text-left">
                <thead>
                  <tr className="border-b border-black/20">
                    <th className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Addresses</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Amount</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Network</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Status</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSwaps.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-4 text-center text-gray-500 text-sm">
                        No swaps found matching your filters
                      </td>
                    </tr>
                  ) : (
                    filteredSwaps.map((swap, index) => (
                      <tr key={swap.id} className={`${index === filteredSwaps.length - 1 ? '' : 'border-b border-black/10'} hover:bg-gray-50`}>
                        <td className="py-2 sm:py-3 font-semibold px-3 sm:px-4 whitespace-nowrap text-gray-700 text-xs sm:text-sm">
                          <div className="flex items-center">
                            <span className="truncate max-w-[80px] sm:max-w-[120px]">{swap.address}</span>
                            <Image className='mx-1 cursor-pointer' src="/assests/icons/file_copy.svg" alt="copy" width={15} height={15} />
                          </div>
                        </td>
                        <td className="py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-gray-700 text-xs sm:text-sm">{swap.amount} {swap.coin}</td>
                        <td className="py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-gray-700 text-xs sm:text-sm">{swap.network}</td>
                        <td className="py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-md text-xs font-medium ${swap.status === 'Finished' ? 'text-green-600' : 'text-blue-600'}`}>
                            {swap.status}
                          </span>
                        </td>
                        <td className="py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-gray-700 text-xs sm:text-sm">{swap.time}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>


        </div>

        {/* Side content - 1 column on xl */}
        <div className="space-y-6">



        </div>
      </div>
    </div>
  );
};

export default AdminOverviewPage;
