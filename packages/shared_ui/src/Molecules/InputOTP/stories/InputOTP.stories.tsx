import {Meta, StoryObj} from '@storybook/react';
import { InputOTP, InputOTPItem, InputOTPGroup, InputOTPDivider } from '../index';


const meta: Meta<typeof InputOTP> = {
  title:'Components/Molecules/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  argTypes: {
    isError: {
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

type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  args: {
    isError: false,
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <div style={{width: '300px'}}>
        <InputOTP {...args}>
        <InputOTPGroup>
          <InputOTPItem index={0}/>
          <InputOTPItem index={1}/>
          <InputOTPItem index={2}/>
          <InputOTPItem index={3}/>
        </InputOTPGroup>
        <InputOTPDivider />
      </InputOTP>
    </div>
    )
  }
};


