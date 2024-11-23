import React from 'react';
import { BadgeColor, BadgeSize, BadgeStyle } from '@dsc/foundation/lib';
import '@dsc/scss/lib/Badge.css';

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
  const IconLeft = leftIcon ? React.cloneElement(leftIcon as React.ReactElement, {className: 'badge-left-icon', weight: 'bold'}) : null;
  const IconRight = rightIcon ? React.cloneElement(rightIcon as React.ReactElement, {className: 'badge-right-icon', weight: 'bold'}) : null;
  const Logo = badgeLogo ? React.cloneElement(badgeLogo as React.ReactElement, {className: 'badge-logo'}) : null;
  return (
    <div className={`badge badge-${color} badge-${style} badge-${size} ${disabled ? 'badge-disabled' : ''}`} {...props}>
      {isShowDot && <div className='badge-dot'></div>}
      {Logo}
      {IconLeft}
      {children}
      {IconRight}
    </div>
  )
};

export default Badge;
