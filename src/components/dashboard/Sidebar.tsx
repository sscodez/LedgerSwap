import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UsdtSwitchBanner from './UsdtSwitchBanner';
import { 
  RepeatIcon,
  ViewComfyAltIcon, 
  History2Icon, 
  AccountBalanceWalletIcon, 
  BookRibbonIcon 
} from '../icons';

interface SidebarProps {
  onCloseMobile?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onCloseMobile }) => {
  const pathname = usePathname();
  
  // Navigation items
  const navItems = [
    {
      name: 'Overview',
      href: '/dashboard',
      icon: (
        <ViewComfyAltIcon size={20} />
      )
    },
    {
      name: 'History',
      href: '/dashboard/history',
      icon: (
        <History2Icon size={20} />
      )
    },
    {
      name: 'Payouts',
      href: '/dashboard/payouts',
      icon: (
        <AccountBalanceWalletIcon size={20} />
      )
    },
    {
      name: 'My addresses',
      href: '/dashboard/addresses',
      icon: (
        <BookRibbonIcon size={20} />
      )
    }
  ];

  // Handle mobile navigation click
  const handleNavClick = () => {
    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  return (
    <aside className="w-64 h-full flex flex-col bg-white">
      {/* Mobile close button */}
      {onCloseMobile && (
        <div className="flex justify-end p-4 lg:hidden">
          <button 
            onClick={onCloseMobile}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Logo for mobile */}
      <div className="px-4 py-2 mb-4 lg:hidden">
        <span className="text-xl font-bold text-blue-600">LedgerSwap</span>
      </div>

      {/* Navigation */}
      <nav className="py-4 px-4 flex-grow">
        <ul className="space-y-4">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <li key={index}>
                <Link 
                  href={item.href} 
                  onClick={handleNavClick}
                  className={`flex items-center px-2 py-2 rounded-md transition-colors ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-lg mr-3 ${
                    isActive 
                      ? 'bg-[#125FF0] text-white' 
                      : 'bg-slate-100 text-slate-400'
                  }`}>
                    {item.icon}
                  </div>
                  <span className={[isActive ? 'text-black' : 'text-gray-500 hover:text-gray-800'].join(' ')}>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* New Exchange Button */}
      <div className="px-4 mt-2 mb-4">
        <Link 
          href="/dashboard/exchange" 
          onClick={handleNavClick}
          className="flex bg-[#125FF0] justify-center items-center w-full p-2 text-gray-500 hover:text-gray-800 rounded-md transition-colors"
        >
          <span className='text-white font-semibold'>New Exchange</span>
          <div className="flex ml-2 items-center justify-center w-8 h-8 rounded-lg mr-3 text-white">
            <RepeatIcon size={16} color="white" />
          </div>
        </Link>
      </div>

      {/* USDT Switch Banner */}
      <div className='px-4 mb-4'>
        <UsdtSwitchBanner />
      </div>

      {/* Help Section */}
      <div className="mt-auto w-full p-4 border-t border-gray-200">
        <div className="text-sm">
          <h3 className="font-medium mb-1">Need help?</h3>
          <p className="text-gray-500 text-xs mb-2">Ask anything or share your feedback</p>
          <a href="mailto:support@ledgerswap.io" className="text-blue-600 hover:underline text-xs">
            support@ledgerswap.io
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
