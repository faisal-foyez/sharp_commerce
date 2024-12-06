import {Meta, StoryObj} from '@storybook/react';
import AvatarGroup from './AvatarGroup';
import ImageTest from '../../../assets/image.jpg';
import PicOne from '../../../assets/pic_one.jpg';
import PicTwo from '../../../assets/pic_two.jpg';
import PicThree from '../../../assets/pic_three.jpg';
import PicFour from '../../../assets/pic_four.jpg';
import PicFive from '../../../assets/pic_five.jpg';
import PicSix from '../../../assets/pic_six.jpg';
import PicSeven from '../../../assets/pic_seven.jpg';
import PicEight from '../../../assets/pic_eight.jpg';
import {AvatarBgColor, AvatarBottomStatus, AvatarPlaceholderSize, AvatarShape, AvatarSize, AvatarTopStatus, AvatarType} from '@dsc/foundation/lib';
import {MsExcel, Figma, Microsoft} from '@dsc/logos/lib/brand_logo/index.jsx';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';

type AvatarTypeType = keyof typeof AvatarType;
type AvatarShapeType = keyof typeof AvatarShape;
type AvatarSizeType = keyof typeof AvatarSize;
type AvatarTopStatusType = keyof typeof AvatarTopStatus;
type AvatarBottomStatusType = keyof typeof AvatarBottomStatus;
type AvatarBgColorType = keyof typeof AvatarBgColor;
type AvatarPlaceholderSizeType = keyof typeof AvatarPlaceholderSize;

const meta: Meta<typeof AvatarGroup> = {
  title:'Components/Molecules/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
  argTypes: {
    type: {
      control: 'select',
      options: ['image'],
    },
    size: {
      control: 'select',
      options: Object.keys(AvatarSize),
    },
    isShowMaxAvatar: {
      control: 'boolean',
      defaultValue: false,
    },
    lastAvatarType: {
      control: 'select',
      options: ['image', 'placeholder', 'letterOfName', 'logo'],
    },
    lastAvatarImage: {
      control: 'select',
      options: ['ImageTest'],
      mapping: {
        ImageTest: ImageTest,
      },
    },
    lastAvatarLetter: {
      control: 'text',
      options: ['FI'],
    },  
    lastAvatarLogo: {
      control: 'select',
      options: ['Figma', 'MsExcel', 'Microsoft'],
      mapping: {
        Figma: <Figma />,
        MsExcel: <MsExcel />,
        Microsoft: <Microsoft />,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

const renderAvatarGroup = (args: any) => (
  <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
    {Object.keys(AvatarSize).map((size) => (
      <div style={{ margin: '15px' }} key={size}>
        <AvatarGroup {...args} shape='circle' size={size as AvatarSizeType} />
      </div>
    ))}
  </div>
);

export const AvatarGroupSizes: Story = {
  args: {
    type: 'image',
    data: [{image: PicOne}, {image: PicTwo}, {image: PicThree}, {image: PicFour}, {image: PicFive}, {image: PicSix}, {image: PicSeven}],
    lastAvatarImage: 'ImageTest',
    lastAvatarLetter: 'FI',
    lastAvatarLogo: <Figma />,
  },
  render: renderAvatarGroup,
};

export const MaxNumberAvatar: Story = {
  args: {
    type: 'image',
    data: [{image: PicOne}, {image: PicTwo}, {image: PicThree}, {image: PicFour}, {image: PicFive}, {image: PicSix}, {image: PicSeven}, {image: PicEight}],
    isShowMaxAvatar: true,
    size: 'big',
    lastAvatarLetter: 'FI',
    lastAvatarLogo: 'Figma',
    lastAvatarImage: 'ImageTest',
  },
  render: renderAvatarGroup,
};

export const LastAvatarControl: Story = {
  args: {
    type: 'image',
    data: [{image: PicOne}, {image: PicTwo}, {image: PicThree}, {image: PicFour}],
    isShowMaxAvatar: false,
    lastAvatarType: 'placeholder',
    size: 'big',
    lastAvatarLetter: 'FI',
    lastAvatarLogo: 'Figma',
    lastAvatarImage: 'ImageTest',
  },
  render: renderAvatarGroup,
};
