import React from 'react';
import '@dsc/scss/lib/IconButton.css'
import {IconButtonType, IconButtonStyle, IconButtonIconSize, IconButtonSize, IconNames, IconWeight} from '@dsc/foundation/lib';
// import { Icon } from '@dsc/phosphor_icons';
import * as PhosphorIcons from '@dsc/phosphor_icons';

interface IconButtonProps {
  type: keyof typeof IconButtonType,
  style: keyof typeof IconButtonStyle,
  size?: keyof typeof IconButtonSize,
  isRounded?: boolean,
  icon: keyof typeof IconNames,
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
    icon,
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
    // const Children = children ? React.cloneElement(children as Icon, {size: iconSize}) : null;
    const Children = icon ? React.createElement(PhosphorIcons[icon], {size: iconSize, weight: iconWeight}) : null;
    return (
      <button 
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5rem'}} 
        className={`icon-btn-${type}${style !== 'fill' ? '-'+style : ''} icon-btn-${size} ${isRounded ? 'icon-btn-rounded' : ''}`}
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