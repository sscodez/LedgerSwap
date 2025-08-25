'use client'
import Image from 'next/image';
import React, { useState } from 'react';

interface TokenChain {
  id: string;
  name: string;
  symbol: string;
  volume24h: string;
  status: 'Active' | 'Inactive';
  icon: string;
}

const mockTokenChains: TokenChain[] = [
  { id: '1', name: 'Ethereum', symbol: 'Ethereum', volume24h: '$2.3M', status: 'Inactive', icon: 'ethereum' },
  { id: '2', name: 'Polygon', symbol: 'Solana', volume24h: '$1.8M', status: 'Active', icon: 'solana' },
  { id: '3', name: 'Binance Coin', symbol: 'Tron', volume24h: '$945K', status: 'Active', icon: 'tron' },
];

const AdminTokenChainManagementPage: React.FC = () => {
  const [tokens, setTokens] = useState(mockTokenChains);

  const toggleTokenStatus = (id: string) => {
    setTokens(tokens.map(token => 
      token.id === id 
        ? { ...token, status: token.status === 'Active' ? 'Inactive' : 'Active' }
        : token
    ));
  };

  const TokenIcon: React.FC<{ type: string }> = ({ type }) => {
    switch (type) {
      case 'ethereum':
        return (
          <div className="w-6 h-6 mr-3">
           <Image src="/assests/cryptocurrency/eth.png" alt="ethereum" width={20} height={20} />
          </div>
        );
      case 'solana':
        return (
          <div className="w-6 h-6 mr-3">
           <Image src="/assests/cryptocurrency/usdt.png" alt="ethereum" width={20} height={20} />
          </div>
        );
      case 'tron':
        return (
          <div className="w-6 h-6 mr-3">
          <Image src="/assests/cryptocurrency/xmr.png" alt="ethereum" width={20} height={20} />
         </div>
        );
      default:
        return <div className="w-6 h-6 mr-3 bg-gray-300 rounded-full"></div>;
    }
  };

  return (
    <div className="relative w-auto  overflow-x-auto text-black px-1 sm:px-0">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-medium">Token & Chain Management</h1>
          <p className="text-gray-500  text-xs sm:text-sm mt-1">Enable or disable specific tokens and blockchains</p>
        </div>
      </div>
      
      {/* Desktop Table View (hidden on small screens) */}
      <div className="bg-white rounded-lg  overflow-x-auto p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y text-xs sm:text-sm  overflow-x-auto  divide-gray-200">
            <thead className="">
              <tr>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left  font-medium text-gray-500">
                  Token
                </th>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left font-medium text-gray-500">
                  Symbol
                </th>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left font-medium text-gray-500">
                  24h volume
                </th>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left font-medium text-gray-500">
                  Status
                </th>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tokens.map((token) => (
                <tr key={token.id} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <TokenIcon type={token.icon} />
                      <span className=" font-medium text-gray-900">{token.name}</span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap  text-gray-500">
                    {token.symbol}
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap text-gray-500">
                    {token.volume24h}
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${token.status === 'Active' ? ' text-blue-600' : ' text-red-600'}
                    `}>
                      {token.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => toggleTokenStatus(token.id)}
                      className={`px-4 py-1 rounded-md text-xs font-medium transition-colors
                        ${token.status === 'Active' 
                          ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                        }
                      `}
                    >
                      {token.status === 'Active' ? 'Disable' : 'Enable'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View (visible only on small screens) */}
      {/* <div className="md:hidden space-y-4">
        {tokens.map((token) => (
          <div key={token.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <TokenIcon type={token.icon} />
                <span className="text-sm font-medium text-gray-900">{token.name}</span>
              </div>
              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                ${token.status === 'Active' ? ' text-blue-600' : ' text-red-600'}
              `}>
                {token.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
              <div>
                <p className="text-gray-500">Symbol</p>
                <p className="font-medium">{token.symbol}</p>
              </div>
              <div>
                <p className="text-gray-500">24h Volume</p>
                <p className="font-medium">{token.volume24h}</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={() => toggleTokenStatus(token.id)}
                className={`px-4 py-2 rounded-md text-xs font-medium transition-colors w-full sm:w-auto
                  ${token.status === 'Active' 
                    ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                  }
                `}
              >
                {token.status === 'Active' ? 'Disable' : 'Enable'}
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AdminTokenChainManagementPage;
