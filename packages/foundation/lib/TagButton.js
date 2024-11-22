const size = {
    medium: 'medium',
    small: 'small',
};
const state = {
    default: 'default',
    disabled: 'disabled',
    error: 'error'
};
const frozenSize = Object.freeze(size);
const frozenState = Object.freeze(state);
export { frozenSize as TagButtonSize, frozenState as TagButtonState };
