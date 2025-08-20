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
            <div className="w-4 h-4 mr-2">
            <Image src = '/assests/cryptocurrency/eth.png' alt="ethereum" width={20} height={20} />
            </div>
            <span>Ethereum</span>
          </div>
        );
      case 'solana':
        return (
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2 ">
            <Image src = '/assests/cryptocurrency/sol.png' alt="ethereum" width={20} height={20} />

            </div>
            <span>Solana</span>
          </div>
        );
      case 'tron':
        return (
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2">
            <Image src = '/assests/cryptocurrency/ltc.png' alt="ethereum" width={20} height={20} />

            </div>
            <span>Tron</span>
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
          {showFullAddresses ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto -mx-3 sm:mx-0">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="text-xs sm:text-[13px]">
            <tr>
              <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500">
                Wallet address
              </th>
              <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500">
                Swap details
              </th>
              <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500">
                Network
              </th>
              <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500">
                Status
              </th>
              <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockSwapData.map((swap) => (
              <tr key={swap.id} className="hover:bg-gray-50">
                <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                  <div className="flex items-center">
                    <span className="mr-1">{formatWalletAddress(swap.walletAddress)}</span>
                  <Image src = '/assests/icons/file_copy.svg' alt="ethereum" width={15} height={15} />
                  </div>
                </td>
                <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center">
                    <span className="mr-2">{swap.amount}</span>
                    <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {swap.fromCurrency}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="mr-2">{swap.toAmount}</span>
                    <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {swap.toCurrency}
                    </span>
                  </div>
                </td>
                <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                  <NetworkIcon network={swap.network} />
                </td>
                <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${swap.status === 'Pending' ? ' text-yellow-800' : ''}
                    ${swap.status === 'Finished' ? ' text-green-800' : ''}
                    ${swap.status === 'Failed' ? ' text-red-800' : ''}
                  `}>
                    {swap.status}
                  </span>
                </td>
                <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                  {swap.time}
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
