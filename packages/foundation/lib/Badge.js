const BadgeColor = {
    blue: 'blue',
    gray: 'gray',
    green: 'green',
    yellow: 'yellow',
    red: 'red',
};
const BadgeSize = {
    small: 'small',
    medium: 'medium',
    large: 'large',
};
const BadgeStyle = {
    light: 'light',
    outline: 'outline',
    fill: 'fill',
};
const frozenBadgeColor = Object.freeze(BadgeColor);
const frozenBadgeSize = Object.freeze(BadgeSize);
const frozenBadgeStyle = Object.freeze(BadgeStyle);
export { frozenBadgeColor as BadgeColor, frozenBadgeSize as BadgeSize, frozenBadgeStyle as BadgeStyle };
