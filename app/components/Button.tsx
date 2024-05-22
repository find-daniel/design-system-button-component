import React from 'react';
import { RiStarLine } from '@remixicon/react';

type ButtonIcon = 'left' | 'right' | 'both' | 'none';
type ButtonSize = 'md' | 'lg' | 'xl' | '2xl';
type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'link-color' | 'link-gray' | 'destructive';

type Props = {
  size: ButtonSize;
  type: ButtonType;
  icon?: ButtonIcon;
  iconOnly?: boolean;
  text: string;
};

const buttonSizeClasses: Record<ButtonSize, string> = {
  md: 'text-sm gap-1 px-4 py-2.5',
  lg: 'text-base space-x-2 px-[18px] py-2.5',
  xl: 'text-base space-x-2 px-[22px] py-3',
  '2xl': 'text-lg gap-2.5 px-[26px] py-[18px]',
};

const buttonTypeClasses: Record<ButtonType, string> = {
  primary: 'bg-indigo-700 text-white hover:bg-indigo-800 focus-visible:bg-indigo-800 shadow disabled:bg-neutral-100',
  // TODO: setup secondary styles
  secondary: ' disabled:bg-neutral-100',
  tertiary: '',
  'link-color': '',
  'link-gray': '',
  destructive: '',
};

const sharedButtonClasses =
  'rounded focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12] disabled:border-none disabled:text-neutral-400 disabled:shadow-none';

const sharedLinkClasses = '';

export default function Button({ size, type, icon = 'none', iconOnly = false, text }: Props) {
  return (
    <button
      className={`${buttonSizeClasses[size]} ${buttonTypeClasses[type]} inline-flex items-center ${type !== 'link-color' || 'link-gray' ? sharedButtonClasses : sharedLinkClasses} font-medium`}>
      {iconOnly ? (
        <RiStarLine size={size === '2xl' ? 24 : 20} />
      ) : (
        <>
          {(icon === 'left' || icon === 'both') && <RiStarLine size={size === '2xl' ? 24 : 20} />}
          <span>{text}</span>
          {(icon === 'right' || icon === 'both') && <RiStarLine size={size === '2xl' ? 24 : 20} />}
        </>
      )}
    </button>
  );
}
