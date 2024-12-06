import React from 'react';
import '@dsc/scss/lib/LinkButton.css';
import { LinkButtonType, LinkButtonSize, LinkButtonIconSize, IconWeight } from '@dsc/foundation/lib';
import { cn } from '../../utils/cn';

interface LinkButtonProps {
  type: keyof typeof LinkButtonType;
  size?: keyof typeof LinkButtonSize;
  LeftIcon?: React.ReactElement;
  leftIconWeight?: keyof typeof IconWeight;
  RightIcon?: React.ReactElement;
  rightIconWeight?: keyof typeof IconWeight;
  iconWeight?: keyof typeof IconWeight;
  children?: React.ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  ariaDescribedBy?: string;
  onClick?: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  type = "primary",
  size = "md",
  LeftIcon,
  leftIconWeight,
  RightIcon,
  rightIconWeight,
  iconWeight,
  children = "button",
  disabled = false,
  ariaLabel = 'button',
  ariaExpanded = false,
  ariaControls = '',
  ariaDescribedBy = '',
  onClick,
}) => {
  const iconSize = LinkButtonIconSize[size as keyof typeof LinkButtonIconSize];

  const renderIcon = (Icon: React.ReactElement | undefined, weight: keyof typeof IconWeight | undefined) => 
    Icon ? React.cloneElement(Icon, { size: iconSize, weight: weight || iconWeight }) : null;

  return (
    <button
      className={cn(
        'link-btn',
        `link-btn-${type}`,
        `link-btn-${size}`
      )}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-describedby={ariaDescribedBy}
      onClick={onClick}
      type="button"
    >
      {renderIcon(LeftIcon, leftIconWeight)}
      {children}
      {renderIcon(RightIcon, rightIconWeight)}
    </button>
  );
}

export default LinkButton;