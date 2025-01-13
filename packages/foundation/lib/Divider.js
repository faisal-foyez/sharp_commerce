const DividerColorVariant = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    warning: 'warning',
    error: 'error',
};
const DividerSizeVariant = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
};
const DividerVariant = {
    start: 'start',
    center: 'center',
    end: 'end',
};
const frozenDividerColorVariant = Object.freeze(DividerColorVariant);
const frozenDividerSizeVariant = Object.freeze(DividerSizeVariant);
const frozenDividerVariant = Object.freeze(DividerVariant);
export { frozenDividerColorVariant as DividerColorVariant, frozenDividerSizeVariant as DividerSizeVariant, frozenDividerVariant as DividerVariant, };
