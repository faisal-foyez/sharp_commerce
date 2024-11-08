import React from 'react';
import '@dsc/scss/lib/Button.css'
import {ButtonIconSize, ButtonSize, ButtonType, ButtonStyle} from '@dsc/foundation/lib';
// import ButtonIconSize from '@dsc/foundation/lib/ButtonIconSize.js';

interface ButtonProps {
  type: keyof typeof ButtonType,
  style: keyof typeof ButtonStyle,
  size?: keyof typeof ButtonSize,
  LeftIcon?: React.ReactNode,
  RightIcon?: React.ReactNode,
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
    RightIcon,
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
    const IconLeft = LeftIcon ? React.cloneElement(LeftIcon as React.ReactElement, {size: iconSize}) : null;
    const IconRight = RightIcon ? React.cloneElement(RightIcon as React.ReactElement, {size: iconSize}) : null;
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