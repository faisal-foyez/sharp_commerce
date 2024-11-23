import { Meta, StoryObj } from "@storybook/react";
import HelperText from "./HelperText";

const meta: Meta<typeof HelperText> = {
  title: "Components/Atoms/HelperText",
  component: HelperText,
  tags: ['autodocs'],
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
      <div data-theme='dark' style={{ padding: '20px', borderRadius: '10px', background: '#1C222B', color: '#ffffff' }}>
        <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Dark Mode</h3>
        <Story />
      </div>
    </div>
  );
};

type Story = StoryObj<typeof HelperText>;

export const Default: Story = {
  args: {
    children: "Info that helps a user with this field.",
  },
  decorators: [withThemeDecorator],
};

export const HelperTextWithoutInfoIcon: Story = {
  args: {
    children: "Info that helps a user with this field.",
    isShowInfoIcon: false,
  },
  decorators: [withThemeDecorator],
};