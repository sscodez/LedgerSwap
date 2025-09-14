'use client'
import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchAdminSettings, setLocalSettings, updateAdminSettings } from '@/store/adminSettingsSlice';

const AdminPlatformSettingsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, saving } = useAppSelector((s) => s.adminSettings);

  // Derive controlled values from store (fallback defaults)
  const privacyMode = useMemo(() => Boolean(data?.privacyMode), [data]);
  const autoRefresh = useMemo(() => Boolean(data?.autoRefreshDashboard), [data]);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [feeStructure, setFeeStructure] = useState('standard');
  const [savingKey, setSavingKey] = useState<string | null>(null);

  // Load settings on mount
  useEffect(() => {
    dispatch(fetchAdminSettings());
  }, []);

  // Handlers with optimistic UI
  const togglePrivacyMode = async () => {
    const next = !privacyMode;
    setSavingKey('privacyMode');
    try {
      // optimistic update
      dispatch(setLocalSettings({ ...(data || {}), privacyMode: next }));
      await dispatch(updateAdminSettings({ privacyMode: next })).unwrap();
    } catch (err) {
      console.error('Failed to update privacy mode', err);
      // revert
      dispatch(setLocalSettings({ ...(data || {}), privacyMode }));
      alert('Failed to update Privacy Mode. Please try again.');
    } finally {
      setSavingKey(null);
    }
  };

  const toggleAutoRefresh = async () => {
    const next = !autoRefresh;
    setSavingKey('autoRefreshDashboard');
    try {
      // optimistic update
      dispatch(setLocalSettings({ ...(data || {}), autoRefreshDashboard: next }));
      await dispatch(updateAdminSettings({ autoRefreshDashboard: next })).unwrap();
    } catch (err) {
      console.error('Failed to update auto-refresh', err);
      // revert
      dispatch(setLocalSettings({ ...(data || {}), autoRefreshDashboard: autoRefresh }));
      alert('Failed to update Auto-refresh. Please try again.');
    } finally {
      setSavingKey(null);
    }
  };

  return (
    <div className="relative text-black font-inter w-full px-3 sm:px-4 md:px-6">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-medium">Platform Settings</h1>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {loading && (
          <div className="bg-white rounded-lg p-4 sm:p-6">
            <p className="text-sm text-gray-500">Loading settings…</p>
          </div>
        )}
        {/* General Settings */}
        <div className="bg-white rounded-lg p-4 sm:p-6 ">
          <h2 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">General Settings</h2>
          
          <div className="space-y-3 sm:space-y-4">
            {/* Privacy Mode Setting */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-black/10 gap-2 sm:gap-0">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-sm sm:text-base font-medium">Privacy Mode</h3>
                <p className="text-xs sm:text-sm text-gray-500">Enhanced privacy protection for user data</p>
              </div>
              <button
                onClick={togglePrivacyMode}
                disabled={savingKey === 'privacyMode' || saving}
                className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm w-full sm:w-auto ${privacyMode ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} ${(savingKey === 'privacyMode' || saving) ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {savingKey === 'privacyMode' || saving ? 'Saving…' : privacyMode ? 'Enabled' : 'Enable'}
              </button>
            </div>
            
            {/* Auto-refresh Setting */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-black/10 gap-2 sm:gap-0">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-sm sm:text-base font-medium">Auto-refresh Dashboard</h3>
                <p className="text-xs sm:text-sm text-gray-500">Automatically update dashboard data</p>
              </div>
              <button
                onClick={toggleAutoRefresh}
                disabled={savingKey === 'autoRefreshDashboard' || saving}
                className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm w-full sm:w-auto ${autoRefresh ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} ${(savingKey === 'autoRefreshDashboard' || saving) ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {savingKey === 'autoRefreshDashboard' || saving ? 'Saving…' : autoRefresh ? 'Enabled' : 'Enable'}
              </button>
            </div>
            
            {/* Notification Settings */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 font-inter border-black/10 gap-2 sm:gap-0">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-sm sm:text-base font-medium">Notification Settings</h3>
                <p className="text-xs sm:text-sm text-gray-500">Alerts for platform events</p>
              </div>
              <button className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 w-full sm:w-auto">
                Manage
              </button>
            </div>
          </div>
        </div>
        
        {/* Fee Configuration */}
        {/* <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <h2 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Fee Configuration</h2>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-black/10 gap-2 sm:gap-0">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-sm sm:text-base font-medium">Fee Structure</h3>
                <p className="text-xs sm:text-sm text-gray-500">Select the fee model for transactions</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button 
                  onClick={() => setFeeStructure('standard')}
                  className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm ${feeStructure === 'standard' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  Standard
                </button>
                <button 
                  onClick={() => setFeeStructure('tiered')}
                  className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm ${feeStructure === 'tiered' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  Tiered
                </button>
              </div>
            </div>
          </div>
        </div> */}
        
        {/* Maintenance Mode */}
        {/* <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <h2 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">System Maintenance</h2>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-2 sm:gap-0">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-sm sm:text-base font-medium">Maintenance Mode</h3>
                <p className="text-xs sm:text-sm text-gray-500">Temporarily disable platform access</p>
              </div>
              <button 
                onClick={() => setMaintenanceMode(!maintenanceMode)}
                className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm w-full sm:w-auto ${maintenanceMode ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {maintenanceMode ? 'Active' : 'Activate'}
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AdminPlatformSettingsPage;

