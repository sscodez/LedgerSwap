"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RepeatIcon } from "../icons";
import ConnectWalletButton from "@/components/connect-wallet-button";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAdmin = pathname.startsWith("/admin");
  const isDashboard = pathname.startsWith("/dashboard");
  const isAdminOrDashboard = isAdmin || isDashboard;

  // Menu items mapping
  const menuItems = [
    { href: "how-it-works", label: "How it works", link: "/how-it-works" },
    { href: "customer-benefits", label: "Customer Benefits", link: "/platinum" },
    { href: "analytics", label: "Analytics", link: "/reviews" },
    { href: "currencies", label: "Currencies", link: "/supported-chains" },
    { href: "business", label: "Business", link: "/loyalty-program" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`${isAdminOrDashboard ? "bg-white text-black" : "bg-[#001233] text-white"
        } relative z-40`}
    >
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-5 flex items-center justify-between max-w-full relative">
        {/* Logo */}
        <motion.div
          className={`flex items-center ${isAdmin ? "items-start" : "items-center"}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
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
              <motion.span
                className="mt-1 self-end bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Admin Panel
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
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
        <motion.nav
          className="hidden lg:flex nav:flex items-center space-x-1 xl:space-x-4 2xl:space-x-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.link}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={item.link}
                className="flex items-center text-xs md:text-sm hover:text-blue-500 transition-colors"
              >
                {item.label}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Authentication - Desktop */}
        <motion.div
          className="hidden lg:flex nav:flex items-center space-x-2 xl:space-x-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >

          {!isAdminOrDashboard && <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/login" className="px-2 md:px-3 py-1 text-xs md:text-sm hover:underline">
              Log in
            </Link>
          </motion.div>}







          {!isAdminOrDashboard ? <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/signup"
              className={`px-3 md:px-4 py-1 md:py-2 rounded-md text-xs md:text-sm transition-colors ${isAdminOrDashboard
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              Get an Account
            </Link>
          </motion.div>

            :
            <div className="flex flex-row items-center space-x-3">

              {isAdmin && (
                <button
                  onClick={() => window.location.reload()}
                  className={`flex items-center justify-center px-4 py-2 rounded-md text-sm text-black transition-colors ${isAdminOrDashboard
                    ? "bg-[#F1F5F9] text-black hover:bg-gray-200"
                    : "bg-[#F1F5F9] text-white hover:bg-blue-700"
                    }`}
                >
                  <Image src="/assests/icons/cached.svg" width={16} height={16} alt="Refresh" className="mr-2" />
                  Refresh
                </button>
              )}

              <Link
                href="/account"
                className={`flex items-center justify-center px-4 py-2 rounded-md text-sm text-black transition-colors ${isAdminOrDashboard
                  ? "bg-[#F1F5F9] text-white hover:bg-gray-200"
                  : "bg-[#F1F5F9] text-white hover:bg-blue-700"
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
                <p className="text-black">My Account</p>
              </Link>




            </div>}

        </motion.div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden nav:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="px-4 py-3 space-y-3 bg-[#0A1E56] text-white shadow-lg z-50 absolute w-full"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={item.link}
                    className="block text-sm py-2 hover:text-blue-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="border-t border-gray-700 pt-3 mt-3 flex flex-col space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link
                  href="/login"
                  className="block text-sm py-2 hover:text-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>


                {isAdmin && (
                  <button
                    onClick={() => window.location.reload()}
                    className={`px-4 py-2 rounded-md text-sm text-center transition-colors ${isAdminOrDashboard
                      ? "bg-white text-black hover:bg-gray-800"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                  >
                    Refresh
                  </button>
                )}

                <Link
                  href={!isAdminOrDashboard ? "/signup" : "/account"}
                  className={`px-4 py-2 rounded-md text-sm text-center transition-colors ${isAdminOrDashboard
                    ? "bg-white text-black hover:bg-gray-800"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {!isAdminOrDashboard ? 'Get an Account' : ' My Account'}
                </Link>





                {/* <div className="py-2">
                  <ConnectWalletButton />
                </div> */}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
