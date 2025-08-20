'use client'
import Image from 'next/image';
import React, { useState } from 'react';

interface SwapData {
  id: string;
  walletAddress: string;
  amount: string;
  fromCurrency: string;
  toCurrency: string;
  toAmount: string;
  network: string;
  networkIcon: string;
  status: string;
  time: string;
}

const mockSwapData: SwapData[] = [
  {
    id: '1',
    walletAddress: '0xa7234sapjk44873436a5',
    amount: '0.234134',
    fromCurrency: 'ETH',
    toCurrency: 'EUR',
    toAmount: '1200',
    network: 'Ethereum',
    networkIcon: 'ethereum',
    status: 'Pending',
    time: '2 min ago'
  },
  {
    id: '2',
    walletAddress: '0xa2232sadjk44873432w2',
    amount: '500',
    fromCurrency: 'SOL',
    toCurrency: 'USD',
    toAmount: '1200',
    network: 'Solana',
    networkIcon: 'solana',
    status: 'Finished',
    time: '5 min ago'
  },
  {
    id: '3',
    walletAddress: '0xa2232sadjk44873436e6',
    amount: '0.234134',
    fromCurrency: 'BTC',
    toCurrency: 'THB',
    toAmount: '12503',
    network: 'Tron',
    networkIcon: 'tron',
    status: 'Finished',
    time: '12 min ago'
  }
];

const AdminTradesPage: React.FC = () => {
  const [showFullAddresses, setShowFullAddresses] = useState(false);
  
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
            <div className="w-4 h-4 mr-1 sm:mr-2 flex-shrink-0">
              <Image src='/assests/cryptocurrency/eth.png' alt="ethereum" width={20} height={20} />
            </div>
            <span className="text-xs sm:text-sm">Ethereum</span>
          </div>
        );
      case 'solana':
        return (
          <div className="flex items-center">
            <div className="w-4 h-4 mr-1 sm:mr-2 flex-shrink-0">
              <Image src='/assests/cryptocurrency/sol.png' alt="solana" width={20} height={20} />
            </div>
            <span className="text-xs sm:text-sm">Solana</span>
          </div>
        );
      case 'tron':
        return (
          <div className="flex items-center">
            <div className="w-4 h-4 mr-1 sm:mr-2 flex-shrink-0">
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
    <div className="relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
        <h1 className="text-xl sm:text-2xl font-medium text-black">Trade Activity Monitor</h1>
        <button 
          onClick={toggleAddressDisplay}
          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-900 text-xs sm:text-[13px] text-white rounded-md hover:bg-blue-800 transition-colors flex items-center"
        >
          <Image src="/assests/icons/visibility.svg" className='mx-1' alt="Visibility" width={20} height={20} />
          {showFullAddresses ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      {/* Desktop view - Table */}
      <div className="hidden md:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto p-4">
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
              {mockSwapData.map((swap) => (
                <tr key={swap.id} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <span className="mr-1 truncate max-w-[120px] lg:max-w-full">{formatWalletAddress(swap.walletAddress)}</span>
                      <Image src='/assests/icons/file_copy.svg' alt="copy" width={15} height={15} className="cursor-pointer flex-shrink-0" />
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-3 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center flex-wrap gap-1 sm:gap-0">
                      <span className="mr-1 sm:mr-2">{swap.amount}</span>
                      <span className="inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {swap.fromCurrency}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mx-1 sm:mx-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="mr-1 sm:mr-2">{swap.toAmount}</span>
                      <span className="inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        {swap.toCurrency}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-3 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    <NetworkIcon network={swap.network} />
                  </td>
                  <td className="px-4 sm:px-6 py-3 whitespace-nowrap">
                    <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${swap.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${swap.status === 'Finished' ? 'bg-green-100 text-green-800' : ''}
                      ${swap.status === 'Failed' ? 'bg-red-100 text-red-800' : ''}
                    `}>
                      {swap.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    {swap.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile view - Cards */}
      <div className="md:hidden space-y-4">
        {mockSwapData.map((swap) => (
          <div key={swap.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <span className="text-xs font-medium text-gray-900 mr-1 truncate max-w-[150px]">
                  {formatWalletAddress(swap.walletAddress)}
                </span>
                <Image src='/assests/icons/file_copy.svg' alt="copy" width={15} height={15} className="cursor-pointer flex-shrink-0" />
              </div>
              <span className={`px-2 py-1 text-xs leading-4 font-semibold rounded-full 
                ${swap.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                ${swap.status === 'Finished' ? 'bg-green-100 text-green-800' : ''}
                ${swap.status === 'Failed' ? 'bg-red-100 text-red-800' : ''}
              `}>
                {swap.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-gray-500 mb-1">Swap details</p>
                <div className="flex items-center flex-wrap gap-1">
                  <span>{swap.amount}</span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {swap.fromCurrency}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mx-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>{swap.toAmount}</span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {swap.toCurrency}
                  </span>
                </div>
              </div>
              
              <div>
                <p className="text-gray-500 mb-1">Network</p>
                <NetworkIcon network={swap.network} />
              </div>
              
              <div className="col-span-2 flex justify-between items-center pt-2 border-t border-gray-100">
                <p className="text-gray-500">Time</p>
                <p className="text-gray-700">{swap.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTradesPage;
