const InputType = {
  normal: 'normal',
  tag: 'tag',
}

const InputStyle = {
  round: 'round',
  fill: 'fill',
}

const InputSize = {
  large: 'large',
  medium: 'medium',
  small: 'small',
}

const frozenInputType = Object.freeze(InputType);
const frozenInputStyle = Object.freeze(InputStyle);
const frozenInputSize = Object.freeze(InputSize);

export {
  frozenInputType as InputType,
  frozenInputStyle as InputStyle,
  frozenInputSize as InputSize,
};
