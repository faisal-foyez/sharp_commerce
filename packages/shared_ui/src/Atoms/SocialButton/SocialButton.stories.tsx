import {Meta, StoryObj} from '@storybook/react';
import SocialButton from './SocialButton';
import { SocialButtonPlatform, SocialButtonSize, SocialButtonTheme } from '@dsc/foundation/lib';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';

type SocialButtonPlatformType = keyof typeof SocialButtonPlatform;
type SocialButtonSizeType = keyof typeof SocialButtonSize;
type SocialButtonThemeType = keyof typeof SocialButtonTheme;

const meta:Meta<typeof SocialButton> = {
  title: 'Components/Atoms/SocialButton',
  component: SocialButton,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
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
    isLabel: true,
  },
  render: (args) => {
    const platforms = Object.keys(SocialButtonPlatform) as Array<keyof typeof SocialButtonPlatform>;
    const sizes = Object.keys(SocialButtonSize) as Array<keyof typeof SocialButtonSize>;
    const themes = Object.keys(SocialButtonTheme) as Array<keyof typeof SocialButtonTheme>;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '1500px' }}>
        {platforms.map((platform) => (
          <div key={platform} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: '0px', }}>
            {sizes.map((size) => (
              <div key={size} style={{ display: 'flex', flexDirection: 'row', gap: '10px', width: '50%' }}>
                {themes.map((theme) => (
                  <SocialButton
                    key={`${platform}-${theme}-${size}`}
                    {...args}
                    platform={platform as SocialButtonPlatformType}
                    size={size as SocialButtonSizeType}
                    theme={theme}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      );
  }
}