import { User } from '@dsc/phosphor_icons'
import '@dsc/scss/lib/AvatarIcon.css'
import {AvatarIconSize, AvatarIconColor , AvatarIconBackground} from '@dsc/foundation/lib';

interface AvatarIconProps {
  size?: keyof typeof AvatarIconSize;
  color?: keyof typeof AvatarIconColor;
  background?: keyof typeof AvatarIconBackground;
  props?: any;
}

const AvatarIcon = (
  {
    size = 'medium',
    color = 'pink',
    background = 'withoutbackground',
    ...props
  }: AvatarIconProps
) => {
  const classNames = `avatar-icon ${size ? `avatar-icon-${size}` : ''} ${color ? `avatar-icon-${color}` : ''} ${background ? `avatar-icon-${background}` : ''}`;
  return (
    <div 
      className={classNames} 
      {...props}
    >
      <User />
    </div>
  )
};

export default AvatarIcon;
