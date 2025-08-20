import React from 'react';
import { IconProps } from './Icon';

const ViewComfyAltIcon: React.FC<Omit<IconProps, 'name'>> = ({ 
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
      <mask id="mask0_235_38" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <rect width="16" height="16" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_235_38)">
        <path d="M1.33331 6.66671V1.33337H6.66665V6.66671H1.33331ZM2.66665 5.33337H5.33331V2.66671H2.66665V5.33337ZM1.33331 14.6667V9.33337H6.66665V14.6667H1.33331ZM2.66665 13.3334H5.33331V10.6667H2.66665V13.3334ZM9.33331 6.66671V1.33337H14.6666V6.66671H9.33331ZM10.6666 5.33337H13.3333V2.66671H10.6666V5.33337ZM9.33331 14.6667V9.33337H14.6666V14.6667H9.33331ZM10.6666 13.3334H13.3333V10.6667H10.6666V13.3334Z" fill={color}/>
      </g>
    </svg>
  );
};

export default ViewComfyAltIcon;
