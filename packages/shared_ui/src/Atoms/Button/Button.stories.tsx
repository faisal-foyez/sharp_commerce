import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonType, ButtonSize, ButtonStyle } from '@dsc/foundation/lib';
import { ArrowRight, ArrowLeft } from '@dsc/phosphor_icons';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';

type ButtonSizeType = keyof typeof ButtonSize;
type ButtonTypeType = keyof typeof ButtonType;
type ButtonStyleType = keyof typeof ButtonStyle;

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
  argTypes: {
    type: {
      control: 'select',
      options: Object.keys(ButtonType),
    },
    size: {
      control: 'select',
      options: Object.keys(ButtonSize),
    },
    style: {
      control: 'select',
      options: Object.keys(ButtonStyle),
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    isRounded: {
      control: 'boolean',
      defaultValue: false,
    },
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

const renderButtonGrid = (args: any) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {Object.keys(ButtonType).map((type) => (
      <div key={type}>
        <div>{type}</div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          {Object.keys(ButtonSize).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              {/* <span>{size}</span> */}
              <Button {...args} type={type as ButtonTypeType} size={size as ButtonSizeType}>
                {size}
              </Button>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const createButtonStory = (args: any) => {
  return {
    args,
    render: () => renderButtonGrid(args),
  };
};

export const Primary: Story = {
  args: {
    color: ButtonType.primary as ButtonTypeType,
    variant: ButtonStyle.fill as ButtonStyleType,
    children: 'Click me',
    size: ButtonSize.md as ButtonSizeType,
    disabled: false,
    isRounded: false,
  },
};

export const Secondary: Story = {
  args: {
    color: ButtonType.secondary as ButtonTypeType,
    variant: ButtonStyle.fill as ButtonStyleType,
    children: 'Click me',
    size: ButtonSize.md as ButtonSizeType,
    disabled: false,
    isRounded: false,
  },
};

export const Error: Story = {
  args: {
    color: ButtonType.error as ButtonTypeType,
    variant: ButtonStyle.fill as ButtonStyleType,
    children: 'Click me',
    size: ButtonSize.md as ButtonSizeType,
    disabled: false,
    isRounded: false,
  },
};

export const Success: Story = {
  args: {
    color: ButtonType.success as ButtonTypeType,
    variant: ButtonStyle.fill as ButtonStyleType,
    children: 'Click me',
    size: ButtonSize.md as ButtonSizeType,
    disabled: false,
    isRounded: false,
  },
};

export const Warning: Story = {
  args: {
    color: ButtonType.warning as ButtonTypeType,
    variant: ButtonStyle.fill as ButtonStyleType,
    children: 'Click me',
    size: ButtonSize.md as ButtonSizeType,
    disabled: false,
    isRounded: false,
  },
};

export const WithLeftIcon: Story = {
  args: {
    color: ButtonType.primary as ButtonTypeType,
    variant: ButtonStyle.fill as ButtonStyleType,
    size: ButtonSize.md as ButtonSizeType,
    children: 'With Left Icon',
  },
};

export const WithRightIcon: Story = {
  args: {
    color: ButtonType.primary as ButtonTypeType,
    variant: ButtonStyle.fill as ButtonStyleType,
    children: 'With Right Icon',
    size: ButtonSize.md as ButtonSizeType,
  },
};

export const WithBothIcons: Story = {
  args: {
    color: ButtonType.primary as ButtonTypeType,
    variant: ButtonStyle.fill as ButtonStyleType,
    children: 'Both Icons',
    size: ButtonSize.md as ButtonSizeType,  
  },
};

export const ButtonSizes: Story = createButtonStory({
  style: ButtonStyle.fill as ButtonStyleType,
  disabled: false,
  isRounded: false,
});

export const ButtonRounded: Story = createButtonStory({
  style: ButtonStyle.fill as ButtonStyleType,
  disabled: false,
  isRounded: true,
});

export const ButtonBorder: Story = createButtonStory({
  style: ButtonStyle.border as ButtonStyleType,
  disabled: false,
  isRounded: true,
});

export const ButtonLight: Story = createButtonStory({
  style: ButtonStyle.light as ButtonStyleType,
  disabled: false,
  isRounded: true,
});

export const ButtonDisabled: Story = createButtonStory({
  style: ButtonStyle.fill as ButtonStyleType,
  disabled: true,
  isRounded: true,
});