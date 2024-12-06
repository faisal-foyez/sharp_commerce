import React from 'react';
import '@dsc/scss/lib/Button.css';
import { ButtonIconSize, ButtonSize, ButtonType, ButtonStyle, IconWeight } from '@dsc/foundation/lib';
import { cn } from '../../utils/cn';
interface ButtonProps {
  type: keyof typeof ButtonType;
  style?: keyof typeof ButtonStyle; // Default value will be set in destructuring
  size?: keyof typeof ButtonSize; // Default value will be set in destructuring
  LeftIcon?: React.ReactElement;
  leftIconWeight?: keyof typeof IconWeight;
  RightIcon?: React.ReactElement;
  rightIconWeight?: keyof typeof IconWeight;
  iconWeight?: keyof typeof IconWeight;
  isRounded?: boolean; // Default value will be set in destructuring
  children?: React.ReactNode;
  disabled?: boolean; // Default value will be set in destructuring
  ariaLabel?: string; // Default value will be set in destructuring
  ariaExpanded?: boolean; // Default value will be set in destructuring
  ariaControls?: string; // Default value will be set in destructuring
  ariaDescribedBy?: string; // Default value will be set in destructuring
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  style = "fill",
  size = "md",
  LeftIcon,
  leftIconWeight,
  RightIcon,
  rightIconWeight,
  iconWeight,
  isRounded = false,
  children,
  disabled = false,
  ariaLabel = 'button',
  ariaExpanded = false,
  ariaControls = '',
  ariaDescribedBy = '',
  onClick,
}) => {
  const iconSize = ButtonIconSize[size as keyof typeof ButtonIconSize];

  const renderIcon = (icon: React.ReactElement | undefined, weight: keyof typeof IconWeight | undefined) => {
    return icon ? React.cloneElement(icon, { size: iconSize, weight: weight || iconWeight }) : null;
  };

  const IconLeft = renderIcon(LeftIcon, leftIconWeight);
  const IconRight = renderIcon(RightIcon, rightIconWeight);

  return (
    <button
      className={cn(
        `btn-${type}-${style}`,
        `btn-${size}`,
        isRounded && 'btn-rounded'
      )}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-describedby={ariaDescribedBy}
      onClick={onClick}
      type="button"
    >
      {IconLeft}
      {children}
      {IconRight}
    </button>
  );
};

export default Button;