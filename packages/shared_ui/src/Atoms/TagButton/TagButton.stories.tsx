import {Meta, StoryObj} from '@storybook/react';
import TagButton from './TagButton';
import { TagButtonSize, TagButtonState } from '@dsc/foundation/lib';
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator';

type TagButtonSizeType = keyof typeof TagButtonSize;
type TagButtonStateType = keyof typeof TagButtonState;

const meta: Meta<typeof TagButton> = {
  title: 'Components/Atoms/TagButton',
  component: TagButton,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
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

type Story = StoryObj<typeof TagButton>;

export const Default: Story = {
  args: {
    label: 'Chip Text',
  },
};

const renderTagButtons = (args: any) => (
  <>
    {Object.values(TagButtonSize).map((size) => (
      <div style={{display: 'flex', gap: '10px', marginBottom: '20px'}} key={size}>
        {Object.values(TagButtonState).map((state) => (
          <TagButton key={state} {...args} state={state as TagButtonStateType} size={size as TagButtonSizeType} />
        ))}
      </div>
    ))}
  </>
);

export const WithAvatarVariantSizes: Story = {
  args: {
    label: 'Chip Text',
    isShowAvatar: true,
  },
  render: renderTagButtons,
};

export const WithoutAvatarVariantSizes: Story = {
  args: {
    label: 'Chip Text',
    isShowAvatar: false,
  },
  render: renderTagButtons,
};

export const WithoutCloseIconVariantSizes: Story = {
  args: {
    label: 'Chip Text',
    isShowAvatar: true,
    isShowCloseIcon: false,
  },
  render: renderTagButtons,
};

export const WithoutCloseIconAndAvatarVariantSizes: Story = {
  args: {
    label: 'Chip Text',
    isShowAvatar: false,
    isShowCloseIcon: false,
  },
  render: renderTagButtons,
};