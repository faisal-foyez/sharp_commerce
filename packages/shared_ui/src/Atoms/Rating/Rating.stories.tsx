import { Meta, StoryObj } from '@storybook/react'
import { Rating, RatingStar } from './index'
import { withThemeDecorator } from '../../utils/storybook/withThemeDecorator'
import { Star } from '@dsc/phosphor_icons'

const meta: Meta<typeof Rating> = {
  title: 'Components/Atoms/Rating',
  component: Rating,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
}

export default meta

type Story = StoryObj<typeof Rating>

export const Default: Story = {
  render: (args) => (
    <Rating {...args}>
      <RatingStar value={1} />
      <RatingStar value={2} />
      <RatingStar value={3} />
      <RatingStar value={4} />
      <RatingStar value={5} />
    </Rating>
  ),
}


export const RatingTypes: Story = {
  render: (args) => (
    <Rating {...args}>
      <RatingStar value={1}>
        <Star size={20} />
      </RatingStar>
      <RatingStar value={2}>
        <Star size={20} />
      </RatingStar>
      <RatingStar value={3}>
        <Star size={20} />
      </RatingStar>
      <RatingStar value={4}>
        <Star size={20} />
      </RatingStar>
      <RatingStar value={5}>
        <Star size={20} />
      </RatingStar>
    </Rating>
  ),
}