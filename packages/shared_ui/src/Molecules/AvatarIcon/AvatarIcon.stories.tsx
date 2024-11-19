import {Meta, StoryObj} from '@storybook/react';
import AvatarIcon from './AvatarIcon';
import ImageTest from '../../../assets/image.jpg';
import {AvatarIconSize, AvatarIconColor, AvatarIconBackground} from '@dsc/foundation/lib';
  
type AvatarIconSizeType = keyof typeof AvatarIconSize;
type AvatarIconColorType = keyof typeof AvatarIconColor;
type AvatarIconBackgroundType = keyof typeof AvatarIconBackground;

const meta: Meta<typeof AvatarIcon> = {
  title:'Components/Molecules/AvatarIcon',
  component: AvatarIcon,
  tags: ['autodocs'],
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

// Add this decorator function after the meta export
const withThemeDecorator = (Story: any) => {
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <div style={{ padding: '20px', background: '#ffffff' }}>
        <h3 style={{textAlign: 'center'}}>Light Mode</h3>
        <Story />
      </div>
      <div data-theme='dark' style={{ padding: '20px', borderRadius: '10px', background: '#1C222B', color: '#ffffff' }}>
        <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Dark Mode</h3>
        <Story />
      </div>
    </div>
  );
};

type Story = StoryObj<typeof AvatarIcon>;

// Default AvatarIcon
export const DefaultAvatarIcon: Story = {
  args: {
    size: AvatarIconSize.medium as AvatarIconSizeType,
    color: AvatarIconColor.pink as AvatarIconColorType,
    background: AvatarIconBackground.withbackground as AvatarIconBackgroundType,
  },
  decorators: [withThemeDecorator],
};

// All AvatarIcon
export const AllAvatarIcon: Story = {
  args: {

  },
  decorators: [withThemeDecorator],
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

