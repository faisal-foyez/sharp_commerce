import type { Meta, StoryObj } from '@storybook/react';
import { LinkButtonType, LinkButtonSize } from '@dsc/foundation/lib';
import LinkButton from './LinkButton';
import { ArrowRight, ArrowLeft } from '@dsc/phosphor_icons';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';

type LinkButtonTypeType = keyof typeof LinkButtonType;
type LinkButtonSizeType = keyof typeof LinkButtonSize;

const meta: Meta<typeof LinkButton> = {
  title: 'Components/Atoms/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
  argTypes: {
    type: {
      control: 'select',
      options: Object.keys(LinkButtonType),
    },
    size: {
      control: 'select',
      options: Object.keys(LinkButtonSize),
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    }
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    type: LinkButtonType.primary as LinkButtonTypeType,
    children: 'Click me',
    size: LinkButtonSize.md as LinkButtonSizeType,
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "Click me",
    size: "sm",
    disabled: false
  }
};

export const Error: Story = {
  args: {
    type: "error",
    children: "Click me",
    size: LinkButtonSize.md as LinkButtonSizeType,
    disabled: false,
  }
} satisfies Meta<typeof LinkButton>;

export const Success: Story = {
  args: {
    type: "success",
    children: "Click me",
    size: LinkButtonSize.md as LinkButtonSizeType,
    disabled: false,
  }
} satisfies Meta<typeof LinkButton>;

export const Warning: Story = {
  args: {
    type: "warning",
    children: "Click me",
    size: LinkButtonSize.md as LinkButtonSizeType,
    disabled: false,
  }
} satisfies Meta<typeof LinkButton>;

export const WithLeftIcon: Story = {
  args: {
    type: LinkButtonType.primary as LinkButtonTypeType,
    children: 'With Left Icon',
    size: LinkButtonSize.md as LinkButtonSizeType,
    LeftIcon: <ArrowLeft />
  },
};

export const WithRightIcon: Story = {
  args: {
    type: LinkButtonType.primary as LinkButtonTypeType,
    children: 'With Right Icon',
    size: LinkButtonSize.md as LinkButtonSizeType,
    RightIcon: <ArrowRight />
  },
};

export const WithBothIcons: Story = {
  args: {
    type: LinkButtonType.primary as LinkButtonTypeType,
    children: 'Both Icons',
    size: LinkButtonSize.md as LinkButtonSizeType,
    LeftIcon: <ArrowLeft />,
    RightIcon: <ArrowRight />
  },
};


const renderButtons = (args: any) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {Object.keys(LinkButtonType).map((type) => (
        <div key={type} style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
          {Object.keys(LinkButtonSize).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
              <LinkButton {...args} type={type as LinkButtonTypeType} size={size as LinkButtonSizeType}>button</LinkButton>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const ButtonSizes: Story = {
  args: {
    disabled: false,
  },
  render: renderButtons
};

export const ButtonDisabled: Story = {
  args: {
    disabled: true
  },
  render: renderButtons
};