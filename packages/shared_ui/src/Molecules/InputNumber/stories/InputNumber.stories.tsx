import { Meta, StoryObj } from '@storybook/react';
import InputNumber from '../InputNumber';
import InputNumberBox from '../InputNumberBox';
import InputNumberButton from '../InputNumberButton';
import { Plus, Minus } from '@dsc/phosphor_icons';
import { useState } from 'react';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';

const meta: Meta<typeof InputNumber> = {
  title: 'Components/Molecules/InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
  argTypes: {
    isError: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof InputNumber>;

const renderInputNumber = (args: any, initialValue: number) => {
  const [numberValue, setNumberValue] = useState(initialValue);
  return (
    <div style={{ width: '300px' }}>
      <InputNumber {...args}>
        <InputNumberButton onClick={(e) => { e.preventDefault(); setNumberValue((numberValue || 0) - 1); }}>
          <Minus size={20} />
        </InputNumberButton>
        <InputNumberBox value={numberValue} onChange={(e) => { setNumberValue(parseInt(e.target.value || '0')); }} />
        <InputNumberButton onClick={(e) => { e.preventDefault(); setNumberValue((numberValue || 0) + 1); }}>
          <Plus size={20} />
        </InputNumberButton>
      </InputNumber>
    </div>
  );
};

export const Default: Story = {
  args: {},
  render: (args) => renderInputNumber(args, 0),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => renderInputNumber(args, 0),
};
