import React from 'react';
import { IconProps } from './Icon';

const BookAddressIcon: React.FC<Omit<IconProps, 'name'>> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  onClick
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <mask id="mask0_89_320" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <rect width="16" height="16" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_89_320)">
        <path d="M4.49984 14.6667C3.99984 14.6667 3.56928 14.4972 3.20817 14.1583C2.84706 13.8194 2.6665 13.4 2.6665 12.9V3.59999C2.6665 3.17777 2.79706 2.79999 3.05817 2.46666C3.31928 2.13333 3.66095 1.92221 4.08317 1.83333L10.6665 0.533325V11.2L4.34984 12.4667C4.24984 12.4889 4.1665 12.5417 4.09984 12.625C4.03317 12.7083 3.99984 12.8 3.99984 12.9C3.99984 13.0222 4.04984 13.125 4.14984 13.2083C4.24984 13.2917 4.3665 13.3333 4.49984 13.3333H11.9998V2.66666H13.3332V14.6667H4.49984ZM5.99984 10.7833L9.33317 10.1333V2.16666L5.99984 2.81666V10.7833ZM4.6665 11.05V3.08333L4.4165 3.13333C4.29428 3.15555 4.19428 3.20833 4.1165 3.29166C4.03873 3.37499 3.99984 3.47777 3.99984 3.59999V11.2167C4.05539 11.1944 4.11373 11.175 4.17484 11.1583C4.23595 11.1417 4.29428 11.1278 4.34984 11.1167L4.6665 11.05Z" fill={color}/>
      </g>
    </svg>
  );
};

export default BookAddressIcon;
