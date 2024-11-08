import React from 'react';
import '@dsc/scss/lib/LinkButton.css';
import { LinkButtonType, LinkButtonSize, LinkButtonIconSize } from '@dsc/foundation/lib';
interface LinkButtonProps {
  type: keyof typeof LinkButtonType,
  size?: keyof typeof LinkButtonSize,
  LeftIcon?: React.ReactNode,
  RightIcon?: React.ReactNode,
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
  RightIcon,
  children="button",
  disabled=false,
  ariaLabel='button',
  ariaExpanded = false,
  ariaControls = '',
  ariaDescribedBy ='',
  onClick,
}) => {
  const iconSize  = LinkButtonIconSize[size as keyof typeof LinkButtonIconSize]
  const IconLeft = LeftIcon ? React.cloneElement(LeftIcon as React.ReactElement, {size: iconSize}) : null;
  const IconRight = RightIcon ? React.cloneElement(RightIcon as React.ReactElement, {size: iconSize}) : null;
  return (
    <button 
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5rem'}} 
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
  