import {Meta, StoryObj} from '@storybook/react';
import Input from '../Input';
import InputField from '../InputField';
import InputIcon from '../InputIcon';
import { Envelope } from '@dsc/phosphor_icons';
import Label from '../../../Atoms/Label/Label';
import HelperText from '../../../Atoms/HelperText/HelperText';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';

const meta: Meta<typeof InputField> = {
  title:'Components/Molecules/Input',
  component: InputField,
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

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
  },
  render: (args) => (
    <div style={{width: '300px'}}>
      <InputField {...args}>
        <Input placeholder='Placeholder' {...args} onChange={() => {}} />
      </InputField>
    </div>
  )
};

export const InputWithIcon: Story = {
  args: {
  },
  render: (args) => (
    <div style={{width: '300px'}}>
      <InputField {...args}>
        <div style={{position: 'relative'}}>  
          <Input placeholder='Placeholder' {...args} onChange={() => {}} />
          <InputIcon>
            <Envelope />
          </InputIcon>
        </div>
      </InputField>
    </div>
  )
};

export const InputWithLabelAndHelperText: Story = {
  args: {
  },
  render: (args) => (
    <div style={{width: '300px'}}>
      <InputField {...args}>
        <Label>Email</Label>
        <div style={{position: 'relative'}}>  
          <Input placeholder='Placeholder' {...args} onChange={() => {}} />
          <InputIcon>
            <Envelope />
          </InputIcon>
        </div>
        <HelperText>Helper text</HelperText>
      </InputField>
    </div>
  )
};