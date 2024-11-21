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

// Add this decorator function after the meta export
const withThemeDecorator = (Story: any) => {
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <div style={{ padding: '20px', background: '#ffffff' }}>
        <h3 style={{textAlign: 'center'}}>Light Mode</h3>
        <Story />
      </div>
      <div data-theme='dark' style={{ padding: '30px', borderRadius: '10px', background: '#1C222B', color: '#ffffff' }}>
        <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Dark Mode</h3>
        <Story />
      </div>
    </div>
  );
};

type Story = StoryObj<typeof AvatarGroup>;

export const AvatarGroupSizes: Story = {
  args: {
    type: 'image',
    data: [{image: PicOne}, {image: PicTwo}, {image: PicThree}, {image: PicFour}, {image: PicFive}, {image: PicSix}, {image: PicSeven}],
    lastAvatarImage: 'ImageTest',
    lastAvatarLetter: 'FI',
    lastAvatarLogo: <Figma />,
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
        {Object.keys(AvatarSize).map((size) => (
          <div style={{ margin: '15px' }}>
            <AvatarGroup {...args} shape='circle' size={size as AvatarSizeType} />
          </div>
        ))}
      </div>
    )
  },
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
  decorators: [withThemeDecorator],
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
  decorators: [withThemeDecorator],
};
