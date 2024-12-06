import {Meta, StoryObj} from '@storybook/react';
import AvatarIcon from './AvatarIcon';
import ImageTest from '../../../assets/image.jpg';
import {AvatarIconSize, AvatarIconColor, AvatarIconBackground} from '@dsc/foundation/lib';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';
  
type AvatarIconSizeType = keyof typeof AvatarIconSize;
type AvatarIconColorType = keyof typeof AvatarIconColor;
type AvatarIconBackgroundType = keyof typeof AvatarIconBackground;

const meta: Meta<typeof AvatarIcon> = {
  title:'Components/Molecules/AvatarIcon',
  component: AvatarIcon,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(AvatarIconSize),
    },
    color: {
      control: 'select',
      options: Object.values(AvatarIconColor),
    },
    background: {
      control: 'select',
      options: Object.values(AvatarIconBackground),
    }
  }
};

export default meta;

type Story = StoryObj<typeof AvatarIcon>;

// Default AvatarIcon
export const DefaultAvatarIcon: Story = {
  args: {
    size: AvatarIconSize.medium as AvatarIconSizeType,
    color: AvatarIconColor.pink as AvatarIconColorType,
    background: AvatarIconBackground.withbackground as AvatarIconBackgroundType,
  },
  
};

// All AvatarIcon
export const AllAvatarIcon: Story = {
  args: {

  },
  render: (args) => {
    return (
      Object.keys(AvatarIconSize).map((size) => (
        <div key={size} style={{display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', }}>
          
          <div style={{marginTop: '40px'}}></div>
          {
            Object.keys(AvatarIconBackground).map((background) => (
              <div style={{display: 'flex', flexDirection: 'row', gap: '60px', justifyContent: 'space-around'}}>
              {
                Object.keys(AvatarIconColor).reverse().map((color) => (
                    <AvatarIcon {...args} size={size as AvatarIconSizeType} color={color as AvatarIconColorType} background={background as AvatarIconBackgroundType} />
                ))
              }
              </div>

            ))
          }
        </div>
      ))
    )
  },
};

