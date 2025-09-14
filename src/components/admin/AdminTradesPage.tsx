'use client'
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import CopyButton from '../shared/CopyButton';
import { BitcoinBadge, EthereumBadge, SolanaBadge, TronBadge } from '../table/table';
import { FaEye ,FaEyeSlash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchAdminTransactions } from '@/store/adminTransactionsSlice';

const AdminTradesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((s) => s.adminTransactions);
  const [showFullAddresses, setShowFullAddresses] = useState(false);

  useEffect(() => {
    dispatch(fetchAdminTransactions({ page: 1, limit: 20 }));
  }, []);

  const items = useMemo(() => data?.items || [], [data]);

  const toggleAddressDisplay = () => {
    setShowFullAddresses(!showFullAddresses);
  };
  
  const formatWalletAddress = (address: string) => {
    if (showFullAddresses) {
      return address;
    }
    return address.substring(0, 4) + '***...' + address.substring(address.length - 4);
  };

  const NetworkIcon: React.FC<{ network: string }> = ({ network }) => {
    switch (network.toLowerCase()) {
      case 'ethereum':
        return (
          <div className="flex items-center">
            <div className="w-8 h-8 mr-1 sm:mr-2 flex justify-center items-center  bg-gray-200  rounded-lg flex-shrink-0">
              <Image src='/assests/cryptocurrency/eth.png' alt="ethereum" width={20} height={20} />
            </div>
            <span className="text-xs sm:text-sm">Ethereum</span>
          </div>
        );
      case 'solana':
        return (
          <div className="flex  items-center">
       <div className="w-8 h-8 mr-1 sm:mr-2 flex justify-center items-center  bg-gray-200  rounded-lg flex-shrink-0">
              <Image src='/assests/cryptocurrency/sol.png' alt="solana" width={20} height={20} />
            </div>
            <span className="text-xs sm:text-sm">Solana</span>
          </div>
        );
      case 'tron':
        return (
          <div className="flex items-center">
        <div className="w-8 h-8 mr-1 sm:mr-2 flex justify-center items-center  bg-gray-200  rounded-lg flex-shrink-0">
              <Image src='/assests/cryptocurrency/ltc.png' alt="tron" width={20} height={20} />
            </div>
            <span className="text-xs sm:text-sm">Tron</span>
          </div>
        );
      default:
        return <span>{network}</span>;
    }
  };

  return (
    <div className="relative overflow-auto">
      <div className="flex flex-row  sm:flex-row  justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
        <h1 className="text-lg ml-2 sm:ml-0 sm:text-2xl font-medium text-black">Trade Activity Monitor</h1>
        <button 
          onClick={toggleAddressDisplay}
          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#021735] text-xs sm:text-[13px] text-white rounded-md  transition-colors flex items-center"
        >
    
          {showFullAddresses ? <FaEyeSlash size={20} className='mx-2'/> : <FaEye size={20} className='mx-1'/>}
          {showFullAddresses ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      {/* Desktop view - Table */}
      <div className=" bg-white rounded-lg p-4 overflow-x-auto">
        <div className="overflow-x-auto ">
          <table className="min-w-full divide-y divide-gray-200 table-auto text-left">
            <thead className="text-xs sm:text-[13px]">
              <tr>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500">
                  Wallet address
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500">
                  Swap details
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500">
                  Network
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500">
                  Status
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading && (
                <tr>
                  <td colSpan={5} className="px-4 py-3 text-xs text-gray-500">Loading…</td>
                </tr>
              )}
              {!loading && items.map((swap: any, idx: number) => (
                <tr key={swap.id} className="hover:bg-gray-50   ">
                  <td className="px-4 sm:px-6 py-3 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <span className="mr-1 truncate max-w-[120px] lg:max-w-full">{formatWalletAddress(swap.walletAddress || '—')}</span>
                      {swap.walletAddress && <CopyButton textToCopy={swap.walletAddress} size={15} />}
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-3 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center  gap-1 sm:gap-0">
                      <span className="mr-1 sm:mr-2">{swap.from?.amount ?? '—'}</span>
                      <span className="inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full text-xs font-medium  text-blue-800">
                        <EthereumBadge/>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mx-1 sm:mx-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="mr-1 sm:mr-2">{swap.to?.amount ?? '—'}</span>
                      <span className="inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full text-xs font-medium  text-red-800">
                        <TronBadge/>
                      </span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-3 whitespace-nowrap text-xs  sm:text-sm text-gray-500">
                    <NetworkIcon network={String(swap.network || '')} />
                  </td>
                  <td className="px-4 sm:px-6 py-3 whitespace-nowrap">
                    <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${swap.status === 'pending' ? ' text-red-800' : ''}
                      ${swap.status === 'completed' ? ' text-green-800' : ''}
                      ${swap.status === 'failed' ? ' text-red-800' : ''}
                    `}>
                      {swap.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    {swap.createdAt ? new Date(swap.createdAt).toLocaleString() : '—'}
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

export default AdminTradesPage;

