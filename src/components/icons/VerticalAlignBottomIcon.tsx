import React from 'react';
import { IconProps } from './Icon';

const VerticalAlignBottomIcon: React.FC<Omit<IconProps, 'name'>> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  onClick
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <mask id="mask0_83_1592" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_83_1592)">
        <path d="M3.33325 17.5V15.8333H16.6666V17.5H3.33325ZM9.99992 14.1667L5.83325 10L6.99992 8.83333L9.16658 11V2.5H10.8333V11L12.9999 8.83333L14.1666 10L9.99992 14.1667Z" fill={color}/>
      </g>
    </svg>
  );
};

export default VerticalAlignBottomIcon;
