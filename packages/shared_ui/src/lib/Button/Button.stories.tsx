import type { Meta, StoryObj } from '@storybook/react';
import {Button} from './Button';
import ButtonSize from '@dsc/foundation/lib/ButtonSize.js';
import ButtonType from '@dsc/foundation/lib/ButtonType.js';
import ButtonStyle from '@dsc/foundation/lib/ButtonStyle.js';
import {ArrowRight, ArrowLeft} from '@dsc/phosphor_icons';

type ButtonSizeType = keyof typeof ButtonSize;
type ButtonTypeType = keyof typeof ButtonType;
type ButtonStyleType = keyof typeof ButtonStyle;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type:{
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

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: ButtonType.primary as ButtonTypeType,
    style: ButtonStyle.fill as ButtonStyleType,
    children: 'Click me',
    size: ButtonSize.md as ButtonSizeType,
    disabled: false,
    isRounded: false,
  },
};



export const Secondary: Story = {
  args: {
    type: ButtonType.secondary as ButtonTypeType,
    style: ButtonStyle.fill as ButtonStyleType,
    children: 'Click me',
    size: ButtonSize.md as ButtonSizeType,
    disabled: false,
    isRounded: false,
  }
} satisfies Meta<typeof Button>;

export const Error: Story = {
  args: {
    type: "error",
    style: "fill",
    children: "Click me",
    size: ButtonSize.md as ButtonSizeType,
    disabled: false,
    isRounded: false,
  }
} satisfies Meta<typeof Button>;

export const Success: Story = {
  args: {
    type: "success",
    style: "fill",
    children: "Click me",
    size: ButtonSize.md as ButtonSizeType,
    disabled: false,
    isRounded: false,
  }
} satisfies Meta<typeof Button>;

export const Warning: Story = {
  args: {
    type: "warning",
    style: "fill",
    children: "Click me",
    size: ButtonSize.md as ButtonSizeType,
    disabled: false,
    isRounded: false,
  }
} satisfies Meta<typeof Button>;

export const WithLeftIcon: Story = {
  args: {
    type: ButtonType.primary as ButtonTypeType,
    style: ButtonStyle.fill as ButtonStyleType,
    children: 'With Left Icon',
    size: ButtonSize.md as ButtonSizeType,
    LeftIcon: <ArrowLeft size={16} />
  },
};

export const WithRightIcon: Story = {
  args: {
    type: ButtonType.primary as ButtonTypeType,
    style: ButtonStyle.fill as ButtonStyleType,
    children: 'With Right Icon',
    size: ButtonSize.md as ButtonSizeType,
    RightIcon: <ArrowRight size={16} />
  },
};

export const WithBothIcons: Story = {
  args: {
    type: ButtonType.primary as ButtonTypeType,
    style: ButtonStyle.fill as ButtonStyleType,
    children: 'Both Icons',
    size: ButtonSize.md as ButtonSizeType,
    LeftIcon: <ArrowLeft size={16} />,
    RightIcon: <ArrowRight size={16} />
  },
};

export const ButtonSizes: Story = {
  args: {
    style: ButtonStyle.fill as ButtonStyleType,
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
            <Button {...args} type={ButtonType.primary as ButtonTypeType} size={ButtonSize['2xsm'] as ButtonSizeType}>button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span>xsm</span>
            <Button {...args} type={ButtonType.primary as ButtonTypeType} size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span>sm</span>
            <Button {...args} type={ButtonType.primary as ButtonTypeType} size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span>md</span>
            <Button {...args} type={ButtonType.primary as ButtonTypeType} size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span>lg</span>
            <Button {...args} type={ButtonType.primary as ButtonTypeType} size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span>xl</span>
            <Button {...args} type={ButtonType.primary as ButtonTypeType} size={ButtonSize['xl'] as ButtonSizeType}>button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <span>2xl</span>
            <Button {...args} type={ButtonType.primary as ButtonTypeType} size={ButtonSize['2xl'] as ButtonSizeType}>button</Button>
          </div>
          
        </div>
        <div>Secondary</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.secondary as ButtonTypeType} size={ButtonSize['2xsm'] as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.secondary as ButtonTypeType} size={ButtonSize.xsm as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.secondary as ButtonTypeType} size={ButtonSize.sm as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.secondary as ButtonTypeType} size={ButtonSize.md as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.secondary as ButtonTypeType} size={ButtonSize.lg as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.secondary as ButtonTypeType} size={ButtonSize['xl'] as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.secondary as ButtonTypeType} size={ButtonSize['2xl'] as ButtonSizeType} >button</Button>
          </div>
          
        </div>
        <div>Error</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.error as ButtonTypeType} size={ButtonSize['2xsm'] as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.error as ButtonTypeType} size={ButtonSize.xsm as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.error as ButtonTypeType} size={ButtonSize.sm as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.error as ButtonTypeType} size={ButtonSize.md as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.error as ButtonTypeType} size={ButtonSize.lg as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.error as ButtonTypeType} size={ButtonSize['xl'] as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.error as ButtonTypeType} size={ButtonSize['2xl'] as ButtonSizeType} >button</Button>
          </div>
        </div>
        <div>Success</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.success as ButtonTypeType} size={ButtonSize['2xsm'] as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.success as ButtonTypeType} size={ButtonSize.xsm as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.success as ButtonTypeType} size={ButtonSize.sm as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.success as ButtonTypeType} size={ButtonSize.md as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.success as ButtonTypeType} size={ButtonSize.lg as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.success as ButtonTypeType} size={ButtonSize['xl'] as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.success as ButtonTypeType} size={ButtonSize['2xl'] as ButtonSizeType} >button</Button>
          </div>
        </div>
        <div>Warning</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.warning as ButtonTypeType} size={ButtonSize['2xsm'] as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.warning as ButtonTypeType} size={ButtonSize.xsm as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.warning as ButtonTypeType} size={ButtonSize.sm as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.warning as ButtonTypeType} size={ButtonSize.md as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.warning as ButtonTypeType} size={ButtonSize.lg as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.warning as ButtonTypeType} size={ButtonSize['xl'] as ButtonSizeType} >button</Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Button {...args} type={ButtonType.warning as ButtonTypeType} size={ButtonSize['2xl'] as ButtonSizeType} >button</Button>
          </div>
        </div>
      </div>
    )
  }
}

export const ButtonRounded: Story = {
  args: {
    style: "fill",
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
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xsm</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>sm</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>md</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>lg</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xl</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>2xl</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
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
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
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
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
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
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
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
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
          </div>
        </div>
      </div>)
    );
  }
};


export const ButtonBorder: Story = {
  args: {
    style: "border",
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
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xsm</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>sm</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>md</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>lg</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xl</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>2xl</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
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
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
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
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
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
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
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
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
          </div>
        </div>
      </div>)
    );
  }
};


export const ButtonLight: Story = {
  args: {
    style: "light",
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
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xsm</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>sm</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>md</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>lg</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>xl</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <span>2xl</span>
            <Button
              {...args}
              type={ButtonType.primary as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
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
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.secondary as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
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
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.error as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
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
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.success as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
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
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize["2xsm"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize.xsm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize.sm as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize.md as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize.lg as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize["xl"] as ButtonSizeType}>button</Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
            <Button
              {...args}
              type={ButtonType.warning as ButtonTypeType}
              size={ButtonSize["2xl"] as ButtonSizeType}>button</Button>
          </div>
        </div>
      </div>)
    );
  }
};


