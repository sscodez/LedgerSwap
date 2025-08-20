// Export icon name types for type safety
export type IconName = 
  | 'AccountBalanceWallet'
  | 'AccountCircle'
  | 'BookRibbon'
  | 'History2'
  | 'Repeat'
  | 'VerticalAlignBottom'
  | 'ViewComfyAlt';

// Re-export crypto icons
export * from './crypto';

// Import all individual icon components
import AccountBalanceWalletIcon from './AccountBalanceWalletIcon';
import AccountCircleIcon from './AccountCircleIcon';
import BookRibbonIcon from './BookRibbonIcon';
import History2Icon from './History2Icon';
import RepeatIcon from './RepeatIcon';
import VerticalAlignBottomIcon from './VerticalAlignBottomIcon';
import ViewComfyAltIcon from './ViewComfyAltIcon';

// Export the base Icon component
export { default as Icon } from './Icon';

// Export all individual icon components
export { default as AccountBalanceWalletIcon } from './AccountBalanceWalletIcon';
export { default as AccountCircleIcon } from './AccountCircleIcon';
export { default as BookRibbonIcon } from './BookRibbonIcon';
export { default as History2Icon } from './History2Icon';
export { default as RepeatIcon } from './RepeatIcon';
export { default as VerticalAlignBottomIcon } from './VerticalAlignBottomIcon';
export { default as ViewComfyAltIcon } from './ViewComfyAltIcon';

// Export the CryptoIcon component
export { CryptoIcon } from './crypto';

// Map of icon names to their components for dynamic loading
export const iconMap = {
  'AccountBalanceWallet': AccountBalanceWalletIcon,
  'AccountCircle': AccountCircleIcon,
  'BookRibbon': BookRibbonIcon,
  'History2': History2Icon,
  'Repeat': RepeatIcon,
  'VerticalAlignBottom': VerticalAlignBottomIcon,
  'ViewComfyAlt': ViewComfyAltIcon,
};
