import {Meta, StoryObj} from '@storybook/react';
import Input from '../Input';
import InputField from '../InputField';
import InputIcon from '../InputIcon';
import { Envelope } from '@dsc/phosphor_icons';
import Label from '../../../Atoms/Label/Label';
import HelperText from '../../../Atoms/HelperText/HelperText';

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

const meta: Meta<typeof InputField> = {
  title:'Components/Molecules/Input',
  component: InputField,
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
      <div style={{ padding: '50px', background: '#ffffff' }}>
        <h3 style={{textAlign: 'center'}}>Light Mode</h3>
        <Story />
      </div>
      <div data-theme='dark' style={{ padding: '50px', borderRadius: '10px', background: '#1C222B', color: '#ffffff' }}>
        <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Dark Mode</h3>
        <Story />
      </div>
    </div>
  );
};

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
  },
  decorators: [withThemeDecorator],
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
  decorators: [withThemeDecorator],
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
  decorators: [withThemeDecorator],
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