import { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';
import { RadioColor, RadioSize, RadioVariant } from '@dsc/foundation/lib';

type RadioSizeType = keyof typeof RadioSize;
type RadioVariantType = keyof typeof RadioVariant;
type RadioColorType = keyof typeof RadioColor;

const meta: Meta<typeof Radio> = {
  title: 'Components/Atoms/Radio',
  component: Radio,
  decorators: [withThemeDecorator],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: Object.values(RadioColor),
    },
    size: {
      control: 'select',
      options: Object.values(RadioSize),
    },
    variant: {
      control: 'select',
      options: Object.values(RadioVariant),
    },
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    checked: true,
    disabled: false,
  }
}

const renderRadioGrid = (args: any) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
    {Object.values(RadioVariant).map((variant) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }} key={variant}>
        {Object.values(RadioColor).map((color) => (
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }} key={color}>
            {Object.values(RadioSize).map((size) => (
              <Radio key={size} {...args} size={size as RadioSizeType} color={color as RadioColorType} variant={variant as RadioVariantType}/>
            ))}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export const RadioWithSizesAndVariants: Story = {
  args: {
    checked: true,
    disabled: false,
  },
  render: renderRadioGrid,
}