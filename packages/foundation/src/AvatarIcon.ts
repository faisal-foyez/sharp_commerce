const AvatarIconSize = {
  xlarge: 'xlarge',
  large: 'large',
  medium: 'medium',
  small: 'small',
  xsmall: 'xsmall'
}

const AvatarIconColor = {
  pink:'pink',
  gray: 'gray',
  green: 'green',
  yellow: 'yellow',
  red: 'red',
  fuchsia: 'fuchsia',
  purple: 'purple',
}

const AvatarIconBackground = {
  withoutbackground: 'withoutbackground',
  withbackground: 'withbackground',
}

const frozenAvatarIconSize = Object.freeze(AvatarIconSize);
const frozenAvatarIconColor = Object.freeze(AvatarIconColor);
const frozenAvatarIconBackground = Object.freeze(AvatarIconBackground);

export {
  frozenAvatarIconSize as AvatarIconSize,
  frozenAvatarIconColor as AvatarIconColor,
  frozenAvatarIconBackground as AvatarIconBackground,
}