import {Meta, StoryObj} from '@storybook/react';
import TextArea from './TextArea';
import Label from '../Label/Label';
import HelperText from '../HelperText/HelperText';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';  

const meta: Meta<typeof TextArea> = {
  title: 'Components/Atoms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
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

type Story = StoryObj<typeof TextArea>;

const renderWithLabelAndHelperText = (args: any) => (
  <form style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <Label>Message</Label>
    <TextArea {...args} />
    <HelperText>Helper Text</HelperText>
  </form>
);

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    isError: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
  },
};

export const WithLabelAndHelperText: Story = {
  args: {
    placeholder: 'Placeholder',
  },
  render: renderWithLabelAndHelperText,
};


