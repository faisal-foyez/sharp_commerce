import { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './index';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
  argTypes: {
    color: {
      control: 'select',  
      options: ['primary', 'secondary', 'error', 'success', 'warning'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const SpinnerWithColors: Story = {
  args: {
  },
  render: (args) => (
    <div style={{display: 'flex', gap: '1rem'}}>
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="error" />
      <Spinner color="success" />
      <Spinner color="warning" />
    </div>
  ),
};