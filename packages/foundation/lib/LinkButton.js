const LinkButtonSize = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};
const LinkButtonIconSize = {
    'sm': 14,
    'md': 16,
    'lg': 18,
    'xl': 20,
};
const LinkButtonType = {
    primary: 'primary',
    secondary: 'secondary',
    error: 'error',
    success: 'success',
    warning: 'warning',
    light: 'light',
};
const frozenLinkButtonSize = Object.freeze(LinkButtonSize);
const frozenLinkButtonIconSize = Object.freeze(LinkButtonIconSize);
const frozenLinkButtonType = Object.freeze(LinkButtonType);
export { frozenLinkButtonSize as LinkButtonSize, frozenLinkButtonIconSize as LinkButtonIconSize, frozenLinkButtonType as LinkButtonType };
