import React from 'react';

// Import type only to avoid circular dependency
import type { IconName } from './index';

export interface IconProps {
  name?: IconName;
  className?: string;
  size?: number | string;
  color?: string;
  onClick?: () => void;
}

// Create a base icon component that will be used by all icons
const Icon: React.FC<IconProps> = ({ 
  name, 
  className = '', 
  size = 24, 
  color = 'currentColor',
  onClick
}) => {
  // Dynamically import the correct icon component based on name
  const [IconComponent, setIconComponent] = React.useState<React.ComponentType<Omit<IconProps, 'name'>> | null>(null);
  
  React.useEffect(() => {
    if (!name) return;
    
    // Import dynamically to avoid circular dependency
    const loadIcon = async () => {
      try {
        // Dynamic import using dynamic import
        const iconModule = await import(`./${name}Icon`);
        setIconComponent(() => iconModule.default);
      } catch (e) {
        console.warn(`Icon ${name} not found`, e);
        setIconComponent(null);
      }
    };
    
    loadIcon();
    
    // Cleanup function
    return () => {
      setIconComponent(null);
    };
  }, [name]);
  
  // If no icon component is loaded or name is not provided, show placeholder
  if (!IconComponent) {
    return (
      <div 
        className={`inline-flex items-center justify-center ${className}`}
        style={{ 
          width: typeof size === 'number' ? `${size}px` : size,
          height: typeof size === 'number' ? `${size}px` : size,
        }}
        onClick={onClick}
      >
        {/* Placeholder for missing icon */}
        <svg 
          width={typeof size === 'number' ? size : '100%'} 
          height={typeof size === 'number' ? size : '100%'} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="#F5F5F5" opacity="0.2" />
          <path d="M12 6V18" stroke={color} strokeWidth="2" />
          <path d="M6 12H18" stroke={color} strokeWidth="2" />
        </svg>
      </div>
    );
  }
  
  // Render the actual icon component
  return <IconComponent className={className} size={size} color={color} onClick={onClick} />;
};

export default Icon;
