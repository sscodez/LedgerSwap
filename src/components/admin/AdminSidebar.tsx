'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UsdtSwitchBanner from '../dashboard/UsdtSwitchBanner';
import { RepeatIcon, ViewComfyAltIcon } from '../icons';
import Image from 'next/image';

interface AdminSidebarProps {
  onCloseMobile?: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ onCloseMobile }) => {
  const pathname = usePathname();
  
  // Handle mobile navigation click
  const handleNavClick = () => {
    if (onCloseMobile) {
      onCloseMobile();
    }
  };
  
  const navItems = [
    {
      name: 'Overview',
      href: '/admin',
      icon: (
        <ViewComfyAltIcon size={20} />
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
      {/* Sidebar content */}
      <aside 
        id="admin-sidebar"
        className="h-full w-64 bg-white rounded-lg lg:shadow-none">
      {/* Logo Area */}
    

      
      {/* Close button for mobile */}
      <div className="absolute top-4 right-4 lg:hidden">
        <button 
          onClick={onCloseMobile}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Close sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="px-4 py-2 mt-5 lg:hidden">
        <span className="text-xl font-bold text-blue-600">LedgerSwap</span>
      </div>

      {/* Navigation */}
      <nav className=" sm:py-4 px-3 sm:px-4  ">
        <ul className="space-y-0.5 sm:space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            
            return (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  onClick={handleNavClick} /* Close sidebar on navigation */
                  className={`flex items-center px-2 sm:px-3 py-2.5    font-medium rounded-lg ${
                    isActive 
                      ? ' text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className={`mr-2 bg-gray-50 rounded-lg p-2 sm:mr-3 ${isActive ? 'text-blue-700' : 'text-gray-500'}`}>
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
      <div className="px-3 sm:px-4 mt-4 sm:mt-6">
        <Link 
          href="/dashboard/exchange" 
          onClick={handleNavClick} /* Close sidebar when navigating to exchange */
          className="flex bg-[#125FF0] justify-center items-center w-full p-1.5 sm:p-2 text-gray-500 hover:text-gray-800 rounded-md transition-colors"
        >
          <span className='text-white text-xs sm:text-sm font-semibold'>New Exchange</span>
          <div className="flex ml-1.5 sm:ml-2 items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-lg mr-2 sm:mr-3 text-white">
            <RepeatIcon size={14} color="white" />
          </div>
        </Link>
      </div>

      <div className="px-3 sm:px-4 mt-3 sm:mt-4">
        <UsdtSwitchBanner />
      </div>

      {/* Support Info */}
      <div className="bottom-0 w-full p-3 sm:p-4 border-t border-gray-200 mt-auto">
        <div className="text-xs sm:text-sm">
          <p className="text-black mb-1 sm:mb-2 font-medium">Need help?</p>
          <p className="text-gray-500 text-xs mb-0.5 sm:mb-1">Ask anything or share your feedback</p>
          <a href="mailto:admin-support@ledgerswap.io" className="text-blue-600 text-xs hover:underline">
            support@ledgerswap.io
          </a>
        </div>
      </div>
    </aside>
    </>
  );
};

export default AdminSidebar;
