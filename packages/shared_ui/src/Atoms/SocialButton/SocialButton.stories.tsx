import {Meta, StoryObj} from '@storybook/react';
import SocialButton from './SocialButton';
import { ButtonSize, SocialButtonPlatform, SocialButtonSize, SocialButtonTheme } from '@dsc/foundation/lib';

type SocialButtonPlatformType = keyof typeof SocialButtonPlatform;
type SocialButtonSizeType = keyof typeof SocialButtonSize;
type SocialButtonThemeType = keyof typeof SocialButtonTheme;

const meta:Meta<typeof SocialButton> = {
  title: 'Components/Atoms/SocialButton',
  component: SocialButton,
  tags: ['autodocs'],
  argTypes: {
    platform: {
      control: 'select',
      options: Object.keys(SocialButtonPlatform),
    },
    size: {
      control: 'select',
      options: Object.keys(SocialButtonSize),
    },
    theme: {
      control: 'select',
      options: Object.keys(SocialButtonTheme),
    },
    isLabel: {
      control: 'boolean',
    }
  }
} satisfies Meta<typeof SocialButton>;

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


type Story = StoryObj<typeof meta>;

export const Apple:Story = {
  args: {
    platform: 'Apple',
    size: SocialButtonSize.md as SocialButtonSizeType,
    theme: SocialButtonTheme.brand as SocialButtonThemeType,
    isLabel: true,
  }
}

export const AppleOnlyIcon:Story = {
  args: {
    platform: 'Apple',
    size: SocialButtonSize.md as SocialButtonSizeType,
    theme: SocialButtonTheme.brand as SocialButtonThemeType,
    isLabel: true,
  }
}

export const Facebook:Story = {
  args: {
    platform: 'Facebook',
    size: SocialButtonSize.md as SocialButtonSizeType,
    theme: SocialButtonTheme.brand as SocialButtonThemeType,
    isLabel: true,
  }
}

export const Google:Story = {
  args: {
    platform: 'Google',
    size: SocialButtonSize.md as SocialButtonSizeType,
    theme: SocialButtonTheme.brand as SocialButtonThemeType,
    isLabel: true,
  }
}

export const Linkedin:Story = {
  args: {
    platform: 'Linkedin',
    size: SocialButtonSize.md as SocialButtonSizeType,
    theme: SocialButtonTheme.brand as SocialButtonThemeType,
    isLabel: true,
  }
}

export const Microsoft:Story = {
  args: {
    platform: 'Microsoft',
    size: SocialButtonSize.md as SocialButtonSizeType,
    theme: SocialButtonTheme.brand as SocialButtonThemeType,
    isLabel: true,
  }
}

export const X:Story = {
  args: {
    platform: 'X',
    size: SocialButtonSize.md as SocialButtonSizeType,
    theme: SocialButtonTheme.brand as SocialButtonThemeType,
    isLabel: true,
  }
}

export const Github:Story = {
  args: {
    platform: 'Github',
    size: SocialButtonSize.md as SocialButtonSizeType,
    theme: SocialButtonTheme.brand as SocialButtonThemeType,
    isLabel: true,
  }
}

export const SocialButtonVariants: Story = {
  args: {
    // platform: SocialButtonPlatform.Apple as SocialButtonPlatformType,
    // size: SocialButtonSize.md as SocialButtonSizeType,
    // theme: SocialButtonTheme.brand as SocialButtonThemeType,
    isLabel: true,
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <div style={{display: 'flex', flexDirection: 'row', gap: '60px', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <span style={{ alignSelf:'center', fontSize:'1.2rem', fontWeight:'bold'}}>Size : Large</span>
          {/* Apple */}
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px',}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Apple as SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='gray' />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Apple as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='brand'/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Apple as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='light'/>
              </div>
            </div>
            {/* <div style={{margin:'0 2rem'}}></div> */}
            
          </div>

          {/* Facebook */}
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px',}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Facebook as SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='gray' />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Facebook as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='brand'/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Facebook as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='light'/>
              </div>
            </div>
            {/* <div style={{margin:'0 2rem'}}></div> */}
            
          </div>

          {/* Google */}
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px',}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Google as SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='gray' />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Google as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='brand'/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Google as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='light'/>
              </div>
            </div>
            {/* <div style={{margin:'0 2rem'}}></div> */}
            
          </div>


          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px',}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Linkedin as SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='gray' />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Linkedin as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='brand'/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Linkedin as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='light'/>
              </div>
            </div>
            {/* <div style={{margin:'0 2rem'}}></div> */}
            
          </div>

          {/* Microsoft */} 
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px',}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Microsoft as SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='gray' />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Microsoft as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='brand'/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Microsoft as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='light'/>
              </div>
            </div>
            {/* <div style={{margin:'0 2rem'}}></div> */}
            
          </div>

          {/* X */}
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px',}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',}}>
                <SocialButton {...args} platform={SocialButtonPlatform.X as SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='gray' />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.X as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='brand'/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.X as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='light'/>
              </div>
            </div>
            {/* <div style={{margin:'0 2rem'}}></div> */}
            
          </div>

          {/* Github */}  
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px',}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Github as SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='gray' />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Github as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='brand'/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SocialButton {...args} platform={SocialButtonPlatform.Github as  SocialButtonPlatformType} size={SocialButtonSize.lg as SocialButtonSizeType} theme='light'/>
              </div>
            </div>
            {/* <div style={{margin:'0 2rem'}}></div> */}
            
          </div>
        </div>



        <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
        <span style={{ alignSelf:'center', fontSize:'1.2rem', fontWeight:'bold'}}>Size : Medium</span>

          {/* Apple */}
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Apple as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='gray'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Apple as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='brand'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Apple as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='light'/>
            </div>
          </div>

          {/* Facebook */}
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Facebook as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='gray'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Facebook as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='brand'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Facebook as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='light'/>
            </div>
          </div>

          {/* Google */}
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Google as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='gray'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Google as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='brand'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Google as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='light'/>
            </div>
          </div>

          {/* Linkedin */}
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Linkedin as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='gray'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Linkedin as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='brand'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Linkedin as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='light'/>
            </div>
          </div>

          {/* Microsoft */}
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Microsoft as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='gray'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Microsoft as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='brand'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Microsoft as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='light'/>
            </div>
          </div>

          {/* X */}
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.X as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='gray'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.X as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='brand'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.X as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='light'/>
            </div>
          </div>

          {/* Github */}
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Github as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='gray'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Github as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='brand'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
              <SocialButton {...args} platform={SocialButtonPlatform.Github as  SocialButtonPlatformType} size={SocialButtonSize.md as SocialButtonSizeType} theme='light'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}