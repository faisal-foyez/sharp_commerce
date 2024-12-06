import React from 'react';
import { BadgeColor, BadgeSize, BadgeStyle } from '@dsc/foundation/lib';
import '@dsc/scss/lib/Badge.css';
import { cn } from '../../utils/cn';

type BadgeColorType = keyof typeof BadgeColor;
type BadgeSizeType = keyof typeof BadgeSize;
type BadgeStyleType = keyof typeof BadgeStyle;

interface BadgeProps {
  children?: string;
  color?: BadgeColorType;
  size?: BadgeSizeType;
  style?: BadgeStyleType;
  disabled?: boolean;
  isShowDot?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  badgeLogo?: React.ReactNode; 
  props?: any;
}

const Badge = ({
  children='Badge',
  color='blue', 
  size='large', 
  style='fill', 
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
      `badge-${color}`,
      `badge-${style}`,
      `badge-${size}`,
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
