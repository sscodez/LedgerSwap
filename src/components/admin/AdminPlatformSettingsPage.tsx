'use client'
import React, { useState } from 'react';

const AdminPlatformSettingsPage: React.FC = () => {
  const [privacyMode, setPrivacyMode] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  return (
    <div className="relative text-black ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl  font-medium">Platform Settings</h1>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg   p-6">
          <h2 className="text-lg font-medium mb-4">General Settings</h2>
          
          <div className="  space-y-3">
            {/* Privacy Mode Setting */}
            <div className="flex items-center justify-between py-3 border-b border-black/20">
              <div>
                <h3 className="font-medium">Privacy Mode</h3>
                <p className="text-sm text-gray-500">Enhanced privacy protection for user data</p>
              </div>
              <button 
                onClick={() => setPrivacyMode(!privacyMode)}
                className={`px-4 cursor-pointer py-1 rounded-md text-[15px] ${privacyMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'} bg-blue-600 text-white `}
              >
                {privacyMode ? 'Enabled' : 'Enable'}
              </button>
            </div>
            
            {/* Auto-refresh Setting */}
            <div className="flex items-center justify-between py-3 border-b border-black/20">
              <div>
                <h3 className="font-medium">Auto-refresh Dashboard</h3>
                <p className="text-sm text-gray-500">Automatically update dashboard data</p>
              </div>
              <button 
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`px-4 py-1 text-[15px] rounded-md ${!autoRefresh ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {autoRefresh ? 'Disable' : 'Disabled'}
              </button>
            </div>
            
            {/* Notification Settings */}
            <div className="flex items-center justify-between py-3  ">
              <div>
                <h3 className="font-medium">Notification Settings</h3>
                <p className="text-sm text-gray-500">Alerts for platform events</p>
              </div>
              <button className="px-4 py-1 text-[15px] rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                Manage
              </button>
            </div>
          </div>
        </div>
        
        {/* Fee Configuration */}
      
        
        {/* Maintenance Mode */}
      
      </div>
    </div>
  );
};

export default AdminPlatformSettingsPage;
