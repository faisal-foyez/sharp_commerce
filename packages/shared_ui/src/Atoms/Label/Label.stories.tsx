import { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Atoms/Label",
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    isShowOptional: {
      control: 'boolean',
    },
    isShowBadge: {
      control: 'boolean',
    },
    badgeText: {
      control: 'text',
      options: ["Badge"]
    },
    isShowRequired: {
      control: 'boolean',
    },
    isShowInfoIcon: {
      control: 'boolean',
    },
    infoText: {
      control: 'text',
      options: ["Info Text"]
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
      <div data-theme='dark' style={{ padding: '20px', borderRadius: '10px', background: '#1C222B', color: '#ffffff' }}>
        <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Dark Mode</h3>
        <Story />
      </div>
    </div>
  );
};


type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Label",
  },
  decorators: [withThemeDecorator],
};

export const LabelWithOptionalText: Story = {
  args: {
    children: "Label",
    isShowOptional: true
  },
  decorators: [withThemeDecorator],
};

export const LabelWithRequiredText: Story = {
  args: {
    children: "Label",
    isShowOptional: false,
    isShowRequired: true
  },
  decorators: [withThemeDecorator],
};

export const LabelWithInfoIcon: Story = {
  args: {
    children: "Label",
    isShowInfoIcon: true
  },
  decorators: [withThemeDecorator],
  render:()=>{
    return <div style={{width: '200px'}}>
      <Label isShowInfoIcon={true}>Label</Label>
    </div>
  }
};

export const LabelWithInfoIconAndInfoText: Story = {
  args: {
    children: "Label",
    isShowInfoIcon: true,
    infoText: "Info Text"
  },
  decorators: [withThemeDecorator],
  render:()=>{
    return <div style={{width: '200px'}}>
      <Label isShowInfoIcon={true} infoText="Info Text">Label</Label>
    </div>
  }
};
