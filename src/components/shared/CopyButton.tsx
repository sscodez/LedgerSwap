'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface CopyButtonProps {
  textToCopy: string;
  size?: number;
  className?: string;
  showText?: boolean;
  successMessage?: string;
  iconSrc?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  size = 15,
  className = '',
  showText = false,
  successMessage = 'Copied!',
  iconSrc = '/assests/icons/file_copy.svg'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 200);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 200);
      } catch (fallbackErr) {
        console.error('Fallback copy failed: ', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={handleCopy}
        className={`flex items-center justify-center p-1 bg-gray-100 hover:bg-gray-200 rounded transition-all duration-200 ${className}`}
        title={copied ? successMessage : 'Copy to clipboard'}
      >
        <Image 
          src={iconSrc} 
          alt="copy" 
          width={size} 
          height={size} 
          className="cursor-pointer flex-shrink-0" 
        />
        {showText && (
          <span className="ml-1 text-sm">
            {copied ? successMessage : 'Copy'}
          </span>
        )}
      </button>
      
      {/* Success tooltip */}
      {copied && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-10">
          {successMessage}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-green-600"></div>
        </div>
      )}
    </div>
  );
};

export default CopyButton;
