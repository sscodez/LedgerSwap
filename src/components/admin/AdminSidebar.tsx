'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UsdtSwitchBanner from '../dashboard/UsdtSwitchBanner';
import { RepeatIcon } from '../icons';
import Image from 'next/image';

const AdminSidebar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Close sidebar when route changes on mobile
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('#admin-sidebar') && !target.closest('#sidebar-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);
  
  const navItems = [
    {
      name: 'Overview',
      href: '/admin',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      name: 'Fees',
      href: '/admin/fees',
      icon: (
        <Image src='/assests/icons/attach_money.png' alt='settings' width={20} height= {20} />
      )
    },
    {
      name: 'Trades',
      href: '/admin/trades',
      icon: (
        <Image src='/assests/icons/swap_vertical_circle.png' alt='settings' width={20} height= {20} />
      )
    },
    // {
    //   name: 'Tokens',
    //   href: '/admin/token-management',
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    //     </svg>
    //   )
    // },
    {
      name: 'Tokens',
      href: '/admin/token-chain',
      icon: (
        <Image src='/assests/icons/poker_chip.svg' alt='settings' width={20} height= {20} />
      )
    },
    {
      name: 'Dispute',
      href: '/admin/dispute',
      icon: (
        <Image src='/assests/icons/warning.svg' alt='settings' width={20} height= {20} />
      )
    },
    {
      name: 'User',
      href: '/admin/flagged-users',
      icon: (
        <Image src='/assests/icons/account_circle 2.svg' alt='settings' width={20} height= {20} />
      )
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: (
        <Image src='/assests/icons/settings.svg' alt='settings' width={20} height= {20} />
      )
    },
  ];

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <button 
          id="sidebar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="p-2 rounded-md bg-white shadow-md text-gray-700 hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <aside 
        id="admin-sidebar"
        className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} fixed lg:relative lg:translate-x-0 top-0 left-0 z-30 w-64 min-h-screen bg-white shadow-lg transition-transform duration-300 ease-in-out lg:shadow-none`}>
      {/* Logo Area */}
    

      {/* Navigation */}
      <nav className="py-6 px-4 mt-6 lg:mt-0">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            
            return (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`flex items-center px-3 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-lg ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className={`mr-3 ${isActive ? 'text-blue-700' : 'text-gray-500'}`}>
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Admin Actions */}
      <div className="px-4 mt-6">
        <Link 
          href="/dashboard/exchange" 
          className="flex bg-[#125FF0] justify-center items-center w-full p-2 text-gray-500 hover:text-gray-800 rounded-md transition-colors"
        >
          <span className='text-white text-sm sm:text-base font-semibold'>New Exchange</span>
          <div className="flex ml-2 items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-lg mr-3 text-white">
            <RepeatIcon size={16} color="white" />
          </div>
        </Link>
      </div>

      <div className="px-4 mt-4 sm:mt-6">
        <UsdtSwitchBanner />
      </div>

      {/* Support Info */}
      <div className="bottom-0 w-full p-4 border-t border-gray-200 mt-6">
        <div className="text-xs sm:text-sm">
          <p className="text-black mb-1 sm:mb-2 font-medium">Need help?</p>
          <p className="text-gray-300 font-medium text-xs sm:text-sm">Ask anything or share your feedback</p>
          <a href="mailto:admin-support@ledgerswap.io" className="text-blue-600 text-xs sm:text-sm hover:underline">
            support@ledgerswap.io
          </a>
        </div>
      </div>
    </aside>
    </>
  );
};

export default AdminSidebar;
