'use client'
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { addPayout, fetchPayouts } from '@/store/payoutsSlice';

const PayoutsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, loading, creating, error } = useAppSelector((s) => s.payouts);
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    dispatch(fetchPayouts());
  }, []);

  const onCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseFloat(amount);
    if (isNaN(num) || num <= 0) {
      alert('Enter a valid amount');
      return;
    }
    if (!address) {
      alert('Enter a destination address');
      return;
    }
    await dispatch(addPayout({ amount: num, address }));
    setAmount('');
    setAddress('');
  };

  return (
    <div className="relative text-black w-full px-3 sm:px-4 md:px-6">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-medium">Payouts</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
          <h2 className="text-base sm:text-lg font-medium mb-3">Create Payout</h2>
          <form onSubmit={onCreate} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="number"
              step="any"
              placeholder="Amount"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <input
              type="text"
              placeholder="Destination address"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button
              type="submit"
              disabled={creating}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-70"
            >
              {creating ? 'Submitting…' : 'Submit Payout'}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base sm:text-lg font-medium">Recent Payouts</h2>
            {loading && <span className="text-xs text-gray-500">Loading…</span>}
          </div>
          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3 mb-3">{error}</div>
          )}
          <div className="overflow-x-auto">
            <table className="min-w-full text-left divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-3 sm:px-6 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                  <th className="px-3 sm:px-6 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-3 sm:px-6 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.length === 0 && !loading && (
                  <tr>
                    <td colSpan={4} className="px-3 sm:px-6 py-3 text-sm text-gray-500">No payouts yet</td>
                  </tr>
                )}
                {items.map((p) => (
                  <tr key={p._id} className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 text-sm font-medium">{p.amount}</td>
                    <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-gray-600 break-all">{p.address}</td>
                    <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm">{p.status || 'pending'}</td>
                    <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-gray-500">{p.createdAt ? new Date(p.createdAt).toLocaleString() : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutsPage;
