import { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";
import {IconButtonType, IconButtonStyle, IconButtonSize} from '@dsc/foundation/lib';
import { ArrowRight, ArrowLeft } from '@dsc/phosphor_icons';

type IconButtonTypeType = keyof typeof IconButtonType;
type IconButtonStyleType = keyof typeof IconButtonStyle;
type IconButtonSizeType = keyof typeof IconButtonSize;

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: Object.keys(IconButtonType) },
    style: { control: 'select', options: Object.keys(IconButtonStyle) },
    size: { control: 'select', options: Object.keys(IconButtonSize) },
    disabled: { control: 'boolean', defaultValue: false },
    isRounded: { control: 'boolean', defaultValue: false },
  },
} satisfies Meta<typeof IconButton>;

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

type Story = StoryObj<typeof IconButton>;

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
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div>Primary</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span>2xsm</span> 
            <IconButton {...args} type={IconButtonType.primary as IconButtonTypeType} size={IconButtonSize['2xsm'] as IconButtonSizeType} children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span>xsm</span>
            <IconButton {...args} type={IconButtonType.primary as IconButtonTypeType} size={IconButtonSize.xsm as IconButtonSizeType} children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span>sm</span>
            <IconButton {...args} type={IconButtonType.primary as IconButtonTypeType} size={IconButtonSize.sm as IconButtonSizeType} children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span>md</span>
            <IconButton {...args} type={IconButtonType.primary as IconButtonTypeType} size={IconButtonSize.md as IconButtonSizeType} children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span>lg</span>
            <IconButton {...args} type={IconButtonType.primary as IconButtonTypeType} size={IconButtonSize.lg as IconButtonSizeType} children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span>xl</span>
            <IconButton {...args} type={IconButtonType.primary as IconButtonTypeType} size={IconButtonSize['xl'] as IconButtonSizeType} children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span>2xl</span>
            <IconButton {...args} type={IconButtonType.primary as IconButtonTypeType} size={IconButtonSize['2xl'] as IconButtonSizeType} children={<ArrowRight />}/>
          </div>
        </div>
        <div>Secondary</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.secondary as IconButtonTypeType} size={IconButtonSize['2xsm'] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.secondary as IconButtonTypeType} size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.secondary as IconButtonTypeType} size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.secondary as IconButtonTypeType} size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.secondary as IconButtonTypeType} size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.secondary as IconButtonTypeType} size={IconButtonSize['xl'] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.secondary as IconButtonTypeType} size={IconButtonSize['2xl'] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Error</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.error as IconButtonTypeType} size={IconButtonSize['2xsm'] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.error as IconButtonTypeType} size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.error as IconButtonTypeType} size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.error as IconButtonTypeType} size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.error as IconButtonTypeType} size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.error as IconButtonTypeType} size={IconButtonSize['xl'] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.error as IconButtonTypeType} size={IconButtonSize['2xl'] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Success</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.success as IconButtonTypeType} size={IconButtonSize['2xsm'] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.success as IconButtonTypeType} size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.success as IconButtonTypeType} size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.success as IconButtonTypeType} size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.success as IconButtonTypeType} size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.success as IconButtonTypeType} size={IconButtonSize['xl'] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.success as IconButtonTypeType} size={IconButtonSize['2xl'] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Warning</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.warning as IconButtonTypeType} size={IconButtonSize['2xsm'] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.warning as IconButtonTypeType} size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.warning as IconButtonTypeType} size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.warning as IconButtonTypeType} size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.warning as IconButtonTypeType} size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.warning as IconButtonTypeType} size={IconButtonSize['xl'] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <IconButton {...args} type={IconButtonType.warning as IconButtonTypeType} size={IconButtonSize['2xl'] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
      </div>
    )
  }
}

export const IconButtonRounded: Story = {
  args: {
    style: IconButtonStyle.fill as IconButtonStyleType,
    disabled: false,
    isRounded: true
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
        <div>Primary</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>2xsm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xsm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>sm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>md</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>lg</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xl</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>2xl</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Secondary</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Error</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Success</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Warning</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
      </div>)
    );
  }
};

export const IconButtonBorder: Story = {
  args: {
    style: IconButtonStyle.border as IconButtonStyleType,
    disabled: false,
    isRounded: false
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
        <div>Primary</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>2xsm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xsm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>sm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>md</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>lg</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xl</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>2xl</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Secondary</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Error</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Success</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Warning</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
      </div>)
    );
  }
};

export const IconButtonLight: Story = {
  args: {
    style: IconButtonStyle.light as IconButtonStyleType,
    disabled: false,
    isRounded: false
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
        <div>Primary</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>2xsm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xsm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>sm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>md</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>lg</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xl</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>2xl</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Secondary</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Error</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Success</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Warning</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
      </div>)
    );
  }
};

export const IconButtonGhost: Story = {
  args: {
    style: IconButtonStyle.ghost as IconButtonStyleType,
    disabled: false,
    isRounded: false
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
        <div>Primary</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>2xsm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xsm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>sm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>md</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>lg</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xl</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>2xl</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Secondary</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Error</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Success</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Warning</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
      </div>)
    );
  }
};

export const IconButtonDisabled: Story = {
  args: {
    style: IconButtonStyle.fill as IconButtonStyleType,
    disabled: true,
    isRounded: false
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
        <div>Primary</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>2xsm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xsm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>sm</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>md</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>lg</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xl</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>2xl</span>
            <IconButton
              {...args}
              type={IconButtonType.primary as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Secondary</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.secondary as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Error</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.error as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Success</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.success as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
        <div>Warning</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px"
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["2xsm"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.xsm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.sm as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.md as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize.lg as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <IconButton
              {...args}
              type={IconButtonType.warning as IconButtonTypeType}
              size={IconButtonSize["2xl"] as IconButtonSizeType}children={<ArrowRight />}/>
          </div>
        </div>
      </div>)
    );
  }
};


