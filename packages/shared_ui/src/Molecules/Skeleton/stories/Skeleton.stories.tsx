import { Meta, StoryObj } from '@storybook/react';
import { 
  Skeleton,
  SkeletonLine,
} from '../index';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Molecules/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
}
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    animation: true,
  },
  render: (args) => {
    return (
      <Skeleton style={{ width: '500px', display: 'flex', flexDirection: 'column', gap: '16px' }} className="space-y-2.5">
        <SkeletonLine style={{ height: '16px', width: '100%' }} className="h-4 w-full" />
        <SkeletonLine style={{ height: '16px', width: '100%' }} className="h-4 w-full" />
        <SkeletonLine style={{ height: '16px', width: '75%' }} className="h-4 w-3/5" />
        <SkeletonLine style={{ height: '16px', width: '80%' }} className="h-4 w-4/5" />
        <SkeletonLine style={{ height: '40px', width: '20%' }} className="h-10 w-2/5" />
      </Skeleton>
    )
  },
};

export const CommentSkeleton: Story = {
  args: {
    animation: true,
  },
  render: (args) => {
    return (
      <Skeleton {...args} style={{ width: '500px', display: 'flex', flexDirection: 'row', gap: '16px' }} className="flex max-w-md items-center gap-3">
        <SkeletonLine style={{ height: '48px', width: '48px', borderRadius: '50%' }} className="h-12 w-12 rounded-full" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} className="space-y-2">
          <SkeletonLine style={{ height: '16px', width: '250px' }} className="h-4 w-[250px]" />
          <SkeletonLine style={{ height: '16px', width: '200px' }} className="h-4 w-[200px]" />
        </div>
    </Skeleton>
    )
  },
};

export const ParagraphSkeleton: Story = {
  args: {
    animation: true,
  },
  render: (args) => {
    return (
      <Skeleton {...args} style={{width: '500px', display: 'flex', flexDirection: 'column', gap: '16px'}} >
        <SkeletonLine style={{height: '16px', width: `${11/12 * 100}%`}}  />
        <SkeletonLine style={{height: '16px', width: `${9/12 * 100}%`}}  />
        <SkeletonLine style={{height: '16px', width: `${10/12 * 100}%`}}  />
        <SkeletonLine style={{height: '16px', width: `${7/12 * 100}%`}}  />
      </Skeleton>
    )
  },
}; 

export const PostSkeleton: Story = {
  args: {
    animation: true,
  },
  render: (args) => {
    return (
      <div style={{width: '500px', display: 'flex', flexDirection: 'column', gap: '16px'}} className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Skeleton {...args} style={{width: '500px', display: 'flex', flexDirection: 'column', gap: '16px'}} className="w-full space-y-2.5 xl:max-w-md">
        <SkeletonLine style={{height: '208px', width: '100%'}} className="h-52 w-full" />
        <SkeletonLine style={{height: '16px', width: '100%'}} className="h-4 w-full" />
        <SkeletonLine style={{height: '16px', width: '75%'}} className="h-4 w-3/5" />
        <SkeletonLine style={{height: '16px', width: '80%'}} className="h-4 w-4/5" />
        <SkeletonLine style={{height: '40px', width: '20%'}} className="h-10 w-2/5" />
      </Skeleton>
      <Skeleton {...args} style={{width: '500px', display: 'flex', flexDirection: 'column', gap: '16px'}} className="w-full space-y-2.5 xl:max-w-md">
        <SkeletonLine style={{height: '208px', width: '100%'}} className="h-52 w-full" />
        <SkeletonLine style={{height: '16px', width: '100%'}} className="h-4 w-full" />
        <SkeletonLine style={{height: '16px', width: '75%'}} className="h-4 w-3/5" />
        <SkeletonLine style={{height: '16px', width: '80%'}} className="h-4 w-4/5" />
        <SkeletonLine style={{height: '40px', width: '20%'}} className="h-10 w-2/5" />
      </Skeleton>
    </div>
    )
  },
};