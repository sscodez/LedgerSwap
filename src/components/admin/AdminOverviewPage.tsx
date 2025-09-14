'use client'
import Image from 'next/image';
import React, { useState, useEffect, useMemo } from 'react';
import { BitcoinBadge, EthereumBadge, RightArrow, SolanaBadge, TronBadge, USDTBadge } from '../table/table';
import { BsArrowRight } from "react-icons/bs";
import CopyButton from '../shared/CopyButton';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchAdminMetrics } from '@/store/adminMetricsSlice';

const AdminOverviewPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { metrics, loading } = useAppSelector((s) => s.adminMetrics);

  type SwapRow = {
    id: string | number;
    address: string;
    amount: React.ReactNode;
    fromCoin: string;
    toCoin: string;
    network: React.ReactNode;
    status: string;
    time: string;
  };

  // Filter states
  const [networkFilter, setNetworkFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [fromFilter, setFromFilter] = useState<string>('all');
  const [toFilter, setToFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Load real metrics
  useEffect(() => {
    dispatch(fetchAdminMetrics());
  }, []);

  // Derive recent swaps from metrics if available (fallback to empty)
  const recentSwaps: SwapRow[] = useMemo(() => {
    // recentSwaps from API are latest 10 ExchangeHistory docs; keep a simple projection
    const items = (metrics as any)?.recentSwaps || [];
    return items.map((it: any, idx: number) => ({
      id: it._id || idx,
      address: it.walletAddress || '—',
      amount: (
        <div className="flex items-center space-x-2 text-xs">
          <p>{it.from?.amount ?? '—'}</p> <EthereumBadge /><BsArrowRight /> <p>{it.to?.amount ?? '—'}</p> <TronBadge />
        </div>
      ),
      fromCoin: it.from?.symbol || '—',
      toCoin: it.to?.symbol || '—',
      network: (
        <div className=' flex items-center '>
          <div className='px-1 py-1 bg-gray-200 rounded-md'>
            <Image src='/assests/cryptocurrency/sol.png' alt='network' width={20} height={20} />
          </div>
          <p className=' ml-2 text-sm text-gray-500'>{it.network || '—'}</p>
        </div>
      ),
      status: it.status || '—',
      time: new Date(it.createdAt || Date.now()).toLocaleString(),
    }));
  }, [metrics]);

  // Filtered data based on filters
  const filteredSwaps = recentSwaps.filter((swap: SwapRow) => {
    // Apply network filter
    // if (networkFilter !== 'all' && swap.network !== networkFilter) return false;

    // Apply status filter
    if (statusFilter !== 'all' && swap.status !== statusFilter) return false;

    // Apply from coin filter
    if (fromFilter !== 'all' && swap.fromCoin !== fromFilter) return false;

    // Apply to coin filter
    if (toFilter !== 'all' && swap.toCoin !== toFilter) return false;

    // Apply search query (search in address)
    if (searchQuery && !swap.address.toLowerCase().includes(searchQuery.toLowerCase())) return false;

    return true;
  });

  const cards = useMemo(() => {
    const totals = (metrics as any)?.totals || {};
    return [
      {
        title: 'Total Swaps Today',
        value: String(totals.totalSwapsToday ?? '—'),
        change: '',
        svgPath: (<Image src='/assests/icons/iconWithbg.png' alt='settings' width={30} height={30} />),
      },
      {
        title: 'Volume (24h)',
        value: String(totals.volume24h ?? '—'),
        change: '',
        svgPath: (<Image src='/assests/icons/iconWithbg 2.png' alt='settings' width={30} height={30} />),
      },
      {
        title: 'Active Users',
        value: String(totals.activeUsers24h ?? '—'),
        change: '',
        svgPath: (<Image src='/assests/icons/iconWithbg 3.png' alt='settings' width={30} height={30} />),
      },
      {
        title: 'Platform Fees (24h)',
        value: String(totals.fees24h ?? '—'),
        change: '',
        svgPath: (<Image src='/assests/icons/iconWithbg 4.png' alt='settings' width={30} height={30} />),
      },
    ];
  }, [metrics]);



  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-xl ml-2 sm:ml-0 sm:text-2xl text-black font-medium">Overview</h1>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 bg-white rounded-lg p-3 sm:p-5 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6 overflow-hidden">
        {cards.map((metric, index: number) => (
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
            {!!metric.change && (
              <span className="text-xs font-semibold mt-2 text-green-800 block">{metric.change}</span>
            )}
          </div>
        ))}
      </div>


      <h1 className="text-xl sm:text-2xl mb-3 sm:mb-4 font-inter text-black ml-2 sm:ml-0 font-medium tracking-tight">Recent Swaps</h1>

      {/* Main content grid */}
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-6">
        {/* Recent Activity - spans 2 columns on xl */}
        <div className="col-span-2">
          <div className="bg-white rounded-lg p-3 sm:p-6 mb-4 sm:mb-6">
            {loading && (
              <div className="text-sm text-gray-500 mb-3">Loading recent swaps…</div>
            )}

            {/* Filter controls */}
            <div className="flex  text-black flex-wrap gap-3 mb-4">
              {/* Network filter */}

              {/* From filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-[#F8FAFC] font-medium text-gray-400  rounded-lg py-3 px-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={fromFilter}
                  onChange={(e) => setFromFilter(e.target.value)}
                >
                  <option value="all">From</option>
                  {/* <option value="all">All</option> */}
                  <option value="ETH"> ETH</option>
                  <option value="BTC">BTC</option>
                  <option value="SOL">SOL</option>
                  <option value="USDT">USDT</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              {/* To filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-[#F8FAFC] text-gray-400  rounded-lg py-3 px-3 font-medium pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={toFilter}
                  onChange={(e) => setToFilter(e.target.value)}
                >
                  <option value="" disabled hidden>
                    To
                  </option>

                  <option value="all">To</option>
                  <option value="ETH">ETH</option>
                  <option value="BTC">BTC</option>
                  <option value="SOL">SOL</option>
                  <option value="USDT">USDT</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select
                  className="appearance-none bg-[#F8FAFC]  text-gray-400 font-medium rounded-lg py-3 px-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={networkFilter}
                  onChange={(e) => setNetworkFilter(e.target.value)}
                >
                  <option value="all">Network</option>
                  <option value="Ethereum">Ethereum</option>
                  <option value="Solana">Solana</option>
                  <option value="Tron">Tron</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              {/* Search input */}
              <div className="relative flex-grow max-w-md">

                <input
                  type="text"
                  placeholder="Search Address or Lable"
                  className="w-full bg-[#F8FAFC]   font-medium text-gray-500  rounded-lg py-3 px-3 text-sm focus:outline-none outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                <div className="absolute inset-y-0 right-0 flex items-center pl-3 pr-3 pointer-events-none">
                  <svg className="w-4 h-4  text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>

              </div>

              {/* Clear filters button */}
              <button
                className="bg-[#F8FAFC] font-medium text-gray-400 hover:bg-gray-200  py-2 px-4 rounded-lg text-sm transition-colors"
                onClick={() => {
                  setNetworkFilter('all');
                  setStatusFilter('all');
                  setFromFilter('all');
                  setToFilter('all');
                  setSearchQuery('');
                }}
              >
                Clear
              </button>
            </div>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 bg-gray-50">
                  <tr className="border-b border-t border-[#E2E8F0]">
                    <th scope="col" className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Addresses</th>
                    <th scope="col" className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Amount</th>
                    <th scope="col" className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Network</th>
                    <th scope="col" className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Status</th>
                    <th scope="col" className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Time</th>
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
                      <tr key={swap.id} className={`bg-white ${index === filteredSwaps.length - 1 ? '' : 'border-b border-gray-200'} hover:bg-gray-50`}>
                        <td className="py-2 sm:py-3 font-semibold px-3 sm:px-4 whitespace-nowrap text-gray-700 text-xs sm:text-sm">
                          <div className="flex items-center">
                            <span className="truncate max-w-[80px]  sm:max-w-[120px]">{swap.address}</span>
                            <div className="w-5 h-5 flex items-center justify-center bg-gray-200 mx-2 rounded-sm">
                              <CopyButton textToCopy={swap.address} size={15} />
                            </div>
                          </div>
                        </td>
                        <td className="py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-gray-700 text-xs sm:text-sm">{swap.amount}</td>
                        <td className="py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-gray-700 text-xs sm:text-sm">{swap.network}</td>
                        <td className="py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-md text-xs sm:text-sm font-medium ${swap.status === 'Finished' ? 'text-[#00C951]' : 'text-[#51A2FF]'}`}>
                            {swap.status}
                          </span>
                        </td>
                        <td className="py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-gray-400 font-medium text-xs sm:text-sm">{swap.time}</td>
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
