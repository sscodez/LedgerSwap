'use client'
import React, { useState } from 'react';

interface Token {
  id: string;
  name: string;
  symbol: string;
  network: string;
  status: 'Active' | 'Inactive' | 'Pending';
  swapVolume: string;
  price: string;
  lastUpdated: string;
}

const mockTokens: Token[] = [
  { id: '1', name: 'Ethereum', symbol: 'ETH', network: 'Ethereum', status: 'Active', swapVolume: '1,245.32 ETH', price: '$2,145.67', lastUpdated: '2 min ago' },
  { id: '2', name: 'Solana', symbol: 'SOL', network: 'Solana', status: 'Active', swapVolume: '8,932.11 SOL', price: '$134.25', lastUpdated: '5 min ago' },
  { id: '3', name: 'Binance Coin', symbol: 'BNB', network: 'Binance Smart Chain', status: 'Active', swapVolume: '456.78 BNB', price: '$342.12', lastUpdated: '10 min ago' },
  { id: '4', name: 'Cardano', symbol: 'ADA', network: 'Cardano', status: 'Inactive', swapVolume: '12,345.67 ADA', price: '$0.45', lastUpdated: '1 hour ago' },
  { id: '5', name: 'Polkadot', symbol: 'DOT', network: 'Polkadot', status: 'Pending', swapVolume: '789.01 DOT', price: '$7.89', lastUpdated: '30 min ago' },
  { id: '6', name: 'Tron', symbol: 'TRX', network: 'Tron', status: 'Active', swapVolume: '45,678.90 TRX', price: '$0.09', lastUpdated: '15 min ago' },
];

const AdminTokenManagementPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [showAddTokenModal, setShowAddTokenModal] = useState(false);
  
  const filteredTokens = mockTokens.filter(token => 
    token.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    token.network.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold">Token Management</h1>
        
        {/* Search and Add Token */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full md:w-auto">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search tokens..."
              className="w-full pl-9 pr-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <button 
            onClick={() => setShowAddTokenModal(true)}
            className="px-3 sm:px-4 py-2 text-sm sm:text-base bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Token
          </button>
        </div>
      </div>

      {/* Token Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 border border-gray-200">
          <h3 className="text-xs sm:text-sm text-gray-500 font-medium">Total Tokens</h3>
          <p className="text-xl sm:text-2xl font-semibold">134</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 border border-gray-200">
          <h3 className="text-xs sm:text-sm text-gray-500 font-medium">Active Tokens</h3>
          <p className="text-xl sm:text-2xl font-semibold">112</p>
          <p className="text-xs text-green-600">+4 this month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 border border-gray-200">
          <h3 className="text-xs sm:text-sm text-gray-500 font-medium">24h Trading Volume</h3>
          <p className="text-xl sm:text-2xl font-semibold">$5.4M</p>
        </div>
      </div>
      
      {/* Tokens Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Token</th>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Network</th>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Swap Volume</th>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Last Updated</th>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTokens.map((token) => (
                <tr key={token.id} className="hover:bg-gray-50">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                        {token.symbol.charAt(0)}
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <div className="text-xs sm:text-sm font-medium text-gray-900">{token.name}</div>
                        <div className="text-xs sm:text-sm text-gray-500">{token.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden sm:table-cell">
                    {token.network}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <span className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${token.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                      ${token.status === 'Inactive' ? 'bg-gray-100 text-gray-800' : ''}
                      ${token.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                    `}>
                      {token.status}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden md:table-cell">
                    {token.swapVolume}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 font-medium">
                    {token.price}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden md:table-cell">
                    {token.lastUpdated}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-right text-xs sm:text-sm font-medium">
                    <button 
                      onClick={() => setSelectedToken(token)} 
                      className="text-blue-600 hover:text-blue-900 mr-2 sm:mr-3"
                    >
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      {token.status === 'Active' ? 'Disable' : 'Enable'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white px-3 sm:px-6 py-3 flex items-center justify-between border-t border-gray-200">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-3 py-1.5 text-xs border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <p className="text-xs text-gray-700 self-center mx-2">
              <span className="font-medium">1</span>-<span className="font-medium">{filteredTokens.length}</span> of <span className="font-medium">134</span>
            </p>
            <button className="relative inline-flex items-center px-3 py-1.5 text-xs border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredTokens.length}</span> of{' '}
                <span className="font-medium">134</span> tokens
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-3 sm:px-4 py-2 border text-xs sm:text-sm font-medium">
                  1
                </button>
                <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-3 sm:px-4 py-2 border text-xs sm:text-sm font-medium">
                  2
                </button>
                <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-3 sm:px-4 py-2 border text-xs sm:text-sm font-medium">
                  3
                </button>
                <span className="relative inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 bg-white text-xs sm:text-sm font-medium text-gray-700">
                  ...
                </span>
                <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-3 sm:px-4 py-2 border text-xs sm:text-sm font-medium">
                  8
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Edit Token Modal */}
      {selectedToken && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-lg w-full mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold">Edit Token</h2>
              <button 
                onClick={() => setSelectedToken(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Token Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 text-sm border border-gray-300 rounded-md"
                  defaultValue={selectedToken.name}
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Symbol</label>
                <input 
                  type="text" 
                  className="w-full p-2 text-sm border border-gray-300 rounded-md"
                  defaultValue={selectedToken.symbol}
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Network</label>
                <select className="w-full p-2 text-sm border border-gray-300 rounded-md">
                  <option value="Ethereum" selected={selectedToken.network === 'Ethereum'}>Ethereum</option>
                  <option value="Binance Smart Chain" selected={selectedToken.network === 'Binance Smart Chain'}>Binance Smart Chain</option>
                  <option value="Solana" selected={selectedToken.network === 'Solana'}>Solana</option>
                  <option value="Tron" selected={selectedToken.network === 'Tron'}>Tron</option>
                  <option value="Cardano" selected={selectedToken.network === 'Cardano'}>Cardano</option>
                  <option value="Polkadot" selected={selectedToken.network === 'Polkadot'}>Polkadot</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Status</label>
                <select className="w-full p-2 text-sm border border-gray-300 rounded-md">
                  <option value="Active" selected={selectedToken.status === 'Active'}>Active</option>
                  <option value="Inactive" selected={selectedToken.status === 'Inactive'}>Inactive</option>
                  <option value="Pending" selected={selectedToken.status === 'Pending'}>Pending</option>
                </select>
              </div>
            </div>
            
            <div className="mt-5 sm:mt-6 flex justify-end space-x-2 sm:space-x-3">
              <button 
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                onClick={() => setSelectedToken(null)}
              >
                Cancel
              </button>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Add Token Modal */}
      {showAddTokenModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-lg w-full mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold">Add New Token</h2>
              <button 
                onClick={() => setShowAddTokenModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Token Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 text-sm border border-gray-300 rounded-md"
                  placeholder="e.g., Bitcoin"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Symbol</label>
                <input 
                  type="text" 
                  className="w-full p-2 text-sm border border-gray-300 rounded-md"
                  placeholder="e.g., BTC"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Network</label>
                <select className="w-full p-2 text-sm border border-gray-300 rounded-md">
                  <option value="">Select Network</option>
                  <option value="Ethereum">Ethereum</option>
                  <option value="Binance Smart Chain">Binance Smart Chain</option>
                  <option value="Solana">Solana</option>
                  <option value="Tron">Tron</option>
                  <option value="Cardano">Cardano</option>
                  <option value="Polkadot">Polkadot</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Contract Address</label>
                <input 
                  type="text" 
                  className="w-full p-2 text-sm border border-gray-300 rounded-md"
                  placeholder="0x..."
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Status</label>
                <select className="w-full p-2 text-sm border border-gray-300 rounded-md">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending" selected>Pending</option>
                </select>
              </div>
            </div>
            
            <div className="mt-5 sm:mt-6 flex justify-end space-x-2 sm:space-x-3">
              <button 
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                onClick={() => setShowAddTokenModal(false)}
              >
                Cancel
              </button>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Add Token
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTokenManagementPage;
