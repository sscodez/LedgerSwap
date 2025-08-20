'use client'
import React, { ReactNode, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AdminSidebar from './AdminSidebar';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
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
    <div className="min-h-screen bg-white relative grid grid-cols-1 lg:grid-cols-[256px_1fr] p-0 sm:p-4 md:p-8 lg:p-12" style={{backgroundColor: 'white'}}>
      {/* Overlay when sidebar is open on mobile */}
      {isSidebarOpen && isMobile && (
        <div 
          className="fixed inset-0  bg-opacity-50 z-20 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 z-30 h-full w-64 transition-transform duration-300 ease-in-out lg:relative lg:z-auto
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:col-start-1 lg:col-end-2 lg:row-span-full`}
      >
        <AdminSidebar onCloseMobile={isMobile ? toggleSidebar : undefined} />
      </div>
      
      {/* Main Content Area */}
      <div className="w-full lg:col-start-2 lg:col-end-3 grid grid-rows-[auto_1fr] bg-white">
        {/* Mobile header with menu button */}
        <header className="lg:hidden p-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-md bg-black hover:bg-gray-300"
              aria-label="Toggle sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="p-2 sm:p-4 md:p-6 max-w-6xl mx-auto w-full overflow-x-hidden bg-white">
          <div className="grid gap-2 sm:gap-4 md:gap-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
