import React from 'react';
import '@dsc/scss/lib/Button.css'
import {ButtonIconSize, ButtonSize, ButtonType, ButtonStyle, IconNames, IconWeight} from '@dsc/foundation/lib';
import * as PhosphorIcons from '@dsc/phosphor_icons'; 

interface ButtonProps { 
  type: keyof typeof ButtonType,
  style: keyof typeof ButtonStyle,
  size?: keyof typeof ButtonSize,
  LeftIcon?: keyof typeof IconNames,
  leftIconWeight?: keyof typeof IconWeight,
  RightIcon?: keyof typeof IconNames,
  rightIconWeight?: keyof typeof IconWeight,
  iconWeight?: keyof typeof IconWeight,
  isRounded?: boolean,
  children?: React.ReactNode,
  disabled?: boolean,
  ariaLabel?: string,
  ariaExpanded?: boolean,
  ariaControls?: string,
  ariaDescribedBy?: string,
  onClick?: () => void
}

const Button:React.FC<ButtonProps> = ({
    type,
    style="fill",
    size="md",
    LeftIcon,
    leftIconWeight,
    RightIcon,
    rightIconWeight,
    iconWeight,
    isRounded=false,
    children,
    disabled=false,
    ariaLabel='button',
    ariaExpanded = false,
    ariaControls = '',
    ariaDescribedBy ='',
    onClick,
  }) => {
    const iconSize  = ButtonIconSize[size as keyof typeof ButtonIconSize]
    const IconLeft = LeftIcon ? React.createElement(PhosphorIcons[LeftIcon], {size: iconSize, weight: leftIconWeight || iconWeight}) : null;
    const IconRight = RightIcon ? React.createElement(PhosphorIcons[RightIcon], {size: iconSize, weight: rightIconWeight || iconWeight}) : null;
    return (
      <button 
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5rem'}} 
        className={`btn-${type}${style !== 'fill' ? '-'+style : ''} btn-${size} ${isRounded ? 'btn-rounded' : ''}`}
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


export default Button;