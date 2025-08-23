"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ConnectWalletButton from "@/components/connect-wallet-button";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAdmin = pathname.startsWith("/admin");
  const isDashboard = pathname.startsWith("/dashboard");
  const isAdminOrDashboard = isAdmin || isDashboard;

  // Menu items mapping
  const menuItems = [
    { href: "#how-it-works", label: "How it works" },
    { href: "#customer-benefits", label: "Customer Benefits" },
    { href: "#analytics", label: "Analytics" },
    { href: "#currencies", label: "Currencies" },
    { href: "#business", label: "Business" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`${
        isAdminOrDashboard ? "bg-white text-black" : "bg-[#001233] text-white"
      } relative z-40`}
    >
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-5 flex items-center justify-between max-w-full relative">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assests/icon.png"
            alt="InterledgerSwap Logo"
            width={28}
            height={28}
            className="mr-2"
          />
          <div className="flex flex-col">
            <Link href="/" className="text-base sm:text-lg lg:text-xl font-bold whitespace-nowrap">
              InterledgerSwap
            </Link>
            {isAdmin && (
              <span className="mt-1 self-end bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                Admin Panel
              </span>
            )}
          </div>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button 
          className="flex items-center lg:hidden nav:hidden" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="h-5 w-5 sm:h-6 sm:w-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex nav:flex items-center space-x-1 xl:space-x-4 2xl:space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center text-xs md:text-sm hover:text-blue-500 transition-colors"
            >
              {item.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          ))}
        </nav>

        {/* My Account Button - Desktop */}
        <div className="hidden lg:flex nav:flex items-center space-x-2 xl:space-x-3">
          <Link
            href="/account"
            className={`flex items-center px-3 md:px-4 py-1 md:py-2 rounded-md text-xs md:text-sm transition-colors ${
              isAdminOrDashboard
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
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

      {/* Mobile/Tablet Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden nav:hidden">
          <div className="px-4 py-3 space-y-3 bg-[#0A1E56] shadow-lg text-white z-50 absolute w-full">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm py-2 hover:text-blue-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-700 pt-3 mt-3 flex flex-col space-y-3">
              <Link
                href="/account"
                className={`flex items-center justify-center px-4 py-2 rounded-md text-sm transition-colors ${
                  isAdminOrDashboard
                    ? "bg-blue-600 text-white hover:bg-gray-800"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
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
        </div>
      )}
    </header>
  );
};

export default Header;
