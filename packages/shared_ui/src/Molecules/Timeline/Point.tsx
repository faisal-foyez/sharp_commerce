'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Timeline.css'

export const TimelinePoint = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn(
          'dsc-timeline-point',
          className,
        )}
        ref={ref}>
        {children}
      </div>
    )
  },
)

TimelinePoint.displayName = 'TimelinePoint'
