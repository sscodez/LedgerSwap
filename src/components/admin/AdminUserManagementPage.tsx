'use client'
import React, { useState } from 'react';

const mockUsers = [
  { id: '1', username: 'john_doe', email: 'john@example.com', status: 'Active', kycStatus: 'Verified', lastLogin: '2023-10-15', role: 'User' },
  { id: '2', username: 'jane_smith', email: 'jane@example.com', status: 'Active', kycStatus: 'Verified', lastLogin: '2023-10-14', role: 'User' },
  { id: '3', username: 'robert_johnson', email: 'robert@example.com', status: 'Active', kycStatus: 'Pending', lastLogin: '2023-10-10', role: 'User' },
  { id: '4', username: 'susan_williams', email: 'susan@example.com', status: 'Inactive', kycStatus: 'Not Started', lastLogin: '2023-09-28', role: 'User' },
  { id: '5', username: 'michael_brown', email: 'michael@example.com', status: 'Active', kycStatus: 'Verified', lastLogin: '2023-10-12', role: 'Admin' },
  { id: '6', username: 'lisa_davis', email: 'lisa@example.com', status: 'Suspended', kycStatus: 'Failed', lastLogin: '2023-09-15', role: 'User' },
  { id: '7', username: 'david_miller', email: 'david@example.com', status: 'Active', kycStatus: 'Verified', lastLogin: '2023-10-13', role: 'User' },
  { id: '8', username: 'emily_wilson', email: 'emily@example.com', status: 'Active', kycStatus: 'Pending', lastLogin: '2023-10-11', role: 'User' },
];

interface User {
  id: string;
  username: string;
  email: string;
  status: string;
  kycStatus: string;
  lastLogin: string;
  role: string;
}

const AdminUserManagementPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  const filteredUsers = mockUsers.filter(user => 
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold">User Management</h1>
        
        {/* Search and Actions */}
        <div className="flex gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Add User
          </button>
        </div>
      </div>

      {/* User Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <h3 className="text-sm text-gray-500 font-medium">Total Users</h3>
          <p className="text-2xl font-semibold">8,245</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <h3 className="text-sm text-gray-500 font-medium">Active Users</h3>
          <p className="text-2xl font-semibold">7,589</p>
          <p className="text-xs text-green-600">+12% this month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <h3 className="text-sm text-gray-500 font-medium">KYC Verified</h3>
          <p className="text-2xl font-semibold">6,120</p>
          <p className="text-xs text-gray-500">74.2% of users</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <h3 className="text-sm text-gray-500 font-medium">New Users (24h)</h3>
          <p className="text-2xl font-semibold">87</p>
        </div>
      </div>
      
      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">KYC Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                        {user.username.charAt(0).toUpperCase()}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.username}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${user.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                      ${user.status === 'Inactive' ? 'bg-gray-100 text-gray-800' : ''}
                      ${user.status === 'Suspended' ? 'bg-red-100 text-red-800' : ''}
                    `}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${user.kycStatus === 'Verified' ? 'bg-green-100 text-green-800' : ''}
                      ${user.kycStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${user.kycStatus === 'Failed' ? 'bg-red-100 text-red-800' : ''}
                      ${user.kycStatus === 'Not Started' ? 'bg-gray-100 text-gray-800' : ''}
                    `}>
                      {user.kycStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={() => setSelectedUser(user)} 
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      Details
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
                <span className="font-medium">8,245</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  1
                </button>
                <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  2
                </button>
                <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                  3
                </button>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  10
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* User Details Modal (simplified for now) */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">User Details</h2>
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
              <div className="flex items-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-4xl">
                  {selectedUser.username.charAt(0).toUpperCase()}
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium">{selectedUser.username}</h3>
                  <p className="text-gray-500">{selectedUser.email}</p>
                  <div className="mt-1">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full 
                      ${selectedUser.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                      ${selectedUser.status === 'Inactive' ? 'bg-gray-100 text-gray-800' : ''}
                      ${selectedUser.status === 'Suspended' ? 'bg-red-100 text-red-800' : ''}
                    `}>
                      {selectedUser.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm text-gray-500">User ID</dt>
                    <dd className="text-sm font-medium">{selectedUser.id}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Role</dt>
                    <dd className="text-sm font-medium">{selectedUser.role}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">KYC Status</dt>
                    <dd className="text-sm font-medium">{selectedUser.kycStatus}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Last Login</dt>
                    <dd className="text-sm font-medium">{selectedUser.lastLogin}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Account Created</dt>
                    <dd className="text-sm font-medium">2023-08-10</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">2FA Enabled</dt>
                    <dd className="text-sm font-medium">Yes</dd>
                  </div>
                </dl>
              </div>
              
              <div className="border-t pt-4 flex justify-end space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Reset Password
                </button>
                {selectedUser.status === 'Active' ? (
                  <button className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200">
                    Suspend Account
                  </button>
                ) : (
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    Activate Account
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUserManagementPage;
