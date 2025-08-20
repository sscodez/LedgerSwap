'use client'
import Image from 'next/image';
import React, { useState } from 'react';

interface FlaggedUser {
  id: string;
  walletAddress: string;
  reason: string;
  totalSwaps: number;
  flaggedDate: string;
}

const mockFlaggedUsers: FlaggedUser[] = [
  { id: '1', walletAddress: '0x9834****44873496l', reason: 'High frequency trading', totalSwaps: 247, flaggedDate: '2025-09-12' },
  { id: '2', walletAddress: '0xa2234****44873436', reason: 'High frequency trading', totalSwaps: 89, flaggedDate: '2025-08-12' },
  { id: '3', walletAddress: '0xa9824****44873236', reason: 'Unusual pattern detected', totalSwaps: 28, flaggedDate: '2025-01-18' },
];

const AdminFlaggedUsersPage: React.FC = () => {
  const [users, setUsers] = useState(mockFlaggedUsers);
  const [selectedUser, setSelectedUser] = useState<FlaggedUser | null>(null);

  const handleReview = (user: FlaggedUser) => {
    setSelectedUser(user);
  };

  const handleClearFlag = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
    setSelectedUser(null);
  };

  const formatWalletAddress = (address: string) => {
    return address;
  };

  return (
    <div className="relative text-black px-1 sm:px-0">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-medium">Flagged Users</h1>
          <p className="text-gray-500 text-sm mt-1">Users flagged for suspicious behavior (wallet addresses only)</p>
        </div>
      </div>
      
      {/* Desktop Table View (hidden on small screens) */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hidden md:block p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="p-2 sm:p-3 text-black text-xs sm:text-[13px]">
              <tr>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left font-medium text-gray-500">
                  Wallet address
                </th>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left font-medium text-gray-500">
                  Reason
                </th>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left font-medium text-gray-500">
                  Total swaps
                </th>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left font-medium text-gray-500">
                  Flagged date
                </th>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-xs sm:text-sm font-medium text-gray-900 mr-2">
                        {formatWalletAddress(user.walletAddress)}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                       <Image src="/assests/icons/file_copy.svg" alt="copy" width={15} height={15} />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    {user.reason}
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    {user.totalSwaps}
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    {user.flaggedDate}
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium">
                    <button 
                      onClick={() => handleReview(user)}
                      className="text-blue-600 text-xs bg-blue-100 p-1 rounded-md hover:text-blue-900 mr-3"
                    >
                      Review
                    </button>
                    <button 
                      onClick={() => handleClearFlag(user.id)}
                      className="text-green-600 text-xs bg-green-100 rounded-md p-1 hover:text-green-900"
                    >
                      Clear Flag
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View (visible only on small screens) */}
      <div className="md:hidden space-y-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900 mr-2">
                  {formatWalletAddress(user.walletAddress)}
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                  <Image src="/assests/icons/file_copy.svg" alt="copy" width={15} height={15} />
                </button>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                Flagged
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
              <div>
                <p className="text-gray-500">Reason</p>
                <p className="font-medium">{user.reason}</p>
              </div>
              <div>
                <p className="text-gray-500">Total Swaps</p>
                <p className="font-medium">{user.totalSwaps}</p>
              </div>
              <div>
                <p className="text-gray-500">Flagged Date</p>
                <p className="font-medium">{user.flaggedDate}</p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => handleReview(user)}
                className="flex-1 text-center text-blue-600 text-xs bg-blue-100 py-2 rounded-md hover:text-blue-900"
              >
                Review
              </button>
              <button 
                onClick={() => handleClearFlag(user.id)}
                className="flex-1 text-center text-green-600 text-xs bg-green-100 rounded-md py-2 hover:text-green-900"
              >
                Clear Flag
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Review Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-0">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-lg w-full mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Review Flagged User</h2>
              <button 
                onClick={() => setSelectedUser(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Wallet Address</label>
                <div className="p-2 bg-gray-50 rounded-md text-sm font-mono">
                  {selectedUser.walletAddress}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Flag Reason</label>
                <div className="p-2 bg-gray-50 rounded-md text-sm">
                  {selectedUser.reason}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Total Swaps</label>
                  <div className="p-2 bg-gray-50 rounded-md text-sm">
                    {selectedUser.totalSwaps}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Flagged Date</label>
                  <div className="p-2 bg-gray-50 rounded-md text-sm">
                    {selectedUser.flaggedDate}
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Admin Notes</label>
                <textarea 
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  rows={3}
                  placeholder="Add notes about this review..."
                />
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap sm:flex-nowrap justify-end gap-2 sm:space-x-3">
              <button 
                className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
              <button 
                onClick={() => handleClearFlag(selectedUser.id)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-600 text-sm text-white rounded-md hover:bg-green-700"
              >
                Clear Flag
              </button>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 text-sm text-white rounded-md hover:bg-red-700">
                Escalate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminFlaggedUsersPage;
