import React from 'react';
import '@dsc/scss/lib/LinkButton.css';
import { LinkButtonType, LinkButtonSize, LinkButtonIconSize, IconNames, IconWeight } from '@dsc/foundation/lib';
// import * as PhosphorIcons from '@dsc/phosphor_icons';
interface LinkButtonProps {
  type: keyof typeof LinkButtonType,
  size?: keyof typeof LinkButtonSize,
  LeftIcon?: React.ReactElement,
  leftIconWeight?: keyof typeof IconWeight,
  RightIcon?: React.ReactElement,
  rightIconWeight?: keyof typeof IconWeight,
  iconWeight?: keyof typeof IconWeight,
  children?: React.ReactNode,
  disabled?: boolean,
  ariaLabel?: string,
  ariaExpanded?: boolean,
  ariaControls?: string,
  ariaDescribedBy?: string,
  onClick?: () => void
}

const LinkButton:React.FC<LinkButtonProps> = ({
  type="primary",
  size="md",
  LeftIcon,
  leftIconWeight,
  RightIcon,
  rightIconWeight,
  iconWeight,
  children="button",
  disabled=false,
  ariaLabel='button',
  ariaExpanded = false,
  ariaControls = '',
  ariaDescribedBy ='',
  onClick,
}) => {
  const iconSize  = LinkButtonIconSize[size as keyof typeof LinkButtonIconSize]
  const IconLeft = LeftIcon ? React.cloneElement(LeftIcon, {size: iconSize, weight: leftIconWeight || iconWeight}) : null;
  const IconRight = RightIcon ? React.cloneElement(RightIcon, {size: iconSize, weight: rightIconWeight || iconWeight}) : null;
  // const IconLeft = LeftIcon ? React.createElement(PhosphorIcons[LeftIcon], {size: iconSize, weight: leftIconWeight || iconWeight}) : null;
  // const IconRight = RightIcon ? React.createElement(PhosphorIcons[RightIcon], {size: iconSize, weight: rightIconWeight || iconWeight}) : null;
  return (
    <button 
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5rem', width:'max-content'}} 
      className={`link-btn-${type} link-btn-${size}`}
      disabled={disabled}
      aria-label={ariaLabel} // Provides a label for the button for screen readers
      aria-expanded={ariaExpanded} // Indicates whether the button controls a collapsible element
      aria-controls={ariaControls} // Identifies the element that the button controls
      aria-describedby={ariaDescribedBy} // Provides additional descriptive information about the button
      onClick={onClick}
      type="button"
    >
      {IconLeft}
      {children}
      {IconRight}
    </button>
  );
}

export default LinkButton;
  