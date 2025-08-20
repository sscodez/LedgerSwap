import React from 'react';
import Image from 'next/image';

export type CryptoSymbol = 
  | 'btc'
  | 'eth'
  | 'eur'
  | 'ltc'
  | 'sol'
  | 'usd'
  | 'usdc'
  | 'usdt'
  | 'xmr';

export interface CryptoIconProps {
  symbol: CryptoSymbol;
  size?: number;
  className?: string;
}

const CryptoIcon: React.FC<CryptoIconProps> = ({
  symbol,
  size = 24,
  className = '',
}) => {
  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ 
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <Image
        src={`/assests/cryptocurrency/${symbol.toLowerCase()}.png`}
        alt={`${symbol} icon`}
        width={size}
        height={size}
        className="rounded-full"
      />
    </div>
  );
};

export default CryptoIcon;
