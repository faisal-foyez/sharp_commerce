import React, { HTMLAttributes } from 'react';
import { BadgeColor, BadgeSize, BadgeStyle } from '@dsc/foundation/lib';
import '@dsc/scss/lib/Badge.css';
import { cn } from '../../utils/cn';

type BadgeColorType = keyof typeof BadgeColor;
type BadgeSizeType = keyof typeof BadgeSize;
type BadgeStyleType = keyof typeof BadgeStyle;

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children?: string;
  colorVariant?: BadgeColorType;
  sizeVariant?: BadgeSizeType;
  styleVariant?: BadgeStyleType;
  disabled?: boolean;
  isShowDot?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  badgeLogo?: React.ReactNode; 
  props?: any;
}

const Badge = ({
  children='Badge',
  colorVariant='blue', 
  sizeVariant='large', 
  styleVariant='fill', 
  disabled=false, 
  isShowDot=false, 
  leftIcon, 
  rightIcon, 
  badgeLogo,
  ...props
}: BadgeProps) => {
  const renderIcon = (icon: React.ReactNode, className: string) => 
    icon ? React.cloneElement(icon as React.ReactElement, { className, weight: 'bold' }) : null;

  const IconLeft = renderIcon(leftIcon, 'badge-left-icon');
  const IconRight = renderIcon(rightIcon, 'badge-right-icon');
  const Logo = renderIcon(badgeLogo, 'badge-logo');

  return (
    <div className={cn(
      'badge',
      `badge-${colorVariant}`,
      `badge-${styleVariant}`,
      `badge-${sizeVariant}`,
      disabled && 'badge-disabled'
    )} {...props}>
      {isShowDot && <div className='badge-dot'></div>}
      {Logo}
      {IconLeft}
      {children}
      {IconRight}
    </div>
  )
};

export default Badge;
