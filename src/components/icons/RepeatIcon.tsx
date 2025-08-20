import React from 'react';
import { IconProps } from './Icon';

const RepeatIcon: React.FC<Omit<IconProps, 'name'>> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  onClick
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 14 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path d="M3 16L0 13L3 10L4.0625 11.0625L2.875 12.25H11.5V9H13V13.75H2.875L4.0625 14.9375L3 16ZM1 7V2.25H11.125L9.9375 1.0625L11 0L14 3L11 6L9.9375 4.9375L11.125 3.75H2.5V7H1Z" fill={color}/>
    </svg>
  );
};

export default RepeatIcon;
