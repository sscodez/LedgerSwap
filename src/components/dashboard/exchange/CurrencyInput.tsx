import React from 'react';

interface CurrencyOption {
  symbol: string;
  name: string;
  tag?: string;
  iconUrl?: string;
}

interface CurrencyInputProps {
  label: string;
  value: string;
  amount: string;
  onAmountChange?: (amount: string) => void;
  onCurrencySelect?: (currency: CurrencyOption) => void;
  selectedCurrency: CurrencyOption;
  isReadOnly?: boolean;
  estimatedValue?: string;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label,
  value,
  amount,
  onAmountChange,
  onCurrencySelect,
  selectedCurrency,
  isReadOnly = false,
  estimatedValue
}) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-4">
      <label className="block text-sm text-gray-500 mb-2">{label}</label>
      
      <div className="flex">
        <div className="flex-grow mr-2">
          <input
            type="text"
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
            placeholder="0.00"
            readOnly={isReadOnly}
            className={`w-full text-lg font-medium outline-none ${isReadOnly ? 'bg-white text-gray-700' : 'text-black'}`}
          />
          {estimatedValue && (
            <div className="text-sm text-gray-500 mt-1">≈ {estimatedValue}</div>
          )}
        </div>
        
        <div>
          <button
            className="flex items-center bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg px-3 py-2"
            onClick={() => {/* Open currency selector modal */}}
            disabled={isReadOnly}
          >
            {selectedCurrency.iconUrl ? (
              <img src={selectedCurrency.iconUrl} alt={selectedCurrency.symbol} className="w-6 h-6 mr-2" />
            ) : (
              <div className="w-6 h-6 bg-gray-200 rounded-full mr-2 flex items-center justify-center overflow-hidden">
                {selectedCurrency.symbol.charAt(0)}
              </div>
            )}
            
            <div className="flex items-center">
              <span className="font-medium mr-2">{selectedCurrency.symbol}</span>
              {selectedCurrency.tag && (
                <span className="bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 rounded">
                  {selectedCurrency.tag}
                </span>
              )}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyInput;
