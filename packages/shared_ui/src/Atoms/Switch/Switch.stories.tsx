import { Meta, StoryObj } from '@storybook/react';
import { Switch } from './index';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';

const meta: Meta<typeof Switch> = {
  title: 'Components/Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
  argTypes: {
    disabled:{
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['default', 'icon'],
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Switch> = {
  args: {},
};

export const SwitchWithIcon: StoryObj<typeof Switch> = {
  args: {
    variant: 'icon',
  },
};

export const DisabledSwitch: StoryObj<typeof Switch> = {
  args: {
    disabled: true,
  },
};
