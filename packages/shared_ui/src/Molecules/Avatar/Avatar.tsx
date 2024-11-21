import React from 'react';
import '@dsc/scss/lib/Avatar.css';
import * as AvatarIcons from '@dsc/logos/lib/avatar/index.jsx';
import { 
  AvatarType,
  AvatarShape, 
  AvatarSize, 
  AvatarTopStatus, 
  AvatarBottomStatus, 
  AvatarBgColor, 
  AvatarPlaceholderSize 
} from '@dsc/foundation/lib';

type AvatarTypeType = keyof typeof AvatarType;
type AvatarSizeType = keyof typeof AvatarSize;
type AvatarShapeType = keyof typeof AvatarShape;
type AvatarTopStatusType = keyof typeof AvatarTopStatus;
type AvatarBottomStatusType = keyof typeof AvatarBottomStatus;
type AvatarBgColorType = keyof typeof AvatarBgColor;

interface CommponPropTypes {
  size?: AvatarSizeType;
  shape?: AvatarShapeType;
  bottomStatus?: AvatarBottomStatusType;
  bgColor?: AvatarBgColorType;
  isBorder?: boolean;
  props?: any
}

interface AvatarTopStatusNotificationWithNumberType{
  topStatus?: Extract<AvatarTopStatusType, 'NotificationWithNumber'>;
  notificationNumber: number;
}

interface AvatarTopStatusLogoType{
  topStatus?: Extract<AvatarTopStatusType, 'Logo'>;
  topStatusLogo: React.ReactNode;
}

interface AvatarTopStatusAllOtherType {
  topStatus?: Exclude<AvatarTopStatusType, 'NotificationWithNumber' | 'Logo'>;
}

interface AvatarImageTypePropsWithTopStatusNotification extends CommponPropTypes, AvatarTopStatusNotificationWithNumberType{
  type: Extract<AvatarTypeType, 'image'>;
  image: React.ReactNode | string;
}

interface AvatarImageTypePropsWithTopStatusLogo extends CommponPropTypes, AvatarTopStatusLogoType{
  type: Extract<AvatarTypeType, 'image'>;
  image: React.ReactNode | string;
}

interface AvatarImageTypePropsWithTopStatusAllOther extends CommponPropTypes, AvatarTopStatusAllOtherType{
  type: Extract<AvatarTypeType, 'image'>;
  image: React.ReactNode | string;
}

interface AvatarLetterOfNameTypePropsWithTopStatusNotification extends CommponPropTypes, AvatarTopStatusNotificationWithNumberType{
  type: Extract<AvatarTypeType, 'letterOfName'>;
  letter: string;
}

interface AvatarLetterOfNameTypePropsWithTopStatusLogo extends CommponPropTypes, AvatarTopStatusLogoType{
  type: Extract<AvatarTypeType, 'letterOfName'>;
  letter: string;
}

interface AvatarLetterOfNameTypePropsWithTopStatusAllOther extends CommponPropTypes, AvatarTopStatusAllOtherType{
  type: Extract<AvatarTypeType, 'letterOfName'>;
  letter: string;
}


interface AvatarSvgLogoTypePropsWithTopStatusNotification extends CommponPropTypes, AvatarTopStatusNotificationWithNumberType{
  type: Extract<AvatarTypeType, 'logo'>;
  logo: React.ReactNode;
}

interface AvatarSvgLogoTypePropsWithTopStatusLogo extends CommponPropTypes, AvatarTopStatusLogoType{
  type: Extract<AvatarTypeType, 'logo'>;
  logo: React.ReactNode;
}

interface AvatarSvgLogoTypePropsWithTopStatusAllOther extends CommponPropTypes, AvatarTopStatusAllOtherType{
  type: Extract<AvatarTypeType, 'logo'>;
  logo: React.ReactNode;
}

interface AvatarPlaceholderTypePropsWithTopStatusNotification extends CommponPropTypes, AvatarTopStatusNotificationWithNumberType{
  type: Extract<AvatarTypeType, 'placeholder'>;
}

