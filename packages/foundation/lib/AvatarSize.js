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
};
const frozenAvatarSizes = Object.freeze(AvatarSizes);
const frozenAvatarPlaceholderSize = Object.freeze(AvatarPlaceholderSize);
export { frozenAvatarSizes as AvatarSize, frozenAvatarPlaceholderSize as AvatarPlaceholderSize };
