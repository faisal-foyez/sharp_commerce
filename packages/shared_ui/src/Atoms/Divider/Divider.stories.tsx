import { Meta, StoryObj } from '@storybook/react';
import { Divider } from './index';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';
import { DividerColorVariant, DividerSizeVariant, DividerVariant} from '@dsc/foundation/lib';

const meta: Meta<typeof Divider> = {
  title: 'Components/Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(DividerColorVariant),
    },
    size: {
      control: 'select',
      options: Object.values(DividerSizeVariant),
    },
    variant: {
      control: 'select',
      options: Object.values(DividerVariant),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return(
      <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <p>I am alone, and feel the charm of existence in this spot.</p>
        <Divider color="secondary" {...args} />
        <p>I should be incapable of drawing a single stroke at the present moment.</p>
        <Divider color="secondary" {...args} />
        <p>A wonderful serenity has taken possession of my entire soul.</p>
      </div>
    )
  }
};

  export const DividerVariantColor: Story = {
    args: {
    },
    render: (args) => {
      return(
        <div style={{width: '500px', display: 'flex', flexDirection: 'column', gap: '50px'}}>
          <Divider color="primary" {...args} />
          <Divider color="secondary" {...args} />
          <Divider color="success" {...args} />
          <Divider color="warning" {...args} />
          <Divider color="error" {...args} />
        </div>
      )
    }
  };

  export const DividerVariantSize: Story = {
    args: {
    },
    render: (args) => {
      return(
        <div style={{width: '500px', display: 'flex', flexDirection: 'column', gap: '50px'}}>
          <Divider size="sm" />
          <Divider size="md" />
          <Divider size="lg" />
          <Divider size="xl" />
          <Divider size="2xl" />
        </div>
      )
    }
  };

  export const DividerAlignVariant: Story = {
    args: {
    },
    render: (args) => {
      return(
        <div style={{width: '500px', display: 'flex', flexDirection: 'column', gap: '50px'}}>
          <Divider variant="start">Left Align</Divider>
          <Divider variant="center">Center Align</Divider>
          <Divider variant="end">Right Align</Divider>
        </div>
      )
    }
  };