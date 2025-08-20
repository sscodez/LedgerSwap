'use client'
import React, { ReactNode, useState } from 'react';
import AdminSidebar from './AdminSidebar';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen p-12 bg-gray-50 relative grid grid-cols-1 lg:grid-cols-[256px_1fr]">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        fixed top-0 left-0 z-30 h-full transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        lg:col-start-1 lg:col-end-2 lg:row-span-full
      `}>
        <AdminSidebar />
      </div>
      
      {/* Main Content Area */}
      <div className="w-full lg:col-start-2 lg:col-end-3 grid grid-rows-[auto_1fr]">
        {/* Mobile header with menu button */}
        <header className="lg:hidden bg-white p-4 shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <span className="text-lg font-semibold text-blue-600">LedgerSwap Admin</span>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="p-4 md:p-6 max-w-6xl mx-auto w-full">
          <div className="grid gap-4 md:gap-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
