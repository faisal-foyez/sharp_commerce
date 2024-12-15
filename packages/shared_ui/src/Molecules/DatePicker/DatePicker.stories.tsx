import { StoryObj, Meta } from '@storybook/react';
import DatePicker from './DatePicker';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Molecules/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'range', 'multiple'],
    },
    numberOfMonths: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
    },
    captionLayout: {
      control: 'select',
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
    },
    showOutsideDays: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
  },
}

export default meta

export const Default: StoryObj<typeof DatePicker> = {
  args: {
    mode: 'single',
  },
}

export const SingleWithCaptionLayoutDropdown: StoryObj<typeof DatePicker> = {
  args: {
    mode: 'single',
    captionLayout: 'dropdown',
  },
}

export const Range: StoryObj<typeof DatePicker> = {
  args: {
    mode: 'range',
    numberOfMonths: 1,
    selected: {
      from: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      to: new Date(Date.now()),
    },
  },
}

export const RangeWithMultipleMonths: StoryObj<typeof DatePicker> = {
  args: {
    mode: 'range',
    numberOfMonths: 2,
    selected: {
      from: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      to: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  },
}

export const Multiple: StoryObj<typeof DatePicker> = {
  args: {
    mode: 'multiple',
    numberOfMonths: 1,
    selected: [
      new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
      new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
      new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
      new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
      new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),

    ],
  },
}