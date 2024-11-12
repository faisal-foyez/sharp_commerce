import React, {useContext, useEffect, useState} from 'react'
import '@dsc/scss/lib/SocialButton.css'
import * as logos from '@dsc/logos/lib/social_app/index.jsx'
import { SocialButtonPlatform, SocialButtonSize, SocialButtonTheme } from '@dsc/foundation/lib'
interface SocialButtonProps {
  platform: keyof typeof SocialButtonPlatform,
  size?: keyof typeof SocialButtonSize,
  theme?: keyof typeof SocialButtonTheme,
  isLabel?: boolean,
  ariaLabel?: string,
  ariaExpanded?: boolean,
  ariaControls?: string,
  ariaDescribedBy?: string,
  onClick?: () => void
}

const SocialButton = ({
  platform, 
  size='md', 
  theme='brand', 
  isLabel=false,
  ariaLabel,
  ariaExpanded=false,
  ariaControls,
  ariaDescribedBy,
  onClick
}: SocialButtonProps) =>{
  const logo = platform + theme?.charAt(0).toUpperCase() + theme?.slice(1) as keyof typeof logos;
  // alert(logo);
  const res = ariaLabel || isLabel ? `Sign in with ${platform}` : '';
  console.log(res);
  const Logo = platform ? React.createElement(logos[logo], {size: size === 'lg' ? 28 : 24}) : null;
  return (
    <button 
      style={{display: 'flex', alignItems: 'center', gap: '8px', width:'max-content'}} 
      className={`social-btn-${theme}-${platform.toLowerCase()} social-btn-${size}`}
      onClick={onClick}
      aria-label={ariaLabel || (isLabel ? `Sign in with ${platform}` : '')}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-describedby={ariaDescribedBy}
      type="button"
    >
      {Logo}
      {isLabel ? `Sign in with ${platform}` : ''}
    </button>
  )
}

export default SocialButton;