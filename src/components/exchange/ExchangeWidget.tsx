import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FaLock, FaLockOpen } from "react-icons/fa6";
import { TbExchange } from "react-icons/tb";

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
}

const ExchangeWidget: React.FC<ExchangeWidgetProps> = ({
    initialSendCurrency,
    initialReceiveCurrency,
    initialSendAmount = '0.1',
    initialReceiveAmount = '0.0039987',
    onExchange = () => { },
}) => {
    // States
    const [sendCurrency, setSendCurrency] = useState<Currency>(
        initialSendCurrency || {
            name: 'ETH',
            fullName: 'Ethereum',
            icon: '/assests/cryptocurrency/eth.png',
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

    // List of available cryptocurrencies
    const cryptocurrencies: Currency[] = [
        { name: 'BTC', fullName: 'Bitcoin', icon: '/assests/cryptocurrency/btc.png', color: '#FF8904' },
        { name: 'ETH', fullName: 'Ethereum', icon: '/assests/cryptocurrency/eth.png', color: '#74D4FF' },
        { name: 'USDT', fullName: 'Tether', icon: '/assests/cryptocurrency/usdt.png', color: '#26A17B' },
        { name: 'USDC', fullName: 'USD Coin', icon: '/assests/cryptocurrency/usdc.png', color: '#2775CA' },
        // { name: 'XRP', fullName: 'Ripple', icon: '/assests/cryptocurrency/xrp.png', color: '#23292F' },
        { name: 'SOL', fullName: 'Solana', icon: '/assests/cryptocurrency/sol.png', color: '#9945FF' },
    ];

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
                // In a real app, we would calculate the receive amount based on exchange rates
                // For now, we'll just simulate a calculation
                setReceiveAmount((parseFloat(value || '0') * 0.039987).toFixed(7));
                setSendUsdValue(`≈$${(parseFloat(value || '0') * 4591.1).toFixed(2)}`);
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
                // In a real app, we would calculate the send amount based on exchange rates
                // For now, we'll just simulate a calculation
                setSendAmount((parseFloat(value || '0') / 0.039987).toFixed(7));
                setSendUsdValue(`≈$${(parseFloat(value || '0') / 0.039987 * 4591.1).toFixed(2)}`);
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

    return (
        <div className="p-3 py-6 sm:p-4 md:py-6   md:p-6 bg-white rounded-b-2xl">
            {/* You Send */}
            <div className="flex">
                <div className="rounded-lg w-[100%] flex flex-row sm:flex-row items-start sm:items-center overflow-hidden bg-[#F3F4F6]">
                    <div className="p-3 items-center justify-center  flex flex-row w-[60%] sm:flex-1">
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
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <button className="flex items-center justify-between  transition-colors rounded-lg w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center">
                                            <div className="rounded-full mr-2">
                                                <Image src={sendCurrency.icon} alt={sendCurrency.fullName} className='w-5 h-5 sm:w-8 sm:h-8' width={25} height={25} />
                                            </div>
                                            <div className="flex flex-col md:flex-row md:items-center items-center">
                                                <span className="font-bold  text-[10px] sm:text-xl text-black">{sendCurrency.name}</span>
                                                <span className=" text-[8px] md:text-xs px-2 md:px-2 md:mx-2 mx-0 py-0.5 rounded-full text-white font-medium" style={{ backgroundColor: sendCurrency.color }}>
                                                    {sendCurrency.name}
                                                </span>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-6 sm:w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className="bg-white text-black rounded-lg shadow-xl min-w-[200px] z-[999999]" sideOffset={5}>
                                    <div className="py-1">
                                        {cryptocurrencies.map((crypto) => (
                                            <DropdownMenu.Item
                                                key={crypto.name}
                                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center"
                                                onClick={() => handleSelectSendCurrency(crypto)}
                                            >
                                                <div className="rounded-full mr-2">
                                                    <Image src={crypto.icon} alt={crypto.fullName} width={24} height={24} />
                                                </div>
                                                <span>{crypto.fullName}</span>
                                                <span className="ml-2 text-xs px-2 py-1 rounded-full text-white font-medium" style={{ backgroundColor: crypto.color }}>
                                                    {crypto.name}
                                                </span>
                                            </DropdownMenu.Item>
                                        ))}
                                    </div>
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </div>
                </div>
            </div>

            {/* Floating Rate */}
            <div className="flex items-center justify-between my-3 relative">
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
            <div className="flex">
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
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <button className="flex items-center justify-between transition-colors rounded-lg w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center">
                                            <div className="rounded-full mr-2">
                                                <Image src={receiveCurrency.icon} alt={receiveCurrency.fullName} className='w-5 h-5 sm:w-8 sm:h-8' width={25} height={25} />
                                            </div>
                                            <div className="flex flex-col md:flex-row md:items-center items-center">
                                                <span className="font-bold text-[10px]  sm:text-xl text-black">{receiveCurrency.name}</span>
                                                <span className="text-[8px] md:text-xs px-2 md:mx-2 mx-0 py-0.5 rounded-full text-white font-medium" style={{ backgroundColor: receiveCurrency.color }}>
                                                    {receiveCurrency.name}
                                                </span>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-6 sm:w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className="bg-white  text-black rounded-lg shadow-xl min-w-[200px] z-[999999]" sideOffset={5}>
                                    <div className="py-1">
                                        {cryptocurrencies.map((crypto) => (
                                            <DropdownMenu.Item
                                                key={crypto.name}
                                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center"
                                                onClick={() => handleSelectReceiveCurrency(crypto)}
                                            >
                                                <div className="rounded-full mr-2">
                                                    <Image src={crypto.icon} alt={crypto.fullName} width={24} height={24} />
                                                </div>
                                                <span>{crypto.fullName}</span>
                                                <span className="ml-2 text-xs px-2 py-1 rounded-full text-white font-medium" style={{ backgroundColor: crypto.color }}>
                                                    {crypto.name}
                                                </span>
                                            </DropdownMenu.Item>
                                        ))}
                                    </div>
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </div>
                </div>
            </div>

            {/* Sign-up Callout */}
            <div className="mb-4 sm:mb-6 mt-4 sm:mt-6 text-black px-1">
                <p className="text-xs sm:text-sm">
                    <a href="/signup" className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium underline">Sign up</a> to get cashback up to 1.8 USDT
                </p>
            </div>

            {/* Exchange Button */}
            <motion.button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                onClick={onExchange}
            >
                Exchange
            </motion.button>
        </div>
    );
};

export default ExchangeWidget;
