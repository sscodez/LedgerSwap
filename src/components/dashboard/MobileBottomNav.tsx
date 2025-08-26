import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  RepeatIcon,
  ViewComfyAltIcon, 
  History2Icon, 
  AccountBalanceWalletIcon, 
  BookAddressIcon,
  SwapVerticalCircleIcon
} from '../icons';

const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();
  
  // Left side navigation items
  const leftNavItems = [
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
    }
  ];

  // Right side navigation items
  const rightNavItems = [
    {
      name: 'Payouts',
      href: '/dashboard/payouts',
      icon: (
        <AccountBalanceWalletIcon size={20} />
      )
    },
    {
      name: 'Addresses',
      href: '/dashboard/addresses',
      icon: (
        <BookAddressIcon size={20} />
      )
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30 lg:hidden">
      <div className="flex items-center h-16 relative">
        {/* Left side navigation items */}
        <div className="flex justify-around items-center  w-[40%]">
          {leftNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center w-full h-full"
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                  isActive 
                    ? 'bg-[#125FF0] text-white' 
                    : 'bg-slate-100 text-slate-400'
                }`}>
                  {item.icon}
                </div>
                <span className={`text-xs mt-1 ${
                  isActive ? 'text-black font-medium' : 'text-gray-500'
                }`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
        <div className='w-[20%]'></div>

        {/* Center Exchange Button */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6">
          <Link 
            href="/dashboard/exchange"
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-600 mx-2  text-white shadow-lg">
              <SwapVerticalCircleIcon size={28} />
            </div>
            {/* <span className="text-xs font-medium mt-1 text-blue-600">
              Exchange
            </span> */}
          </Link>
        </div>

        {/* Right side navigation items */}
        <div className="flex justify-around items-center w-[40%]">
          {rightNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center w-full h-full"
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                  isActive 
                    ? 'bg-[#125FF0] text-white' 
                    : 'bg-slate-100 text-slate-400'
                }`}>
                  {item.icon}
                </div>
                <span className={`text-xs mt-1 ${
                  isActive ? 'text-black font-medium' : 'text-gray-500'
                }`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;
