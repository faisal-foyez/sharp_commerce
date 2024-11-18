import type { Meta, StoryObj } from '@storybook/react';
// import LinkButtonType from '@dsc/foundation/lib/LinkButtonType.js';
import {LinkButtonType, LinkButtonSize} from '@dsc/foundation/lib';
import LinkButton from './LinkButton';
import { ArrowRight, ArrowLeft } from '@dsc/phosphor_icons';
// import { ButtonType } from 'packages/foundation/lib';


type LinkButtonTypeType = keyof typeof LinkButtonType;
type LinkButtonSizeType = keyof typeof LinkButtonSize;

const meta: Meta<typeof LinkButton> = {
  title: 'Components/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  argTypes: {
    type:{
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

export const ButtonSizes: Story = {
  args: {
    disabled: false,
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    const style = {fontSize: '13px'}
    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div style={style}>Primary</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span style={style}>sm</span>
            <LinkButton {...args} type={LinkButtonType.primary as LinkButtonTypeType} size={LinkButtonSize.sm as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span style={style}>md</span>
            <LinkButton {...args} type={LinkButtonType.primary as LinkButtonTypeType} size={LinkButtonSize.md as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span style={style}>lg</span>
            <LinkButton {...args} type={LinkButtonType.primary as LinkButtonTypeType} size={LinkButtonSize.lg as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span style={style}>xl</span>
            <LinkButton {...args} type={LinkButtonType.primary as LinkButtonTypeType} size={LinkButtonSize.xl as LinkButtonSizeType}>button</LinkButton>
          </div>
        </div>
        <div style={style}>Secondary</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.secondary as LinkButtonTypeType} size={LinkButtonSize.sm as LinkButtonSizeType} >button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.secondary as LinkButtonTypeType} size={LinkButtonSize.md as LinkButtonSizeType} >button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.secondary as LinkButtonTypeType} size={LinkButtonSize.lg as LinkButtonSizeType} >button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.secondary as LinkButtonTypeType} size={LinkButtonSize.xl as LinkButtonSizeType} >button</LinkButton>
          </div>
          
        </div>
        <div style={style}>Error</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.error as LinkButtonTypeType} size={LinkButtonSize.sm as LinkButtonSizeType} >button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.error as LinkButtonTypeType} size={LinkButtonSize.md as LinkButtonSizeType} >button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.error as LinkButtonTypeType} size={LinkButtonSize.lg as LinkButtonSizeType} >button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.error as LinkButtonTypeType} size={LinkButtonSize.xl as LinkButtonSizeType} >button</LinkButton>
          </div>
        </div>
        <div style={style}>Success</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>


          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.success as LinkButtonTypeType} size={LinkButtonSize.sm as LinkButtonSizeType} >button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.success as LinkButtonTypeType} size={LinkButtonSize.md as LinkButtonSizeType} >button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.success as LinkButtonTypeType} size={LinkButtonSize.lg as LinkButtonSizeType} >button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.success as LinkButtonTypeType} size={LinkButtonSize.xl as LinkButtonSizeType} >button</LinkButton>
          </div>

        </div>
        <div style={style}>Warning</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.warning as LinkButtonTypeType} size={LinkButtonSize.sm as LinkButtonSizeType} >button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.warning as LinkButtonTypeType} size={LinkButtonSize.md as LinkButtonSizeType} >button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.warning as LinkButtonTypeType} size={LinkButtonSize.lg as LinkButtonSizeType} >button</LinkButton>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <LinkButton {...args} type={LinkButtonType.warning as LinkButtonTypeType} size={LinkButtonSize.xl as LinkButtonSizeType} >button</LinkButton>
          </div>
        </div>
      </div>
    )
  }
}

export const ButtonDisabled: Story = {
  args: {
    disabled: true
  },

  decorators: [withThemeDecorator],

  render: args => {
    const style = {
      fontSize: "13px"
    };
    return (
      (<div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
        <div style={style}>Primary</div>
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
            <span style={style}>sm</span>
            <LinkButton
              {...args}
              type={LinkButtonType.primary as LinkButtonTypeType}
              size={LinkButtonSize.sm as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span style={style}>md</span>
            <LinkButton
              {...args}
              type={LinkButtonType.primary as LinkButtonTypeType}
              size={LinkButtonSize.md as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span style={style}>lg</span>
            <LinkButton
              {...args}
              type={LinkButtonType.primary as LinkButtonTypeType}
              size={LinkButtonSize.lg as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span style={style}>xl</span>
            <LinkButton
              {...args}
              type={LinkButtonType.primary as LinkButtonTypeType}
              size={LinkButtonSize.xl as LinkButtonSizeType}>button</LinkButton>
          </div>
        </div>
        <div style={style}>Secondary</div>
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
            <LinkButton
              {...args}
              type={LinkButtonType.secondary as LinkButtonTypeType}
              size={LinkButtonSize.sm as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <LinkButton
              {...args}
              type={LinkButtonType.secondary as LinkButtonTypeType}
              size={LinkButtonSize.md as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <LinkButton
              {...args}
              type={LinkButtonType.secondary as LinkButtonTypeType}
              size={LinkButtonSize.lg as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <LinkButton
              {...args}
              type={LinkButtonType.secondary as LinkButtonTypeType}
              size={LinkButtonSize.xl as LinkButtonSizeType}>button</LinkButton>
          </div>
        </div>
        <div style={style}>Error</div>
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
            <LinkButton
              {...args}
              type={LinkButtonType.error as LinkButtonTypeType}
              size={LinkButtonSize.sm as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <LinkButton
              {...args}
              type={LinkButtonType.error as LinkButtonTypeType}
              size={LinkButtonSize.md as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <LinkButton
              {...args}
              type={LinkButtonType.error as LinkButtonTypeType}
              size={LinkButtonSize.lg as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <LinkButton
              {...args}
              type={LinkButtonType.error as LinkButtonTypeType}
              size={LinkButtonSize.xl as LinkButtonSizeType}>button</LinkButton>
          </div>
        </div>
        <div style={style}>Success</div>
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
            <LinkButton
              {...args}
              type={LinkButtonType.success as LinkButtonTypeType}
              size={LinkButtonSize.sm as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <LinkButton
              {...args}
              type={LinkButtonType.success as LinkButtonTypeType}
              size={LinkButtonSize.md as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <LinkButton
              {...args}
              type={LinkButtonType.success as LinkButtonTypeType}
              size={LinkButtonSize.lg as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <LinkButton
              {...args}
              type={LinkButtonType.success as LinkButtonTypeType}
              size={LinkButtonSize.xl as LinkButtonSizeType}>button</LinkButton>
          </div>
        </div>
        <div style={style}>Warning</div>
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
            <LinkButton
              {...args}
              type={LinkButtonType.warning as LinkButtonTypeType}
              size={LinkButtonSize.sm as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <LinkButton
              {...args}
              type={LinkButtonType.warning as LinkButtonTypeType}
              size={LinkButtonSize.md as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <LinkButton
              {...args}
              type={LinkButtonType.warning as LinkButtonTypeType}
              size={LinkButtonSize.lg as LinkButtonSizeType}>button</LinkButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <LinkButton
              {...args}
              type={LinkButtonType.warning as LinkButtonTypeType}
              size={LinkButtonSize.xl as LinkButtonSizeType}>button</LinkButton>
          </div>
        </div>
      </div>)
    );
  }
};