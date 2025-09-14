import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FaLock, FaLockOpen } from "react-icons/fa6";
import { TbExchange } from "react-icons/tb";
import { useRouter, usePathname } from 'next/navigation';
import { useAppDispatch } from '@/store';
import { setExchangeState, setCurrentExchangeId } from '@/store/exchangeSlice';
import { createExchangeHistory } from '@/services/exchangeHistory';

// Define currency type
export interface Currency {
    name: string;
    fullName: string;
    icon: string;
    color: string;
}

// Define props for the component
interface ExchangeWidgetProps {
    initialSendCurrency?: Currency;
    initialReceiveCurrency?: Currency;
    initialSendAmount?: string;
    initialReceiveAmount?: string;
    onExchange?: () => void;
    navigateOnExchange?: boolean; // if true, push to /exchange with Redux state
}

const ExchangeWidget: React.FC<ExchangeWidgetProps> = ({
    initialSendCurrency,
    initialReceiveCurrency,
    initialSendAmount = '0.1',
    initialReceiveAmount = '0.0039987',
    onExchange = () => { },
    navigateOnExchange = true,
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useAppDispatch();
    const [submitting, setSubmitting] = useState(false);
    // States
    const [sendCurrency, setSendCurrency] = useState<Currency>(
        initialSendCurrency || {
            name: 'XRP',
            fullName: 'Ripple',
            icon: '/assests/cryptocurrency/xrp.png',
            color: '#74D4FF'
        }
    );
    const [receiveCurrency, setReceiveCurrency] = useState<Currency>(
        initialReceiveCurrency || {
            name: 'BTC',
            fullName: 'Bitcoin',
            icon: '/assests/cryptocurrency/btc.png',
            color: '#FF8904'
        }
    );
    const [sendAmount, setSendAmount] = useState(initialSendAmount);
    const [receiveAmount, setReceiveAmount] = useState(initialReceiveAmount);
    const [floatingRate, setFloatingRate] = useState(true);
    const [sendUsdValue, setSendUsdValue] = useState('≈$459.11');
    const [sendDropdown, setSendDropdown] = useState(false);
    const [receiveDropdown, setReceiveDropdown] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    // Live pricing state
    const [pricesUsd, setPricesUsd] = useState<Record<string, number>>({});
    const [pricesError, setPricesError] = useState<string | null>(null);
    
    // Refs for click outside handling
    const sendDropdownRef = useRef<HTMLDivElement>(null);
    const receiveDropdownRef = useRef<HTMLDivElement>(null);

    // List of available cryptocurrencies
    const cryptocurrencies: Currency[] = [
        { name: 'BTC', fullName: 'Bitcoin', icon: '/assests/cryptocurrency/btc.png', color: '#FF8904' },
        { name: 'ETH', fullName: 'Ethereum', icon: '/assests/cryptocurrency/eth.png', color: '#74D4FF' },
        { name: 'USDT', fullName: 'Tether', icon: '/assests/cryptocurrency/usdt.png', color: '#26A17B' },
        { name: 'USDC', fullName: 'USD Coin', icon: '/assests/cryptocurrency/usdc.png', color: '#2775CA' },
        { name: 'XRP', fullName: 'Ripple', icon: '/assests/cryptocurrency/xrp.png', color: '#23292F' },
        { name: 'SOL', fullName: 'Solana', icon: '/assests/cryptocurrency/sol.png', color: '#9945FF' },
        { name: 'XLM', fullName: 'Stellar', icon: '/assests/cryptocurrency/xlm.png', color: '#08B5E5' },
        { name: 'XDC', fullName: 'XinFin', icon: '/assests/cryptocurrency/xdc.png', color: '#25458B' },
        { name: 'MIOTA', fullName: 'IOTA', icon: '/assests/cryptocurrency/miota.png', color: '#242424' },
        { name: 'LTC', fullName: 'Litecoin', icon: '/assests/cryptocurrency/ltc.png', color: '#345D9D' },
        { name: 'XMR', fullName: 'Monero', icon: '/assests/cryptocurrency/xmr.png', color: '#FF6600' },
    ];

    // Map our symbols to CoinGecko IDs
    const coinGeckoIds: Record<string, string> = {
        BTC: 'bitcoin',
        ETH: 'ethereum',
        USDT: 'tether',
        USDC: 'usd-coin',
        XRP: 'ripple',
        SOL: 'solana',
        XLM: 'stellar',
        XDC: 'xdce-crowd-sale',
        MIOTA: 'iota',
        LTC: 'litecoin',
        XMR: 'monero',
    };

    const allIdsCsv = Object.values(coinGeckoIds).join(',');

    // Helper to get USD price by our currency symbol
    const getUsdPrice = (symbol: string): number | null => {
        const id = coinGeckoIds[symbol as keyof typeof coinGeckoIds];
        if (!id) return null;
        const v = pricesUsd[id];
        return typeof v === 'number' ? v : null;
    };

    // Event handlers
    const handleSendAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Allow only number input, no text
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value) || value === '') {
            setSendAmount(value);
            // Calculate receive amount based on exchange rate
            if (value === '') {
                setReceiveAmount('');
                setSendUsdValue('');
            } else {
                const amount = parseFloat(value || '0');
                const pSend = getUsdPrice(sendCurrency.name);
                const pRecv = getUsdPrice(receiveCurrency.name);
                if (pSend && pRecv && amount >= 0) {
                    const usd = amount * pSend;
                    const recv = pRecv > 0 ? usd / pRecv : 0;
                    setReceiveAmount(Number.isFinite(recv) ? recv.toFixed(7) : '');
                    setSendUsdValue(`≈$${usd.toFixed(2)}`);
                } else {
                    // Fallback if prices not loaded yet
                    setReceiveAmount('');
                    setSendUsdValue('');
                }
            }
        }
    };

    const handleReceiveAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Allow only number input, no text
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value) || value === '') {
            setReceiveAmount(value);
            // Calculate send amount based on exchange rate
            if (value === '') {
                setSendAmount('');
                setSendUsdValue('');
            } else {
                const amountRecv = parseFloat(value || '0');
                const pSend = getUsdPrice(sendCurrency.name);
                const pRecv = getUsdPrice(receiveCurrency.name);
                if (pSend && pRecv && amountRecv >= 0) {
                    const usd = amountRecv * pRecv;
                    const sendAmt = pSend > 0 ? usd / pSend : 0;
                    setSendAmount(Number.isFinite(sendAmt) ? sendAmt.toFixed(7) : '');
                    setSendUsdValue(`≈$${usd.toFixed(2)}`);
                } else {
                    setSendAmount('');
                    setSendUsdValue('');
                }
            }
        }


    };

    const handleSwap = () => {
        const tempCurrency = sendCurrency;
        setSendCurrency(receiveCurrency);
        setReceiveCurrency(tempCurrency);

        const tempAmount = sendAmount;
        setSendAmount(receiveAmount);
        setReceiveAmount(tempAmount);
    };

    const toggleFloatingRate = () => {
        setFloatingRate(!floatingRate);
    };

    const handleSelectSendCurrency = (currency: Currency) => {
        setSendCurrency(currency);
    };

    const handleSelectReceiveCurrency = (currency: Currency) => {
        setReceiveCurrency(currency);
    };
    
    // Click outside handling for dropdowns
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Close send dropdown if clicked outside
            if (sendDropdownRef.current && !sendDropdownRef.current.contains(event.target as Node) && sendDropdown) {
                setSendDropdown(false);
            }
            
            // Close receive dropdown if clicked outside
            if (receiveDropdownRef.current && !receiveDropdownRef.current.contains(event.target as Node) && receiveDropdown) {
                setReceiveDropdown(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sendDropdown, receiveDropdown]);
    
    // Prevent scrolling when dropdown is open
    useEffect(() => {
        if (sendDropdown || receiveDropdown) {
            // Prevent scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scrolling
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            // Cleanup: re-enable scrolling when component unmounts
            document.body.style.overflow = 'auto';
        };
    }, [sendDropdown, receiveDropdown]);
    
    // Close dropdowns when window is resized (mobile to desktop transition)
    useEffect(() => {
        const handleResize = () => {
            // Close dropdowns when window is resized
            if (sendDropdown || receiveDropdown) {
                setSendDropdown(false);
                setReceiveDropdown(false);
            }
            // Track mobile state
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth < 640);
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [sendDropdown, receiveDropdown]);

    // Initialize mobile state on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 640);
        }
    }, []);

    // Fetch live USD prices from CoinGecko on mount
    useEffect(() => {
        const abort = new AbortController();
        async function fetchPrices() {
            try {
                setPricesError(null);
                const url = `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(allIdsCsv)}&vs_currencies=usd`;
                const res = await fetch(url, { signal: abort.signal, cache: 'no-store' });
                if (!res.ok) throw new Error(`Failed to fetch prices: ${res.status}`);
                const json = await res.json();
                // Flatten to id -> usd number
                const flat: Record<string, number> = {};
                Object.entries(json || {}).forEach(([id, obj]) => {
                    const usd = (obj as any)?.usd;
                    if (typeof usd === 'number') flat[id] = usd;
                });
                setPricesUsd(flat);
            } catch (e: any) {
                if (e?.name !== 'AbortError') setPricesError(e?.message || 'Failed to load prices');
            }
        }
        fetchPrices();
        return () => abort.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Recompute amounts when prices or selected currencies change
    useEffect(() => {
        if (!sendAmount) return;
        const amount = parseFloat(sendAmount);
        const pSend = getUsdPrice(sendCurrency.name);
        const pRecv = getUsdPrice(receiveCurrency.name);
        if (pSend && pRecv && Number.isFinite(amount)) {
            const usd = amount * pSend;
            const recv = pRecv > 0 ? usd / pRecv : 0;
            setReceiveAmount(Number.isFinite(recv) ? recv.toFixed(7) : '');
            setSendUsdValue(`≈$${usd.toFixed(2)}`);
        }
    }, [pricesUsd, sendCurrency, receiveCurrency]);

    const handleExchangeClick = async () => {
        // Persist current state to Redux
        try {
            dispatch(
                setExchangeState({
                    sendCurrency,
                    receiveCurrency,
                    sendAmount,
                    receiveAmount,
                })
            );
        } catch {}
        // Create exchange on backend to get an ID
        try {
            setSubmitting(true);
            const generateId = () => `EX-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
            const payload = {
                exchangeId: generateId(),
                status: 'pending',
                from: {
                    currency: sendCurrency.name,
                    amount: parseFloat(sendAmount || '0'),
                },
                to: {
                    currency: receiveCurrency.name,
                    amount: parseFloat(receiveAmount || '0'),
                },
                fees: 0,
                cashback: 0,
            } as any;
            const created = await createExchangeHistory(payload);
            if (created?._id) {
                dispatch(setCurrentExchangeId(created._id));
            }
        } catch (e) {
            // Non-fatal: proceed to navigation even if creation failed
            console.warn('Failed to create exchange record, continuing navigation', e);
        } finally {
            setSubmitting(false);
        }

        // Optionally navigate to dashboard/exchange (avoid navigating if already there)
        if (navigateOnExchange && pathname !== '/dashboard/exchange') {
            router.push('/dashboard/exchange');
        }
        // Fire external callback
        onExchange?.();
    };

    return (
        <div className="w-full p-3 py-4 sm:py-6 sm:p-4 md:py-6 md:p-6 bg-white rounded-sm sm:rounded-2xl relative">
            {/* App Logo */}
         
            {/* You Send */}
            <div ref={sendDropdownRef} className="flex flex-col relative">
                <div className=" rounded-lg w-[100%] flex flex-row sm:flex-row items-start sm:items-center overflow-hidden bg-[#F3F4F6]">
                    <div className="p-3 items-center justify-center flex flex-row w-[60%] sm:flex-1">
                        <div className="text-xs sm:text-sm text-gray-500 w-[30%] font-medium whitespace-nowrap">You send</div>
                        <div className="flex flex-col items-end justify-end w-[70%] pl-2">
                            <input
                                type="text"
                                value={sendAmount}
                                onChange={handleSendAmountChange}
                                className="text-black font-medium text-sm sm:text-xl bg-transparent outline-none text-right w-full truncate"
                                placeholder="0.00"
                            />
                            <div className="text-gray-500 text-xs sm:text-xs truncate w-full text-right">{sendUsdValue}</div>
                        </div>
                    </div>
                    <div className="bg-[#F3F4F6] w-[40%] border-l-2 border-white p-3 flex items-center justify-between">
                        <button onClick={() => {
                            setSendDropdown(!sendDropdown);
                            setReceiveDropdown(false);
                        }} className="flex items-center justify-between transition-colors rounded-lg w-full">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                    <div className="rounded-full mr-2">
                                        <Image src={sendCurrency.icon} alt={sendCurrency.fullName} className='w-5 h-5 sm:w-8 sm:h-8' width={25} height={25} />
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center items-start">
                                        <span className="font-bold text-md sm:text-lg text-black">{sendCurrency.name}</span>
                                        <span className="text-[10px] px-2 md:mx-2 mx-0 py-0.5 rounded-full text-white font-medium" style={{ backgroundColor: sendCurrency.color }}>
                                            {sendCurrency.name}
                                        </span>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                
                {/* Dropdown - Absolutely positioned */}
                <AnimatePresence>
                    {sendDropdown && (
                        <motion.div 
                            className="fixed mt-2 bg-[#F3F4F6] text-black rounded-lg min-w-[200px] z-[99999999] shadow-xl"
                            style={{ 
                                width: sendDropdownRef.current?.offsetWidth + 'px', 
                                top: (sendDropdownRef.current?.getBoundingClientRect().bottom || 0) + 'px', 
                                left: (sendDropdownRef.current?.getBoundingClientRect().left || 0) + 'px',
                                position: 'fixed'
                            }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Search input */}
                            <div className="p-3 border-b border-gray-200">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search cryptocurrency"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-3 py-2 pl-10 text-sm bg-inherit  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="py-1 max-h-[300px] overflow-y-auto">
                                {cryptocurrencies
                                    .filter(crypto => 
                                        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                        crypto.fullName.toLowerCase().includes(searchQuery.toLowerCase())
                                    )
                                    .map((crypto) => (
                                        <motion.div
                                            key={crypto.name}
                                            className="px-4 py-4 text-sm hover:bg-gray-100 border-b border-gray-200 cursor-pointer flex items-center"
                                            onClick={() => {handleSelectSendCurrency(crypto); setSendDropdown(false); setSearchQuery('');}}
                                            whileHover={{ backgroundColor: '#f3f4f6' }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="rounded-full mr-2">
                                                <Image src={crypto.icon} alt={crypto.fullName} width={24} height={24} />
                                            </div>
                                            <span className="font-medium text-xs sm:text-lg">{crypto.fullName}</span>
                                            <span className="ml-2 text-xs px-2 py-1 rounded-full text-white font-medium" style={{ backgroundColor: crypto.color }}>
                                                {crypto.name}
                                            </span>
                                        </motion.div>
                                    ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Floating Rate */}
            <div className="flex items-center justify-between my-1 sm:my-3 relative">
                <div
                    className="flex items-center gap-2 py-2 rounded-lg cursor-pointer"
                    onClick={toggleFloatingRate}
                >
                    <div className="p-3 bg-gray-100 rounded-full">
                        {floatingRate ? (
                            <FaLockOpen className="text-gray-500 w-4 h-4" />
                        ) : (
                            <FaLock className="text-gray-500 w-4 h-4" />
                        )}
                    </div>
                    <span className="text-sm text-gray-600">
                        {floatingRate ? "Floating rate" : "Fixed rate"}
                    </span>
                </div>
                <div className="z-10">
                    <motion.button
                        onClick={handleSwap}
                        className="bg-gray-100 hover:bg-blue-100 transition-all w-10 h-10 rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <TbExchange className="w-5 h-5 text-gray-600" />
                    </motion.button>
                </div>
            </div>

            {/* You Get */}
            <div ref={receiveDropdownRef} className="flex flex-col relative">
                <div className="rounded-lg w-[100%] flex flex-row sm:flex-row items-start sm:items-center overflow-hidden bg-[#F3F4F6]">
                    <div className="p-3 flex flex-row items-center w-[60%] sm:flex-1">
                        <div className="text-xs sm:text-sm text-gray-500 w-[30%] font-medium whitespace-nowrap">You get</div>
                        <div className="flex flex-col items-end w-[70%] justify-center pl-2">
                            <input
                                type="text"
                                value={receiveAmount}
                                onChange={handleReceiveAmountChange}
                                className="text-black font-medium text-sm sm:text-xl bg-transparent text-right outline-none w-full truncate"
                                placeholder="0.00"
                            />
                            <div className="text-gray-500 text-xs sm:text-sm truncate w-full text-right">≈{receiveAmount}</div>
                        </div>
                    </div>
                    <div className="bg-[#F3F4F6] w-[40%] border-l-2 border-white p-3 flex items-center justify-between">
                        <button onClick={() => {
                            setReceiveDropdown(!receiveDropdown);
                            setSendDropdown(false);
                        }} className="flex items-center justify-between transition-colors rounded-lg w-full">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                    <div className="rounded-full mr-2">
                                        <Image src={receiveCurrency.icon} alt={receiveCurrency.fullName} className='w-5 h-5 sm:w-8 sm:h-8' width={25} height={25} />
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center items-start">
                                        <span className="font-bold text-md sm:text-xl text-black">{receiveCurrency.name}</span>
                                        <span className="text-[10px] px-2 md:mx-2 mx-0 py-0.5 rounded-full text-white font-medium" style={{ backgroundColor: receiveCurrency.color }}>
                                            {receiveCurrency.name}
                                        </span>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                
                {/* Dropdown - Absolutely positioned */}
                <AnimatePresence>
                    {receiveDropdown && (
                        <motion.div 
                            className="fixed bg-[#F3F4F6] text-black rounded-lg min-w-[200px] z-[99999999] shadow-xl"
                            style={{ 
                                width: (receiveDropdownRef.current?.offsetWidth || 0) + 'px', 
                                left: (receiveDropdownRef.current?.getBoundingClientRect().left || 0) + 'px',
                                position: 'fixed',
                                ...(isMobile
                                    ? {
                                        // Position above the trigger on mobile
                                        bottom: ((typeof window !== 'undefined' ? window.innerHeight : 0) - (receiveDropdownRef.current?.getBoundingClientRect().top || 0)) + 'px'
                                      }
                                    : {
                                        // Position below the trigger on larger screens
                                        top: (receiveDropdownRef.current?.getBoundingClientRect().bottom || 0) + 'px'
                                      }
                                )
                            }}
                            initial={{ opacity: 0, y: isMobile ? 20 : -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: isMobile ? 20 : -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Search input */}
                            <div className="p-3 border-b border-gray-200">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search cryptocurrency"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-3 py-2 pl-10 text-sm bg-inherit rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="py-1 max-h-[300px] overflow-y-auto">
                                {cryptocurrencies
                                    .filter(crypto => 
                                        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                        crypto.fullName.toLowerCase().includes(searchQuery.toLowerCase())
                                    )
                                    .map((crypto) => (
                                    <motion.div
                                        key={crypto.name}
                                        className="px-4 py-4 text-sm hover:bg-gray-100 border-b border-gray-200 cursor-pointer flex items-center"
                                        onClick={() => {handleSelectReceiveCurrency(crypto); setReceiveDropdown(false);}}
                                        whileHover={{ backgroundColor: '#f3f4f6' }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="rounded-full mr-2">
                                            <Image src={crypto.icon} alt={crypto.fullName} width={24} height={24} />
                                        </div>
                                        <span className="font-medium text-xs sm:text-lg">{crypto.fullName}</span>
                                        <span className="ml-2 text-xs px-2 py-1 rounded-full text-white font-medium" style={{ backgroundColor: crypto.color }}>
                                            {crypto.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Sign-up Callout */}
            <div className="mb-3 sm:mb-6 mt-3 sm:mt-6 text-black px-1 ">
                <p className="text-xs sm:text-sm relative ">
                    <a href="/signup" className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium underline relative ">Sign up</a> to get cashback up to 1.8 USDT
                </p>
            </div>

            {/* Exchange Button */}
            <motion.button
                className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                onClick={handleExchangeClick}
                disabled={submitting}
            >
                {submitting ? 'Processing…' : 'Exchange'}
            </motion.button>
        </div>
    );
};

export default ExchangeWidget;