interface AvatarPlaceholderTypePropsWithTopStatusLogo extends CommponPropTypes, AvatarTopStatusLogoType{
  type: Extract<AvatarTypeType, 'placeholder'>;
}

interface AvatarPlaceholderTypePropsWithTopStatusAllOther extends CommponPropTypes, AvatarTopStatusAllOtherType{
  type: Extract<AvatarTypeType, 'placeholder'>;
}


type AvatarProps = 
  | AvatarImageTypePropsWithTopStatusNotification
  | AvatarImageTypePropsWithTopStatusLogo
  | AvatarImageTypePropsWithTopStatusAllOther
  | AvatarLetterOfNameTypePropsWithTopStatusNotification
  | AvatarLetterOfNameTypePropsWithTopStatusLogo
  | AvatarLetterOfNameTypePropsWithTopStatusAllOther
  | AvatarSvgLogoTypePropsWithTopStatusNotification
  | AvatarSvgLogoTypePropsWithTopStatusLogo
  | AvatarSvgLogoTypePropsWithTopStatusAllOther
  | AvatarPlaceholderTypePropsWithTopStatusNotification
  | AvatarPlaceholderTypePropsWithTopStatusLogo
  | AvatarPlaceholderTypePropsWithTopStatusAllOther;


const Avatar = (
  {
  type,
  shape="circle",
  size="xlarge",
  bgColor="strongGradient01",
  isBorder=false,
  topStatus,
  // @ts-ignore
  notificationNumber,
  // @ts-ignore
  topStatusLogo,
  bottomStatus,
  // @ts-ignore
  image,
  // @ts-ignore
  logo,
  // @ts-ignore
  letter,
  ...props
}: AvatarProps) => {
  // const bottomIconSize = AvatarBottomStatusIconSize[size as keyof typeof AvatarBottomStatusIconSize];
  const BottomStatus = bottomStatus ? React.createElement(AvatarIcons[bottomStatus as keyof typeof AvatarIcons]) : null;

  // const topIconSize = AvatarTopStatusIconSize[size as keyof typeof AvatarTopStatusIconSize];
  let TopStatus = null;
  if(topStatus === AvatarTopStatus.Logo && topStatusLogo){
    const logoIcon = topStatusLogo ? React.cloneElement(topStatusLogo as React.ReactElement) : null;
    TopStatus = <div className='avatar-top-status-logo'>
      {logoIcon}
    </div>;
  }
  else if(topStatus === AvatarTopStatus.NotificationWithNumber && notificationNumber){
    TopStatus = <div className='avatar-top-status-notification-number'>
        {notificationNumber > 99 ? '99+' : notificationNumber}
    </div>;
  }
  else{
    TopStatus = React.createElement(AvatarIcons[topStatus as keyof typeof AvatarIcons]);
  }
  
  
  let content = null;

  if(type === AvatarType.image && image){
    content = <img src={image as string} alt="avatar" />;
  }
  else if(type === AvatarType.placeholder){
    const placeholderSize = AvatarPlaceholderSize[size as keyof typeof AvatarPlaceholderSize];
    const placeholderElement = React.createElement(AvatarIcons['Placeholder'],{size:placeholderSize,width:placeholderSize,height:placeholderSize})
    content = <div>
        {placeholderElement}
    </div>
  }
  else if(type === AvatarType.logo && logo){
    content = <span className='avatar-logo'>{logo}</span>;
  }
  else if(type === AvatarType.letterOfName && letter){
    content = <span className='avatar-letter-of-name'>{letter}</span>;
  }
  
  return (
    <div className={`avatar-container avatar-${size} avatar-${shape} avatar-bg-color-${bgColor} ${isBorder ? `avatar-border-${size}` : ''}`} {...props}  >
      {topStatus && 
      <span 
      className={`avatar-top-status-icon-container avatar-top-status-icon-container-${size}`}
      >
        {TopStatus}
      </span>}
      {bottomStatus && 
      <span 
      className={`avatar-bottom-status-icon-container avatar-bottom-status-icon-container-${size}`}
      >
        {BottomStatus}
      </span>}
        {content}
    </div>
  )
};

export default Avatar;
