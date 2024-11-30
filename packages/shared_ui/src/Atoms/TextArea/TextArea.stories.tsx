import {Meta, StoryObj} from '@storybook/react';
import TextArea from './TextArea';
import Label from '../Label/Label';
import HelperText from '../HelperText/HelperText';

const meta: Meta<typeof TextArea> = {
  title: 'Components/Atoms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    isError: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
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

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
  decorators: [withThemeDecorator],
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    isError: true,
  },
  decorators: [withThemeDecorator],
};

export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
  },
  decorators: [withThemeDecorator],
};

export const WithLabelAndHelperText: Story = {
  args: {
    placeholder: 'Placeholder',
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <form style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Label>Message</Label>
        <TextArea {...args} />
        <HelperText>Helper Text</HelperText>
      </form>
    )
  },
};


