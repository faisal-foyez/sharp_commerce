import { Meta, StoryObj } from '@storybook/react';
import { 
  Slider 
} from './index';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';

const meta: Meta<typeof Slider> = {
  title: 'Components/Atoms/Slider',
  component: Slider,
  tags: ['autodocs'],
  decorators: [withThemeDecorator]
};

export default meta;

export const Default: StoryObj<typeof Slider> = {
  args: {
    defaultValue: [55],
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Slider {...args} />
    </div>
  )
};

export const DoubleSlider: StoryObj<typeof Slider> = {
  args: {
    defaultValue: [25, 75],
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Slider {...args} />
    </div>
  )
};
