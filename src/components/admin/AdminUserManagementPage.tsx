'use client'
import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchAdminUsers, updateAdminUserRole } from '@/store/adminUsersSlice';

const AdminUserManagementPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, loading, updating } = useAppSelector((s) => s.adminUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  useEffect(() => {
    dispatch(fetchAdminUsers());
  }, []);

  const filteredUsers = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return items.filter((u: any) =>
      u.name?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q)
    );
  }, [items, searchQuery]);

  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold">User Management</h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative flex-grow sm:flex-grow-0">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full sm:w-auto pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <span className="text-xs text-gray-500 self-center">{loading ? 'Loading…' : `${filteredUsers.length} users`}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 border border-gray-200">
          <h3 className="text-xs sm:text-sm text-gray-500 font-medium">Total Users</h3>
          <p className="text-lg sm:text-2xl font-semibold">{items.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-left">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Role</th>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user: any) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-sm sm:text-base">
                        {user.name?.charAt(0)?.toUpperCase()}
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <div className="text-xs sm:text-sm font-medium text-gray-900 truncate max-w-[100px] sm:max-w-full">{user.name}</div>
                        <div className="text-xs sm:text-sm text-gray-500 truncate max-w-[100px] sm:max-w-full">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden sm:table-cell">{user.role}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-right text-xs sm:text-sm font-medium">
                    <button
                      onClick={() => dispatch(updateAdminUserRole({ id: user._id, role: user.role === 'admin' ? 'user' : 'admin' }))}
                      disabled={updating}
                      className="text-blue-600 hover:text-blue-900 mr-2 sm:mr-3 disabled:opacity-70"
                    >
                      Make {user.role === 'admin' ? 'User' : 'Admin'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
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
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-2xl sm:text-4xl">
                  {selectedUser.name?.charAt(0)?.toUpperCase()}
                </div>
                <div className="ml-3 sm:ml-6">
                  <h3 className="text-lg font-medium">{selectedUser.name}</h3>
                  <p className="text-gray-500">{selectedUser.email}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <dl className="grid grid-cols-1 gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-3 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm text-gray-500">User ID</dt>
                    <dd className="text-sm font-medium">{selectedUser._id}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Role</dt>
                    <dd className="text-sm font-medium">{selectedUser.role}</dd>
                  </div>
                </dl>
              </div>

              <div className="border-t pt-4 flex flex-wrap justify-end gap-2">
                {selectedUser.role === 'admin' && (
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-xs sm:text-sm">
                    Reset Password
                  </button>
                )}
                {selectedUser.status === 'Active' ? (
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200 text-xs sm:text-sm">
                    Suspend Account
                  </button>
                ) : (
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-xs sm:text-sm">
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
