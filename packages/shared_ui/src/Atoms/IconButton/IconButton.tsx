import React from 'react';
import '@dsc/scss/lib/IconButton.css'
import {IconButtonType, IconButtonStyle, IconButtonIconSize, IconButtonSize, IconWeight} from '@dsc/foundation/lib';
import {cn} from '../../utils/cn';

interface IconButtonProps {
  type: keyof typeof IconButtonType,
  style: keyof typeof IconButtonStyle,
  size?: keyof typeof IconButtonSize,
  isRounded?: boolean,
  children: React.ReactElement,
  iconWeight?: keyof typeof IconWeight,
  disabled?: boolean,
  ariaLabel?: string,
  ariaExpanded?: boolean,
  ariaControls?: string,
  ariaDescribedBy?: string,
  onClick?: () => void
}

const IconButton:React.FC<IconButtonProps> = ({
    type,
    style="fill",
    size="md",
    isRounded=false,
    children,
    iconWeight,
    disabled=false,
    ariaLabel='button',
    ariaExpanded = false,
    ariaControls = '',
    ariaDescribedBy ='',
    onClick,
  }) => { 
    const iconSize  = IconButtonIconSize[size as keyof typeof IconButtonIconSize]
    // @ts-ignore
    const Children = children ? React.cloneElement(children, {size: iconSize, weight: iconWeight}) : null;
    // const Children = icon ? React.createElement(PhosphorIcons[icon], {size: iconSize, weight: iconWeight}) : null;
    return (
      <button 
         className={cn(
          'icon-btn',
          `icon-btn-${type}${style !== 'fill' ? '-'+style : ''}`,
          `icon-btn-${size}`,
          isRounded ? 'icon-btn-rounded' : ''
        )}
        disabled={disabled}
        aria-label={ariaLabel} // Provides a label for the button for screen readers
        aria-expanded={ariaExpanded} // Indicates whether the button controls a collapsible element
        aria-controls={ariaControls} // Identifies the element that the button controls
        aria-describedby={ariaDescribedBy} // Provides additional descriptive information about the button
        onClick={onClick}
        type="button"
      >
        {Children}
      </button>
    );
  }


export default IconButton;