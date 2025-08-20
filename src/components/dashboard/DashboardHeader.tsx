import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const DashboardHeader: React.FC = () => {
  const pathname = usePathname();
  
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link href="/" className="mr-8">
            <span className="text-xl font-bold text-blue-600">LedgerSwap</span>
          </Link>
          
          {/* Navigation */}
          <nav>
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link 
                  href="/dashboard" 
                  className={`text-sm font-medium transition-colors ${
                    pathname === '/dashboard' 
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/exchange" 
                  className={`text-sm font-medium transition-colors ${
                    pathname === '/dashboard/exchange' 
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Exchange
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/history" 
                  className={`text-sm font-medium transition-colors ${
                    pathname === '/dashboard/history' 
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  History
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link
            href="/account"
            className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <Image 
              src="/assests/icons/account_circle.svg" 
              alt="Account" 
              width={20} 
              height={20} 
              className="mr-2" 
            />
            My Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
