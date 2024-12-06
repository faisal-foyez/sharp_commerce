import React from 'react';
import '@dsc/scss/lib/SocialButton.css';
import * as logos from '@dsc/logos/lib/social_app/index.jsx';
import { SocialButtonPlatform, SocialButtonSize, SocialButtonTheme } from '@dsc/foundation/lib';
import { cn } from '../../utils/cn';

interface SocialButtonProps {
  platform: keyof typeof SocialButtonPlatform;
  size?: keyof typeof SocialButtonSize;
  theme?: keyof typeof SocialButtonTheme;
  isLabel?: boolean;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  ariaDescribedBy?: string;
  onClick?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  platform,
  size = 'md',
  theme = 'brand',
  isLabel = false,
  ariaLabel,
  ariaExpanded = false,
  ariaControls,
  ariaDescribedBy,
  onClick,
}) => {
  const logoKey = `${platform}${theme.charAt(0).toUpperCase()}${theme.slice(1)}` as keyof typeof logos;
  const logoSize = size === 'lg' ? 28 : 24;
  const logo = platform ? React.createElement(logos[logoKey], { size: logoSize }) : null;
  const label = isLabel ? `Sign in with ${platform}` : '';

  return (
    <button
      className={cn(
        'social-btn',
        `social-btn-${theme}-${platform.toLowerCase()}`,
        `social-btn-${size}`
      )}
      onClick={onClick}
      aria-label={ariaLabel || label}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-describedby={ariaDescribedBy}
      type="button"
      style={{ display: 'flex', alignItems: 'center', gap: '8px', width: 'max-content' }}
    >
      {logo}
      {label}
    </button>
  );
};

export default SocialButton;