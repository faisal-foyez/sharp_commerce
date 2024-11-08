const LinkButtonSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
}

const LinkButtonIconSize = {
  'sm': 14,
  'md': 16,
  'lg': 18,
  'xl': 20,
}

const frozenLinkButtonSize = Object.freeze(LinkButtonSize);
const frozenLinkButtonIconSize = Object.freeze(LinkButtonIconSize);
export {frozenLinkButtonSize as LinkButtonSize, frozenLinkButtonIconSize as LinkButtonIconSize};
