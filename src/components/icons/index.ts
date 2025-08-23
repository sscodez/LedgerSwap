// Export icon name types for type safety
export type IconName = 
  | 'AccountBalanceWallet'
  | 'AccountCircle'
  | 'AccountCircle2'
  | 'AttachMoney'
  | 'BookRibbon'
  | 'BookAddress'
  | 'History2'
  | 'PokerChip'
  | 'Repeat'
  | 'Settings'
  | 'SwapVerticalCircle'
  | 'VerticalAlignBottom'
  | 'ViewComfyAlt'
  | 'Warning';

// Re-export crypto icons
export * from './crypto';

// Import all individual icon components
import AccountBalanceWalletIcon from './AccountBalanceWalletIcon';
import AccountCircleIcon from './AccountCircleIcon';
import AccountCircle2Icon from './AccountCircle2Icon';
import AttachMoneyIcon from './AttachMoneyIcon';
import BookRibbonIcon from './BookRibbonIcon';
import BookAddressIcon from './BookAddressIcon';
import History2Icon from './History2Icon';
import PokerChipIcon from './PokerChipIcon';
import RepeatIcon from './RepeatIcon';
import SettingsIcon from './SettingsIcon';
import SwapVerticalCircleIcon from './SwapVerticalCircleIcon';
import VerticalAlignBottomIcon from './VerticalAlignBottomIcon';
import ViewComfyAltIcon from './ViewComfyAltIcon';
import WarningIcon from './WarningIcon';

// Export the base Icon component
export { default as Icon } from './Icon';

// Export all individual icon components
export { default as AccountBalanceWalletIcon } from './AccountBalanceWalletIcon';
export { default as AccountCircleIcon } from './AccountCircleIcon';
export { default as AccountCircle2Icon } from './AccountCircle2Icon';
export { default as AttachMoneyIcon } from './AttachMoneyIcon';
export { default as BookRibbonIcon } from './BookRibbonIcon';
export { default as BookAddressIcon } from './BookAddressIcon';
export { default as History2Icon } from './History2Icon';
export { default as PokerChipIcon } from './PokerChipIcon';
export { default as RepeatIcon } from './RepeatIcon';
export { default as SettingsIcon } from './SettingsIcon';
export { default as SwapVerticalCircleIcon } from './SwapVerticalCircleIcon';
export { default as VerticalAlignBottomIcon } from './VerticalAlignBottomIcon';
export { default as ViewComfyAltIcon } from './ViewComfyAltIcon';
export { default as WarningIcon } from './WarningIcon';

// Export the CryptoIcon component
export { CryptoIcon } from './crypto';

// Map of icon names to their components for dynamic loading
export const iconMap = {
  'AccountBalanceWallet': AccountBalanceWalletIcon,
  'AccountCircle': AccountCircleIcon,
  'AccountCircle2': AccountCircle2Icon,
  'AttachMoney': AttachMoneyIcon,
  'BookRibbon': BookRibbonIcon,
  'BookAddress': BookAddressIcon,
  'History2': History2Icon,
  'PokerChip': PokerChipIcon,
  'Repeat': RepeatIcon,
  'Settings': SettingsIcon,
  'SwapVerticalCircle': SwapVerticalCircleIcon,
  'VerticalAlignBottom': VerticalAlignBottomIcon,
  'ViewComfyAlt': ViewComfyAltIcon,
  'Warning': WarningIcon,
};
