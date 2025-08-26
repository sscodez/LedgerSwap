import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ViewComfyAltIcon, 
  PokerChipIcon, 
  SettingsIcon, 
  WarningIcon, 
  AccountCircle2Icon, 
  AttachMoneyIcon, 
  SwapVerticalCircleIcon 
} from '../icons';

const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();
  
  // Navigation items - using the most important items from AdminSidebar
  // Limited to 5 items for mobile bottom navigation
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
        <AttachMoneyIcon size={20} />
      )
    },
    {
      name: 'Trades',
      href: '/admin/trades',
      icon: (
        <SwapVerticalCircleIcon size={20} />
      )
    },
    {
      name: 'Tokens',
      href: '/admin/token-chain',
      icon: (
        <PokerChipIcon size={20} />
      )
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: (
        <SettingsIcon size={20} />
      )
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30 lg:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
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
  );
};

export default MobileBottomNav;
