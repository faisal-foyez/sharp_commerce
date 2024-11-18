import {Meta, StoryObj} from '@storybook/react';
import Avatar from './Avatar';
import ImageTest from '../../../assets/image.jpg';
import {AvatarBgColor, AvatarBottomStatus, AvatarPlaceholderSize, AvatarShape, AvatarSize, AvatarTopStatus, AvatarType} from '@dsc/foundation/lib';
import {MsExcel, Figma, Microsoft} from '@dsc/logos/lib/brand_logo/index.jsx';

type AvatarTypeType = keyof typeof AvatarType;
type AvatarShapeType = keyof typeof AvatarShape;
type AvatarSizeType = keyof typeof AvatarSize;
type AvatarTopStatusType = keyof typeof AvatarTopStatus;
type AvatarBottomStatusType = keyof typeof AvatarBottomStatus;
type AvatarBgColorType = keyof typeof AvatarBgColor;
type AvatarPlaceholderSizeType = keyof typeof AvatarPlaceholderSize;

const meta: Meta<typeof Avatar> = {
  title:'Components/Molecules/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(AvatarType),
    },
    logo: {
      control: 'select',
      options: ['Figma', 'MsExcel', 'Microsoft'],
      defaultValue: 'Figma',
      mapping: {
        Figma: <Figma />,
        MsExcel: <MsExcel />,
        Microsoft: <Microsoft />,
      },
    },
    shape: {
      control: 'select',
      options: Object.values(AvatarShape),
    },
    size: {
      control: 'select',
      options: Object.values(AvatarSize),
    },
    topStatus: {
      control: 'select',
      options: Object.values(AvatarTopStatus),
    },
    topStatusLogo: {
      control: 'select',
      options: ['Figma', 'MsExcel'],
      defaultValue: 'Figma',
      mapping: {
        Figma: <Figma />,
        MsExcel: <MsExcel />,
      },
    },
    notificationNumber: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 100],
    },
    bottomStatus: {
      control: 'select',
      options: Object.values(AvatarBottomStatus),
    },
    bgColor: {
      control: 'select',
      options: Object.values(AvatarBgColor),
    },
    isBorder: {
      control: 'boolean',
      defaultValue: false,
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

type Story = StoryObj<typeof Avatar>;

export const ImageAvatar: Story = {
  args: {
    type: AvatarType.image as AvatarTypeType,
    image: ImageTest,
    logo: 'MsExcel',
    topStatusLogo: 'Figma',
    notificationNumber: 10,
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
          {Object.keys(AvatarSize).map((size) => (
            <Avatar {...args} shape='circle'  size={size as AvatarSizeType} />
          ))}
        </div>
     
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
          {Object.keys(AvatarSize).map((size) => (
            <Avatar {...args} shape='square' size={size as AvatarSizeType} />
          ))}
        </div>
      </div>
    )
  },
};

export const PlaceholderAvatar: Story = {
  args: {
    type: AvatarType.placeholder as AvatarTypeType,
    logo: 'MsExcel',
    topStatusLogo: 'Figma',
    notificationNumber: 10,
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
          {Object.keys(AvatarSize).map((size) => (
            <Avatar {...args} shape='circle' size={size as AvatarSizeType} />
          ))}
        </div>
     
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
          {Object.keys(AvatarSize).map((size) => (
            <Avatar {...args} shape='square' size={size as AvatarSizeType} />
          ))}
        </div>
      </div>
    )
  }
};

export const LetterOfNameAvatar: Story = {
  args: {
    type: AvatarType.letterOfName as AvatarTypeType,
    letter: 'FI',
    logo: 'MsExcel',
    topStatusLogo: 'Figma',
    notificationNumber: 10,
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
          {Object.keys(AvatarSize).map((size) => (
            <Avatar {...args} shape='circle' size={size as AvatarSizeType} />
          ))}
        </div>
     
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
          {Object.keys(AvatarSize).map((size) => (
            <Avatar {...args} shape='square' size={size as AvatarSizeType} />
          ))}
        </div>
      </div>
    )
  }
};

export const LogoAvatar: Story = {
  args: {
    type: AvatarType.logo as AvatarTypeType,
    logo: 'MsExcel',
    topStatusLogo: 'Figma',
    notificationNumber: 10,
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
          {Object.keys(AvatarSize).map((size) => (
            <Avatar {...args} shape='circle' size={size as AvatarSizeType} />
          ))}
        </div>
     
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
          {Object.keys(AvatarSize).map((size) => (
            <Avatar {...args} shape='square' size={size as AvatarSizeType} />
          ))}
        </div>
      </div>
    )
  }
};

export const ImageAvatarWithTopStatusAndBottomStatus: Story = {
  args: {
    type: 'image',
    image: '/assets/image.jpg',
    logo: 'MsExcel',
    topStatusLogo: 'Figma',
    notificationNumber: 10,
    topStatus: 'VerifiedBlue',
    bottomStatus: 'Active'
  },

  decorators: [withThemeDecorator],

  render: args => {
    return (
      (<div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center"
          }}>
          {Object.keys(AvatarSize).map(
            size => (<Avatar {...args} shape="circle" size={size as AvatarSizeType} />)
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center"
          }}>
          {Object.keys(AvatarSize).map(
            size => (<Avatar {...args} shape="square" size={size as AvatarSizeType} />)
          )}
        </div>
      </div>)
    );
  }
};

export const PlaceholderAvatarWithTopStatusAndBottomStatus: Story = {
  args: {
    type: "placeholder",
    logo: "MsExcel",
    topStatusLogo: "Figma",
    notificationNumber: 10,
    topStatus: "NotificationWithNumber",
    bottomStatus: "Invisible"
  },

  decorators: [withThemeDecorator],

  render: args => {
    return (
      (<div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center"
          }}>
          {Object.keys(AvatarSize).map(
            size => (<Avatar {...args} shape="circle" size={size as AvatarSizeType} />)
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center"
          }}>
          {Object.keys(AvatarSize).map(
            size => (<Avatar {...args} shape="square" size={size as AvatarSizeType} />)
          )}
        </div>
      </div>)
    );
  }
};

export const NameAvatarWithTopStatusAndBottomStatus: Story = {
  args: {
    type: "letterOfName",
    letter: "FI",
    logo: "MsExcel",
    topStatusLogo: "Figma",
    notificationNumber: 10,
    topStatus: "Favorite",
    bottomStatus: "DonotDisturb"
  },

  decorators: [withThemeDecorator],

  render: args => {
    return (
      (<div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center"
          }}>
          {Object.keys(AvatarSize).map(
            size => (<Avatar {...args} shape="circle" size={size as AvatarSizeType} />)
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center"
          }}>
          {Object.keys(AvatarSize).map(
            size => (<Avatar {...args} shape="square" size={size as AvatarSizeType} />)
          )}
        </div>
      </div>)
    );
  }
};
