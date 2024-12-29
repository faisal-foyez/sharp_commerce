'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Progress.css'

export const LineProgressText = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn('dsc-progress-line-text', className)}>
        {children}
      </div>
    )
  },
)

LineProgressText.displayName = 'LineProgressText'
