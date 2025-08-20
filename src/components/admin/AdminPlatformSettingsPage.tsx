'use client'
import React, { useState } from 'react';

const AdminPlatformSettingsPage: React.FC = () => {
  const [privacyMode, setPrivacyMode] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [feeStructure, setFeeStructure] = useState('standard');

  return (
    <div className="relative text-black w-full px-3 sm:px-4 md:px-6">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-medium">Platform Settings</h1>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <h2 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">General Settings</h2>
          
          <div className="space-y-3 sm:space-y-4">
            {/* Privacy Mode Setting */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-black/10 gap-2 sm:gap-0">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-sm sm:text-base font-medium">Privacy Mode</h3>
                <p className="text-xs sm:text-sm text-gray-500">Enhanced privacy protection for user data</p>
              </div>
              <button 
                onClick={() => setPrivacyMode(!privacyMode)}
                className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm w-full sm:w-auto ${privacyMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}
              >
                {privacyMode ? 'Enabled' : 'Enable'}
              </button>
            </div>
            
            {/* Auto-refresh Setting */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-black/10 gap-2 sm:gap-0">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-sm sm:text-base font-medium">Auto-refresh Dashboard</h3>
                <p className="text-xs sm:text-sm text-gray-500">Automatically update dashboard data</p>
              </div>
              <button 
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm w-full sm:w-auto ${!autoRefresh ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {autoRefresh ? 'Disable' : 'Disabled'}
              </button>
            </div>
            
            {/* Notification Settings */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-black/10 gap-2 sm:gap-0">
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
