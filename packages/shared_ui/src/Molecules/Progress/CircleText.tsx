'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Progress.css'

export const CircleProgressText = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'dsc-progress-circle-text',
          className,
        )}>
        {children}
      </div>
    )
  },
)

CircleProgressText.displayName = 'CircleProgressText'
