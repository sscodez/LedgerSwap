import React from 'react';
import { IconProps } from './Icon';

const WarningIcon: React.FC<Omit<IconProps, 'name'>> = ({ 
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
      <mask id="mask0_100_5619" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <rect width="16" height="16" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_100_5619)">
        <path d="M0.666748 14.0002L8.00008 1.3335L15.3334 14.0002H0.666748ZM2.96675 12.6668H13.0334L8.00008 4.00016L2.96675 12.6668ZM8.00008 12.0002C8.18897 12.0002 8.3473 11.9363 8.47508 11.8085C8.60286 11.6807 8.66675 11.5224 8.66675 11.3335C8.66675 11.1446 8.60286 10.9863 8.47508 10.8585C8.3473 10.7307 8.18897 10.6668 8.00008 10.6668C7.81119 10.6668 7.65286 10.7307 7.52508 10.8585C7.3973 10.9863 7.33342 11.1446 7.33342 11.3335C7.33342 11.5224 7.3973 11.6807 7.52508 11.8085C7.65286 11.9363 7.81119 12.0002 8.00008 12.0002ZM7.33342 10.0002H8.66675V6.66683H7.33342V10.0002Z" fill={color}/>
      </g>
    </svg>
  );
};

export default WarningIcon;
