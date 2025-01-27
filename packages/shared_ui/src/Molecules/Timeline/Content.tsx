'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Timeline.css'

export const TimelineContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('dsc-timeline-content', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

TimelineContent.displayName = 'TimelineContent'
