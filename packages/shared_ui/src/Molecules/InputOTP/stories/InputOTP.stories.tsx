import {Meta, StoryObj} from '@storybook/react';
import { InputOTP, InputOTPItem, InputOTPGroup, InputOTPDivider } from '../index';
import {withThemeDecorator} from '../../../utils/storybook/withThemeDecorator';

const meta: Meta<typeof InputOTP> = {
  title:'Components/Molecules/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
  argTypes: {
    isError: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  args: {
    isError: false,
  },
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


