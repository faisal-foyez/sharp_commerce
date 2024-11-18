const ButtonSizes = {
    '2xsm': '2xsm',
    'xsm': 'xsm',
    'sm': 'sm',
    'md': 'md',
    'lg': 'lg',
    'xl': 'xl',
    '2xl': '2xl',
};
const ButtonIconSize = {
    '2xsm': 10,
    'xsm': 12,
    'sm': 14,
    'md': 16,
    'lg': 18,
    'xl': 20,
    '2xl': 24,
};
const ButtonStyle = {
    'fill': 'fill',
    'border': 'border',
    'light': 'light'
};
const ButtonType = {
    primary: 'primary',
    secondary: 'secondary',
    error: 'error',
    success: 'success',
    warning: 'warning',
};
const frozenButtonSizes = Object.freeze(ButtonSizes);
const frozenButtonIconSize = Object.freeze(ButtonIconSize);
const frozenButtonStyle = Object.freeze(ButtonStyle);
const frozenButtonType = Object.freeze(ButtonType);
export { frozenButtonSizes as ButtonSize, frozenButtonIconSize as ButtonIconSize, frozenButtonStyle as ButtonStyle, frozenButtonType as ButtonType };
