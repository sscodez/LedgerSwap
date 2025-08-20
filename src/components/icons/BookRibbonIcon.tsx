import React from 'react';
import { IconProps } from './Icon';
import Image from 'next/image';

const BookRibbonIcon: React.FC<Omit<IconProps, 'name'>> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  onClick
}) => {
  return (
    <Image src={"/assests/icons/book_5.svg"} className='text-[#90A1B9]' color={'#90A1B9'} alt="BookRibbon" width={20} height={20} />
  );
};

export default BookRibbonIcon;
