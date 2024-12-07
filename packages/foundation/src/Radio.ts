const RadioVariant = {
  rounded: 'rounded',
  square: 'square',
  circle: 'circle',
};

const RadioColor = {
  primary: 'primary',
  secondary: 'secondary',
  warning: 'warning',
  error: 'error',
  success: 'success',
};

const RadioSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const frozenRadioVariant = Object.freeze(RadioVariant);
const frozenRadioColor = Object.freeze(RadioColor);
const frozenRadioSize = Object.freeze(RadioSize);

export {
  frozenRadioVariant as RadioVariant,
  frozenRadioColor as RadioColor,
  frozenRadioSize as RadioSize
};
