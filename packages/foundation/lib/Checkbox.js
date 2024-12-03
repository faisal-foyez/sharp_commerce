const CheckboxVariant = {
    default: 'default',
    square: 'square',
    circle: 'circle',
};
const CheckboxColor = {
    primary: 'primary',
    secondary: 'secondary',
    warning: 'warning',
    error: 'error',
    success: 'success',
};
const CheckboxSize = {
    small: 'small',
    medium: 'medium',
    large: 'large',
};
const frozenCheckboxVariant = Object.freeze(CheckboxVariant);
const frozenCheckboxColor = Object.freeze(CheckboxColor);
const frozenCheckboxSize = Object.freeze(CheckboxSize);
export { frozenCheckboxVariant as CheckboxVariant, frozenCheckboxColor as CheckboxColor, frozenCheckboxSize as CheckboxSize };
