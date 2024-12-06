import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';
import { CheckboxColor, CheckboxSize, CheckboxVariant } from '@dsc/foundation/lib';

type CheckboxSizeType = keyof typeof CheckboxSize;
type CheckboxVariantType = keyof typeof CheckboxVariant;
type CheckboxColorType = keyof typeof CheckboxColor;

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
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
      options: Object.values(CheckboxColor),
    },
    size: {
      control: 'select',
      options: Object.values(CheckboxSize),
    },
    variant: {
      control: 'select',
      options: Object.values(CheckboxVariant),
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

const renderCheckboxGrid = (args: any) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
    {Object.values(CheckboxVariant).map((variant) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }} key={variant}>
        {Object.values(CheckboxColor).map((color) => (
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }} key={color}>
            {Object.values(CheckboxSize).map((size) => (
              <Checkbox key={size} {...args} size={size as CheckboxSizeType} color={color as CheckboxColorType} variant={variant as CheckboxVariantType}/>
            ))}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export const CheckboxWithSizesAndVariants: Story = {
  args: {
    checked: true,
    disabled: false,
  },
  render: renderCheckboxGrid,
}