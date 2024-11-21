import Avatar from "../Avatar/Avatar";
import {AvatarBgColor, AvatarSize, AvatarType, AvatarBottomStatus, AvatarShape, AvatarTopStatus} from '@dsc/foundation/lib';

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
  topStatus?: AvatarTopStatusType;
  topStatusLogo?: React.ReactNode;
  bgColor?: AvatarBgColorType;
  isBorder?: boolean;

  lastAvatarType?: AvatarTypeType;
  lastAvatarLetter?: string;
  lastAvatarLogo?: React.ReactNode;
  lastAvatarImage?: React.ReactNode;
  lastAvatarShape?: AvatarShapeType;
  lastAvatarBottomStatus?: AvatarBottomStatusType;
  lastAvatarTopStatus?: AvatarTopStatusType;
  lastAvatarTopStatusLogo?: React.ReactNode;
  lastAvatarBgColor?: AvatarBgColorType;
  lastAvatarIsBorder?: boolean;

  isShowMaxAvatar?: boolean;
  props?: any
}

interface AvatarImageGroupProps extends CommponPropTypes {
  type: 'image'
  data: {
    image?: React.ReactNode | string;
  }[];
}

interface AvatarPlaceholderGroupProps extends CommponPropTypes {
  type: 'placeholder';
  count: number;
}

interface AvatarLetterOfNameGroupProps extends CommponPropTypes {
  type: 'letterOfName';
  data: {
    letter: string;
  }[];
}

interface AvatarLogoGroupProps extends CommponPropTypes {
  type: 'logo';
  data: {
    logo: React.ReactNode;
  }[];
}

type AvatarGroupProps = 
| AvatarImageGroupProps 
| AvatarPlaceholderGroupProps 
| AvatarLetterOfNameGroupProps 
| AvatarLogoGroupProps;

const AvatarGroup = ({
  type,
  // @ts-ignore
  data,
  // @ts-ignore
  count,
  size='medium',
  shape='circle',
  bottomStatus,
  topStatus,
  topStatusLogo,
  bgColor='strongGradient01',
  isBorder=true,
  isShowMaxAvatar=false,

  lastAvatarType,
  lastAvatarLetter,
  lastAvatarLogo,
  lastAvatarImage,
  lastAvatarShape='circle',
  lastAvatarBottomStatus,
  lastAvatarTopStatus,
  lastAvatarTopStatusLogo,
  lastAvatarBgColor='strongGradient01',
  lastAvatarIsBorder=true,
  props
}: AvatarGroupProps) => { 
  let maxAvatarCount = isShowMaxAvatar ? 7 : 5;
  let content;
  const leftFactorMap: Record<string, number> = {
    tiny: -6,
    xsmall: -6,
    small: -9,
    medium: -12,
    large: -15,
    xlarge: -18,
    big: -21,
  };
  const leftFactor = leftFactorMap[size] || -15;
  const renderAvatars = (type: string, items: any[]) => {
    return items.map((item, index) => (
      <span key={index} style={{ position: 'relative', left: `${index * leftFactor}px` }}>
        <Avatar
          type={type}
          {...(type === 'placeholder' ? { size, shape, bottomStatus, topStatus, topStatusLogo, bgColor, isBorder, ...props } : 
            type === 'image' ? { image: item.image, size, shape, bottomStatus, topStatus, topStatusLogo, bgColor, isBorder, ...props } : 
            type === 'letterOfName' ? { letter: item.letter, size, shape, bottomStatus, topStatus, topStatusLogo, bgColor, isBorder, ...props } : 
            { logo: item.logo, size, shape, bottomStatus, topStatus, topStatusLogo, bgColor, isBorder, ...props })
          } 
        />
      </span>
    ));
  };

  const renderLastAvatar = (totalAvatarCount:number) => {
    let lastAvatar = null;
    if(!lastAvatarType){
      lastAvatar = totalAvatarCount > maxAvatarCount 
      ? <span style={{position: 'relative', left: `${(totalAvatarCount <=maxAvatarCount ?totalAvatarCount : maxAvatarCount) * leftFactor}px`}}>
          <Avatar type="letterOfName" letter={(totalAvatarCount-maxAvatarCount).toString() + '+' } size={size} shape={shape} bottomStatus={bottomStatus} topStatus={topStatus} topStatusLogo={topStatusLogo} bgColor={bgColor} isBorder={isBorder} {...props} />
        </span>
      : null;
    }else{
      lastAvatar= <span style={{position: 'relative', left: `${(totalAvatarCount <=maxAvatarCount ? totalAvatarCount : maxAvatarCount) * leftFactor}px`}}>
                    <Avatar type={lastAvatarType} letter={lastAvatarLetter} logo={lastAvatarLogo} image={lastAvatarImage} size={size} shape={lastAvatarShape} bottomStatus={lastAvatarBottomStatus} topStatus={lastAvatarTopStatus} topStatusLogo={lastAvatarTopStatusLogo} bgColor={lastAvatarBgColor} isBorder={lastAvatarIsBorder} {...props} />
                  </span>
    }
    return lastAvatar;
  }
    
    // else{
    //   const polyfillData = new Array( count).fill(0).map((_, index) => index);
    //   content = polyfillData.map((item, index) => (
    //     <>
    //       <span style={{position: 'relative', left: `${item * leftFactor}px`}}>
    //         <Avatar type="placeholder" size={size} shape={shape} bottomStatus={bottomStatus} topStatus={topStatus} topStatusLogo={topStatusLogo} bgColor={bgColor} isBorder={isBorder} {...props} />
    //       </span>
    //     </>
    //   ));
    // }
  // }
  if (type === 'placeholder') {
    const polyfillData = new Array(count <= maxAvatarCount ? count : maxAvatarCount).fill(0).map((_, index) => index);
    content = renderAvatars('placeholder', polyfillData);
    //@ts-ignore
    content.push(renderLastAvatar(count));
  } else if (['image', 'letterOfName', 'logo'].includes(type)) {
    const dataLength = data.length <= maxAvatarCount ? data.length : maxAvatarCount;
    content = renderAvatars(type, data.slice(0, dataLength));
    //@ts-ignore
    content.push(renderLastAvatar(data.length));
  }
  return (
    <div style={{display:'flex'}}>
      {content}
    </div>
  )
};

export default AvatarGroup;
