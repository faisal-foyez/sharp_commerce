import {Meta, StoryObj} from '@storybook/react';
import InputNumber from '../InputNumber';
import InputNumberBox from '../InputNumberBox';
import InputNumberButton from '../InputNumberButton';
import { Plus, Minus } from '@dsc/phosphor_icons';
import Label from '../../../Atoms/Label/Label';
import HelperText from '../../../Atoms/HelperText/HelperText';
import { useState } from 'react';

// const InputComponent = (args: any) => {
//   return (
//     <div style={{width: '300px'}}>
//       <InputField {...args}>
//         <Input placeholder='Placeholder' {...args} onChange={() => {}} />
//       <InputIcon>
//         <Envelope />
//         </InputIcon>
//       </InputField>
//     </div>
//   );
// };

const meta: Meta<typeof InputNumber> = {
  title:'Components/Molecules/InputNumber',
  component: InputNumber,
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
      <div data-theme='dark' style={{  padding: '20px', borderRadius: '10px', background: '#1C222B', color: '#ffffff' }}>
        <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Dark Mode</h3>
        <Story />
      </div>
    </div>
  );
};

type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
  args: {
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    const [numberValue, setNumberValue] = useState(0);
    return (
      <div style={{width: '300px'}}>
        <InputNumber {...args}>
        <InputNumberButton onClick={(e) => {e.preventDefault(); setNumberValue((numberValue || 0) - 1)}}><Minus size={20}/></InputNumberButton>
        <InputNumberBox value={numberValue} onChange={(e) => {setNumberValue(parseInt(e.target.value || '0'))}}/>
        <InputNumberButton onClick={(e) => {e.preventDefault(); setNumberValue((numberValue || 0) + 1)}}><Plus size={20}/></InputNumberButton>
      </InputNumber>
    </div>
    )
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    const [numberValue, setNumberValue] = useState(0);
    return (
      <div style={{width: '300px'}}>
        <InputNumber {...args}>
        <InputNumberButton onClick={(e) => {e.preventDefault(); setNumberValue((numberValue || 0) - 1)}}><Minus size={20}/></InputNumberButton>
        <InputNumberBox value={numberValue} onChange={(e) => {setNumberValue(parseInt(e.target.value || '0'))}}/>
        <InputNumberButton onClick={(e) => {e.preventDefault(); setNumberValue((numberValue || 0) + 1)}}><Plus size={20}/></InputNumberButton>
      </InputNumber>
    </div>
    )
  }
};

