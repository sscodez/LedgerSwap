'use client'
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import CopyButton from '../shared/CopyButton';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchAdminFlaggedAddresses } from '@/store/adminFlaggedAddressesSlice';

const AdminFlaggedUsersPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((s) => s.adminFlagged);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  useEffect(() => {
    dispatch(fetchAdminFlaggedAddresses({ page: 1, limit: 20 }));
  }, []);

  const items = useMemo(() => data?.items || [], [data]);

  return (
    <div className="relative text-black px-1 overflow-auto sm:px-0">
      <div className="flex justify-between ml-2 sm:ml-0 items-center mb-4 sm:mb-6">
        <div>
          <h1 className="text-lg 0 sm:text-2xl font-medium">Flagged Users</h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">Users flagged for suspicious behavior (wallet addresses only)</p>
        </div>
      </div>
      
      {/* Desktop Table View (hidden on small screens) */}
      <div className="bg-white rounded-lg  overflow-x-auto  p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="p-2 sm:p-3 text-black text-xs sm:text-[13px]">
              <tr>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left font-medium text-gray-500">
                  Wallet address
                </th>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left font-medium text-gray-500">
                  Coin
                </th>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left font-medium text-gray-500">
                  Network
                </th>
                <th scope="col" className="px-4 sm:px-8 py-3 sm:py-4 text-left font-medium text-gray-500">
                  Reason
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
              {loading && (
                <tr>
                  <td colSpan={6} className="px-4 py-3 text-xs text-gray-500">Loading…</td>
                </tr>
              )}
              {!loading && items.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-3 text-xs text-gray-500">No flagged addresses</td>
                </tr>
              )}
              {!loading && items.map((row: any) => (
                <tr key={row._id} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-xs sm:text-sm font-medium text-gray-900 mr-2">
                        {row.address}
                      </span>
                      <CopyButton textToCopy={row.address} size={15} />
                    </div>
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">{row.coin || '—'}</td>
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">{row.network || '—'}</td>
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    {row.flaggedReason || '—'}
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    {row.flaggedAt ? new Date(row.flaggedAt).toLocaleString() : '—'}
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium">
                    <button 
                      onClick={() => setSelectedItem(row)}
                      className="text-blue-600 text-xs bg-blue-100 p-1 rounded-md hover:text-blue-900 mr-3"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View (visible only on small screens) */}
  

      {/* Review Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-0">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Review Flagged User</h2>
              <button 
                onClick={() => setSelectedItem(null)}
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
                  {selectedItem.address}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Flag Reason</label>
                <div className="p-2 bg-gray-50 rounded-md text-sm">
                  {selectedItem.flaggedReason || '—'}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Total Swaps</label>
                  <div className="p-2 bg-gray-50 rounded-md text-sm">
                    —
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Flagged Date</label>
                  <div className="p-2 bg-gray-50 rounded-md text-sm">
                    {selectedItem.flaggedAt ? new Date(selectedItem.flaggedAt).toLocaleString() : '—'}
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
                onClick={() => setSelectedItem(null)}
              >
                Close
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
