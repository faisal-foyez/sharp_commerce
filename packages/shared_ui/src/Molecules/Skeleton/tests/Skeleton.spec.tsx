import {screen, render} from '@testing-library/react'
import { Skeleton, SkeletonLine } from '../index'
import '@testing-library/jest-dom'

describe('Skeleton', () => {
  const renderSkeleton = (args:any) => (
    <Skeleton data-testid="skeleton" {...args} style={{ width: '500px', display: 'flex', flexDirection: 'column', gap: '16px' }} className="space-y-2.5">
      <SkeletonLine style={{ height: '16px', width: '100%' }} className="h-4 w-full" />
      <SkeletonLine style={{ height: '16px', width: '100%' }} className="h-4 w-full" />
      <SkeletonLine style={{ height: '16px', width: '75%' }} className="h-4 w-3/5" />
      <SkeletonLine style={{ height: '16px', width: '80%' }} className="h-4 w-4/5" />
      <SkeletonLine style={{ height: '40px', width: '20%' }} className="h-10 w-2/5" />
    </Skeleton>
  )
  it('should render', () => {
    render(renderSkeleton({}))
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })
})