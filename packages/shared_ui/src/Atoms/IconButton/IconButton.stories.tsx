import { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";
import { IconButtonType, IconButtonStyle, IconButtonSize } from '@dsc/foundation/lib';
import { ArrowRight } from '@dsc/phosphor_icons';
import { withThemeDecorator } from "../../utils/storybook/withThemeDecorator";

type IconButtonTypeType = keyof typeof IconButtonType;
type IconButtonStyleType = keyof typeof IconButtonStyle;
type IconButtonSizeType = keyof typeof IconButtonSize;

const meta: Meta<typeof IconButton> = {
  title: 'Components/Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
  argTypes: {
    type: { control: 'select', options: Object.keys(IconButtonType) },
    style: { control: 'select', options: Object.keys(IconButtonStyle) },
    size: { control: 'select', options: Object.keys(IconButtonSize) },
    disabled: { control: 'boolean', defaultValue: false },
    isRounded: { control: 'boolean', defaultValue: false },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

const renderIconButtonGrid = (args: any) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {Object.keys(IconButtonStyle).map((style) => (
      <div key={style}>
        <div>{style}</div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '60px' }}>
          {Object.keys(IconButtonType).map((type) => (
            <div key={type} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              {Object.keys(IconButtonSize).map((size) => (
                <IconButton {...args} type={type as IconButtonTypeType} style={style as IconButtonStyleType} size={size as IconButtonSizeType} children={<ArrowRight />} />
              ))}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const Primary: Story = {
  args: {
    type: IconButtonType.primary as IconButtonTypeType,
    style: IconButtonStyle.fill as IconButtonStyleType,
    size: IconButtonSize.md as IconButtonSizeType,
    children: <ArrowRight />,
    disabled: false,
    isRounded: false,
  }
};

export const Secondary: Story = {
  args: {
    type: IconButtonType.secondary as IconButtonTypeType,
    style: IconButtonStyle.fill as IconButtonStyleType,
    size: IconButtonSize.md as IconButtonSizeType,
    children: <ArrowRight />,
    disabled: false,
    isRounded: false,
  }
};

export const Error: Story = {
  args: {
    type: IconButtonType.error as IconButtonTypeType,
    style: IconButtonStyle.fill as IconButtonStyleType,
    size: IconButtonSize.md as IconButtonSizeType,
    children: <ArrowRight />,
    disabled: false,
    isRounded: false,
  }
};

export const Success: Story = {
  args: {
    type: IconButtonType.success as IconButtonTypeType,
    style: IconButtonStyle.fill as IconButtonStyleType,
    size: IconButtonSize.md as IconButtonSizeType,
    children: <ArrowRight />,
    disabled: false,
    isRounded: false,
  }
};

export const Warning: Story = {
  args: {
    type: IconButtonType.warning as IconButtonTypeType,
    style: IconButtonStyle.fill as IconButtonStyleType,
    size: IconButtonSize.md as IconButtonSizeType,
    children: <ArrowRight />,
    disabled: false,
    isRounded: false,
  }
};

export const IconButtonSizes: Story = {
  args: {
    style: IconButtonStyle.fill as IconButtonStyleType,
    disabled: false,
    isRounded: false,
  },
  render: (args) => {
    return renderIconButtonGrid(args);
  }
};

export const IconButtonRounded: Story = {
  args: {
    style: IconButtonStyle.fill as IconButtonStyleType,
    disabled: false,
    isRounded: true
  },
  render: (args) => {
    return renderIconButtonGrid(args);
  }
};
