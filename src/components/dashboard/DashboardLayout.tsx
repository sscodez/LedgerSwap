
'use client'
import React, { ReactNode, useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile on initial render and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint is 1024px
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true); // Always show sidebar on desktop
      } else {
        setIsSidebarOpen(false); // Hide sidebar on mobile by default
      }
    };
    
    // Check on initial render
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative grid grid-cols-1 lg:grid-cols-[256px_1fr] p-0 sm:p-4 md:p-8 lg:p-12">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && isMobile && (
        <div 
          className="fixed inset-0  bg-opacity-50 z-20 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        fixed top-0 left-0 z-30 h-full w-64 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        lg:col-start-1 lg:col-end-2 lg:row-span-full bg-white shadow-lg lg:shadow-none
      `}>
        <Sidebar onCloseMobile={isMobile ? toggleSidebar : undefined} />
      </div>
      
      {/* Main Content Area */}
      <div className="w-full lg:col-start-2 lg:col-end-3 grid grid-rows-[auto_1fr]">
        {/* Mobile header with menu button */}
        <header className="lg:hidden  p-4  sticky top-0 z-10">
          <div className="flex items-center  justify-between">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-md bg-black hover:bg-gray-100"
              aria-label="Toggle sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
            </div> */}
          </div>
        </header>
        
        {/* Main Content */}
        <main className="p-2 sm:p-4 md:p-6 max-w-6xl mx-auto w-full overflow-x-hidden">
          <div className="grid gap-2 sm:gap-4 md:gap-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
