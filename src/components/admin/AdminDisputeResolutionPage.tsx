'use client'
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchAdminDisputes, updateAdminDisputeStatus } from '@/store/adminDisputesSlice';

const AdminDisputeResolutionPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, loading, processing } = useAppSelector((s) => s.adminDisputes);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    dispatch(fetchAdminDisputes());
  }, []);

  const disputes = useMemo(() => items, [items]);

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-lg sm:text-2xl text-black ml-2 sm:ml-0 font-inter font-medium">Dispute Resolution Center</h1>
        </div>
      </div>

      {/* Fiat Dispute Coordination Notice */}
  

      {/* Empty State */}
      {loading ? (
        <div className="bg-white rounded-lg border border-gray-200 px-3 h-[40vh] py-6 flex items-center justify-center text-sm text-gray-500">Loading disputes…</div>
      ) : disputes.length === 0 ? (
        <div className="bg-white rounded-lg  border border-gray-200 px-3 h-[60vh] py-6 ">
        <div className="bg-blue-50   rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
          <Image src='/assests/icons/warning2.svg' alt='guide' width={20} height= {20} />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-black">Fiat Dispute Coordination</h3>
            <div className="mt-2 text-xs sm:text-sm text-[#90A1B9]">
              <p>For disputes involving fiat transactions, coordinate resolution through off-platform communication channels. No personal data is stored on-platform.</p>
            </div>
          </div>
        </div>
      </div>
          <div className="flex flex-col justify-center h-[30vh] text-center items-center">
            <div className="flex items-center justify-center mb-4">
            <Image src='/assests/icons/warning.svg' alt='guide' width={50} height= {50} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No active disputes at this time</h3>
          </div>
        </div>
      ) : (
        /* Disputes Table - would show when there are disputes */
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dispute ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {disputes.map((dispute: any) => (
                  <tr key={dispute._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{dispute._id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {dispute.title || '—'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${dispute.status === 'open' ? 'bg-red-100 text-red-800' : ''}
                        ${dispute.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${dispute.status === 'resolved' ? 'bg-green-100 text-green-800' : ''}
                        ${dispute.status === 'closed' ? 'bg-gray-100 text-gray-800' : ''}
                      `}>
                        {dispute.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${dispute.priority === 'high' ? 'bg-red-100 text-red-800' : ''}
                        ${dispute.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${dispute.priority === 'low' ? 'bg-green-100 text-green-800' : ''}
                      `}>
                        {dispute.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {dispute.createdAt ? new Date(dispute.createdAt).toLocaleString() : '—'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        disabled={processing}
                        onClick={() => dispatch(updateAdminDisputeStatus({ id: dispute._id, status: 'resolved' }))}
                        className="text-green-600 hover:text-green-900 disabled:opacity-70"
                      >
                        Mark Resolved
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Create Dispute Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create Test Dispute</h2>
              <button 
                onClick={() => setShowCreateModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dispute Title</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Brief description of the dispute"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={3}
                  placeholder="Detailed description of the dispute..."
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Assign To</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Unassigned</option>
                    <option value="admin1">Admin 1</option>
                    <option value="admin2">Admin 2</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                onClick={() => setShowCreateModal(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Create Dispute
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDisputeResolutionPage;
