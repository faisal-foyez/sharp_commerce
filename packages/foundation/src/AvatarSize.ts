const AvatarSizes = {
  'tiny': 'tiny',
  'xsmall': 'xsmall',
  'small': 'small',
  'medium': 'medium',
  'large': 'large',
  'xlarge': 'xlarge',
  'big': 'big',
};


const AvatarPlaceholderSize = {
  'tiny': 18,
  'xsmall': 22,
  'small': 30,
  'medium': 36,
  'large': 51,
  'xlarge': 58,
  'big': 88,
}

// const AvatarTopStatusIconSize = {
//   'tiny': 14,
//   'xsmall': 14,
//   'small': 14,
//   'medium': 18,
//   'large': 22,
//   'xlarge': 26,
//   'big': 34,
// }


// const AvatarBottomStatusIconSize = {
//   'tiny': 10,
//   'xsmall': 10,
//   'small': 10,
//   'medium': 12,
//   'large': 14,
//   'xlarge': 16,
//   'big': 22,
// }

const frozenAvatarSizes = Object.freeze(AvatarSizes);
const frozenAvatarPlaceholderSize = Object.freeze(AvatarPlaceholderSize);
// const frozenAvatarTopStatusIconSize = Object.freeze(AvatarTopStatusIconSize);
// const frozenAvatarBottomStatusIconSize = Object.freeze(AvatarBottomStatusIconSize);

export { frozenAvatarSizes as AvatarSize, frozenAvatarPlaceholderSize as AvatarPlaceholderSize };
