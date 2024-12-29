'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Skeleton.css'

const SkeletonLine = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div {...props} ref={ref} className={cn('dsc-skeleton-line', className)}></div>
})

SkeletonLine.displayName = 'SkeletonLine'

export { SkeletonLine }
