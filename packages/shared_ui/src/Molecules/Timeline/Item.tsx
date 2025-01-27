'use client'
import { forwardRef, HTMLAttributes, Ref } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Timeline.css'

export const TimelineItem = forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLLIElement>) => {
    return (
      <li {...props} className={cn('dsc-timeline-item', className)} ref={ref}>
        {children}
      </li>
    )
  },
)

TimelineItem.displayName = 'TimelineItem'
