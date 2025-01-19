'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Steps.css'

const StepsContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn('dsc-steps-content', className)}>
        {children}
      </div>
    )
  },
)

StepsContent.displayName = 'StepsContent'

export { StepsContent }
