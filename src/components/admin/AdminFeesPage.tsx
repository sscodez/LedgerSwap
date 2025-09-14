'use client'
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchAdminSettings, updateAdminSettings } from '@/store/adminSettingsSlice';
import { fetchAdminFeeRevenue } from '@/store/adminMetricsSlice';

const AdminFeesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: settings, saving } = useAppSelector((s) => s.adminSettings);
  const { feeRevenue } = useAppSelector((s) => s.adminMetrics);

  const [feePercentage, setFeePercentage] = useState('0');

  useEffect(() => {
    dispatch(fetchAdminSettings());
    dispatch(fetchAdminFeeRevenue(30));
  }, []);

  useEffect(() => {
    if (typeof settings?.swapFeePercent === 'number') {
      setFeePercentage(String(settings.swapFeePercent));
    }
  }, [settings?.swapFeePercent]);

  const totalRevenue = useMemo(() => {
    if (!feeRevenue?.items) return 0;
    return feeRevenue.items.reduce((sum, d) => sum + (d.totalFees || 0), 0);
  }, [feeRevenue]);

  const handleSave = async () => {
    const parsed = parseFloat(feePercentage);
    if (isNaN(parsed) || parsed < 0 || parsed > 100) {
      alert('Please enter a valid fee between 0 and 100');
      return;
    }
    await dispatch(updateAdminSettings({ swapFeePercent: parsed }));
  };

  return (
    <div className="text-black relative">
      <div className="flex flex-row sm:flex-row  justify-between text-black items-center sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
        <h1 className="text-md sm:text-2xl ml-2 sm:ml-0 font-medium">Platform Fee Configuration</h1>
        <div className="flex items-center space-x-2">
          <div className="relative  group">
            <button 
              className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md hover:bg-gray-50"
              aria-label="Guides"
            >
             <Image src='/assests/icons/book_ribbon.svg' className='mx-2' alt='guide' width={20} height= {20} />
              Guides
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Tooltip */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
              Access platform fee 
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg  p-4 sm:p-6  mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Platform Swap Fee (%)</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <input 
            type="text" 
            className="w-full sm:flex-1 p-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={feePercentage}
            onChange={(e) => setFeePercentage(e.target.value)}
          />
          <button 
            className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            onClick={handleSave}
            disabled={saving}
          >
           <Image src='/assests/icons/save.png' className='mr-2' alt='guide' width={20} height= {20} />
            {saving ? 'Saving…' : 'Save'}
          </button>
        </div>

        <div className="rounded-lg mt-4 sm:mt-5 p-4 sm:p-6 bg-gray-50">
        <h2 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Fee Revenue (Last 30 Days)</h2>
        <div className="mb-1 sm:mb-2">
          <span className="text-2xl sm:text-3xl font-semibold text-blue-600">{totalRevenue}</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">Last updated: {feeRevenue?.since ? new Date(feeRevenue.since).toLocaleDateString() : '—'}</p>
      </div>

      </div>
      
   
      
      {/* Additional Fee Statistics could be added here */}
    </div>
  );
};

export default AdminFeesPage;
