import {Meta, StoryObj} from '@storybook/react';
import TagButton from './TagButton';
import { TagButtonSize, TagButtonState } from '@dsc/foundation/lib';

type TagButtonSizeType = keyof typeof TagButtonSize;
type TagButtonStateType = keyof typeof TagButtonState;

const meta: Meta<typeof TagButton> = {
  title: 'Components/Atoms/TagButton',
  component: TagButton,

  argTypes: {
    state: {
      control: 'select',
      options: Object.values(TagButtonState),
    },
    label: {
      control: 'text',
      options: ['Chip Text'],
    },
    size: {
      control: 'select',
      options: Object.values(TagButtonSize),
    },
    isShowAvatar: {
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
      <div data-theme='dark' style={{ padding: '20px', borderRadius: '10px', background: '#1C222B', color: '#ffffff' }}>
        <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Dark Mode</h3>
        <Story />
      </div>
    </div>
  );
};

type Story = StoryObj<typeof TagButton>;

export const Default: Story = {
  args: {
    label: 'Chip Text',
  },
  decorators: [withThemeDecorator],
};


export const WithAvatarVariantSizes: Story = {
  args: {
    label: 'Chip Text',
    isShowAvatar: true,
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <>
        {Object.values(TagButtonSize).map((size) => (
          <div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
            {Object.values(TagButtonState).map((state) => (
              <TagButton key={state} {...args} state={state as TagButtonStateType} size={size as TagButtonSizeType} />
            ))}
          </div>
        ))}
      </>
    )
  },
};

export const WithoutAvatarVariantSizes: Story = {
  args: {
    label: 'Chip Text',
    isShowAvatar: false,
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <>
        {Object.values(TagButtonSize).map((size) => (
          <div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
            {Object.values(TagButtonState).map((state) => (
              <TagButton key={state} {...args} state={state as TagButtonStateType} size={size as TagButtonSizeType} />
            ))}
          </div>
        ))}
      </>
    )
  },
};

export const WithoutCloseIconVariantSizes: Story = {
  args: {
    label: 'Chip Text',
    isShowAvatar: true,
    isShowCloseIcon: false,
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <>
        {Object.values(TagButtonSize).map((size) => (
          <div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
            {Object.values(TagButtonState).map((state) => (
              <TagButton key={state} {...args} state={state as TagButtonStateType} size={size as TagButtonSizeType} />
            ))}
          </div>
        ))}
      </>
    )
  },
};

export const WithoutCloseIconAndAvatarVariantSizes: Story = {
  args: {
    label: 'Chip Text',
    isShowAvatar: false,
    isShowCloseIcon: false,
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <>
        {Object.values(TagButtonSize).map((size) => (
          <div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
            {Object.values(TagButtonState).map((state) => (
              <TagButton key={state} {...args} state={state as TagButtonStateType} size={size as TagButtonSizeType} />
            ))}
          </div>
        ))}
      </>
    )
  },
};