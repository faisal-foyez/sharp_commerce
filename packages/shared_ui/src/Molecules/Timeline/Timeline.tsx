'use client'
import { LiHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Timeline.css'

const Timeline = forwardRef<HTMLOListElement, LiHTMLAttributes<HTMLOListElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <ol
        ref={ref}
        {...props}
        className={cn('dsc-timeline', className)}>
        {children}
      </ol>
    )
  },
)

Timeline.displayName = 'Timeline'

export { Timeline }
