import Image from "next/image"
import React from "react"

// Right Arrow SVG Component
interface RightArrowProps {
  size?: number
  color?: string
  className?: string
}

export const RightArrow: React.FC<RightArrowProps> = ({ 
  size = 12, 
  color = "#9CA3AF", 
  className = "mx-2" 
}) => {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M9 18L15 12L9 6" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Ethereum = () => { <div className=' flex items-center '><div className='px-1 py-1 bg-gray-200 rounded-md'> <Image src='/assests/cryptocurrency/eth.png' alt='ethereum' width={20} height={20} /></div><p className=' ml-2 text-sm text-gray-500'>Ethereum</p></div>}
export const Solana = () => { <div className=' flex items-center '><div className='px-1 py-1 bg-gray-200 rounded-md'> <Image src='/assests/cryptocurrency/sol.png' alt='ethereum' width={20} height={20} /></div><p className=' ml-2 text-sm text-gray-500'>Sol</p></div>}
export const Tron = () => { <div className=' flex items-center '><div className='px-1 py-1 bg-gray-200 rounded-md'> <Image src='/assests/cryptocurrency/tron.png' alt='ethereum' width={20} height={20} /></div><p className=' ml-2 text-sm text-gray-500'>Tron</p></div>}
export const Bitcoin = () => { <div className=' flex items-center '><div className='px-1 py-1 bg-gray-200 rounded-md'> <Image src='/assests/cryptocurrency/btc.png' alt='ethereum' width={20} height={20} /></div><p className=' ml-2 text-sm text-gray-500'>Bitcoin</p></div>}
export const USDT = () => { <div className=' flex items-center '><div className='px-1 py-1 bg-gray-200 rounded-md'> <Image src='/assests/cryptocurrency/usdt.png' alt='ethereum' width={20} height={20} /></div><p className=' ml-2 text-sm text-gray-500'>USDT</p></div>}
export const USDC = () => { <div className=' flex items-center '><div className='px-1 py-1 bg-gray-200 rounded-md'> <Image src='/assests/cryptocurrency/usdc.png' alt='ethereum' width={20} height={20} /></div><p className=' ml-2 text-sm text-gray-500'>USDC</p></div>}  


// Crypto Badge Components
export const EthereumBadge = () => {
  return (
    <div className='flex items-center justify-center bg-blue-400 px-2 py-1 w-10 h-5 rounded-full '>
      <p className='text-xs text-white'>ETH</p>
    </div>
  )
}

export const SolanaBadge = () => {
  return (
    <div className='flex items-center justify-center bg-purple-400 px-2 py-1 w-10 h-5 rounded-full '>
    <p className='text-xs text-white'>SOL</p>
  </div>
  )
}

export const TronBadge = () => {
  return (
    <div className='flex items-center justify-center bg-red-400 px-2 py-1 w-10 h-5 rounded-full '>
    <p className='text-xs text-white'>TRX</p>
  </div>
  )
}

export const BitcoinBadge = () => {
  return (
    <div className='flex items-center justify-center bg-orange-400 px-2 py-1 w-10 h-5 rounded-full '>
    <p className='text-xs text-white'>BTC</p>
  </div>
  )
}

export const USDTBadge = () => {
  return (
    <div className='flex items-center justify-center bg-teal-400 px-2 py-1 w-10 h-5 rounded-full '>
    <p className='text-xs text-white'>USDT</p>
  </div>
  )
}

export const USDCBadge = () => {
  return (
    <div className='flex items-center'>
      <div className='px-1 py-1 bg-gray-200 rounded-md'> 
        <Image src='/assests/cryptocurrency/usdc.png' alt='usdc' width={20} height={20} />
      </div>
      <RightArrow />
      <p className='text-sm text-gray-500'>USDC</p>
    </div>
  )
}

// Generic Crypto Badge Component
interface CryptoBadgeProps {
  name: string
  icon: string
  altText: string
}

export const CryptoBadge: React.FC<CryptoBadgeProps> = ({ name, icon, altText }) => {
  return (
    <div className='flex items-center'>
      <div className='px-1 py-1 bg-gray-200 rounded-md'> 
        <Image src={icon} alt={altText} width={20} height={20} />
      </div>
      <RightArrow />
      <p className='text-sm text-gray-500'>{name}</p>
    </div>
  )
}
