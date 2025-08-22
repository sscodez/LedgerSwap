'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const pathname = usePathname();
  const isLandingPage = pathname === '/';
  return (
    <footer className="bg-[#001233] text-white">
      <div className={`container mx-auto px-4 ${isLandingPage ? 'pt-32 pb-12' : 'py-12'}`}>
        {/* Top Section with App Downloads and Language */}
        <div className="flex flex-col lg:flex-row justify-between border-b pb-5 border-gray-300/50 items-start lg:items-center mb-12">
          {/* App Download Buttons */}
          <div className="flex flex-wrap gap-4 mb-6 lg:mb-0">
            {/* App Store */}
            <Link href="/app-store" className="flex items-center bg-white/5 rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors">
              <div className="w-8 h-8 rounded-sm mr-3 flex items-center justify-center">
              <Image src='/assests/social-icons/apple.png' alt='play-store' width={50} height= {50} />
              </div>
              <div>
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-sm font-semibold">AppStore</div>
              </div>
            </Link>
            {/* Google Play */}
            <Link href="/play-store" className="flex items-center bg-white/5 rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors">
              <div className="w-8 h-8 mr-3 flex items-center justify-center">
             <Image src='/assests/social-icons/googleplay.png' alt='play-store' width={50} height= {50} />
              </div>
              <div>
                <div className="text-xs text-gray-300">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </Link>

            {/* Android APK */}
            <Link href="/android-apk" className="flex items-center bg-white/5 rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors">
              <div className="w-8 h-8 mr-3 flex items-center justify-center">
              <Image src='/assests/social-icons/android.png' alt='play-store' width={50} height= {50}/>
              </div>
              <div>
                <div className="text-xs text-gray-300">Download</div>
                <div className="text-sm font-semibold">Android APK</div>
              </div>
            </Link>
          </div>

          {/* Buy & Sell Crypto with Payment Methods and Language */}
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <span className="text-sm font-bold mr-3">Buy & Sell crypto</span>
       
              <div className=" flex items-center justify-center">
              <Image src='/assests/social-icons/visa.png' alt='play-store' width={80} height= {80} />
              </div>
            </div>
            
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="flex bg-white/10 py-2 px-5 rounded-lg items-center hover:bg-white/20 transition-colors outline-none">
                  <span className="text-sm mr-2">{selectedLanguage}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </DropdownMenu.Trigger>
              
              <DropdownMenu.Portal>
                <DropdownMenu.Content 
                  className="min-w-[140px] bg-white rounded-md p-1 shadow-lg" 
                  sideOffset={5}


                  align="end"
                >
                  <DropdownMenu.Item 
                    className="text-gray-800 text-sm px-3 py-2 rounded hover:bg-gray-100 cursor-pointer outline-none"
                    onSelect={() => setSelectedLanguage('English')}
                  >
                    English
                  </DropdownMenu.Item>
                  <DropdownMenu.Item 
                    className="text-gray-800 text-sm px-3 py-2 rounded hover:bg-gray-100 cursor-pointer outline-none"
                    onSelect={() => setSelectedLanguage('Spanish')}
                  >
                    Spanish
                  </DropdownMenu.Item>
                  <DropdownMenu.Item 
                    className="text-gray-800 text-sm px-3 py-2 rounded hover:bg-gray-100 cursor-pointer outline-none"
                    onSelect={() => setSelectedLanguage('French')}
                  >
                    French
                  </DropdownMenu.Item>
                  <DropdownMenu.Item 
                    className="text-gray-800 text-sm px-3 py-2 rounded hover:bg-gray-100 cursor-pointer outline-none"
                    onSelect={() => setSelectedLanguage('Other')}
                  >
                    Other
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 ${isLandingPage ? 'mt-16' : ''}`}>
          {/* Company & Team */}
          <div>
            <h3 className="text-sm font-poppins font-medium text-gray-400 mb-4">Company & Team</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm  hover:text-white transition-colors">About</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/how-it-works" className="text-sm  hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="/contact" className="text-sm  hover:text-white transition-colors">Contacts</Link></li>
              <li><Link href="/blog" className="text-sm   hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/mobile-app" className="text-sm  hover:text-white transition-colors">Mobile App</Link></li>
              <li><Link href="/reviews" className="text-sm  hover:text-white transition-colors">Reviews</Link></li>
            </ul>
          </div>

          {/* Exchange Pairs */}
          <div>
            <h3 className="text-sm font-poppins text-gray-400 font-semibold mb-4">Exchange Pairs</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/exchange/eth-to-btc" className="hover:text-blue-300 transition-colors">ETH to BTC</Link></li>
              <li><Link href="/exchange/btc-to-xmr" className="hover:text-blue-300 transition-colors">BTC to XMR</Link></li>
              <li><Link href="/exchange/btc-to-eth" className="hover:text-blue-300 transition-colors">BTC to ETH</Link></li>
              <li><Link href="/exchange/btc-to-trx" className="hover:text-blue-300 transition-colors">BTC to TRX</Link></li>
              <li><Link href="/exchange/eth-to-sol" className="hover:text-blue-300 transition-colors">ETH to SOL</Link></li>
              <li><Link href="/exchange/eth-to-bnb" className="hover:text-blue-300 transition-colors">ETH to BNB</Link></li>
              <li><Link href="/exchange/btc-to-usdt" className="hover:text-blue-300 transition-colors">BTC to USDT</Link></li>
              <li><Link href="/exchange/sol-to-near" className="hover:text-blue-300 transition-colors">SOL to NEAR</Link></li>
              <li><Link href="/buy-crypto" className="hover:text-blue-300 transition-colors">Buy Crypto</Link></li>
              <li><Link href="/sell-crypto" className="hover:text-blue-300 transition-colors">Sell Crypto</Link></li>
              <li><Link href="/crypto-pairs" className="hover:text-blue-300 transition-colors">Crypto Pairs</Link></li>
            </ul>
          </div>

          {/* Supported Coins */}
          <div>
            <h3 className="text-sm font-poppins text-gray-400 font-semibold mb-4">Supported Coins</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/coins/bitcoin" className="hover:text-blue-300 transition-colors">Bitcoin</Link></li>
              <li><Link href="/coins/ethereum" className="hover:text-blue-300 transition-colors">Ethereum</Link></li>
              <li><Link href="/coins/tezos" className="hover:text-blue-300 transition-colors">Tezos</Link></li>
              <li><Link href="/coins/solana" className="hover:text-blue-300 transition-colors">Solana</Link></li>
              <li><Link href="/coins/tron" className="hover:text-blue-300 transition-colors">TRON</Link></li>
              <li><Link href="/coins/tether" className="hover:text-blue-300 transition-colors">Tether (USDT) Swap</Link></li>
              <li><Link href="/coins/binance-coin" className="hover:text-blue-300 transition-colors">Binance Coin</Link></li>
              <li><Link href="/coins" className="hover:text-blue-300 transition-colors">All Coins</Link></li>
            </ul>
          </div>

          {/* Partnership */}
          <div>
            <h3 className="text-sm font-poppins text-gray-400 font-semibold mb-4">Partnership</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/developer-api" className="hover:text-blue-300 transition-colors">Development API</Link></li>
              <li><Link href="/affiliate-terms" className="hover:text-blue-300 transition-colors">Affiliate Program</Link></li>
              <li><Link href="/ambassador" className="hover:text-blue-300 transition-colors">Ambassador</Link></li>
            </ul>

         
          </div>

          {/* Legal Documents */}
          <div>
            <h3 className="text-sm font-poppins text-gray-400 font-semibold mb-4">Legal Documents</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/terms" className="hover:text-blue-300 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/affiliate-terms" className="hover:text-blue-300 transition-colors">Affiliate Terms</Link></li>
              <li><Link href="/risk-warning" className="hover:text-blue-300 transition-colors">General Risk Warning</Link></li>
            </ul>

            <h3 className="text-sm font-poppins text-gray-400 font-semibold mb-4 mt-8">Customer Benefits</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/loyalty-program" className="hover:text-blue-300 transition-colors">Loyalty Program</Link></li>
              <li><Link href="/platinum-users" className="hover:text-blue-300 transition-colors">Platinum Users</Link></li>
              <li><Link href="/invite-friends" className="hover:text-blue-300 transition-colors">Invite Friends</Link></li>
            </ul>
          </div>
        </div>

      </div>
    
      {/* Copyright and Social Icons */}
      <div className={`md:px-8 w-full bg-[#101828] ${isLandingPage ? 'mt-12' : 'mt-6'} flex flex-col md:flex-row items-center justify-between`}>
          <div className="mb-4 text-sm md:mb-0">
            <p>© {new Date().getFullYear()} LedgerSwap</p>
          </div>
          
          <div className="flex items-center justify-center p-4 space-x-4">
            <Link href="https://twitter.com/ledgerswap" aria-label="Twitter">
            <Image src='/assests/social-icons/x.png' alt='x' width={20} height= {20} />
            </Link>
            <Link href="https://youtube.com/ledgerswap" aria-label="YouTube">
            <Image src='/assests/social-icons/youtube-fill.png' alt='youtube' width={20} height= {20} />
            </Link>
            <Link href="https://t.me/ledgerswap" aria-label="Telegram">
            <Image src='/assests/social-icons/telegram-plane 2.png' alt='youtube' width={20} height= {20} />
            </Link>
            <Link href="https://discord.gg/ledgerswap" aria-label="Discord">
            <Image src='/assests/social-icons/discord.png' alt='discord' width={20} height= {20} />
            </Link>
            <Link href="https://facebook.com/ledgerswap" aria-label="Facebook">
            <Image src='/assests/social-icons/facebook-circle-fill.png' alt='facebook' width={20} height= {20} />
            </Link>
            <Link href="https://twitch.tv/ledgerswap" aria-label="Trading View">
            <Image src='/assests/social-icons/tradingview.png' alt='tradingview' width={20} height= {20} />
            </Link>
            <Link href="https://linkedin.com/company/ledgerswap" aria-label="LinkedIn">
            <Image src='/assests/social-icons/linkedin-fill.png' alt='linkedin' width={20} height= {20} />
            </Link>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
