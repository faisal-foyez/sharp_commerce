const IconButtonSizes = {
  '2xsm': '2xsm',
  'xsm': 'xsm',
  'sm': 'sm',
  'md': 'md',
  'lg': 'lg',
  'xl': 'xl',
  '2xl': '2xl',
  '3xl': '3xl',
}

const IconButtonIconSizes = {
  '2xsm': 16,
  'xsm': 20,
  'sm': 20,
  'md': 22,
  'lg': 24,
  'xl': 28,
  '2xl': 30,
  '3xl': 32,
}
const frozenIconButtonSizes = Object.freeze(IconButtonSizes);
const frozenIconButtonIconSizes = Object.freeze(IconButtonIconSizes);
export {frozenIconButtonSizes as IconButtonSize, frozenIconButtonIconSizes as IconButtonIconSize};
