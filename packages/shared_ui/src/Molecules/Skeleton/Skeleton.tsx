'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Skeleton.css'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  animation?: boolean
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ animation = true, children, className, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={cn(animation && 'dsc-skeleton-animate-pulse', 'dsc-skeleton-base', className)}>
        {children}
      </div>
    )
  },
)

Skeleton.displayName = 'Skeleton'

export { Skeleton }
